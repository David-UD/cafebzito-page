import { Card, CardHeader, CardTitle, CardFooter, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Community() {
  return (
    <section id="community" className="py-16 sm:py-20 scroll-mt-16">
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background text-center flex flex-col items-center justify-center border-2 border-primary/80">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold">
                Queremos mejorar para ti{" "}
                <span className="inline-block text-transparent bg-gradient-to-r from-[#FFBF31] to-primary bg-clip-text leading-snug pt-1">
                  ¿Cómo te estamos atendiendo?
                </span>
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <a href="https://docs.google.com/forms/d/1rKxMTf5Bc7E7r4AvTnj87ioQ8G1elENIdCbG9mxhgxY/edit?usp=forms_home&ouid=115361597832518292863&ths=true" target="_blank">
                  Encuesta
                </a>
              </Button>
            </CardFooter>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Platícanos tu experiencia. <br /> ¡Tu opinión es muy importante para nosotros!
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
