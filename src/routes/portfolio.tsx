import { createFileRoute, Link } from "@tanstack/react-router";
import projectHydepark from "@/assets/project-hydepark.jpg";
import projectHardware from "@/assets/project-hardware.jpg";
import projectLibrary from "@/assets/project-library.jpg";
import projectPantry from "@/assets/project-pantry.jpg";
import projectVanity from "@/assets/project-vanity.jpg";
import serviceJoinery from "@/assets/service-joinery.jpg";
import serviceWardrobes from "@/assets/service-wardrobes.jpg";
import serviceKitchens from "@/assets/WhatsApp Image 2026-07-29 at 15.24.28.jpeg";
import hero2 from "@/assets/hero-2.jpeg";

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
      { property: "og:image", content: projectHydepark },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { img: projectHydepark, title: "The Hyde Park Kitchen", location: "Johannesburg · 2024", span: "md:col-span-8", aspect: "aspect-[16/10]" },
  { img: projectHardware, title: "Brass & Walnut Study", location: "Detail · 2024", span: "md:col-span-4", aspect: "aspect-square" },
  { img: projectLibrary, title: "The Cotswold Library", location: "England · 2023", span: "md:col-span-4", aspect: "aspect-[3/4]" },
  { img: hero2, title: "The Vineyard Estate", location: "Constantia · 2023", span: "md:col-span-8", aspect: "aspect-[16/10]" },
  { img: serviceWardrobes, title: "Master Dressing Room", location: "Camps Bay · 2023", span: "md:col-span-6", aspect: "aspect-[4/5]" },
  { img: projectPantry, title: "The Baker's Pantry", location: "Bishopscourt · 2023", span: "md:col-span-6", aspect: "aspect-[4/5]" },
  { img: serviceJoinery, title: "Panelled Living Room", location: "Bantry Bay · 2022", span: "md:col-span-7", aspect: "aspect-[16/10]" },
  { img: projectVanity, title: "Oak & Travertine Vanity", location: "Higgovale · 2022", span: "md:col-span-5", aspect: "aspect-[4/5]" },
  { img: serviceKitchens, title: "Joinery Detail Study", location: "Workshop · 2022", span: "md:col-span-12", aspect: "aspect-[21/9]" },
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
          <div className="grid md:grid-cols-12 gap-5 md:gap-6">
            {projects.map((p) => (
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
