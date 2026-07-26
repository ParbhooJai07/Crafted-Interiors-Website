import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="size-12 rounded-full bg-timber text-canvas shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href={CONTACT.telHref}
        aria-label="Call us"
        className="size-12 rounded-full bg-ink text-canvas shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}
