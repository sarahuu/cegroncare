import { FaWhatsapp } from "react-icons/fa";
import { site } from "../data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with Cegron Care on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-20 right-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(14,42,78,0.45)] transition duration-200 hover:scale-105 hover:bg-[#1ebe5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:bottom-6 md:right-6"
    >
      <FaWhatsapp aria-hidden="true" className="size-7" />
    </a>
  );
}
