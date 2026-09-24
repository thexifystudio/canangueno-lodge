# Canangueno Lodge — sitio web

Sitio en cuatro idiomas (es/en/de/fr) para Canangueno Lodge, en la Reserva de Producción de
Fauna Cuyabeno. Next.js 15.5 · Tailwind v4 · sin librerías de animación.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run lint
```

---

## 🎛️ Cómo cambiar las cosas (leer esto primero)

El sitio está armado para que **cambiar algo sea editar un archivo, no rehacer
componentes**. Esta es la tabla de "dónde toco qué":

| Quiero cambiar…                                         | Archivo                             | Qué hago                                                                                            |
| ------------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Toda la paleta de colores**                           | `src/config/theme.ts`               | Cambio `palette` a `"aguas-negras"` o `"blackwater-light"`. Una línea, cambia el sitio entero.      |
| **Un color puntual**                                    | `src/styles/palettes.css`           | Edito el hex crudo de la paleta activa. Se propaga solo.                                            |
| **Las tipografías**                                     | `src/lib/fonts.ts`                  | Cambio los dos `import` de `next/font/google`. Los nombres de variable no se tocan.                 |
| **El redondeo de bordes**                               | `src/config/theme.ts`               | `radius: "2px"` → lo que quiera.                                                                    |
| **Precios de los tours**                                | `src/content/tours.ts`              | Campo `price`. Hoy **no se muestra** en el sitio (decisión del cliente): la tarifa se pide por WhatsApp o por el formulario. |
| **Itinerarios, inclusiones, descuentos**                | `src/content/tours.ts`              | Todo junto, por tour, en los dos idiomas.                                                           |
| **Textos de botones, menú, títulos**                    | `src/i18n/{es,en,de,fr}.ts`         | —                                                                                                   |
| **Teléfono, WhatsApp, email, dirección, datos legales** | `src/config/site.ts`                | Fuente única.                                                                                       |
| **Fotos**                                               | `src/config/media.ts`               | Ver abajo.                                                                                          |
| **Preguntas frecuentes**                                | `src/content/faqs.ts`               | El JSON-LD de FAQ se genera de acá solo.                                                            |
| **Reseñas**                                             | `src/content/reviews.ts`            | —                                                                                                   |
| **Orden de las secciones de la home**                   | `src/components/expedition/ExpeditionHome.tsx` | Muevo una línea. Ninguna sección depende de otra.                                                   |
| **Rutas / URLs**                                        | `src/lib/routes.ts`                 | Todos los enlaces pasan por acá.                                                                    |

### Regla dura del proyecto

**Ningún componente escribe un color literal.** Nada de `#102a20` ni de
`text-green-700`. Sólo tokens semánticos: `bg-bg`, `bg-bg-warm`, `bg-bg-deep`,
`bg-surface`, `text-ink`, `text-ink-soft`, `text-ink-faint`, `text-on-deep`,
`bg-accent`, `border-line`, `border-line-deep`.

Gracias a eso cambiar de paleta no rompe nada. Si agregás un componente,
seguí la misma regla.

---

## 🎨 Dirección de arte: "aguas negras"

El brief original pedía crema + serif + terracota. Eso es exactamente lo que
usa **toda** la competencia de lodges amazónicos, y además es el cliché número
uno de las webs hechas con IA. Se cambió a propósito.

**El suelo es el agua negra del Cuyabeno.** Los ríos de la reserva están
teñidos de taninos: casi un espejo negro. Sobre ese verde casi-negro las
fotografías brillan en vez de competir con el fondo, y ningún competidor
ocupa ese terreno.

**Los acentos salen del logo real** (el tucán del PNG de marca), no de un
banco de colores:

| Color             | De dónde sale                      | Dónde se usa                            |
| ----------------- | ---------------------------------- | --------------------------------------- |
| Naranja `#E48424` | el wordmark "Canangueno Lodge"     | relleno de botones (máximo contraste)   |
| Dorado `#F0A83C`  | el amarillo del pico del tucán     | texto chico de acento, checks, detalles |
| Carbón `#2B2B2B`  | el plumaje y la palabra "Cuyabeno" | referencia del negro neutro             |

