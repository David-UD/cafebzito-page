# Cafebzito

Sitio web de **Cafebzito** — café artesanal y platillos mexicanos en Campeche.

## Secciones

- **Navbar** — Navegación responsive (mobile sheet + desktop) con logo condicional según tema
- **Hero** — Carrusel de portadas con fade transition, auto-avance cada 5s, swipe táctil, flechas y puntos de navegación
- **History** — Historia del negocio con imagen decorada y layout condicional por tema (dark/light)
- **Testimonials** — Reseñas de clientes con carrusel Embla y botón de WhatsApp
- **FacebookSection** — Timeline de Facebook Page Plugin (lazy loading con IntersectionObserver)
- **Galery** — Galería de fotos de productos e instalaciones con lightbox
- **Contact** — Formulario de contacto conectado a Google Sheets + datos de sucursal
- **FAQ** — Preguntas frecuentes con acordeón
- **WhatsAppButton** — Botón flotante de WhatsApp con animación pulse
- **ScrollToTop** — Botón para volver al inicio (aparece al hacer scroll)
- **Footer** — Logo condicional, redes sociales y derechos reservados

## Tecnologías

- React 19 + Vite 8
- Tailwind CSS 3
- shadcn/ui (Radix UI + class-variance-authority)
- Google Apps Script (contacto → Google Sheets)
- Embla Carousel (testimonios)
- Lucide React (íconos)

## Fuentes

- **Montserrat** — Google Fonts (nombre de la marca)
- **Minion Pro** — Self-hosted OTF (eslogan)

## Tema

Dark/light mode con `ThemeProvider`. Logo, blur decorativo y colores se adaptan según el tema.

## Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Producción
npm run preview  # Vista previa del build
npm run lint     # ESLint
npm run deploy   # Deploy a GitHub Pages (gh-pages)
```