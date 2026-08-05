import { Link } from "@/lib/router";
import drawingStudy1 from "@/assets/drawing-study-1.jpeg";
import renderStudy1 from "@/assets/render-study-1.jpeg";
import finalStudy1 from "@/assets/study-1.jpg";
import drawingKitchen1 from "@/assets/drawing-kitchen-1.jpeg";
import renderKitchen1 from "@/assets/render-kitchen-1.jpeg";
import drawingKitchen2 from "@/assets/drawing-kitchen-2.jpeg";
import renderKitchen2 from "@/assets/render-kitchen-2.jpeg";
import drawingKitchen3 from "@/assets/drawing-kitchen-3.jpeg";
import renderKitchen3 from "@/assets/render-kitchen-3.jpeg";
import drawingKitchen6 from "@/assets/drawing-kitchen-6.jpeg";
import renderKitchen6 from "@/assets/render-kitchen-6.jpeg";
import drawingWardrobe1 from "@/assets/drawing-wardrobe-1.jpeg";
import renderWardrobe1 from "@/assets/render-wardrobe-1.jpeg";
import drawingWardrobe2 from "@/assets/drawing-wardrobe-2.jpeg";
import renderWardrobe2 from "@/assets/render-wardrobe-2.jpeg";
import drawingCustom1 from "@/assets/drawing-custom-1.jpeg";
import renderCustom1 from "@/assets/render-custom-1.jpeg";
import drawingCustom2 from "@/assets/drawing-custom-2.jpeg";
import renderCustom2 from "@/assets/render-custom-2.jpeg";
import drawingCustom3 from "@/assets/drawing-custom-3.jpeg";
import renderCustom3 from "@/assets/render-custom-3.jpeg";
import drawingCustom4 from "@/assets/drawing-custom-4.jpeg";
import renderCustom4 from "@/assets/render-custom-4.jpeg";

/* TanStack Start route metadata retained only for reference during migration.
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
*/

const stages = [
  {
    n: "01",
    title: "The Drawing",
    img: drawingStudy1,
    w: 1280,
    h: 960,
    lead: "Measured by hand, drawn to scale.",
    copy: "Every commission begins with a rough plan on paper with which we produce a measured drawing using CAD software",
    points: ["On-site survey and laser measure", "Measured design plans", "Material and finish samples"],
  },
  {
    n: "02",
    title: "The Render",
    img: renderStudy1,
    w: 1280,
    h: 960,
    lead: "See the room before we build it.",
    copy: "The approved drawings are modelled in 3D and rendered with your real finishes, lighting and sightlines, all coming together to give you a glimpse of what's to come.",
    points: ["Photoreal 3D visualisation", "True-to-life finishes and lighting", "Built from approved technical drawings"],
  },
  {
    n: "03",
    title: "The Final Piece",
    img: finalStudy1,
    w: 1280,
    h: 960,
    lead: "Built, finished and installed.",
    copy: "Once you sign off the render, the same drawings drive the workshop. The team builds the piece according to the approved specifications and installs it. The finished room should be based off of the render you approved — that is the whole point of the process.",
    points: ["Built in our workshop", "Installation of the final piece", "Final inspection for quality"],
  },
] as const;

const gallery = [
  { img: drawingKitchen1, w: 875, h: 593 },
  { img: renderKitchen1, w: 1536, h: 1024 },
  { img: drawingKitchen2, w: 1167, h: 765 },
  { img: renderKitchen2, w: 1536, h: 1024},
  { img: drawingKitchen3, w: 1223, h: 888 },
  { img: renderKitchen3, w: 1536, h: 1024 },
  { img: drawingKitchen6, w: 858, h: 842 },
  { img: renderKitchen6, w: 1536, h: 1024 },
  { img: drawingStudy1, w: 942, h: 695 },
  { img: renderStudy1, w: 1419, h: 997 },
  { img: drawingWardrobe1, w: 713, h: 863 },
  { img: renderWardrobe1, w: 1536, h: 1024 },
  { img: drawingWardrobe2, w: 702, h: 725 },
  { img: renderWardrobe2, w: 1024, h: 1024 },
  { img: drawingCustom1, w: 802, h: 587 },
  { img: renderCustom1, w: 802, h: 587 },
  { img: drawingCustom2, w: 710, h: 402 },
  { img: renderCustom2, w: 710, h: 402 },
  { img: drawingCustom3, w: 802, h: 877 },
  { img: renderCustom3, w: 1108, h: 1420 },
  { img: drawingCustom4, w: 1283, h: 617 },
  { img: renderCustom4, w: 1600, h: 768 },
] as const;

export function DesignPage() {
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

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {gallery.map((g, i) => (
              <figure key={i} className="group">
                <div
                  style={{ aspectRatio: `${g.w} / ${g.h}` }}
                  className="rounded-lg overflow-hidden ring-1 ring-ink/5 bg-canvas"
                >
                  <img
                    src={g.img}
                    alt=""
                    loading="lazy"
                    width={g.w}
                    height={g.h}
                    className="w-full h-full object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
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
            render.
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
