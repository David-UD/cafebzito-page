import { useTheme } from "@/components/theme-provider"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"

const reviewList = [
  { name: "Victoria Castañon", comment: "Es un local como con otros puestecitos de productos. La cafetería está al fondo. Es muy variado el menú en comparación de otras cafeterías aunque el café no es tan bueno. Los postres están muy bien y nos hicieron el favor de poner el waffle para compartir. Es petfriendly ", rating: 4.0 },
  { name: "María Farfán", comment: "Un lugar muy agradable, la parte de la terraza es perfecta para platicar y desconectar un rato. Servicio muy atento siempre y comida muy rica y bien servida.", rating: 5.0 },
  { name: "Oscar Dueñas", comment: "Excelente servicio por parte de Alonso. Muy buena atención, lindo lugar y muy rica comida. Desayunos deliciosos. Muy recomendable @oscarde.", rating: 5.0 },
  { name: "Edith Balderas", comment: "Lindo lugarcito pintoresco con excelente servicio y desayuno delicioso! Buenos precios y pet friendly!!! Staff muy cálido y amable, nos hicieron sentir muy bienvenidos. Las enchiladas suizas rojas, brutales!!! ¡Nos vemos pronto!", rating: 5.0 },
  { name: "Robin Vaucelle", comment: "High level waitress, very good food and drinks.A great place to be for breakfast/brunch.All my support, bravo!", rating: 5.0 },
  { name: "Carolina Dupinet", comment: "Muy lindo lugar, excelente atención , recomiendo la terraza muy agradable además excelente ubicación.", rating: 4.9 },
]

export default function Testimonials() {
  const { theme } = useTheme()
  const userIcon = theme === "light" ? "/user-image-ligth.svg" : "/user-image-dark.svg"
  return (
    <section id="reseñas" className="container py-16 sm:py-20">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Reseñas</h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Reseñas y comentarios de nuestros clientes</h2>
      </div>
      <Carousel opts={{ align: "start", loop: true }} className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto">
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
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
    </section>
  )
}
