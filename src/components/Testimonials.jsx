import { useTheme } from "@/components/theme-provider"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Star } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"

const reviewList = [
  { name: "Victoria Castañon", comment: "Es un local como con otros puestecitos de productos. La cafetería está al fondo. Es muy variado el menú en comparación de otras cafeterías aunque el café no es tan bueno. Los postres están muy bien y nos hicieron el favor de poner el waffle para compartir. Es petfriendly ", rating: 4.0 },
  { name: "María Farfán", comment: "Un lugar muy agradable, la parte de la terraza es perfecta para platicar y desconectar un rato. Servicio muy atento siempre y comida muy rica y bien servida.", rating: 5.0 },
  { name: "Oscar Dueñas", comment: "Excelente servicio por parte de Alonso. Muy buena atención, lindo lugar y muy rica comida. Desayunos deliciosos. Muy recomendable @oscarde.", rating: 5.0 },
  { name: "Edith Balderas", comment: "Lindo lugarcito pintoresco con excelente servicio y desayuno delicioso! Buenos precios y pet friendly!!! Staff muy cálido y amable, nos hicieron sentir muy bienvenidos. Las enchiladas suizas rojas, brutales!!! ¡Nos vemos pronto!", rating: 5.0 },
  { name: "Robin Vaucelle", comment: "High level waitress, very good food and drinks.A great place to be for breakfast/brunch.All my support, bravo!", rating: 5.0 },
  { name: "Carolina Dupinet", comment: "Muy lindo lugar, excelente atención , recomiendo la terraza muy agradable además excelente ubicación.", rating: 4.9 },
]

const img = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "")

export default function Testimonials() {
  const { theme } = useTheme()
  const userIcon = theme === "light" ? img("svg/user-image-ligth.svg") : img("svg/user-image-dark.svg")
  return (
    <section id="reseñas" className="container py-16 sm:py-20 scroll-mt-16">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Reseñas</h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-3">
          Reseñas y{" "}
          <span className="text-transparent bg-gradient-to-r from-[#FFBF31] to-primary bg-clip-text">
            comentarios
          </span>{" "}
          de nuestros clientes
        </h2>
      </div>
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-muted/50 dark:bg-card h-full flex flex-col">
                <CardContent className="pt-6 pb-0 flex-1">
                  <div className="flex gap-1 pb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-primary text-primary" />
                    ))}
                  </div>
                  &ldquo;{review.comment}&rdquo;
                </CardContent>
                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={userIcon} alt="icono de usuario" />
                    </Avatar>
                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
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
          Reservaciones
        </a>
      </div>
    </section>
  )
}
