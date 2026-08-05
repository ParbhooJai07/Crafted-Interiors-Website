import { createFileRoute, Link } from "@tanstack/react-router";
import kitchen1 from "@/assets/kitchen-1.jpeg";
import kitchen2 from "@/assets/kitchen-2.jpg";
import kitchen3 from "@/assets/kitchen-3.jpeg";
import kitchen4 from "@/assets/kitchen-4.jpeg";
import kitchen5 from "@/assets/kitchen-5.jpeg";
import kitchen6 from "@/assets/kitchen-6.jpeg";
import kitchen8 from "@/assets/kitchen-8.jpeg";
import kitchen9 from "@/assets/kitchen-9.jpeg";
import kitchen10 from "@/assets/kitchen-10.jpeg";
import kitchen11 from "@/assets/kitchen-11.jpeg";
import kitchen12 from "@/assets/kitchen-12.jpeg";
import kitchen13 from "@/assets/kitchen-13.jpeg";
import kitchen14 from "@/assets/kitchen-14.jpeg";
import study1 from "@/assets/study-1.jpg";
import study2 from "@/assets/study-2.jpeg";
import study3 from "@/assets/study-3.jpeg";
import wardrobe1 from "@/assets/wardrobe-1.jpeg";
import wardrobe2 from "@/assets/wardrobe-2.jpeg";
import wardrobe3edited from "@/assets/wardrobe-3-edited.png";
import wardrobe4 from "@/assets/wardrobe-4.jpeg";
import wardrobe5 from "@/assets/wardrobe-5.jpeg";
import wardrobe6 from "@/assets/wardrobe-6.jpeg";
import wardrobe7 from "@/assets/wardrobe-7.jpeg";
import wardrobe8 from "@/assets/wardrobe-8.jpeg";
import wardrobe9 from "@/assets/wardrobe-9.jpeg";
import custom1 from "@/assets/custom-1.jpeg";
import custom2 from "@/assets/custom-2.jpeg";
import custom3 from "@/assets/custom-3.jpeg";
import custom4 from "@/assets/custom-4.jpeg";
import custom7 from "@/assets/custom-7.jpeg";
import custom8 from "@/assets/custom-8.png";

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
          "A selection of recent bespoke kitchens, wardrobes and custom commissions.",
      },
      { property: "og:image", content: kitchen2 },
    ],
  }),
  component: PortfolioPage,
});

// Kitchens are grouped by project — each group is a single commission
// shown across multiple photos, with one caption describing the group.
const kitchenGroups = [
  {
    caption: "",
    images: [
      { img: kitchen1, title: "Kitchen Project A — View 1" },
      { img: kitchen12, title: "Kitchen Project A — View 2" },
      { img: kitchen13, title: "Kitchen Project A — View 3" },
    ],
  },
  {
    caption: "",
    images: [
      { img: kitchen4, title: "Kitchen Project B — View 1", span: "md:col-span-12", aspect: "aspect-[16/9]" },
      { img: kitchen2, title: "Kitchen Project B — View 2", span: "md:col-span-6", aspect: "aspect-square" },
      { img: kitchen8, title: "Kitchen Project B — View 3", span: "md:col-span-6", aspect: "aspect-square" },
    ],
  },
  {
    caption: "",
    images: [
      { img: kitchen3, title: "Kitchen Project C — View 1" },
      { img: kitchen14, title: "Kitchen Project C — View 2" },
      { img: kitchen11, title: "Kitchen Project C — View 3" },
    ],
  },
  {
    caption: "",
    images: [
      { img: kitchen9, title: "Kitchen Project D — View 1" },
      { img: kitchen10, title: "Kitchen Project D — View 2" },
    ],
  },
] as const;

// Returns the grid span + aspect ratio for an image based on its position
// within a group, so 3-photo groups get a hero + pair layout and 2-photo
// groups get an even split.
function getGroupImageLayout(index: number, total: number) {
  if (total === 2) {
    return { span: "md:col-span-6", aspect: "aspect-[4/5]" };
  }
  if (total === 3) {
    return index === 0
      ? { span: "md:col-span-12", aspect: "aspect-[21/9]" }
      : { span: "md:col-span-6", aspect: "aspect-[4/5]" };
  }
  // Fallback for any other group size
  return { span: "md:col-span-6", aspect: "aspect-[4/5]" };
}

// Standalone wardrobe photos — each gets its own caption.
const wardrobeItems = [
  { img: wardrobe8, title: "", span: "md:col-span-6", aspect: "aspect-[4/5]" },
  { img: wardrobe2, title: "", span: "md:col-span-6", aspect: "aspect-[4/5]" },
  { img: wardrobe3edited, title: "", span: "md:col-span-6", aspect: "aspect-[4/5]" },
  { img: wardrobe4, title: "", span: "md:col-span-6", aspect: "aspect-[4/5]" },
] as const;

// Wardrobe 5, 6, 7 are the same project — one shared caption.
const wardrobeGroup = {
  caption: "",
  images: [
    { img: wardrobe5, title: "Grey Fitted Wardrobe — View 1", span: "md:col-span-4", aspect: "aspect-square" },
    { img: wardrobe6, title: "Grey Fitted Wardrobe — View 2", span: "md:col-span-4", aspect: "aspect-square" },
    { img: wardrobe7, title: "Grey Fitted Wardrobe — View 3", span: "md:col-span-4", aspect: "aspect-square" },
  ],
} as const;

