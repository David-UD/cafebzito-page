import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

const img = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "")
const totalPortadas = 2

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef(null)
  const touchStartX = useRef(0)
  const currentRef = useRef(0)

  function goTo(index) {
    setCurrent(index)
    currentRef.current = index
    restartInterval()
  }

  function next() {
    goTo((currentRef.current + 1) % totalPortadas)
  }

  function prev() {
    goTo((currentRef.current - 1 + totalPortadas) % totalPortadas)
  }

  function restartInterval() {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      goTo((currentRef.current + 1) % totalPortadas)
    }, 5000)
  }

  useEffect(() => {
    restartInterval()
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <section className="container py-16 sm:py-20 scroll-mt-20">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto">
        <div className="text-center space-y-8">

          <div className="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold">
            <img
              src={img("img/logo/logo-cafebzito-dark.jpg")}
              alt="Logo Cafebzito"
              className="mx-auto size-32 md:size-44 rounded-full object-cover shadow-lg border-2 border-primary/20"
            />
            <h1>
              <span className="font-montserrat">CAFEBZITO</span>{" "}
              <div>
              <span className="text-transparent bg-gradient-to-r from-[#FFBF31] to-primary bg-clip-text font-minion-pro">
                Aquí todo sabe mejor
              </span>{" "}
              </div>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-foreground text-justify">
            <b>CAFEBZITO</b> es más que un café-restaurante; es un espacio inspirado en los sueños, la creatividad y los momentos que dejan huella.
            Un lugar donde el aroma del café, la buena gastronomía, la cultura y la convivencia se unen para crear experiencias memorables, invitando a cada visitante a escribir, crear y compartir su propia historia.
          </p>

        </div>

        <div className="relative w-full mt-14">
          <div className="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation pointer-events-none" />
          <div className="absolute -bottom-6 left-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation pointer-events-none" />

          <div
            className="relative overflow-hidden rounded-lg border-t-2 border-t-primary/30 img-border-animation"
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
            onTouchEnd={(e) => {
              const diff = touchStartX.current - e.changedTouches[0].clientX
              if (Math.abs(diff) > 50) {
                if (diff > 0) next()
                else prev()
              }
            }}
          >
            <div className="grid grid-cols-1 grid-rows-1">
              {Array.from({ length: totalPortadas }, (_, i) => (
                <div
                  key={i}
                  className={`col-start-1 row-start-1 transition-opacity duration-700 ease-in-out ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    className="w-full h-auto"
                    src={img(`img/portadas/portada-${i + 1}.png`)}
                    alt={`portada ${i + 1} de cafebzito`}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="flex justify-center gap-3 mt-4">
          {Array.from({ length: totalPortadas }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === current ? "bg-primary" : "bg-primary/30"
              }`}
              aria-current={i === current}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .img-shadow-animation {
          animation: img-shadow-animation 2s linear infinite alternate;
        }
        .img-border-animation {
          animation: img-border-animation 2s linear infinite alternate;
        }
        @keyframes img-shadow-animation {
          from { opacity: 0.5; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0px); }
        }
        @keyframes img-border-animation {
          from { border-top-color: hsl(var(--primary) / 0.1); }
          to { border-top-color: hsl(var(--primary) / 0.6); }
        }
      `}</style>
    </section>
  )
}
