import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQList = [
  // {
  //   question: "Historia",
  //   answer: "<b>CAFEBZITO</b> nace de un sueño, de la convicción de que las grandes historias comienzan con una idea y la valentía de convertirla en realidad. <br><br> Su nombre surge de la inspiración en la cultura maya y, particularmente, de la palabra <b>“DZIB”</b>, relacionada con el escritor, el pintor y el soñador. Esta palabra representa la esencia de nuestro proyecto: creer que cada persona tiene una historia por escribir, una obra por crear y un sueño por alcanzar. <br><br> <b>CAFEBZITO</b> fue concebido como mucho más que un café-restaurante. Es un espacio donde las ideas encuentran inspiración, donde las conversaciones cobran vida y donde cada visitante puede hacer una pausa para imaginar, crear y construir su propio camino. <br><br> Queremos que cada taza de café, cada platillo y cada momento compartido aquí se conviertan en parte de una historia especial. Porque así como <b>CAFEBZITO</b> nació de un gran sueño, deseamos inspirar a otros a comenzar el suyo. ",
  //   value: "item-1",
  // },
  {
    question: "¿Quienes somos?",
    answer: "Somos un café-restaurante creado para quienes buscan disfrutar de una experiencia única en un ambiente cálido, relajado y lleno de inspiración. <br> En <b>CAFEBZITO</b> combinamos gastronomía, café de calidad y experiencias culturales para ofrecer un espacio donde cada visita se convierta en un momento memorable. Nuestro menú está diseñado para satisfacer gustos diversos, brindando opciones para cualquier ocasión. <br><br> Más que un establecimiento, somos un punto de encuentro para la creatividad, el emprendimiento y la convivencia. Impulsamos el talento local mediante exposiciones, talleres, música en vivo y actividades que enriquecen la vida cultural de nuestra comunidad. <br><br> Nos apasiona el café, la buena comida y, sobre todo, crear experiencias que inviten a nuestros clientes a regresar una y otra vez.",
    value: "item-2",
  },
  {
    question: "Misión",
    answer: "Brindar experiencias memorables a través de alimentos, bebidas y café de excelente calidad, en un ambiente inspirador donde la atención, la calidez humana y la creatividad sean parte fundamental de cada visita. <br><br> Buscamos formar un equipo comprometido, capacitado y orgulloso de sus valores, capaz de ofrecer los más altos estándares de servicio y calidad. Nuestro propósito es convertirnos en un referente de excelencia en Campeche, impulsando el crecimiento de nuestra marca y llevando nuestra esencia a nuevos mercados del sureste mexicano y más allá.",
    value: "item-3",
  },
  {
    question: "Visión",
    answer: "Ser reconocidos como el café-restaurante más inspirador y <b>querido de Campeche</b>, distinguiéndonos por la calidad de nuestros productos, la excelencia en el servicio y la creación de experiencias únicas. <br><br> Aspiramos a expandir nuestra presencia en el sureste mexicano, manteniendo siempre nuestra esencia: ser un espacio donde las personas disfruten, se conecten, encuentren inspiración y deseen regresar para seguir escribiendo su historia junto a nosotros.",
    value: "item-4",
  },
  {
    question: "Valores",
    answer: "",
    list: [
      "<b>Calidad:</b> La excelencia es nuestra prioridad. Nos esforzamos por ofrecer productos cuidadosamente elaborados y un servicio excepcional que haga sentir a cada cliente especial, cómodo y satisfecho en cada visita.",
      "<b>Responsabilidad:</b> Actuamos con compromiso, profesionalismo y respeto hacia nuestros clientes, colaboradores y comunidad. Cumplimos con nuestras responsabilidades entendiendo que cada detalle contribuye a la experiencia que ofrecemos.",
      "<b>Honestidad:</b> Construimos relaciones basadas en la confianza, la transparencia y la integridad. Creemos que el ejemplo es la mejor forma de fomentar una cultura de honestidad dentro y fuera de nuestra organización.",
      "<b>Trabajo en equipo:</b> Valoramos la colaboración, el respeto y el apoyo mutuo. Creemos que los grandes resultados nacen cuando las personas trabajan juntas, comparten conocimientos y crecen como equipo.",
      "<b>Inspiración:</b> Promovemos un entorno que motive a soñar, crear y emprender. Queremos ser un lugar donde las ideas florezcan y las personas encuentren el impulso para alcanzar sus metas.",
      "<b>Comunidad:</b> Apoyamos el talento local y fomentamos espacios de encuentro que fortalezcan la cultura, el arte y el desarrollo de nuestra comunidad.",
    ],
    value: "item-5",
  },
  {
    question: "Facturación Electrónica",
    answer: "En <b>CAFEBZITO</b> buscamos brindarte un servicio ágil y sencillo. Para generar tu factura, escanea el código QR que aparece en tu ticket de consumo e ingresa los datos fiscales solicitados. <br><br> Importante:",
    list: [
      "La facturación únicamente puede realizarse durante el mes vigente en que se efectuó tu consumo.",
      "Una vez concluido el mes, el ticket quedará cancelado para efectos de facturación y no podrá ser reimpreso ni facturado posteriormente.",
      "La fecha que aparecerá en tu factura será la correspondiente al día en que se genere el comprobante.",
      "Si tienes alguna duda o requieres apoyo para realizar tu factura, envíanos una fotografía de tu ticket junto con tus datos fiscales al correo: <b>factura.cafebzito@gmail.com</b>. Con gusto te ayudaremos."
    ],
    value: "item-6",
  },
  {
    question: "Reclutamiento",
    answer: "En <b>CAFEBZITO</b> creemos que nuestro mayor valor está en las personas que forman parte de nuestro equipo. Por ello, buscamos colaboradores comprometidos, apasionados por el servicio y alineados con nuestros principios de ética, respeto, responsabilidad y trabajo en equipo. <br><br> Estamos convencidos de que el talento humano es la base de nuestro crecimiento y éxito, por lo que fomentamos un ambiente laboral donde el desarrollo personal y profesional son parte fundamental de nuestra cultura. <br><br> Si deseas formar parte de la familia <b>CAFEBZITO</b> y contribuir con tu talento, experiencia y entusiasmo, te invitamos a enviarnos tu Currículum Vitae al correo: <b>reclutamiento.grupocafebzito@gmail.com</b>.",
    value: "item-7",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="container md:w-[700px] py-16 sm:py-20 scroll-mt-16">
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
