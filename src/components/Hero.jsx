export default function Hero() {
  return (
    <section className="container">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-12 md:py-20">
        <div className="text-center space-y-8">

          <div className="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold">
            <h1>
              <span className="font-montserrat">CAFEBZITO</span>{" "}
              <div>
              <span className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text font-minion-pro">
                Aquí todo sabe mejor
              </span>{" "}
              </div>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            En Cafebzito, te ofrecemos una exquisita variedad de comidas mexicanas. 
            Una cocina creativa para paladares de todo tipo, donde encontraras platillos tipicos y dulces, acompañado siempre de un café.
          </p>

        </div>

        <div className="relative group mt-14">
          <div className="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation" />

          <img
            className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation"
            src="/promociones.png"
            alt="promociones"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg" />
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
