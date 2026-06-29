import { ThemeProvider } from "@/components/theme-provider"
// import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import History  from "./components/History"
import Testimonials from "./components/Testimonials"
import Galery from "./components/Galery"
import Contact from "./components/Contact"
import Opinion from "./components/Opinion"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <History />
      <Testimonials />
      <Galery />
      <Contact />
      <Opinion />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
