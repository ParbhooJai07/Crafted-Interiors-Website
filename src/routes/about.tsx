import { createFileRoute, Link } from "@tanstack/react-router";
import workshop from "@/assets/workshop.jpg";
import kitchen1 from "@/assets/kitchen-grey-plank.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Crafted Interiors" },
      {
        name: "description",
        content:
          "Crafted Interiors is a bespoke carpentry studio. We design and hand-build kitchens, wardrobes and joinery in our local workshop.",
      },
      { property: "og:title", content: "About — Crafted Interiors" },
      {
        property: "og:description",
        content:
          "A small bespoke carpentry studio designing and hand-building heirloom-quality cabinetry.",
      },
      { property: "og:image", content: workshop },
    ],
  }),
  component: AboutPage,
});

const process = [
  { n: "01", title: "Conversation", copy: "We meet with you to understand what it is you want and what the space needs to do." },
  { n: "02", title: "Design", copy: "Detailed drawings, curated material samples, and a render of every piece." },
  { n: "03", title: "Assembly", copy: "We assemble the piece at our workshop, taking all requirements into account to ensure that installation can run as smooth as possible." },
  { n: "04", title: "Install", copy: "Installation is handled by the very team who built your piece. We are there from start to finish, ensuring every detail settles perfectly into your space." },
] as const;

function AboutPage() {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-timber font-semibold">
              About the studio
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-4 leading-[1.05] max-w-[16ch]">
              A workshop, not a factory.
            </h1>
            <div className="mt-8 space-y-5 text-muted-ink leading-relaxed max-w-[56ch]">
              <p>
               Crafted Interiors was born from a single belief: exceptional cabinetry should perform as beautifully as it appears. 
               You notice it in the details. It's the smooth, heavy glide of a perfectly weighted drawer or the total silence when a door closes against its frame.
              </p>
              <p>
                We are a dedicated team of designers and cabinetmakers who pour our expertise into every detail. 
                This isn’t mass production, it’s personal. 
                Each project remains in the same skilled hands from the consultation to the final placement in your space. 
                No handoffs, no shortcuts. Just a relentless commitment to quality, from start to finish.
              </p>
            </div>
          </div>
          <div className="aspect-[4/5] rounded-lg overflow-hidden ring-1 ring-ink/5 bg-stone">
            <img src={workshop} alt="The workshop" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl max-w-[20ch]">
            How a commission comes together.
          </h2>
          <div className="mt-14 grid md:grid-cols-4 gap-10 md:gap-12">
            {process.map((p) => (
              <div key={p.n}>
                <span className="text-[11px] uppercase tracking-[0.3em] text-timber font-semibold">
                  {p.n}
                </span>
                <h3 className="font-serif text-2xl mt-3">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-ink leading-relaxed">
                  {p.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] rounded-lg overflow-hidden ring-1 ring-ink/5 bg-stone">
            <img src={kitchen1} alt="Joinery detail" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-[22ch]">
              Materials we choose, and why.
            </h2>
            <div className="mt-8 space-y-5 text-muted-ink leading-relaxed">
              <p>
               Material is everything to us. We make sure that the board is the best quality available.
              </p>
              <p>
                When it comes to hardware such as hinges, runners, and fittings, we don’t cut corners. 
                We use hardware and equipment from the makers we’ve known and built trust with. 
                We never choose a component just to save a bit of money. 
                If it goes into your cabinets, it's because it's built to last.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
