import { ThemeProvider } from "@/components/theme-provider"
// import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import History  from "./components/History"
import Testimonials from "./components/Testimonials"
import FacebookSection from "./components/FacebookSection"
import Galery from "./components/Galery"
import Contact from "./components/Contact"
import Opinion from "./components/Opinion"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import ScrollToTop from "./components/ScrollToTop"

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <History />
      <Testimonials />
      <FacebookSection />
      <Galery />
      <Contact />
      <Opinion />
      <FAQ />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </ThemeProvider>
  )
}