const categories = [
{
    name: "Studies",
    projects: [
      { img: study1, title: "", span: "md:col-span-6", aspect: "aspect-[4/5]" },
      { img: study3, title: "", span: "md:col-span-6", aspect: "aspect-[4/5]" },
    ],
  },
] as const;

const customWorks = {
  lounge: { img: custom3, title: "" },
  bakersPantry: {
    caption: "",
    images: [
      { img: custom4, title: "The Baker's Pantry — View 1" },
      { img: custom7, title: "The Baker's Pantry — View 2" },
      { img: custom8, title: "The Baker's Pantry — View 3" },
    ],
  },
} as const;

function PortfolioPage() {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-14 bg-canvas">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-timber font-semibold">
            Selected commissions
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 max-w-[18ch] leading-[1.05]">
            An archive of our work.
          </h1>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-canvas">
        <div className="max-w-7xl mx-auto px-6">
          {/* Kitchens — grouped by project */}
          <div>
            <div className="flex items-baseline justify-between gap-6 mb-8 md:mb-10">
              <h2 className="font-serif text-3xl md:text-4xl">Kitchens</h2>
            </div>

            <div className="space-y-12 md:space-y-14">
              {kitchenGroups.map((group, gi) => (
                <div key={gi}>
                  <div className="grid md:grid-cols-12 gap-5 md:gap-6">
                    {group.images.map((p, idx) => {
                      const layout = getGroupImageLayout(idx, group.images.length);
                      const span = "span" in p ? p.span : layout.span;
                      const aspect = "aspect" in p ? p.aspect : layout.aspect;
                      return (
                        <figure key={p.title} className={`${span} group`}>
                          <div className={`${aspect} rounded-lg overflow-hidden ring-1 ring-ink/5 bg-stone`}>
                            <img
                              src={p.img}
                              alt={p.title}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                            />
                          </div>
                        </figure>
                      );
                    })}
                  </div>
                  <p className="mt-4 text-sm text-ink/60 max-w-2xl">{group.caption}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Wardrobes — standalone cards + one grouped project */}
          <div className="mt-16 md:mt-20 pt-14 md:pt-16 border-t border-ink/5">
            <div className="flex items-baseline justify-between gap-6 mb-8 md:mb-10">
              <h2 className="font-serif text-3xl md:text-4xl">Wardrobes</h2>
            </div>
            <div className="grid md:grid-cols-12 gap-5 md:gap-6">
              {wardrobeItems.map((p) => (
                <figure key={p.title} className={`${p.span} group`}>
                  <div className={`${p.aspect} rounded-lg overflow-hidden ring-1 ring-ink/5 bg-stone`}>
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-ink/60">{p.title}</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-12 md:mt-14">
              <div className="grid md:grid-cols-12 gap-5 md:gap-6">
                {wardrobeGroup.images.map((p) => (
                  <figure key={p.title} className={`${p.span} group`}>
                    <div className={`${p.aspect} rounded-lg overflow-hidden ring-1 ring-ink/5 bg-stone`}>
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </figure>
                ))}
              </div>
              <p className="mt-4 text-sm text-ink/60 max-w-2xl">{wardrobeGroup.caption}</p>
            </div>
            <div className="mt-12 md:mt-14">
              <figure className="group">
                <div className="aspect-[21/9] rounded-lg overflow-hidden ring-1 ring-ink/5 bg-stone">
                  <img
                    src={wardrobe9}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </figure>
            </div>
          </div>

          {categories.map((c) => (
            <div key={c.name} className="mt-16 md:mt-20 pt-14 md:pt-16 border-t border-ink/5">
              <div className="flex items-baseline justify-between gap-6 mb-8 md:mb-10">
                <h2 className="font-serif text-3xl md:text-4xl">{c.name}</h2>
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
                    <figcaption className="mt-3 text-sm text-ink/60">{p.title}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}

          {/* Custom Works — lounge banner + Baker's Pantry group */}
          <div className="mt-16 md:mt-20 pt-14 md:pt-16 border-t border-ink/5">
            <div className="flex items-baseline justify-between gap-6 mb-8 md:mb-10">
              <h2 className="font-serif text-3xl md:text-4xl">Custom Works</h2>
            </div>

            <figure className="group">
              <div className="aspect-[21/9] rounded-lg overflow-hidden ring-1 ring-ink/5 bg-stone">
                <img
                  src={customWorks.lounge.img}
                  alt={customWorks.lounge.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 text-sm text-ink/60">{customWorks.lounge.title}</figcaption>
            </figure>

            <div className="mt-12 md:mt-14">
              <div className="grid md:grid-cols-12 gap-5 md:gap-6">
                {customWorks.bakersPantry.images.map((p) => (
                  <figure key={p.title} className="md:col-span-4 group">
                <div className="aspect-[2/3] rounded-lg overflow-hidden ring-1 ring-ink/5 bg-stone">                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </figure>
                ))}
              </div>
              <p className="mt-4 text-sm text-ink/60 max-w-2xl">{customWorks.bakersPantry.caption}</p>
            </div>
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