El **gesto de firma** es el token `--c-beak`: un gradiente dorado → naranja,
el mismo degradado que tiene el pico del tucán. Va en los detalles que
"marcan" — el filo de la tarjeta destacada, el badge "El más elegido", el
punto del localizador del hero. El naranja sólido se reserva para los
botones, que necesitan el máximo contraste.

**Tipografías:** Instrument Serif (display) + Archivo (interfaz). Se evitaron
Cormorant y Fraunces por lo mismo: son las que usa todo lodge boutique.

**El ritmo de la portada cuenta el viaje.** Nunca hay dos secciones seguidas
sobre el mismo suelo, y el verde profundo aparece sólo tres veces, cada una con
un motivo:

| Sección                    | Suelo              | Por qué                                       |
| -------------------------- | ------------------ | --------------------------------------------- |
| Hero + franja de datos     | verde profundo     | se llega por el río                           |
| Tours                      | banda (lino cálido)| se elige el recorrido                         |
| El lodge                   | niebla clara       | el lodge a la luz del día                     |
| Fauna                      | verde profundo     | se entra al bosque, bajo el dosel             |
| Fotos · Opiniones          | niebla · papel     | lo que se ve y lo que cuentan                 |
| La llegada                 | banda              | cómo se llega                                 |
| Cierre (`ClosingBand`)     | foto del atardecer | el atardecer en la Laguna Grande del día 1    |

`--c-band` es un lino cálido (`#efe9dc`): alterna con la niebla fría de la
mañana y hace de pareja al naranja del tucán. Las reglas viven en
`src/styles/site/home.css` ("Ritmo de secciones").

Si el cliente quiere volver al sitio oscuro, `aguas-negras` sigue entera en
`palettes.css`: es **una línea** en `src/config/theme.ts`. Lo mismo
`blackwater-light`, la variante en crema.

---

## 🪶 El logo y el icono de pestaña

El logo real del cliente (`imagenes-canangueno-lodge/extra/logo-imagen-svg.png`
y `pestaña.png`) entra al sitio por un script, no a mano:

```bash
node scripts/marca.mjs
```

Genera cuatro archivos y hay que volver a correrlo si el cliente manda otro
logo:

| Sale                           | Para qué                                   |
| ------------------------------ | ------------------------------------------ |
| `public/marca/logo.webp`       | la barra sobre el contenido claro          |
| `public/marca/logo-claro.webp` | la barra sobre el hero, y el menú de móvil |
| `src/app/icon.png`             | el favicon                                 |
| `src/app/apple-icon.png`       | el icono de iOS al "añadir a inicio"       |

**El negativo no está dibujado a mano.** El tucán es negro y "Cuyabeno" es
carbón: sobre el verde profundo del hero los dos desaparecían. El script
recolorea del original **sólo los píxeles neutros** (poca saturación) al color
de tinta sobre oscuro, y deja intactos los naranjas del wordmark y del pico,
que ya contrastan bien. Conserva el contraste interno del dibujo, así que el
gris del pecho sigue siendo más claro que el negro del lomo.

Las **dos versiones van en el marcado** (`components/layout/Logo.tsx`) y el CSS
decide cuál se ve. Cambiar el `src` desde React haría parpadear el logo cada
vez que la barra alterna al hacer scroll.

Los dos iconos llevan **el fondo crema de la paleta, no transparente**: en la
tira de pestañas en modo oscuro (Chrome usa un `#202124`) el tucán casi negro
desaparecía y sólo quedaba flotando el naranja del pico.

El mismo `logo.webp` va en el JSON-LD de `LodgingBusiness`, que es de donde
Google lo toma para los resultados enriquecidos.

---

## 🌅 El cierre: sin formulario de fechas

