import { useState } from "react"
import { useTheme } from "@/components/theme-provider"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Menu } from "lucide-react"
import ToggleTheme from "./ToggleTheme"

const base = import.meta.env.BASE_URL || "/"

const routeList = [
  { href: "#", label: "Inicio" },
  { href: "#history", label: "Historia" },
  { href: "#galery", label: "Galería" },
  { href: "#contact", label: "Contacto" },
  { href: "#faq", label: "¿Quienes somos?" },
  { href: "#footer", label: "Redes sociales" },
]

const img = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "")

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  const boxShadow = theme === "light"
    ? "inset 0 0 5px rgba(0, 0, 0, 0.085)"
    : "inset 0 0 5px rgba(255, 255, 255, 0.141)"

  return (
    <header
      className="w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-2 bg-card shadow-md"
      style={{ boxShadow }}
    >
      <a href={base} className="flex items-center gap-2">
        <img src={theme === "dark" ? img("img/logo/logo-cafebzito-dark.jpg") : img("img/logo/logo-cafebzito-light.jpg")} alt="Cafebzito" className="size-9 rounded-full object-cover" />
        <div className="leading-tight">
          <div className="font-bold text-base font-montserrat">CAFEBZITO</div>
          <div className="text-[10px] text-muted-foreground font-normal font-minion-pro">Aquí todo sabe mejor.</div>
        </div>
      </a>

      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu onClick={() => setIsOpen(true)} className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card">
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <a href={base} className="flex items-center gap-2">
                    <img src={theme === "dark" ? img("img/logo/logo-cafebzito-dark.jpg") : img("img/logo/logo-cafebzito-light.jpg")} alt="Cafebzito" className="size-9 rounded-full object-cover" />
                    <div className="leading-tight">
                      <div className="font-bold text-base font-montserrat">CAFEBZITO</div>
                      <div className="text-[10px] text-muted-foreground font-normal font-minion-pro">Aquí todo sabe mejor.</div>
                    </div>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button key={label} asChild variant="ghost" className="justify-start text-base">
                    <a href={href} onClick={() => setIsOpen(false)}>
                      {label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <div className="flex">
                {routeList.map(({ href, label }) => (
                  <Button key={label} asChild variant="ghost" className="justify-start text-base">
                    <a href={href}>{label}</a>
                  </Button>
                ))}
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />
      </div>
    </header>
  )
}