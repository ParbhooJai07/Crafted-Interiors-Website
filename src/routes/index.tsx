import { createFileRoute, Link } from "@tanstack/react-router";
<<<<<<< HEAD
import heroPoster from "@/assets/hero-poster.jpeg";
import hero2 from "@/assets/hero-2.jpeg";
import hero3 from "@/assets/hero-3.jpeg";
import serviceKitchens from "@/assets/WhatsApp Image 2026-07-29 at 15.24.28.jpeg";
=======
import heroPoster from "@/assets/hero-poster-movie.mp4";
import serviceKitchens from "@/assets/service-kitchens.jpg";
>>>>>>> main
import serviceWardrobes from "@/assets/service-wardrobes.jpg";
import serviceJoinery from "@/assets/service-joinery.jpg";
import projectHydepark from "@/assets/project-hydepark.jpg";
import projectHardware from "@/assets/project-hardware.jpg";
import projectLibrary from "@/assets/project-library.jpg";
import workshop from "@/assets/workshop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crafted Interiors — Bespoke Kitchens & Cabinetry" },
      {
        name: "description",
        content:
          "Honest materials, precision joinery. Bespoke kitchens, wardrobes and built-in cabinetry hand-crafted in our workshop.",
      },
      { property: "og:title", content: "Crafted Interiors — Bespoke Kitchens & Cabinetry" },
      {
        property: "og:description",
        content:
          "Honest materials, precision joinery. Bespoke kitchens, wardrobes and built-in cabinetry hand-crafted in our workshop.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO — cinematic crossfading slideshow (Ken Burns) */}
      <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <video
            src={heroPoster}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            width={1920}
            height={1088}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/25 to-ink/10" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20 md:pb-28">
          <div className="max-w-[42ch] animate-reveal">
            <span className="text-[11px] uppercase tracking-[0.3em] text-canvas/70 font-medium">
              Bespoke carpentry &amp; cabinetry
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-canvas mt-5 text-balance">
              Honest materials, precision joinery.
            </h1>
            <p className="mt-6 text-canvas/85 text-lg max-w-[38ch] leading-relaxed">
              Bespoke kitchens and wardrobes designed for the rhythm of modern
              life, crafted by hand in our local workshop.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/portfolio"
                className="px-6 py-3 bg-canvas text-ink rounded-full text-sm font-medium hover:bg-timber hover:text-canvas transition-colors"
              >
                View Portfolio
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 text-canvas rounded-full text-sm font-medium ring-1 ring-canvas/40 hover:ring-canvas transition-colors"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-canvas">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-timber font-semibold">
                The Craft
              </span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 max-w-[24ch]">
                Mastery in every grain.
              </h2>
            </div>
            <Link
              to="/services"
              className="text-sm font-medium underline underline-offset-4 decoration-ink/20 hover:decoration-timber hover:text-timber"
            >
              All services
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                img: serviceKitchens,
                title: "Bespoke Kitchens",
                copy: "Functional sculpture tailored to your culinary habits, with integrated appliances and hand-finished timber.",
              },
              {
                img: serviceWardrobes,
                title: "Signature Wardrobes",
                copy: "Storage that disappears into your architecture — intelligent, quiet-close engineering finished by hand.",
              },
              {
                img: serviceJoinery,
                title: "Architectural Joinery",
                copy: "Libraries, media walls, entryways — the permanent fixtures that define the soul of a residence.",
              },
            ].map((s) => (
              <div key={s.title} className="group">
                <div className="aspect-[4/5] rounded-lg overflow-hidden bg-stone ring-1 ring-ink/5 mb-6">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{s.title}</h3>
                <p className="text-sm text-muted-ink leading-relaxed max-w-[42ch]">
                  {s.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-24 md:py-32 bg-stone border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-serif text-4xl md:text-5xl">Selected works</h2>
            <Link
              to="/portfolio"
              className="text-sm font-medium underline underline-offset-4 decoration-ink/20 hover:decoration-timber hover:text-timber"
            >
              View archive
            </Link>
          </div>

          <div className="grid md:grid-cols-12 gap-5 md:gap-6">
            <figure className="md:col-span-8 aspect-[16/10] rounded-lg overflow-hidden ring-1 ring-ink/5 bg-stone">
              <img src={projectHydepark} alt="Hyde Park kitchen" loading="lazy" width={1280} height={800} className="w-full h-full object-cover" />
            </figure>
            <figure className="md:col-span-4 aspect-square rounded-lg overflow-hidden ring-1 ring-ink/5 bg-stone">
              <img src={projectHardware} alt="Brass hardware detail" loading="lazy" width={800} height={800} className="w-full h-full object-cover" />
            </figure>
            <figure className="md:col-span-5 aspect-[4/5] rounded-lg overflow-hidden ring-1 ring-ink/5 bg-stone">
              <img src={projectLibrary} alt="Mahogany library" loading="lazy" width={800} height={1200} className="w-full h-full object-cover" />
            </figure>
            <figure className="md:col-span-7 aspect-[16/10] rounded-lg overflow-hidden ring-1 ring-ink/5 bg-stone">
              <img src={serviceJoinery} alt="Architectural wood panelling" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
            </figure>
          </div>
        </div>
      </section>

      {/* CRAFT / ABOUT BAND */}
      <section className="py-24 md:py-32 bg-canvas">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-[22ch]">
              Built for generations, not seasons.
            </h2>
            <div className="mt-8 space-y-5 text-muted-ink leading-relaxed max-w-[56ch]">
              <p>
                Our brand is built on a deep appreciation for the natural texture of genuine timber. 
                We source eco-friendly hardwoods, hand-selecting every piece 
                to ensure uniform grain quality and dependable durability
              </p>
              <p>
               From precise joint cuts to hand-sanded surfaces, 
               our process is all about bringing out the wood’s natural character,
               not covering it up.
              </p>
            </div>

            <figure className="mt-10 p-8 bg-stone rounded-lg ring-1 ring-ink/5">
              <blockquote className="font-serif italic text-xl leading-snug">
                "The solid weight of the doors and the completely silent hinges 
                speak volumes about the craftsmanship behind Crafted Interiors.”
              </blockquote>
              <figcaption className="mt-4 text-xs font-medium uppercase tracking-widest text-muted-ink">
                — David Chen, Architect
              </figcaption>
            </figure>
          </div>
          <div className="aspect-[4/5] rounded-lg overflow-hidden ring-1 ring-ink/5 bg-stone">
            <img
              src={workshop}
              alt="Master carpenter using a hand plane"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ink text-canvas">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Let's talk about your space.
          </h2>
          <p className="mt-5 text-canvas/70 max-w-xl mx-auto">
            Every commission begins with a conversation. Share the room, the
            rhythm of your life, and the feeling you want when you walk in.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-canvas text-ink rounded-full text-sm font-medium hover:bg-timber hover:text-canvas transition-colors"
            >
              Start a project
            </Link>
            <Link
              to="/portfolio"
              className="px-6 py-3 rounded-full text-sm font-medium ring-1 ring-canvas/30 hover:ring-canvas transition-colors"
            >
              Browse portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
