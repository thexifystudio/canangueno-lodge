"use client";
import { useEffect, useRef, useState } from "react";
import { Media } from "@/components/ui/Media";
import { site } from "@/config/site";
import type { Locale } from "@/lib/i18n";
import { onLightbox } from "@/lib/video-bus";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  HERO CON VIDEO
 * ────────────────────────────────────────────────────────────────────────────
 *  El video del lodge es el fondo del hero: la selva en movimiento apenas
 *  entrás, en vez de una foto quieta.
 *
 *  Se carga en dos tiempos a propósito:
 *   1. Primero SÓLO la fotografía (un fotograma del mismo video). Es el LCP y
 *      pinta al instante.
 *   2. Un segundo después se monta el iframe de YouTube en silencio y en
 *      bucle, y aparece con un fundido encima de la foto.
 *
 *  No se monta nunca si: la pantalla es chica (en móvil el video son megas y
 *  batería para nada), el visitante pidió movimiento reducido, o el navegador
 *  avisa que está ahorrando datos. En esos casos queda la foto, que ya se ve
 *  bien sola.
 *
 *  El fundido NO se dispara por reloj sino cuando el reproductor avisa que
 *  está reproduciendo de verdad (`enablejsapi` + el `postMessage` que manda
 *  YouTube). Si el navegador bloquea el autoplay —pasa, y pasa seguido— el
 *  iframe se queda invisible y arriba queda la foto, en vez de mostrarle al
 *  visitante un video en pausa con los botones de YouTube encima.
 *
 *  `youtube-nocookie.com` para no dejar cookies de terceros, y el iframe va
 *  con `pointer-events: none` + `aria-hidden`: es decorado, y en silencio.
 *
 *  El botón "Ver el video" del hero abre el mismo video con sonido en un
 *  lightbox (`VideoLightbox.tsx`). Mientras ese lightbox está abierto, ESTE
 *  video se pausa (avisado por `video-bus`): si no, el visitante paga dos
 *  streams de YouTube a la vez por ver uno solo.
 */

/* Estados de la IFrame API de YouTube. El video se muestra SÓLO mientras
 * está reproduciendo o cargando el siguiente trozo; en cualquier otro estado
 * vuelve a mandar la foto, que es lo que evita que se vean los botones del
 * reproductor sobre el hero. */
const PLAYING = 1;
const BUFFERING = 3;

export function HeroVideo({ locale }: { locale: Locale }) {
  const [live, setLive] = useState(false);
  const [playing, setPlaying] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);
  /** Si el video llegó a arrancar alguna vez. Ver el manejo de `buffering`. */
  const started = useRef(false);

  /* Mientras el lightbox está abierto, este video se pausa; al cerrarse,
     retoma. `playVideo`/`pauseVideo` son comandos de la IFrame API. */
  useEffect(
    () =>
      onLightbox((open) => {
        frame.current?.contentWindow?.postMessage(
          JSON.stringify({
            event: "command",
            func: open ? "pauseVideo" : "playVideo",
          }),
          "*",
        );
      }),
    [],
  );

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 900px)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    if (!wide || still || conn?.saveData) return;

    const t = window.setTimeout(() => setLive(true), 1100);
    return () => window.clearTimeout(t);
  }, []);

  /*
   * El puente con el reproductor. Hay que saludarlo (`listening`) para que
   * empiece a mandar eventos, y a partir de ahí avisa cada cambio de estado.
   * Se comprueba el origen de cada mensaje: en esta ventana escucha cualquiera.
   */
  useEffect(() => {
    if (!live) return;
    const win = frame.current?.contentWindow;
    if (!win) return;

    let reveal = 0;
    let revealing = false;
    let seeking = false;
    const send = (func: string, args: unknown[] = []) =>
      win.postMessage(JSON.stringify({ event: "command", func, args }), "*");
    const hello = window.setInterval(() => {
      win.postMessage('{"event":"listening"}', "*");
    }, 400);

    const onMessage = (e: MessageEvent) => {
      if (!/^https:\/\/(www\.)?youtube(-nocookie)?\.com$/.test(e.origin))
        return;
      if (typeof e.data !== "string") return;
      try {
        const info = JSON.parse(e.data)?.info;
        if (!info || typeof info !== "object") return;
        window.clearInterval(hello);

        /* Bucle hecho a mano. Con `loop=1` YouTube deja TERMINAR el video y
           al reiniciarlo repinta el título y el símbolo de pausa/play encima,
           cada vuelta. Saltando al inicio medio segundo antes del final el
           reproductor nunca termina y nunca muestra nada. `loop=1` queda
           sólo de red de seguridad. */
        const { currentTime, duration } = info;
        if (typeof currentTime === "number" && typeof duration === "number") {
          if (duration > 2 && currentTime > duration - 0.6 && !seeking) {
            seeking = true;
            send("seekTo", [0, true]);
          } else if (currentTime < 1) {
            seeking = false;
          }
        }

        const state = info.playerState;
        if (typeof state !== "number") return;
        /* Cada vez que arranca (la primera vez, al volver del lightbox o si
           se trabó), YouTube pinta encima por unos segundos el título y los
           botones, aun con `controls=0`. El fundido espera a que se vayan:
           mientras, manda la foto. */
        if (state === PLAYING) {
          if (started.current && !revealing) return setPlaying(true);
          if (revealing) return;
          revealing = true;
          reveal = window.setTimeout(() => {
            revealing = false;
            started.current = true;
            setPlaying(true);
          }, 3200);
          return;
        }
        /* Un `buffering` en medio del bucle es la red que tose: taparlo
           medio segundo cada vez sería peor. */
        if (state === BUFFERING && started.current) return;
        /* Cualquier otro estado (pausa, fin, en cola): fuera el video YA, y
           el próximo arranque vuelve a esperar a que se vayan los botones. */
        window.clearTimeout(reveal);
        revealing = false;
        started.current = false;
        setPlaying(false);
      } catch {
        /* YouTube manda algún mensaje que no es JSON; no interesa. */
      }
    };

    window.addEventListener("message", onMessage);
    return () => {
      window.clearInterval(hello);
      window.clearTimeout(reveal);
      window.removeEventListener("message", onMessage);
    };
  }, [live]);

  const params = new URLSearchParams({
    enablejsapi: "1",
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: site.video.youtubeId,
    controls: "0",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    disablekb: "1",
    iv_load_policy: "3",
  });

  return (
    <div className="exp-hero-media">
      {/* En el teléfono la foto apaisada se recorta en vertical: necesita
          mucho más ancho que la pantalla para no verse blanda. */}
      <Media
        id="hero"
        locale={locale}
        priority
        sizes="(max-width: 760px) 240vw, 100vw"
      />
      {live && (
        <iframe
          ref={frame}
          className="exp-hero-video"
          data-playing={playing || undefined}
          src={`https://www.youtube-nocookie.com/embed/${site.video.youtubeId}?${params}`}
          title={site.video.title}
          allow="autoplay; encrypted-media"
          tabIndex={-1}
          aria-hidden
        />
      )}
    </div>
  );
}
