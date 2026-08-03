import { createFileRoute, Link } from "@tanstack/react-router";
import kitchen1 from "@/assets/kitchen-1.jpeg";
import kitchen3 from "@/assets/kitchen-3.jpeg";
import study2 from "@/assets/study-2.jpeg";
import lounge1 from "@/assets/lounge-1.jpeg";
import wardrobe1 from "@/assets/wardrobe-1.jpeg";
import joinery1 from "@/assets/joinery-1.jpeg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Crafted Interiors" },
      {
        name: "description",
        content:
          "Bespoke kitchens, signature wardrobes, architectural joinery, pantries, vanities and libraries — each hand-built to order.",
      },
      { property: "og:title", content: "Services — Crafted Interiors" },
      {
        property: "og:description",
        content:
          "Bespoke kitchens, signature wardrobes, architectural joinery, pantries, vanities and libraries — each hand-built to order.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    img: kitchen1,
    title: "Bespoke Kitchens",
    copy: "Full-scale kitchen design from concept through installation. Integrated appliances, dovetailed drawers, custom larder units and finishes hand-selected for your palette.",
    details: ["Kitchen islands & butlers pantries", "Integrated appliance housing", "Solid timber & hand-painted finishes"],
  },
  {
    img: wardrobe1,
    title: "Signature Wardrobes",
    copy: "Walk-in dressing rooms and reach-in wardrobes engineered around your wardrobe, with soft-close mechanisms, integrated lighting and internal joinery.",
    details: ["Walk-in dressing rooms", "Integrated LED lighting", "Custom drawer & shoe systems"],
  },
  {
    img: lounge1,
    title: "Architectural Joinery",
    copy: "Room-defining built-ins — panelling, media walls, staircases and full library rooms — designed in dialogue with your architect or interior designer.",
    details: ["Wall panelling & wainscoting", "Media & entertainment units", "Bespoke doors & staircases"],
  },
  {
    img: joinery1,
    title: "Walk-in Pantries",
    copy: "Chef-grade organisation with adjustable shelving, integrated small appliances, and dedicated stone or timber worktops for prep.",
    details: ["Adjustable oak shelving", "Integrated appliance stations", "Custom crate & jar systems"],
  },
  {
    img: study2,
    title: "Bathroom Vanities",
    copy: "Moisture-resilient hardwood construction with stone or ceramic tops, integrated lighting mirrors and custom brass hardware.",
    details: ["Marine-grade timber", "Stone & ceramic tops", "Concealed plumbing housings"],
  },
  {
    img: kitchen3,
    title: "Libraries & Studies",
    copy: "Floor-to-ceiling shelving with sliding ladders, integrated desks and reading nooks — spaces built for a lifetime of collecting.",
    details: ["Sliding library ladders", "Integrated desks & seating", "Solid mahogany & oak"],
  },
] as const;

function ServicesPage() {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-16 bg-canvas">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-timber font-semibold">
            What we make
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 max-w-[18ch] leading-[1.05]">
            Cabinetry, considered.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-ink leading-relaxed">
            Whether we’re crafting a single fitted wardrobe 
            or managing a full architectural fit-out, we do things properly. 
            Every piece is carefully drawn, prototyped,
            and built by hand right here in our workshop before we bring it to your space
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-canvas">
        <div className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-32">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden ring-1 ring-ink/5 bg-stone">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-timber font-semibold">
                  0{i + 1}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">
                  {s.title}
                </h2>
                <p className="mt-5 text-muted-ink leading-relaxed max-w-[52ch]">
                  {s.copy}
                </p>
                <ul className="mt-7 space-y-2.5 text-sm">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-center gap-3">
                      <span className="size-1.5 rounded-full bg-timber" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-ink text-canvas">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl leading-tight">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-canvas/70">
            Book a consultation at our workshop or your home.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex px-6 py-3 bg-canvas text-ink rounded-full text-sm font-medium hover:bg-timber hover:text-canvas transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
