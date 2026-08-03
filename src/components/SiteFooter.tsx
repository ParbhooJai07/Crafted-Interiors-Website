import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/contact";
import logo from "../assets/CraftedIntLogo.png"

export function SiteFooter() {
  return (
    <footer className="py-14 border-t border-ink/5 bg-canvas">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-serif text-2xl">Crafted Interiors</span>
          <p className="text-sm text-muted-ink mt-3 max-w-sm leading-relaxed">
            Bespoke kitchens, wardrobes, and custom works — hand-built
            for the homes that will hold them for generations.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-ink mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-timber">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-timber">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-timber">About</Link></li>
            <li><Link to="/contact" className="hover:text-timber">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-ink mb-4">
            Get in touch
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href={CONTACT.telHref} className="hover:text-timber">{CONTACT.phone}</a></li>
            <li><a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-timber">WhatsApp</a></li>
            <li><a href={CONTACT.mailHref} className="hover:text-timber break-all">{CONTACT.email}</a></li>
            <li><a href={CONTACT.instagramHref} target="_blank" rel="noreferrer" className="hover:text-timber">{CONTACT.instagramDisplay}</a></li>
          </ul>
        </div>
      </div>
<div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] uppercase tracking-widest text-muted-ink">
  {/* Left Section */}
  <p>© {new Date().getFullYear()} Crafted Interiors. All rights reserved.</p>
  
  {/* Middle Section (Logo + Text) */}
  <div className="flex items-center gap-2">
    <img src={logo} alt="FiveStack Logo" className="h-4 w-4 object-contain" />
    <p>powered by FiveStack studios</p>
  </div>
  
  {/* Right Section */}
  <p>Bespoke joinery &amp; cabinetry</p>
</div>

    </footer>
  );
}
