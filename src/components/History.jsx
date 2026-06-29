import { useTheme } from "@/components/theme-provider"
import { Card, CardContent } from "@/components/ui/card"

const HowItWorksList = [
  { 
    title: "Creando historias", 
    description: "<b>CAFEBZITO</b> nace de un sueño, de la convicción de que las grandes historias comienzan con una idea y la valentía de convertirla en realidad. <br><br> Su nombre surge de la inspiración en la cultura maya y, particularmente, de la palabra <b>“DZIB”</b>, relacionada con el escritor, el pintor y el soñador. Esta palabra representa la esencia de nuestro proyecto: creer que cada persona tiene una historia por escribir, una obra por crear y un sueño por alcanzar. <br><br> <b>CAFEBZITO</b> fue concebido como mucho más que un café-restaurante. Es un espacio donde las ideas encuentran inspiración, donde las conversaciones cobran vida y donde cada visitante puede hacer una pausa para imaginar, crear y construir su propio camino. <br><br> Queremos que cada taza de café, cada platillo y cada momento compartido aquí se conviertan en parte de una historia especial. Porque así como <b>CAFEBZITO</b> nació de un gran sueño, deseamos inspirar a otros a comenzar el suyo. ", 
    image: "img/local/first_local.jpg" 
  },
]

const img = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "")

export default function HowItWorks() {
  const { theme } = useTheme()
  const isReversed = (index) => theme === "light" || index % 2 !== 0

  return (
    <section id="history" className="container py-16 sm:py-20 scroll-mt-16">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Historia</h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">Nuestros primeros pasos</h2>
      </div>
      <div className="lg:w-[80%] mx-auto relative">
        {HowItWorksList.map(({ title, description, image }, index) => (
          <div key={title} className="flex flex-col md:flex-row mb-8 items-center gap-4 md:gap-8">
            <Card className={`h-full bg-transparent border-0 shadow-none flex-1 ${isReversed(index) ? "md:order-last" : ""}`}>
              <CardContent className="text-foreground" dangerouslySetInnerHTML={{ __html: description }} />
            </Card>
            <img
              src={img(image)}
              alt={`Imagen de ${title}`}
              className={`w-1/2 sm:w-1/2 md:w-[250px] lg:w-[250px] shrink-0 rounded-xl shadow-lg border-2 border-primary/20 object-cover ${isReversed(index) ? "md:order-first" : ""}`}
            />
            <div
              className={`-z-10 absolute w-44 h-72 lg:w-64 lg:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl ${
                theme === "light" || index % 2 !== 0 ? "left-0" : "right-0"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
