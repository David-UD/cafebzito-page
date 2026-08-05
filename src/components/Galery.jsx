import { useState, useEffect } from "react"
import { X } from "lucide-react"

const img = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "")

const photos = Array.from({ length: 10 }, (_, i) => ({
  src: img(`img/menu/photo_${i + 1}.jpg`),
  alt: `Foto ${i + 1}`,
}))

const photos_instalacion = Array.from({ length: 4 }, (_, i) => ({
  src: img(`img/local/photo_local_${i + 1}.jpg`),
  alt: `Instalación ${i + 1}`,
}))

export default function Galery() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setSelected(null) }
    if (selected) document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [selected])

  return (
    <section id="galery" className="container py-16 sm:py-20 scroll-mt-16">
      <div className="text-center mb-10">
        <h2 className="text-lg text-primary mb-2 tracking-wider">Galería</h2>
        <h2 className="text-3xl md:text-4xl font-bold">Nuestra instalación</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-16">
        {photos_instalacion.map(({ src, alt }) => (
          <div key={src} className="overflow-hidden rounded-lg cursor-pointer" onClick={() => setSelected(src)}>
            <img
              src={src}
              alt={alt}
              className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-3">
          Una poco de nuestros{" "}
          <span className="text-transparent bg-gradient-to-r from-[#FFBF31] to-primary bg-clip-text">
            productos
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {photos.map(({ src, alt }) => (
          <div key={src} className="overflow-hidden rounded-lg cursor-pointer" onClick={() => setSelected(src)}>
            <img
              src={src}
              alt={alt}
              className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="https://wa.link/3381mo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#22c35e] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Ver Menú
        </a>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Cerrar"
          >
            <X className="size-8" />
          </button>
          <img
            src={selected}
            alt="Galería de productos Cafebzito"
            className="max-w-full max-h-[90vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
