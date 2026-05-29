import { ThemeProvider } from "@/components/theme-provider"
// import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Testimonials from "./components/Testimonials"
import Galery from "./components/Galery"
import Contact from "./components/Contact"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Testimonials />
      <Galery />
      <Contact />
      <FAQ />
      <Footer />
    </ThemeProvider>
  )
}
