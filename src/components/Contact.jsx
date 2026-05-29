import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Building2, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyFUPGEuky5eRWA_z8bIaIXVTp74DVgRux4FzEyWH9D5lc6FOvO4_Jt0i2fDx8HBRbO/exec"

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")

  const validate = useCallback(() => {
    const newErrors = {}
    const { firstName, lastName, email, subject, message } = contactForm

    if (!firstName.trim()) newErrors.firstName = "Requerido"
    if (!lastName.trim()) newErrors.lastName = "Requerido"
    if (!email.trim()) newErrors.email = "Requerido"
    if (!subject.trim()) newErrors.subject = "Requerido"
    if (!message.trim()) newErrors.message = "Requerido"

    return newErrors
  }, [contactForm])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus("loading")
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(contactForm),
      })

      setContactForm({ firstName: "", lastName: "", email: "", subject: "", message: "" })
      setErrors({})
      setStatus("success")
      setTimeout(() => setStatus("idle"), 4000)
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  const updateField = (field, value) => {
    setContactForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }))
  }

  return (
    <section id="contact" className="container py-16 sm:py-20">
      <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">Contacto</h2>
          </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">Datos de contacto</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Visita nuestra sucursal en el centro de la ciudad, donde podrás disfrutar de un ambiente acogedor y una amplia variedad de platillos de alta calidad.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="flex gap-2 mb-1">
                <Building2 />
                <div className="font-bold">Dirección</div>
              </div>
              <div className="text-sm">Calle 10 & Ciriaco Vázquez y 47, Barrio de Guadalupe, 24010 San Francisco de Campeche, Camp.</div>
            </div>
            <div>
              <div className="flex gap-2 mb-1">
                <Clock />
                <div className="font-bold">Horario de Atención</div>
              </div>
              <div className="text-sm">
                <div>Lunes - Domingo</div>
                <div>8AM - 10:30PM</div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 mb-1">
                <Phone />
                <div className="font-bold">Teléfono</div>
              </div>
              <a className="text-sm hover:underline" href="https://wa.link/3381mo" target="_blank">+52 (981) 106 8821</a>
            </div>
            <div>
              <div className="flex gap-2 mb-1">
                <Mail />
                <div className="font-bold">Correo Electrónico</div>
              </div>
              <div className="text-sm">cafebzito.campeche@gmail.com</div>
            </div>

          </div>
          <div className="mt-8 rounded-lg overflow-hidden border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.8026678468186!2d-90.53105339999999!3d19.8483008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f8336ec0d0b677%3A0x2facbf6adb460233!2sCAFEBZITO!5e0!3m2!1ses-419!2smx!4v1778619534701!5m2!1ses-419!2smx"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de CAFEBZITO"
            />
          </div>
        </div>
        <div> 
        <div className="mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">Escríbenos</h2>
          </div>
        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl" />
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col w-full gap-1.5">
                  <Label htmlFor="first-name">Nombre (s)</Label>
                  <Input id="first-name" type="text" placeholder="José" value={contactForm.firstName} onChange={(e) => updateField("firstName", e.target.value)} className={errors.firstName ? "border-red-500" : ""} />
                  {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                </div>
                <div className="flex flex-col w-full gap-1.5">
                  <Label htmlFor="last-name">Apellidos</Label>
                  <Input id="last-name" type="text" placeholder="Lopéz" value={contactForm.lastName} onChange={(e) => updateField("lastName", e.target.value)} className={errors.lastName ? "border-red-500" : ""} />
                  {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" type="email" placeholder="cafebzito.campeche@gmail.com" value={contactForm.email} onChange={(e) => updateField("email", e.target.value)} className={errors.email ? "border-red-500" : ""} />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" type="text" placeholder="Asunto del mensaje" value={contactForm.subject} onChange={(e) => updateField("subject", e.target.value)} className={errors.subject ? "border-red-500" : ""} />
                {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" placeholder="Tu mensaje..." rows={5} value={contactForm.message} onChange={(e) => updateField("message", e.target.value)} className={errors.message ? "border-red-500" : ""} />
                {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
              </div>

              {status === "success" && (
                <Alert variant="default" className="border-green-500 text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <AlertTitle>Mensaje enviado</AlertTitle>
                  <AlertDescription>Gracias por contactarnos. Te responderemos pronto.</AlertDescription>
                </Alert>
              )}
              {status === "error" && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>No se pudo enviar el mensaje. Intenta de nuevo.</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="mt-4" disabled={status === "loading"}>
                {status === "loading" ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar <Send className="ml-2 size-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter />
        </Card>
        </div>
      </section>
    </section>
  )
}
