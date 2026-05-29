import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="sm"
      variant="ghost"
      className="w-full justify-start"
    >
      {theme === "light" ? (
        <div className="flex gap-2">
          <Moon className="size-5" />
          <span className="block lg:hidden">Dark</span>
        </div>
      ) : (
        <div className="flex gap-2">
          <Sun className="size-5" />
          <span className="block lg:hidden">Light</span>
        </div>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
