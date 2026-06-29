import WhatsAppIcon from "@/icons/WhatsAppIcon"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.link/3381mo"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-10 md:right-20 z-50 size-14 bg-[#25D366] hover:bg-[#22c35e] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