Las fechas y las tarifas las maneja el lodge **en privado**. Por eso ya no hay
formulario de "fecha y viajeros" al final de las páginas: lo reemplaza
`components/expedition/ClosingBand.tsx`, el atardecer en la Laguna Grande a
todo el ancho con dos salidas, WhatsApp (principal) y el correo. Está en la
portada, `/tours`, `/el-lodge` y `/galeria`. Los textos, en los cuatro
idiomas, están en `src/content/expedition-copy.ts` (`closing*`).

La foto sale del slot `home-closing` de `src/config/media.ts`.

> Los recortes de animales que había en los cantos de las secciones se
> quitaron por pedido del cliente, junto con sus estilos y sus imágenes.

---

## 🧭 Un solo producto: 3 tours

La web vende **tres recorridos** con base en el lodge — 3, 4 y 5 días — y nada
más. Viven todos en `src/content/tours.ts`. No hay página de "expediciones de 6
y 8 días" (se quitó: los itinerarios de esas rutas no estaban verificados).

- **Portada y `/tours`**: `TourCards` muestra las tres tarjetas a la vez, sin
  precio: cada una lleva a su itinerario y a WhatsApp.
- **`/tours`** suma la nota de tarifa + el cierre (`ClosingBand`). (La tabla comparativa se
  quitó: repetía lo mismo que las tarjetas.)
- **`/tours/[slug]`**: `TourDetail`. La estructura es la de
  `cananguenolodge.com/tour-3-dias`, que es la que el cliente quiere y la que
  funciona: **el itinerario ES la página**.

  ```
  título → DÍA 1, 2, 3… (texto + foto, alternando el lado)
         → el tour incluye → reservar → el lodge y la galería → fin
  ```

  Los días se muestran **abiertos y con su fotografía**. Antes eran `<details>`
  cerrados: el contenido por el que la gente entra a esta página estaba a un
  clic de distancia y no se veía. Y se quitaron de en medio las reseñas y el
  bloque del lodge —ya están en la home; acá sólo estorbaban entre el
  itinerario y el botón de reservar.

  Los extras ("transporte Quito ↔ Puente aparte", el chamán, el casabe) no van
  en una segunda columna con el mismo peso que lo incluido —eso convertía la
  página en una tabla de dos listas— pero **tampoco se esconden**: van en una
  línea bajo la lista. Que alguien reserve sin saber que el bus va aparte es un
  problema el día de la llegada, no un detalle de diseño.

  Vale para los tres tours sin tocar nada: todo sale de `content/tours.ts`.

- Las tres tarjetas valen lo mismo: sin badge "el más elegido" ni columna
  resaltada. **Toda la tarjeta es un enlace** (el `::after` de su botón se
  estira sobre ella); el enlace de WhatsApp se eleva con `z-index` para seguir
  vivo. Al pasar el cursor la tarjeta se eleva, el borde se enciende y la foto
  hace un zoom lento.
- `featured: true` en `tours.ts` ya sólo marca el tour "representativo": el que
  aparece en la franja del hero y en el mensaje por defecto de WhatsApp. No
  cambia nada visual en las tarjetas.

Para agregar o quitar un tour: editás el array de `tours.ts`. Las tarjetas, la
tabla, el sitemap, el selector del formulario y el JSON-LD se rearman solos.

---

## 🎬 El video ES el hero

El lodge tiene un video propio en YouTube (`Auj1H9UziKM`, toma de dron sobre el
río Cuyabeno). Es el activo visual más fuerte que hay hoy, así que **es el
fondo del hero**: la selva en movimiento apenas entrás, en vez de una foto
quieta. Había además una sección cinematográfica más abajo con el mismo video;
se eliminó — mostrar dos veces lo mismo le quitaba fuerza a las dos.

`components/video/HeroVideo.tsx` lo carga en dos tiempos a propósito:

1. Primero **sólo la fotografía** (`public/fotos/rio-cuyabeno-canoa.jpg`, que
   es un fotograma del propio video: material real del cliente, ni banco de
   imágenes ni IA). Es el LCP y pinta al instante.
