# Canangueno Lodge — sitio web

Sitio bilingüe (es/en) para Canangueno Lodge, en la Reserva de Producción de
Fauna Cuyabeno. Next.js 15.5 · Tailwind v4 · GSAP + Lenis.

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

| Quiero cambiar… | Archivo | Qué hago |
|---|---|---|
| **Toda la paleta de colores** | `src/config/theme.ts` | Cambio `palette` a `"eco-luxury"`, `"night-canopy"` o `"river-mist"`. Una línea, cambia el sitio entero. |
| **Un color puntual** | `src/styles/palettes.css` | Edito el hex crudo de la paleta activa. Se propaga solo. |
| **Las tipografías** | `src/lib/fonts.ts` | Cambio los dos `import` de `next/font/google`. Los nombres de variable no se tocan. |
| **El redondeo de bordes** | `src/config/theme.ts` | `radius: "2px"` → lo que quiera. |
| **Precios de los tours** | `src/content/tours.ts` | Campo `price`. Se propaga a home, índice, landing, formulario y JSON-LD. |
| **Itinerarios, inclusiones, descuentos** | `src/content/tours.ts` | Todo junto, por tour, en los dos idiomas. |
| **Textos de botones, menú, títulos** | `src/i18n/es.ts` y `src/i18n/en.ts` | — |
| **Teléfono, WhatsApp, email, dirección, datos legales** | `src/config/site.ts` | Fuente única. |
| **Fotos** | `src/config/media.ts` | Ver abajo. |
| **Preguntas frecuentes** | `src/content/faqs.ts` | El JSON-LD de FAQ se genera de acá solo. |
| **Reseñas** | `src/content/reviews.ts` | — |
| **Orden de las secciones de la home** | `src/app/(site)/[locale]/page.tsx` | Muevo una línea. Ninguna sección depende de otra. |
| **Rutas / URLs** | `src/lib/routes.ts` | Todos los enlaces pasan por acá. |

### Regla dura del proyecto

**Ningún componente escribe un color literal.** Nada de `#102a20` ni de
`text-green-700`. Sólo tokens semánticos: `bg-bg`, `bg-bg-warm`, `bg-bg-deep`,
`bg-surface`, `text-ink`, `text-ink-soft`, `text-ink-faint`, `text-on-deep`,
`bg-accent`, `border-line`, `border-line-deep`.

Gracias a eso cambiar de paleta no rompe nada. Si agregás un componente,
seguí la misma regla.

---

## 📸 Fotos: cómo pasar de placeholder a real

Hoy **no hay fotos reales**. Cada imagen se dibuja como un degradado compuesto
con los colores de la paleta activa (`src/styles/media.css`), con su etiqueta
"FOTO PENDIENTE".

Para poner una foto real:

1. Dejá el archivo en `public/fotos/` (o subilo a R2 y usá la URL).
2. En `src/config/media.ts`, agregá `src` a esa entrada:

```ts
hero: {
  src: "/fotos/hero-rio-amanecer.jpg",   // ← esta línea es todo
  alt: { es: "…", en: "…" },
  tone: "dawn",
},
```

Listo. Ningún componente se toca: `<Media>` detecta el `src` y pasa a servir
la foto con `next/image` (WebP/AVIF, srcset, lazy).

