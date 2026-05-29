import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQList = [
  {
    question: "Historia",
    answer: "<b>CAFEBZITO</b> se crea de una combinación de palabras de origen maya, en el caso muy peculiar la palabra <b>“DZIB”</b>, cuyo significado va en relación a el <b>“escritor, pintor y soñador”</b>, siendo está la principal idea, que, de un <b>GRAN SUEÑO</b>, poderlo convertirlo en una realidad. Pero, sobre todo, este lugar sea una inspiración también para todas las personas que nos visiten y sea el gran inicio, para que puedan escribir, crear y pintar su historia, su propio sueño.",
    value: "item-1",
  },
  {
    question: "¿Quienes somos?",
    answer: "Somos un Café-Restaurante que ofrece una opción creada para disfrutar de un ambiente agradable, relajado, sin dejar de lado pasar un rato alegre. En cuanto a platillos y bebidas se refiere, nos enfocamos en atender gustos variados.",
    list: [
      "Ser una opción <b>atractiva</b> y lleno de opciones",
      "Complacer los gustos de los <b>amantes del café</b>",
      "Ofrecer <b>música en vivo</b>, talleres y exposiciones",
      "Apoyar a <b>emprendedores</b> locales",
    ],
    value: "item-2",
  },
  {
    question: "Misión",
    answer: "Ser reconocidos como líder en el mercado local como el mejor café-restaurante en Campeche y crecer por el Sureste Mexicano, para luego llevar nuestros platillos a mercados más lejos, convirtiéndonos en una empresa de éxito. Pero, sobre todo, crear un ambiente donde los colaboradores sean capacitados y motivados a desarrollar y <b>alcanzar los altos estándares de experiencia y calidad exigidos por el mercado</b>, con gente orgullosa de sus valores y de éxito.",
    value: "item-3",
  },
  {
    question: "Visión",
    answer: "Brindar a nuestros clientes un servicio de alimentos y bebidas de productos de calidad junto a una atmosfera agradable acompañada de música selecta, trabajando con estándares de experiencia, <b>calidad y servicio</b>. Creando un lugar único, en donde los clientes deseen regresar gracias a nuestras exigencias, permitiendo un crecimiento a nuestro café-restaurante cada día",
    value: "item-4",
  },
  {
    question: "Valores",
    answer: "",
    list: [
      "<b>Calidad:</b> Nuestra prioridad, es brindar un servicio con excelente calidad y experiencia a cada cliente, para que se sientan acogidos y especiales. Así como, poder generar la confianza suficiente de tener la mejor calidad en nuestros productos.",
      "<b>Responsabilidad:</b> Por nuestro compromiso con los clientes, siempre contamos con personal integro que obtengan un sentido de pertenencia con el café - restaurante y mantengan una responsabilidad en su trabajo, sabiéndose dirigirse a los clientes con respeto.",
      "<b>Honestidad:</b> Fomentarle al personal la honestidad, como base de sus criterios, siempre inculcando con el ejemplo.",
      "<b>Trabajo en equipo:</b> Con diferentes integraciones, motivar al personal para que tengan, no solo un trato laboral, sino también sepan comprenderse y ayudarse entre compañeros.",
    ],
    value: "item-5",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="container md:w-[700px] py-16 sm:py-20">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Preguntas Frecuentes</h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">Conoce más sobre nosotros</h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {FAQList.map(({ question, answer, list, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>
            <AccordionContent className="space-y-2">
              {answer && <p dangerouslySetInnerHTML={{ __html: answer }} />}
              {list && (
                <ul className="list-disc pl-5 space-y-1">
                  {list.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <h3 className="font-medium mt-4">
        Dudas o sugerencias{" "}
        <a href="#contact" className="text-muted-foreground underline">
          Contáctanos
        </a>
      </h3>
    </section>
  )
}