2. Un segundo después se monta el iframe en silencio y en bucle, y **se funde
   sobre la foto sólo cuando el reproductor avisa que empezó a reproducir**
   (`enablejsapi` + el `postMessage` de YouTube). Si el navegador bloquea el
   autoplay —pasa, y pasa seguido— el iframe se queda invisible y manda la
   foto, en vez de mostrar un video en pausa con los botones de YouTube
   encima. Ese fue un bug real, visible en las capturas.

No se monta nunca si la pantalla es chica (en móvil son megas y batería para
nada), si el visitante pidió movimiento reducido, o si el navegador avisa que
está ahorrando datos.

El botón **"Ver el video"** del hero abre el lightbox a pantalla completa con
sonido, con técnica de fachada: ese iframe se crea recién al hacer clic y se
destruye al cerrar. Mientras está abierto, el video del hero **se pausa**
(`lib/video-bus.ts`): si no, el visitante paga dos streams de YouTube a la vez
por ver uno.

Todo va por `youtube-nocookie.com`, y el iframe del hero es `aria-hidden` +
`pointer-events: none`: es decorado.

Para cambiar el video: `src/config/site.ts` → `video.youtubeId`.

---

## 🖼️ Fotos

**Ya hay 26 fotografías reales del lodge**, con su marca de agua puesta, en
`public/fotos/`. Salieron de la carpeta que entregó el cliente
(`imagenes-canangueno-lodge/Listas/Imagenes`, 133 originales) y están
recortadas a 1800 px de lado mayor y convertidas a WebP: 6 MB en total.

Cada slot de `src/config/media.ts` apunta a una de ellas. Para cambiar qué
foto se ve en un lugar, se edita **una línea**:

```ts
"tour-5-dias": {
  src: "/fotos/atardecer-laguna.webp",   // ← esta línea es todo
  alt: { es: "…", en: "…" },
  tone: "lagoon",
},
```

Para sumar una foto nueva del archivo del cliente:

```bash
# elegir el índice mirando la hoja de contactos que arma este snippet
python -c "from PIL import Image; ..."   # ver scripts en el historial
```

o simplemente copiar el PNG a `public/fotos/`, convertirlo a WebP y apuntar
`src` a él.

### ⚠️ La caché de imágenes de Next miente

Si reemplazás un archivo en `public/fotos/` **sin cambiarle el nombre**, Next
sigue sirviendo la versión vieja optimizada desde `.next/cache/images`. Pasó
en este proyecto: una tarjeta mostró un avispero durante un rebuild entero.

```bash
rm -rf .next && npm run build     # la única forma segura
```

### Regla de honestidad

Todas las imágenes del sitio son **fotografías reales** del lodge y del
cliente. Desde que se quitaron los recortes de animales no queda ningún
material generado por IA; si alguna vez se agrega, nunca puede presentarse
como el lodge, las cabañas o los interiores.

---

## 🗂️ Estructura

```
src/
├── app/
│   ├── (site)/[locale]/       Todas las páginas públicas (layout raíz acá)
│   ├── api/leads/             Recepción de consultas de reserva
│   ├── globals.css            Tokens → utilidades de Tailwind
│   ├── sitemap.ts · robots.ts
├── components/
│   ├── layout/                Header (glass), Footer, PageHeader, WhatsApp
│   ├── expedition/            La portada y sus piezas — TourCards, TourComparison…
│   ├── sections/ booking/ gallery/ seo/ ui/ motion/
├── config/                    theme · site · media   ← el panel de control
├── content/                   tours · faqs · reviews · journey · lodge · gallery
├── i18n/                      es.ts · en.ts (en tipado contra es)
├── lib/                       i18n · routes · fonts · cn · attribution · leads
└── styles/
    ├── palettes.css · media.css
    ├── site.css               índice: importa los de abajo EN ORDEN (cascada)
    └── site/                  un archivo por pieza: base · hero · cards · home
                               closing · nav · whatsapp · pages · booking
                               gallery · tour-page · notfound
```

