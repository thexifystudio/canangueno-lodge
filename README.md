# Canangueno Lodge — sitio web

Sitio en cuatro idiomas (español, inglés, alemán y francés) para Canangueno
Lodge, en la Reserva de Producción de Fauna Cuyabeno (Amazonía de Ecuador).

- **Stack:** Next.js 15.5 · React 19 · Tailwind v4 · TypeScript. Sin
  librerías de animación.
- **Hosting:** Cloudflare Workers con OpenNext (`@opennextjs/cloudflare`),
  cuenta **Thexify Studio**.
- **URL provisional:** https://canangueno.thexifystudio.workers.dev
  (sin indexar en Google hasta pasar al dominio real, ver más abajo).
- **Repositorio:** https://github.com/thexifystudio/canangueno-lodge (rama `main`).

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # build de producción
npm run lint
npm run deploy    # build + publicación en Cloudflare
npm run galeria   # rehace la galería desde la carpeta de fotos del cliente
```

`npm run dev` y `npm run build` generan solos las versiones livianas de las
fotos (ver [Fotos](#-fotos)).

### Publicar un cambio

```bash
git push          # sube el código a GitHub (rama main)
npm run deploy    # publica en Cloudflare
```

El deploy necesita la sesión de Wrangler con la cuenta de Thexify Studio
(`npx wrangler whoami` para verificar, `npx wrangler login` si hace falta).

---

## 🎛️ Dónde se cambia cada cosa

El sitio está armado para que **cambiar algo sea editar un archivo, no rehacer
componentes**. Todo el contenido está en los cuatro idiomas y **el build falla
si falta una traducción**: nunca se publica media página traducida.

| Quiero cambiar…                                              | Archivo                                       |
| ------------------------------------------------------------ | --------------------------------------------- |
| **Teléfono, WhatsApp, correo, redes, ubicación del mapa**    | `src/config/site.ts`                          |
| **Pasar del sitio provisional al dominio real**              | `src/config/site.ts` → `LIVE` (ver al final)  |
| **Tours:** itinerario de cada día, qué incluye y qué no, textos de Google | `src/content/tours.ts`           |
| **Portada:** hero, franja de datos, textos de cada sección, cierre de contacto | `src/content/expedition-copy.ts` |
| **Página Cuyabeno:** datos, capítulos, animales, cuándo ir   | `src/content/cuyabeno.ts`                     |
| **El lodge:** textos de la página y del mapa                 | `src/content/lodge.ts`                        |
| **Cómo llegar:** la ruta, bus o avión, otras ciudades        | `src/content/journey.ts`                      |
| **Preguntas frecuentes** (también arma el JSON-LD de FAQ)    | `src/content/faqs.ts`                         |
| **Reseñas**                                                  | `src/content/reviews.ts`                      |
| **Menú, botones, formulario, títulos y descripciones de Google** | `src/i18n/{es,en,de,fr}.ts`               |
| **Qué foto va en cada lugar**                                | `src/config/media.ts`                         |
| **Fotos de la galería**                                      | carpeta del cliente + `npm run galeria`       |
| **Orden de las secciones de la portada**                     | `src/components/expedition/ExpeditionHome.tsx` |
| **Paleta de colores / un color puntual**                     | `src/config/theme.ts` / `src/styles/palettes.css` |
| **Tipografías**                                              | `src/lib/fonts.ts`                            |
| **Rutas / URLs**                                             | `src/lib/routes.ts`                           |
| **Redirecciones de las URLs de la web vieja**                | `legacy-redirects.ts`                         |

### Regla dura del proyecto

**Ningún componente escribe un color literal.** Nada de `#102a20` ni de
`text-green-700`. Sólo tokens semánticos: `bg-bg`, `bg-bg-warm`, `bg-bg-deep`,
`bg-surface`, `text-ink`, `text-ink-soft`, `text-ink-faint`, `text-on-deep`,
`bg-accent`, `border-line`. Gracias a eso, cambiar de paleta no rompe nada.

---

## 🗺️ Páginas

