# Plan: Integración de Facebook Page Plugin + Botón Scroll-to-Top

## Datos del proyecto
- **URL Facebook:** https://www.facebook.com/CafebzitoCampeche
- **Método:** Facebook Page Plugin (SDK)
- **Costo:** $0
- **Fecha:** 2026-08-05

---

## Funcionalidad 1: Facebook Page Plugin

### 1. Crear componente `src/components/FacebookSection.jsx`
- Contenedor `<div className="fb-page" ...>` con configuración:
  - `data-href="https://www.facebook.com/CafebzitoCampeche"`
  - `data-tabs="timeline"` (muestra publicaciones del timeline)
  - `data-width="400"` (responsive con adapt-container-width)
  - `data-height="500"` (ajustable según necesidad)
  - `data-hide-cover="false"` (mostrar portada)
  - `data-show-facepile="true"` (mostrar amigos que dan like)
  - `data-small-header="true"` (header compacto)
  - `data-lazy="true"` (carga diferida, no afecta Core Web Vitals)
- Script SDK cargado con `useEffect` + función `loadFBSdk()` externa
- Clase oscura según tema (dark/light)

### 2. Crear archivo `public/facebook-sdk.js`
- Script externo para evitar re-cargas múltiples del SDK
- Función `loadFBSdk()` que carga el SDK una sola vez
- Previene errores de "FB is not defined"

### 3. Modificar `src/App.jsx`
- Importar `FacebookSection`
- Agregar sección después de `Testimonials` (o antes de `Contact`)
- Título: "Síguenos en Facebook"
- Estilo consistente con el resto del sitio

### 4. Verificar SEO y rendimiento
- `data-lazy="true"` carga el SDK solo cuando el componente entra al viewport
- No afecta LCP, FID ni CLS
- El SDK se carga asíncronamente (`async defer`)

---

## Funcionalidad 2: Botón Scroll-to-Top

### 1. Crear componente `src/components/ScrollToTop.jsx`
- Botón circular con ícono `ArrowUp` de lucide-react
- Aparece cuando el usuario hace scroll más de 300px
- Animación de fade-in/fade-out con `transition-opacity`
- Posición: `fixed bottom-20 left-6` (sobre el botón de WhatsApp)
- Color: `bg-primary` con `hover:bg-primary/80`
- Accesibilidad: `aria-label="Volver al inicio"`

### 2. Modificar `src/App.jsx`
- Importar `ScrollToTop`
- Agregar después de `<WhatsAppButton />`

### 3. Verificar
- Botón visible al hacer scroll
- Scroll suave al hacer clic
- No interfiere con otros botones fijos (WhatsApp)
