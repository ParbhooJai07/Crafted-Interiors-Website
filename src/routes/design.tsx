import { createFileRoute, Link } from "@tanstack/react-router";
import designSketch from "@/assets/drawing-study-1.jpeg";
import designRender from "@/assets/render-study-1.jpeg";
import designFinal from "@/assets/study-1.jpeg";
import designRenderWardrobe from "@/assets/design-render-wardrobe.jpg";
import designDrawingLibrary from "@/assets/design-drawing-library.jpg";
import designRenderIsland from "@/assets/design-render-island.jpg";
import projectPantry from "@/assets/kitchen-1.jpeg";
import projectVanity from "@/assets/study-1.jpeg";
import projectLibrary from "@/assets/wardrobe-1.jpeg";

export const Route = createFileRoute("/design")({
  head: () => ({
    meta: [
      { title: "Design Process — Crafted Interiors" },
      {
        name: "description",
        content:
          "From CAD drawings to photoreal render to the finished installed piece — see how Crafted Interiors designs bespoke kitchens, wardrobes and custom works.",
      },
      { property: "og:title", content: "Design Process — Crafted Interiors" },
      {
        property: "og:description",
        content:
          "Drawing, render, finished piece: the three stages behind every Crafted Interiors commission, plus a portfolio of past designs and renders.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DesignPage,
});

const stages = [
  {
    n: "01",
    title: "The Drawing",
    img: designSketch,
    w: 1280,
    h: 960,
    lead: "Measured by hand, drawn to scale.",
    copy: "Every commission begins with a rough plan on paper with which we produce a measured drawing using CAD software",
    points: ["On-site survey and laser measure", "Measured design plans", "Material and finish samples"],
  },
  {
    n: "02",
    title: "The Render",
    img: designRender,
    w: 1280,
    h: 960,
    lead: "See the room before we build it.",
    copy: "The approved drawings are modelled in 3D and rendered with your real finishes, lighting and sightlines, all coming together to give you a glimpse of what's to come.",
    points: ["Photoreal 3D visualisation", "True-to-life finishes and lighting", "Built from approved technical drawings"],
  },
  {
    n: "03",
    title: "The Final Piece",
    img: designFinal,
    w: 1280,
    h: 960,
    lead: "Built, finished and installed.",
    copy: "Once you sign off the render, the same drawings drive the workshop. The team builds the piece according to the approved specifications and installs it. The finished room should be based off of the render you approved — that is the whole point of the process.",
    points: ["Built in our workshop", "Installation of the final piece", "Final inspection for quality"],
  },
] as const;

const gallery = [
  { img: designDrawingLibrary, title: "Cotswold Library", tag: "Drawing", span: "md:col-span-4", aspect: "aspect-[4/5]", w: 1024, h: 1280 },
  { img: designRenderIsland, title: "Skylight Island Kitchen", tag: "Render", span: "md:col-span-8", aspect: "aspect-[16/10]", w: 1280, h: 960 },
  { img: designRenderWardrobe, title: "Master Dressing Room", tag: "Render", span: "md:col-span-5", aspect: "aspect-[4/5]", w: 1024, h: 1280 },
  { img: projectLibrary, title: "Library, as built", tag: "Final", span: "md:col-span-7", aspect: "aspect-[16/10]", w: 1280, h: 960 },
  { img: designSketch, title: "Elevation A, Hyde Park", tag: "Drawing", span: "md:col-span-7", aspect: "aspect-[16/10]", w: 1280, h: 960 },
  { img: projectPantry, title: "The Baker's Pantry", tag: "Final", span: "md:col-span-5", aspect: "aspect-[4/5]", w: 1280, h: 960 },
  { img: designRender, title: "Walnut Kitchen Study", tag: "Render", span: "md:col-span-6", aspect: "aspect-[4/3]", w: 1280, h: 960 },
  { img: projectVanity, title: "Oak & Travertine Vanity", tag: "Final", span: "md:col-span-6", aspect: "aspect-[4/3]", w: 1280, h: 960 },
] as const;

function DesignPage() {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-14 bg-canvas">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-timber font-semibold">
            Our design process
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 max-w-[18ch] leading-[1.05]">
            Drawing, render, reality.
          </h1>
          <p className="mt-6 text-muted-ink leading-relaxed max-w-[62ch]">
            No surprises, no guesswork. Every piece we build travels the same
            three stages — a measured CAD drawing, a photoreal render you sign
            off on, and the finished cabinetry installed in your place.
          </p>
        </div>
      </section>

      <section className="pb-8 bg-canvas">
        <div className="max-w-7xl mx-auto px-6">
          {stages.map((s, i) => (
            <div
              key={s.n}
              className="grid md:grid-cols-2 gap-10 md:gap-16 items-center py-14 border-t border-ink/5"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-ink/5 bg-stone">
                  <img
                    src={s.img}
                    alt={`${s.title} — ${s.lead}`}
                    loading="lazy"
                    width={s.w}
                    height={s.h}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-timber font-semibold">
                  Stage {s.n}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">
                  {s.title}
                </h2>
                <p className="mt-4 font-serif text-xl text-timber italic">{s.lead}</p>
                <p className="mt-5 text-muted-ink leading-relaxed max-w-[54ch]">
                  {s.copy}
                </p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm">
                      <span className="mt-2 size-1.5 rounded-full bg-timber shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-stone border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-timber font-semibold">
            Design portfolio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-[22ch] leading-tight">
            Previous designs and renders.
          </h2>

          <div className="mt-12 grid md:grid-cols-12 gap-5 md:gap-6">
            {gallery.map((g) => (
              <figure key={g.title} className={`${g.span} group`}>
                <div className={`${g.aspect} rounded-lg overflow-hidden ring-1 ring-ink/5 bg-canvas`}>
                  <img
                    src={g.img}
                    alt={`${g.tag} — ${g.title}`}
                    loading="lazy"
                    width={g.w}
                    height={g.h}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4 flex justify-between items-baseline gap-4">
                  <span className="font-serif text-lg">{g.title}</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-ink">
                    {g.tag}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink text-canvas">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl">Let's start with a drawing.</h2>
          <p className="mt-4 text-canvas/70 text-sm max-w-[46ch] mx-auto leading-relaxed">
            Send us your space and we'll come back with measured plans and a
            render before you commit to anything.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex px-6 py-3 bg-canvas text-ink rounded-full text-sm font-medium hover:bg-timber hover:text-canvas transition-colors"
          >
            Book a design consultation
          </Link>
        </div>
      </section>
    </>
  );
}