Cada página existe en `/es`, `/en`, `/de` y `/fr`. Los slugs de los tours
están traducidos (`/es/tours/4-dias` ↔ `/en/tours/4-days` ↔ `/de/tours/4-tage`
↔ `/fr/tours/4-jours`).

| Página                | Ruta                     | Qué tiene                                                        |
| --------------------- | ------------------------ | ---------------------------------------------------------------- |
| Portada               | `/es`                    | Hero con video, datos, avales, tours, el lodge, Cuyabeno, reseñas, la llegada, contacto |
| Tours                 | `/es/tours`              | Las tres tarjetas y qué incluye / qué no                         |
| Tour (3, 4 y 5 días)  | `/es/tours/3-dias`…      | Itinerario día por día con foto, qué incluye / qué no, reservar  |
| El lodge              | `/es/el-lodge`           | Habitaciones y baños, la mesa, actividades, mapa, reseñas        |
| Cuyabeno              | `/es/cuyabeno`           | La reserva, 16 animales, cuándo ir, los tours                    |
| Cómo llegar           | `/es/como-llegar`        | Datos clave, la ruta en 4 tramos, bus o avión, mapa              |
| Galería               | `/es/galeria`            | 176 fotos con filtros por tema                                   |
| Preguntas             | `/es/preguntas`          | Preguntas por tema, desplegables                                 |
| Reservar              | `/es/reservar`           | Formulario de consulta (no se indexa en Google)                  |
| 404                   | cualquier URL inexistente | En el idioma del visitante, con enlaces a las páginas principales |

Además: `/sitemap.xml`, `/robots.txt` y `/llms.txt`.

Páginas que existieron y se quitaron (redirigen con 301): `/…/about` → El lodge,
`/…/politicas` → Tours.

### El formulario de reserva

No hay backend: el formulario **arma el mensaje** (tour, fecha, viajeros,
nombre, correo, teléfono y comentarios) y el visitante lo envía con un botón
por WhatsApp o por correo. Nada se guarda en el servidor y no se cobra nada.
Los botones "Reservar este tour" llegan con el tour ya elegido
(`/es/reservar?tour=3-dias`).

---

## ✅ Decisiones del cliente (para no deshacerlas sin consultar)

- **No se muestran precios.** La tarifa se cotiza por WhatsApp o correo. El
  campo `price` de `tours.ts` queda como referencia interna.
- **No se publican** la dirección de la oficina de Quito, el registro forestal
  ni los datos bancarios (estos últimos se envían con la confirmación).
- **Condiciones de reserva:** sólo lo que confirmaba la web anterior del lodge
  (confirmación con voucher, formas de pago, seguro médico obligatorio, qué
  incluye y qué no). La política de cancelación, el pago del 100 % por
  adelantado, la facturación con o sin IVA y los descuentos están en el PDF de
  tarifas 2026, pero **no se publican hasta que el cliente los confirme**.
- **No hay página "Nosotros" ni "Políticas".**
- **Cada lugar del sitio usa una foto distinta**: nada de la misma foto en
  varias secciones.
- **Reseñas en el idioma de la página:** en inglés va el texto original de
  Tripadvisor; en los otros idiomas, una traducción fiel marcada como tal.
- Se quitaron, por pedido del cliente, los recortes de animales en los bordes
  de las secciones y la capa de partículas.

---

## 🎨 Dirección de arte

- **Paleta activa: `selva-viva`** (clara y viva, con el verde profundo en las
  bandas). Siguen disponibles `aguas-negras` (oscura) y `blackwater-light`
  (crema): es una línea en `src/config/theme.ts`.
- **Los acentos salen del logo real:** naranja `#E48424` del wordmark para los
  botones y dorado `#F0A83C` del pico del tucán para los detalles. El
  degradado del pico (`--c-beak`) va en los monogramas de las reseñas.
- **Tipografías:** Instrument Serif (títulos) + Archivo (interfaz).
- **El ritmo de la portada cuenta el viaje.** Nunca hay dos secciones seguidas
  sobre el mismo fondo:

