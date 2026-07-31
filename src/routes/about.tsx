import { createFileRoute, Link } from "@tanstack/react-router";
import workshop from "@/assets/workshop.jpg";
import serviceKitchens from "@/assets/service-kitchens.jpg";

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
  { n: "01", title: "Conversation", copy: "We meet at your home or our workshop to understand how you live and what the space needs to do." },
  { n: "02", title: "Design", copy: "Detailed drawings, material samples, and a full-scale mock-up of the piece before a single joint is cut." },
  { n: "03", title: "Craft", copy: "Hand-cut joinery, machine precision where it counts, hand-finished surfaces where it matters." },
  { n: "04", title: "Install", copy: "White-glove installation by the team who built it, with a lifetime aftercare guarantee." },
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
               We started Crafted Interiors on a simple idea: 
               great cabinetry should feel just as good as it looks. 
               You notice it in the details. It's the smooth, heavy glide of a perfectly weighted drawer. 
               It’s the total silence when a solid door closes against its frame. 
               It’s the way the wood grain flows naturally from one cabinet right into the next.
              </p>
              <p>
                We’re just a small team of designers and cabinetmakers working out of a converted warehouse. 
                For us, the work is deeply personal. Every single project passes through the exact same set of hands,
                 from that very first sketch on paper right through to the final installation in your home.
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
            <img src={serviceKitchens} alt="Joinery detail" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-[22ch]">
              Materials we choose, and why.
            </h2>
            <div className="mt-8 space-y-5 text-muted-ink leading-relaxed">
              <p>
               Material is everything to us. We make sure that the wood is the best quality available and 
               every single board is hand-selected by our makers for its unique grain, rich colour, and natural stability.
              </p>
              <p>
                When it comes to hardware—things like hinges, runners, and brass pulls—we don’t cut corners. 
                We only use pieces from the exact same makers we’ve known and trusted for over a decade. 
                We never choose a component just to save a bit of money. 
                If it goes into your cabinets, it's because it's built to last.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-10 inline-flex px-6 py-3 bg-ink text-canvas rounded-full text-sm font-medium hover:bg-timber transition-colors"
            >
              Visit the workshop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