---

## 🌍 Idiomas

- Rutas `/es/…`, `/en/…`, `/de/…` y `/fr/…`. La raíz redirige a `/en`
  (`next.config.ts`).
- 404: `[locale]/[...rest]` manda cualquier ruta inexistente al 404 del idioma;
  las URLs sin idioma válido caen en `app/global-not-found.tsx`.
- Los **slugs de tour** están traducidos (`/es/tours/4-dias` ↔ `/en/tours/4-days`).
- Los segmentos de ruta todavía son iguales en los dos idiomas
  (`/en/galeria`). Para traducirlos, se cambia sólo `src/lib/routes.ts` + un
  mapa de rewrites: ningún componente se entera.
- **Si falta una clave en `en.ts`, el build falla.** Es a propósito: nunca se
  publica media página traducida.

---

## ✨ Animación

Sin GSAP, sin Lenis, sin ninguna dependencia de animación: todo es
IntersectionObserver + transiciones CSS + un canvas. Son ~250 líneas propias en
lugar de 120 KB de librerías, y no hay scroll sintético peleando con los
anclajes ni con las herramientas de captura.

- **`<Reveal>`** — revelado al entrar en pantalla. `delay` escalona hermanos,
  `stagger` anima los hijos en cascada, `y` fija el desplazamiento inicial.

### Se probó una capa de partículas y se sacó

Hubo un `<Ambient>`: motas de polen dibujadas en canvas, en modo aditivo,
suspendidas sobre el fondo. Sobre el verde casi negro de `aguas-negras`
funcionaba. Sobre el suelo claro de `selva-viva` se veía como suciedad en la
pantalla, y el cliente lo dijo sin rodeos. Se eliminó entero —componente,
estilos y montajes— en vez de dejarlo apagado detrás de una bandera.

Sí sigue en pie la decisión de **no** usar video generado por IA de fondo:
encima va la fotografía real del lodge, y superponerle material inventado la
contradice, que es justo lo contrario de lo que vende este sitio. Los créditos
de Higgsfield quedan para lo que sí los necesita.

### Trampa de apilamiento que ya nos mordió una vez

Un contenedor de imagen con `z-index: -1` dentro de una sección que tiene color
de fondo **se va detrás de ese color** si la sección no crea contexto de
apilamiento (`position: relative` sola NO lo crea). Resultado: la fotografía
desaparece y la sección se ve como un bloque de color plano.

La solución es `isolate`. Está aplicado en `.exp-hero` y en `.exp-closing`.
**Si agregás una sección con imagen de fondo, acordate.**

### Dos decisiones que conviene no revertir

1. **Nada se esconde desde CSS.** El estado inicial de cada revelado lo pone el
   JS en un efecto. Si el JS falla, la página se ve entera sin animar. (La
   alternativa —`opacity:0` en el CSS— deja el sitio invisible cuando algo sale
   mal. Ya pasó en otro proyecto.)
2. **Red de seguridad de 2,5 s.** Si el navegador no está corriendo
   `requestAnimationFrame` (pestaña en segundo plano, throttling, paneles
   embebidos), un `setTimeout` —que no depende de rAF— muestra el bloque sin
   animar. Ver `components/motion/Reveal.tsx`.

Con `prefers-reduced-motion: reduce` no se mueve nada: los revelados aparecen
directo, el video del hero no se monta —queda la fotografía, que ya se ve bien
sola.

---

## 📈 SEO y atribución

- Metadata por página con `pageMetadata()` (`src/lib/seo.ts`): título,
  canónica, hreflang de los cuatro idiomas + `x-default` y Open Graph completo
  con imagen. Toda página nueva la usa; si no, hereda la de la portada.
- JSON-LD: `LodgingBusiness`, `TouristTrip`,
  `FAQPage` (generado del mismo contenido que se muestra), `ItemList`.