> ⚠️ **Regla de honestidad.** Se pueden usar imágenes generadas para *ambiente*
> (selva, fauna, río). **Nunca** para las cabañas, los interiores o el edificio:
> mostrar un lodge inventado como si fuera el real es engañar al huésped.

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
│   ├── sections/              Las secciones de la home, una por archivo
│   ├── tours/ booking/ gallery/ seo/ ui/ motion/
├── config/                    theme · site · media   ← el panel de control
├── content/                   tours · faqs · reviews · journey · lodge · gallery
├── i18n/                      es.ts · en.ts (en tipado contra es)
├── lib/                       i18n · routes · fonts · cn · attribution · leads
└── styles/                    palettes.css · media.css
```

---

## 🌍 Bilingüe

- Rutas `/es/…` y `/en/…`. La raíz redirige a `/es` (`next.config.ts`).
- Los **slugs de tour** están traducidos (`/es/tours/4-dias` ↔ `/en/tours/4-days`).
- Los segmentos de ruta todavía son iguales en los dos idiomas
  (`/en/galeria`). Para traducirlos, se cambia sólo `src/lib/routes.ts` + un
  mapa de rewrites: ningún componente se entera.
- **Si falta una clave en `en.ts`, el build falla.** Es a propósito: nunca se
  publica media página traducida.

---

## ✨ Animación

GSAP + ScrollTrigger + Lenis (scroll suave).

- `<Reveal>` — revelado al hacer scroll. Con `clip` usa máscara (para imágenes),
  con `stagger` anima los hijos en cascada.
- `StorySection` — scroll horizontal fijado en escritorio; en móvil y con
  `prefers-reduced-motion` es una lista vertical normal.
- **`?nosmooth=1`** en cualquier URL desactiva Lenis. Sirve para QA y para
  herramientas que no se llevan bien con el scroll sintético.

### Dos decisiones que conviene no revertir

1. **Nada se esconde desde CSS.** El estado inicial de cada animación lo pone
   GSAP en un layout effect. Si el JS falla, la página se ve entera sin animar.
   (La alternativa —`opacity:0` en el CSS— deja el sitio invisible cuando algo
   sale mal. Ya pasó en otro proyecto.)
2. **Red de seguridad de 2,5 s.** Si el navegador no está corriendo
   `requestAnimationFrame` (pestaña en segundo plano, throttling, paneles
   embebidos), GSAP nunca avanza y el contenido queda escondido. Un
   `setTimeout` —que no depende de rAF— muestra el bloque sin animar.
   Ver `components/motion/Reveal.tsx` y `sections/Hero.tsx`.

---

## 📈 SEO y atribución

- Metadata por página, hreflang recíproco es/en, Open Graph, canónicas.
- JSON-LD: `LodgingBusiness`, `TouristTrip` + `Offer` con el precio real,
  `FAQPage` (generado del mismo contenido que se muestra), `ItemList`.
- `sitemap.xml` y `robots.txt` nativos.
- **Atribución de primer contacto** (`src/lib/attribution.ts`): guarda
  `utm_*`, `gclid`, `fbclid`, referrer y landing la primera vez que alguien
  entra, y los manda con el lead. Es la base del acuerdo comercial: sin esto
  no se puede saber qué canal trajo cada reserva.
- Cada lead recibe una **referencia** (`CNL-260905-A4F2`) que viaja en el
  mensaje de WhatsApp, para casar la conversación con el registro.

---

## 🚧 Pendientes

### Backend (próxima fase)
- [ ] Cloudflare D1 + Drizzle: persistir leads (hoy `POST /api/leads` valida y
      loguea; el `TODO` está marcado en el archivo).
- [ ] Panel `/admin` con login JWT: editar precios de tours, subir fotos a R2,
      ver leads con su origen.
- [ ] `@opennextjs/cloudflare` + `wrangler.jsonc` para desplegar en Workers.

### Contenido del cliente
- [ ] **Fotos y video reales** (lo más importante).
- [ ] Reemplazar `src/content/reviews.ts` por el **widget oficial de
      TripAdvisor o Google**: hoy son extractos de reseñas reales copiados de
      la web actual, sin atribución en vivo.
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

## Notas de entorno

- Windows: activar **Modo de desarrollador** antes de agregar OpenNext
  (symlinks). El proyecto vive fuera de OneDrive/iCloud a propósito.
- Si `npm run dev` empieza a tirar `__webpack_modules__ is not a function`,
  borrar `.next` y volver a levantar. Pasa al correr `build` con el `dev` vivo.
