import { createFileRoute, Link } from "@tanstack/react-router";
import kitchen1 from "@/assets/kitchen-1.jpeg";
import kitchen2 from "@/assets/kitchen-2.jpeg";
import kitchen3 from "@/assets/kitchen-3.jpeg";
import kitchen4 from "@/assets/kitchen-4.jpeg";
import study1 from "@/assets/study-1.jpeg";
import study2 from "@/assets/study-2.jpeg";
import hardware1 from "@/assets/hardware-1.jpeg";
import lounge1 from "@/assets/lounge-1.jpeg";
import wardrobe1 from "@/assets/wardrobe-1.jpeg";
import wardrobe2 from "@/assets/wardrobe-2.jpeg";
import joinery1 from "@/assets/joinery-1.jpeg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Crafted Interiors" },
      {
        name: "description",
        content:
          "Selected commissions — bespoke kitchens, wardrobes, libraries and cabinetry crafted by Crafted Interiors.",
      },
      { property: "og:title", content: "Portfolio — Crafted Interiors" },
      {
        property: "og:description",
        content:
          "A selection of recent bespoke kitchens, wardrobes and joinery commissions.",
      },
      { property: "og:image", content: kitchen2 },
    ],
  }),
  component: PortfolioPage,
});

const categories = [
  {
    name: "Kitchens",
    projects: [
      { img: kitchen2, title: "The Hyde Park Kitchen", location: "Johannesburg · 2024", span: "md:col-span-8", aspect: "aspect-[16/10]" },
      { img: hardware1, title: "Brass & Walnut Detail", location: "Detail · 2024", span: "md:col-span-4", aspect: "aspect-square" },
      { img: kitchen4, title: "The Noir Kitchen", location: "Fresnaye · 2024", span: "md:col-span-4", aspect: "aspect-[3/4]" },
      { img: kitchen3, title: "The Cotswold Kitchen", location: "England · 2023", span: "md:col-span-8", aspect: "aspect-[16/10]" },
      { img: kitchen1, title: "Joinery Detail, Workshop", location: "Workshop · 2022", span: "md:col-span-12", aspect: "aspect-[21/9]" },
    ],
  },
  {
    name: "Wardrobes",
    projects: [
      { img: wardrobe1, title: "Master Dressing Room", location: "Camps Bay · 2023", span: "md:col-span-6", aspect: "aspect-[4/5]" },
      { img: wardrobe2, title: "His & Hers Wardrobe Wall", location: "Clifton · 2024", span: "md:col-span-6", aspect: "aspect-[4/5]" },
    ],
  },
  {
    name: "Studies",
    projects: [
      { img: study1, title: "The Vineyard Estate", location: "Constantia · 2023", span: "md:col-span-7", aspect: "aspect-[16/10]" },
      { img: study2, title: "Oak & Travertine Vanity", location: "Higgovale · 2022", span: "md:col-span-5", aspect: "aspect-[4/5]" },
    ],
  },
  {
    name: "Custom Works",
    projects: [
      { img: joinery1, title: "The Baker's Pantry", location: "Bishopscourt · 2023", span: "md:col-span-5", aspect: "aspect-[4/5]" },
      { img: lounge1, title: "Panelled Living Room", location: "Bantry Bay · 2022", span: "md:col-span-7", aspect: "aspect-[16/10]" },
    ],
  },
] as const;

function PortfolioPage() {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-14 bg-canvas">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-timber font-semibold">
            Selected commissions
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 max-w-[18ch] leading-[1.05]">
            A quiet archive of our work.
          </h1>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-canvas">
        <div className="max-w-7xl mx-auto px-6">
          {categories.map((c, i) => (
            <div key={c.name} className={i === 0 ? "" : "mt-16 md:mt-20 pt-14 md:pt-16 border-t border-ink/5"}>
              <div className="flex items-baseline justify-between gap-6 mb-8 md:mb-10">
                <h2 className="font-serif text-3xl md:text-4xl">{c.name}</h2>
                <span className="text-[11px] uppercase tracking-[0.3em] text-timber font-semibold shrink-0">
                  {c.projects.length.toString().padStart(2, "0")} selected
                </span>
              </div>
              <div className="grid md:grid-cols-12 gap-5 md:gap-6">
                {c.projects.map((p) => (
                  <figure key={p.title} className={`${p.span} group`}>
                    <div className={`${p.aspect} rounded-lg overflow-hidden ring-1 ring-ink/5 bg-stone`}>
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <figcaption className="mt-4 flex justify-between items-baseline">
                      <span className="font-serif text-lg">{p.title}</span>
                      <span className="text-[10px] uppercase tracking-widest text-muted-ink">
                        {p.location}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-ink text-canvas">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl">Yours could be next.</h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex px-6 py-3 bg-canvas text-ink rounded-full text-sm font-medium hover:bg-timber hover:text-canvas transition-colors"
          >
            Commission a piece
          </Link>
        </div>
      </section>
    </>
  );
}
