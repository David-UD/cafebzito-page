import { useTheme } from "@/components/theme-provider"
import { Separator } from "@/components/ui/separator"
import FacebookIcon from "@/icons/FacebookIcon"
import InstagramIcon from "@/icons/InstagramIcon"
import TikTokIcon from "@/icons/TikTokIcon"

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/CafebzitoCampeche", icon: FacebookIcon, color: "text-[#1877F2]" },
  { name: "Instagram", href: "https://www.instagram.com/Cafebzito", icon: InstagramIcon, color: "text-[#E4405F]" },
  { name: "TikTok", href: "https://www.tiktok.com/@cafebzitooficial", icon: TikTokIcon, color: "text-foreground" },
  
]

const img = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "")

export default function Footer() {
  const { theme } = useTheme()
  return (
    <footer id="footer" className="container py-16 sm:py-20 scroll-mt-16">
      <div className="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
        <div className="flex flex-col items-center text-center">
          <a href={import.meta.env.BASE_URL || "/"} className="flex items-center gap-3 mb-3">
            <img src={theme === "dark" ? img("img/logo/logo-cafebzito-dark.jpg") : img("img/logo/logo-cafebzito-light.jpg")} alt="Cafebzito" className="size-12 rounded-full object-cover" />
            <div className="leading-tight text-left">
              <div className="font-bold text-xl font-montserrat">CAFEBZITO</div>
              <div className="text-sm text-muted-foreground font-minion-pro">Aquí todo sabe mejor.</div>
            </div>
          </a>
          <div className="flex gap-4 mt-2">
            {socialLinks.map(({ name, href, icon: Icon, color }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label={name}>
                <Icon className={`size-8 ${color}`} />
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        <section className="text-center text-sm text-muted-foreground">
          <div>
            &copy; {new Date().getFullYear()} Cafebzito. Todos los derechos reservados.
          </div>
          <div>
            Diseñado por{" "}
            <a target="_blank" href="https://www.linkedin.com/in/david-uc/" className="text-primary transition-all border-primary hover:border-b-2">
              David Uc
            </a>
          </div>
        </section>
      </div>
    </footer>
  )
}