| Sección             | Fondo              |
| ------------------- | ------------------ |
| Hero + datos        | verde profundo     |
| Avales              | blanco             |
| Tours               | lino cálido        |
| El lodge            | niebla clara       |
| Cuyabeno            | verde profundo     |
| Reseñas             | blanco             |
| La llegada          | lino cálido        |
| Cierre de contacto  | foto del atardecer |

**Trampa de apilamiento que ya pasó una vez:** un contenedor de imagen con
`z-index: -1` dentro de una sección con color de fondo se va detrás de ese
color si la sección no crea contexto de apilamiento. La solución es
`isolation: isolate` (está en `.exp-hero`, `.exp-closing` y `.exp-notfound`).
Si se agrega una sección con imagen de fondo, hay que acordarse.

---

## 🪶 El logo y el icono de pestaña

El logo del cliente (`imagenes-canangueno-lodge/extra/`) entra al sitio por un
script:

```bash
node scripts/marca.mjs
```

Genera `public/marca/logo.webp` (sobre fondo claro), `logo-claro.webp` (sobre
el hero y el menú del teléfono), `src/app/icon.png` (favicon) y
`src/app/apple-icon.png`. La versión clara recolorea sólo los píxeles neutros
del original y deja intactos los naranjas. Hay que volver a correrlo si el
cliente manda otro logo.

Los logos de los avales (Ministerio de Turismo, Ministerio del Ambiente y
Tripadvisor) están en `public/marca/avales/` y se muestran desde
`src/components/ui/Credentials.tsx`: franja en la portada, resumen del
formulario de reserva y pie de página.

---

## 🖼️ Fotos

- **Fotos puntuales** de cada sección: `public/fotos/`. Qué foto va en cada
  lugar se decide en `src/config/media.ts`: cambiar una foto es cambiar una
  línea (`src`).
- **Galería:** sale de la carpeta del cliente
  `imagenes-canangueno-lodge/Listas/Imagenes/` (animales, flora, paisajes,
  lodge, personas). Para sumar fotos, se agregan ahí y se corre
  `npm run galeria`: las convierte a WebP en `public/fotos/galeria/` y
  reescribe `src/content/gallery-photos.ts` (archivo generado, no se edita a
  mano).

### Versiones livianas (rendimiento)

Cloudflare Workers no optimiza imágenes solo (sería el servicio pago de
Cloudflare Images). Por eso `scripts/imagenes.mjs` deja hechas copias de
**480 y 800 px** de cada foto en `public/fotos/_w/`, y
`src/lib/image-loader.ts` arma el `srcset` con ellas: un teléfono baja la
copia chica y una pantalla grande, la original. Es incremental y corre solo
antes de `dev` y de `build`.

Con esto, en un teléfono la galería pasó de 7,5 MB a 1,8 MB, la portada de 3 MB
a 1,4 MB y Cuyabeno de 5,4 MB a 2 MB.

### Regla de honestidad

Nunca se presenta material generado o alterado con IA como si fuera el lodge,
las cabañas o los interiores: el huésped tiene que encontrar lo que vio.

---

## 🎬 El video del hero

El video del lodge en YouTube (`Auj1H9UziKM`) es el fondo del hero.
`components/video/HeroVideo.tsx` pinta primero la foto (un fotograma del mismo
video, es lo que mide Google como LCP) y un segundo después monta el video en
silencio. El video **sólo aparece cuando realmente empieza a reproducirse**:
si el navegador bloquea el autoplay queda la foto, nunca un video en pausa con
los botones de YouTube encima.

No se carga en pantallas chicas, con movimiento reducido ni en modo de ahorro
de datos. El botón "Ver el video" lo abre completo, con sonido; mientras está
abierto, el del fondo se pausa. Todo va por `youtube-nocookie.com`. Para
cambiar el video: `video.youtubeId` en `src/config/site.ts`.

---

## 🌍 Idiomas

- La raíz `/` lleva al idioma del navegador si es uno de los cuatro y, si no,
  al inglés (`src/middleware.ts`). El inglés es también el `x-default`.
