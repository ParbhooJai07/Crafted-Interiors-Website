import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Crafted Interiors" },
      {
        name: "description",
        content:
          "Get in touch by phone, WhatsApp or email to commission a bespoke kitchen, wardrobe, or piece of joinery.",
      },
      { property: "og:title", content: "Contact — Crafted Interiors" },
      {
        property: "og:description",
        content:
          "Reach us by phone, WhatsApp or email to start your bespoke commission.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const project = String(data.get("project") ?? "");
    const message = String(data.get("message") ?? "");

    const lines = [
      `Hi Crafted Interiors, I'd like to discuss a ${project} project.`,
      "",
      message,
      "",
      `— ${name}`,
      email ? `Email: ${email}` : "",
      phone ? `Phone: ${phone}` : "",
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));

    // CONTACT.whatsappHref is expected to look like "https://wa.me/44XXXXXXXXXX"
    const separator = CONTACT.whatsappHref.includes("?") ? "&" : "?";

    // Opens WhatsApp (app or web) with the message pre-filled.
    // The visitor still has to tap "send" themselves — no page can do that
    // last step silently, on WhatsApp or anywhere else.
    window.open(
      `${CONTACT.whatsappHref}${separator}text=${text}`,
      "_blank",
      "noreferrer",
    );

    setSent(true);
  }


  const channels = [
    {
      icon: Phone,
      label: "Call us",
      value: CONTACT.phone,
      href: CONTACT.telHref,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: CONTACT.whatsappDisplay,
      href: CONTACT.whatsappHref,
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: CONTACT.email,
      href: CONTACT.mailHref,
    },
  ];

  return (
    <>
      <section className="pt-24 md:pt-32 pb-16 bg-canvas">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-timber font-semibold">
            Start a commission
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 max-w-[18ch] leading-[1.05]">
            Let's discuss your space.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-ink leading-relaxed">
            Choose the channel that suits you. We usually reply within one
            working day.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-canvas">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="space-y-6">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer" : undefined}
                  className="flex items-center gap-5 p-5 rounded-lg ring-1 ring-ink/10 bg-canvas hover:bg-stone hover:ring-timber/40 transition-colors group"
                >
                  <div className="size-12 rounded-full bg-ink text-canvas grid place-items-center group-hover:bg-timber transition-colors">
                    <c.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-ink">
                      {c.label}
                    </p>
                    <p className="text-lg mt-0.5">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-lg bg-stone ring-1 ring-ink/5">
              <div className="flex items-start gap-4">
                <MapPin className="size-5 text-timber shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-ink">
                    Workshop
                  </p>
                  <p className="mt-1 text-base leading-relaxed">{CONTACT.address}</p>
                  <p className="mt-3 text-xs text-muted-ink"></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-ink text-canvas p-8 md:p-10 rounded-lg">
            <h2 className="font-serif text-3xl">Send us a note.</h2>
            <p className="text-canvas/60 text-sm mt-2">
              Tell us a little about the project.
            </p>

            {sent ? (
              <div className="mt-10 p-6 rounded-md bg-canvas/5 ring-1 ring-canvas/10 text-canvas/80 text-sm">
                WhatsApp should have opened with your message ready to send.
                If it didn't, message us directly at{" "}
                <a href={CONTACT.whatsappHref} className="underline" target="_blank" rel="noreferrer">
                  {CONTACT.whatsappDisplay}
                </a>
                .
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <Field label="Name" name="name" required placeholder="Your full name" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" placeholder="Optional" />
                  <Field label="Phone" name="phone" type="tel" placeholder="Optional" />
                </div>
                <div>
                  <Label>Project type</Label>
                  <select
                    name="project"
                    className="w-full mt-2 bg-transparent border-b border-canvas/20 py-2.5 text-sm focus:outline-none focus:border-canvas transition-colors appearance-none"
                    defaultValue="Bespoke Kitchen"
                  >
                    {["Bespoke Kitchen", "Wardrobe", "Architectural Joinery", "Library / Study", "Other"].map((o) => (
                      <option key={o} className="bg-ink text-canvas">
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label>Tell us about the space</Label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Room, budget range, timing…"
                    className="w-full mt-2 bg-transparent border-b border-canvas/20 py-2.5 text-sm focus:outline-none focus:border-canvas transition-colors resize-none placeholder:text-canvas/30"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 mt-2 bg-canvas text-ink rounded-full text-sm font-medium hover:bg-timber hover:text-canvas transition-colors"
                >
                  Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[10px] uppercase tracking-widest text-canvas/50">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full mt-2 bg-transparent border-b border-canvas/20 py-2.5 text-sm focus:outline-none focus:border-canvas transition-colors placeholder:text-canvas/30"
      />
    </div>
  );
}