- `sitemap.xml` y `robots.txt` nativos.
- ⚠️ **Atribución de primer contacto** (`src/lib/attribution.ts`) y
  validación de leads (`src/lib/leads.ts`): el código existe pero **hoy no lo
  llama nadie**. El formulario de `/reservar` arma el mensaje y lo manda por
  WhatsApp o correo; no pasa por `/api/leads` (que responde 503). Hay que
  conectarlos cuando exista el backend.

---

## 🚧 Pendientes

### Backend (próxima fase)

- [ ] Cloudflare D1 + Drizzle: persistir leads (hoy `POST /api/leads` es un
      esqueleto que responde 503 y el formulario no lo llama).
- [ ] Panel `/admin` con login JWT: editar precios de tours, subir fotos a R2,
      ver leads con su origen.
- [ ] `@opennextjs/cloudflare` + `wrangler.jsonc` para desplegar en Workers.

### Contenido del cliente

- [ ] **Fotos y video reales** (lo más importante).
- [ ] **Confirmar o quitar el precio "Antes / Ahora"** (`priceRack` en
      `src/content/tours.ts`). Hoy los valores son PROVISIONALES (330 / 410 /
      520). Para mostrarlos hace falta que sean una tarifa real —de agencia,
      de temporada alta o de mostrador—; inventar un "antes" para simular
      descuento es ilegal con público de la UE / EE. UU. / Reino Unido. Si no
      hay tarifa de lista real, borrar el campo `priceRack` de los tres tours
      y el sitio vuelve a mostrar sólo "Desde USD …".
- [ ] Reemplazar `src/content/reviews.ts` por el **widget oficial de
      TripAdvisor o Google**: hoy son extractos de reseñas reales copiados de
      la web actual, sin atribución en vivo. Falta también el **número y la
      nota agregada** (ej. "4,9 · 312 opiniones") para el gancho de portada.
- [ ] Confirmar el **precio de las actividades de chamán y casabe**: la hoja de
      tarifas 2026 dice USD 10 y la web actual dice USD 5.
- [ ] **Número de WhatsApp dedicado del negocio**: el público hoy es el celular
      personal de alguien de la familia (marcado en `src/config/site.ts`).
- [ ] Coordenadas exactas del lodge para el mapa y el JSON-LD.
- [ ] Decidir si se venden también las **noches sueltas** (hoy en Expedia /
      Hoteles.com / Despegar) o se dejan sólo en esas plataformas.

### Decisión tomada que conviene revisar con el cliente

- **No se publican los datos bancarios** (banco, número de cuenta, RUC) aunque
  hoy estén en la web actual: publicar una cuenta en abierto invita a
  suplantación. Se envían por canal privado junto al voucher.

---

## 📷 Revisión visual

```bash
npm run build
bash scripts/restart.sh          # levanta producción en :3000 (mata lo que esté)

node scripts/shots.mjs http://localhost:3000     # página entera, 1440 y 390
node scripts/zoom.mjs ".exp-selection" es 1440   # UN elemento, a tamaño real
node scripts/review-design.mjs http://localhost:3000   # aserciones de diseño y a11y
```

Usan el Chrome ya instalado en la máquina (no descargan nada) y dejan todo en
`.shots/`. `zoom.mjs` existe porque una captura de página completa de 7.700 px
se ve como una miniatura: para juzgar tipografía y espaciados hay que mirar un
elemento a 1:1.

### Refactorizar CSS sin romper nada

```bash
node scripts/styles-snapshot.mjs .shots/antes.json
#   … se hace el cambio, se rebuildea, se reinicia …
node scripts/styles-snapshot.mjs .shots/despues.json
node scripts/styles-diff.mjs .shots/antes.json .shots/despues.json
```

Guarda el estilo calculado de **cada elemento** de las 8 páginas, en escritorio
y móvil, y compara. Si el diff sale vacío, el refactor no movió un píxel. Es lo
que se usó para partir el viejo `expedition.css` (2.300 líneas) en
`src/styles/site/` sin tocar el resultado visual: diff vacío.

