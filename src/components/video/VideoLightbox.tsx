"use client";
import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { site } from "@/config/site";
import { announceLightbox } from "@/lib/video-bus";
import { cn } from "@/lib/cn";

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  EL VIDEO, EN GRANDE Y CON SONIDO
 * ────────────────────────────────────────────────────────────────────────────
 *  El video de fondo del hero corre mudo y en loop; este botón es la única
 *  forma de verlo con sonido. Se decidió que abra un lightbox DENTRO del
 *  sitio y no un enlace a YouTube: un enlace a YouTube manda al visitante a
 *  una página con recomendados, anuncios y el resto de internet a un scroll
 *  — de ahí no vuelve solo. El lightbox le da lo mismo (el video, grande,
 *  con sonido) sin que se vaya del sitio.
 *
 *  `<dialog>` nativo: el navegador se encarga de foco atrapado, `Esc` para
 *  cerrar y `aria-modal`, así no hay que reinventar nada de eso a mano.
 *
 *  El iframe se crea recién al abrir y se destruye al cerrar (no se lo deja
 *  montado y oculto): así no sigue sonando de fondo con el modal cerrado, y
 *  no se paga el peso de YouTube hasta que alguien pide verlo.
 *
 *  Mientras está abierto, se avisa por `video-bus` para que el video de
 *  fondo del hero se pause. Si no, el visitante paga DOS streams de YouTube
 *  a la vez por ver uno solo.
 */
export function VideoLightbox({
  label,
  closeLabel,
  className,
}: {
  label: string;
  closeLabel: string;
  className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(
    () => () => {
      document.body.style.overflow = "";
    },
    [],
  );

  return (
    <>
      <button
        type="button"
        className={cn("exp-video-trigger", className)}
        onClick={() => {
          dialog.current?.showModal();
          document.body.style.overflow = "hidden";
          setOpen(true);
          announceLightbox(true);
        }}
      >
        <span>
          <Play size={15} strokeWidth={1.4} className="fill-current" />
        </span>
        {label}
      </button>
      <dialog
        ref={dialog}
        className="exp-video-dialog"
        aria-label={site.video.title}
        onClose={() => {
          setOpen(false);
          document.body.style.overflow = "";
          announceLightbox(false);
        }}
      >
        <div className="exp-video-bar">
          <p>{site.video.title}</p>
          <button
            autoFocus
            onClick={() => dialog.current?.close()}
            aria-label={closeLabel}
          >
            <X size={22} strokeWidth={1.4} />
          </button>
        </div>
        <div className="exp-video-stage">
          {open && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${site.video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={site.video.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </dialog>
    </>
  );
}