- Cualquier URL que no existe muestra el 404 del sitio en el idioma del
  visitante, con cabecera y pie.
- Los segmentos de ruta son iguales en los cuatro idiomas (`/en/galeria`). Para
  traducirlos se cambia sólo `src/lib/routes.ts` + un mapa de rewrites.

---

## 📈 SEO y GEO

- **Metadata por página** con `pageMetadata()` (`src/lib/seo.ts`): título,
  descripción, canónica, `hreflang` de los cuatro idiomas + `x-default`, Open
  Graph y tarjeta de X/Twitter con foto.
- **Datos estructurados (JSON-LD):** `LodgingBusiness` (con ubicación, fotos y
  redes), `TouristTrip` por tour, `BreadcrumbList` en cada tour, `ItemList`
  de tours y `FAQPage`.
- **`sitemap.xml`** con todas las páginas en los cuatro idiomas y sus
  alternativas, y **`robots.txt`**.
- **`/llms.txt` (GEO):** un resumen en texto para que ChatGPT, Perplexity,
  Gemini y otros asistentes citen bien al lodge (tours, qué incluyen, cómo
  llegar, cuándo ir, contacto). Se arma solo desde el mismo contenido del
  sitio (`src/app/llms.txt/route.ts`).
- **Las 38 URLs de la web vieja** (WordPress) redirigen con 301 a las nuevas
  (`legacy-redirects.ts`), para no perder el posicionamiento actual.
- **Mientras `LIVE` sea `false`,** nada se indexa: `noindex` en cada página y
  en las cabeceras, y `robots.txt` bloquea todo.

---

## 🗂️ Estructura

```
src/
├── app/
│   ├── (site)/[locale]/     Todas las páginas (el layout raíz está acá)
│   ├── llms.txt/            /llms.txt, generado del contenido
│   ├── sitemap.ts · robots.ts · icon.png · apple-icon.png
│   └── globals.css          Tokens → utilidades de Tailwind
├── middleware.ts            Idioma de entrada y 404 de URLs sin idioma
├── components/
│   ├── expedition/          Portada, TourCards, TourDetail, TourTerms,
│   │                        LodgePreview, LodgeMap, ClosingBand
│   ├── layout/              Header, Footer, Logo, PageHeader, WhatsAppFab
│   ├── ui/                  Media (todas las fotos), Credentials, BrandIcons
│   ├── booking/ gallery/ sections/ seo/ video/
├── config/                  site · media · theme   ← el panel de control
├── content/                 tours · cuyabeno · lodge · journey · faqs ·
│                            reviews · gallery · expedition-copy
├── i18n/                    es · en · de · fr (tipados contra es)
├── lib/                     i18n · routes · seo · fonts · image-loader · …
└── styles/
    ├── palettes.css · media.css
    ├── site.css             índice: importa los de abajo EN ORDEN (cascada)
    └── site/                un archivo por pieza (home, tour-page, pages…)
scripts/                     galeria · imagenes · marca · capturas y revisión
legacy-redirects.ts          URLs de WordPress → páginas nuevas
wrangler.jsonc · open-next.config.ts   Cloudflare Workers
```

---

## 📷 Revisión visual

```bash
npm run build && npx next start          # producción en :3000

node scripts/shots.mjs http://localhost:3000     # páginas enteras, 1440 y 390 px
node scripts/zoom.mjs ".exp-reviews" es 1440      # UN elemento, a tamaño real
node scripts/review-design.mjs http://localhost:3000   # aserciones de diseño
```

Usan el Chrome instalado en la máquina y dejan todo en `.shots/`.

Para refactorizar CSS sin mover un píxel:

```bash
node scripts/styles-snapshot.mjs .shots/antes.json
#   … cambio, rebuild, reinicio …
node scripts/styles-snapshot.mjs .shots/despues.json
node scripts/styles-diff.mjs .shots/antes.json .shots/despues.json
```

---

## 🚧 Pendientes

### Para confirmar con el cliente

- [ ] **Número de WhatsApp propio del negocio.** El de hoy es el celular
      personal de alguien de la familia. Se cambia en `src/config/site.ts`.