---

## 🌐 Pasar el sitio al dominio `cananguenolodge.com`

### Cómo está hoy (DNS consultado en septiembre de 2026)

| Registro                       | Apunta a                                   | Qué es                          |
| ------------------------------ | ------------------------------------------ | ------------------------------- |
| NS                             | `ns1/ns2.server4-interactuaclub.com`       | el DNS lo maneja el hosting     |
| `cananguenolodge.com` (A)      | `66.225.241.98`                            | el WordPress en cPanel          |
| `www` (CNAME)                  | `c2066713.tier1.quicns.com`                | QUIC.cloud (caché de LiteSpeed) |
| MX                             | `mail.cananguenolodge.com` → `66.225.241.98` | **el correo, en el mismo cPanel** |
| `webmail`, `mail` (A)          | `66.225.241.98`                            | webmail del cPanel              |
| TXT (SPF)                      | `+a +mx +ip4:66.225.241.50 +include:relay.mailchannels.net` | quién puede enviar |
| `default._domainkey` (TXT)     | clave DKIM                                 | firma de los correos            |
| `_dmarc`                       | **no existe**                              | falta                           |

**Sí hay correo configurado** (`info@` y `sales@`), y vive en el mismo servidor
que el WordPress. Es lo único delicado de la mudanza.

### El plan (sin cortar el correo ni un minuto)

1. **Desplegar este sitio** (Vercel, o Cloudflare Workers con OpenNext) y
   probarlo en su URL temporal.
2. **Cambiar SÓLO dos registros** en el DNS del hosting (cPanel → Zone
   Editor): `cananguenolodge.com` (A) y `www` (CNAME) hacia el nuevo
   servidor. **No tocar** MX, `mail`, `webmail`, SPF ni DKIM: el correo sigue
   funcionando exactamente igual, en el mismo cPanel.
3. **Limpiar el SPF** (recomendado, no bloqueante): hoy dice `+a`, "el
   servidor al que apunta el dominio puede enviar correo". El envío seguiría
   funcionando igual porque `+mx` ya cubre al servidor de correo, pero `+a`
   pasaría a autorizar al hosting web nuevo, que no manda correo. Mejor con
   las IPs fijas:
   `v=spf1 +mx +ip4:66.225.241.98 +ip4:66.225.241.50 +include:relay.mailchannels.net ~all`
4. **Agregar DMARC** (hoy no hay, y Gmail/Outlook lo exigen cada vez más para
   no mandar a spam): TXT en `_dmarc` →
   `v=DMARC1; p=none; rua=mailto:info@cananguenolodge.com`
5. Bajar el TTL de A y `www` a 300 s un día antes, para que el cambio se
   propague rápido y se pueda volver atrás rápido si algo falla.
6. Las **URLs de la web vieja** ya redirigen solas con 301 a las nuevas
   (`legacy-redirects.ts`, sacadas del sitemap real): no se pierde el
   posicionamiento en Google. Después de la mudanza, dar de alta el sitio en
   Google Search Console y enviar `/sitemap.xml`.
7. Dejar el WordPress vivo un mes (sin dominio) como respaldo, y recién
   después cancelar la parte de hosting web — **no el plan de correo**.

**Alternativa a largo plazo:** mover el correo a Google Workspace o Zoho y el
DNS a Cloudflare, para no depender del cPanel. Si se mueven los nameservers,
hay que copiar ANTES todos los registros de la tabla (MX, `mail`, SPF, DKIM),
o el correo deja de llegar.

---

## Notas de entorno

- Windows: activar **Modo de desarrollador** antes de agregar OpenNext
  (symlinks). El proyecto vive fuera de OneDrive/iCloud a propósito.
- Si `npm run dev` empieza a tirar `__webpack_modules__ is not a function`,
  borrar `.next` y volver a levantar. Pasa al correr `build` con el `dev` vivo.