- [ ] **Probar el correo** `info@cananguenolodge.com`: el dominio tiene servidor
      de correo, pero conviene mandar un correo de prueba.
- [ ] **Datos públicos de la reserva** que usan la portada y `/cuyabeno`:
      creada en 1979, 590.112 ha y 14 lagunas.
- [ ] **Origen de las fotos de "Listas":** los archivos se llaman
      "ChatGPT Image…". Confirmar que son fotos del lodge (retocadas o no) y
      no imágenes generadas, sobre todo las de habitaciones y cabañas.
- [ ] **Precio del chamán y del casabe:** la web anterior decía USD 5 y la tarifa
      2026, USD 10. Hoy el sitio dice "costo aparte".
- [ ] **Condiciones del PDF** (cancelación, pago del 100 %, IVA, descuentos
      para niños y grupos): publicarlas si el cliente las confirma.
- [ ] **Noches sueltas** (hoy en Expedia, Hoteles.com y Despegar): ¿se venden
      también desde la web?

### Técnico (próximas fases)

- [ ] **Analítica:** no hay ninguna instalada. Lo mínimo y sin cookies:
      Cloudflare Web Analytics. Para campañas: GA4 y Meta Pixel (con aviso de
      cookies).
- [ ] **Guardar las consultas** en una base de datos (Cloudflare D1) con su
      origen (UTM), y un panel `/admin` para verlas.
- [ ] **Reseñas en vivo** con el widget oficial de Tripadvisor o Google.

---

## 🌐 Pasar al dominio `cananguenolodge.com`

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

**El correo vive en el mismo servidor que el WordPress** y es lo único
delicado de la mudanza.

### El plan (sin cortar el correo)

Un Worker de Cloudflare sólo puede usar un dominio que **esté en Cloudflare**:
no alcanza con cambiar un registro en el cPanel.

1. **Agregar el dominio a Cloudflare** (plan gratis, cuenta Thexify Studio).
   Cloudflare copia los registros DNS existentes: **revisar que estén todos
   los de la tabla**, sobre todo MX, `mail`, `webmail`, SPF y DKIM, y dejar
   los de correo en "Solo DNS" (nube gris).
2. Un día antes, **bajar el TTL** de los registros en el DNS actual a 300 s.
3. **Cambiar los nameservers** en el registrador del dominio (hace falta el
   acceso: hoy apuntan al hosting) por los dos que indique Cloudflare.
4. En Cloudflare → **Workers → `canangueno` → Dominios y rutas**, agregar
   `cananguenolodge.com` y `www.cananguenolodge.com` como dominios
   personalizados.
5. En `src/config/site.ts`, poner **`LIVE = true`** y correr `npm run deploy`.
   Con eso, la canónica, el sitemap, el JSON-LD y `llms.txt` pasan al dominio
   real, y Google ya puede indexar.
6. Dar de alta el sitio en **Google Search Console** y en Bing Webmaster
   Tools, y enviar `/sitemap.xml`.
7. **Limpiar el SPF** (cambiar `+a` por las IPs fijas):
   `v=spf1 +mx +ip4:66.225.241.98 +ip4:66.225.241.50 +include:relay.mailchannels.net ~all`
   y **agregar DMARC** (TXT en `_dmarc`):
   `v=DMARC1; p=none; rua=mailto:info@cananguenolodge.com`
8. Dejar el WordPress vivo un mes como respaldo. Después cancelar el hosting
   web, **pero no el plan de correo**.

---

## Notas de entorno

- Windows: OpenNext funciona pero avisa que no es su entorno ideal. Si
  `npm run deploy` falla con `EPERM` sobre `.open-next`, cerrar cualquier
  `wrangler dev` o vista previa que esté corriendo y volver a intentar.
- Si `npm run dev` empieza a tirar `__webpack_modules__ is not a function`,
  borrar `.next` y volver a levantar. Pasa al correr `build` con el `dev` vivo.
- El proyecto vive fuera de OneDrive/iCloud a propósito.
