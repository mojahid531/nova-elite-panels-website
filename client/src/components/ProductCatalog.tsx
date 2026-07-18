/**
 * Design reminder: editorial material catalog—one active collection at a time, tall swatches, precise specs,
 * dark gallery surfaces, and quiet gold interaction cues.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Ruler, SwatchBook, X } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { productCategories, type ProductSample } from "@/data/products";

export default function ProductCatalog() {
  const [activeId, setActiveId] = useState(productCategories[0].id);
  const [preview, setPreview] = useState<ProductSample | null>(null);
  const active = productCategories.find((item) => item.id === activeId) ?? productCategories[0];

  return (
    <section id="products" className="scroll-mt-24 bg-[#151515] py-24 text-[#f7f1e6] md:py-32">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div>
            <p className="eyebrow text-[#c8a967]">The Collection</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl leading-[.95] md:text-7xl">
              Surfaces for every kind of space.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/60 lg:ml-auto">
            Browse actual NOVA products by collection. Every finish shown below is presented without pricing so you can focus on material, scale, application, and the right look for your project.
          </p>
        </div>

        <div className="mt-12 flex items-center gap-5 border-t border-white/10 pt-5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/38">
          <span><strong className="mr-2 font-display text-2xl font-medium text-[#c8a967]">06</strong> Product collections</span>
          <span className="h-px flex-1 bg-white/10" />
          <span>Actual finishes · Direct inquiry</span>
        </div>

        <div className="no-scrollbar mt-5 flex gap-2 overflow-x-auto border-y border-white/10 py-4">
          {productCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveId(category.id)}
              className={`shrink-0 border px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] transition-all duration-200 active:scale-[.97] ${
                activeId === category.id
                  ? "border-[#c8a967] bg-[#c8a967] text-[#151515]"
                  : "border-white/15 text-white/65 hover:border-white/40 hover:text-white"
              }`}
            >
              {category.navLabel}
            </button>
          ))}
        </div>

        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="mt-10"
        >
          <div className="grid overflow-hidden border border-white/10 bg-[#1d1d1d] lg:grid-cols-[.86fr_1.14fr]">
            <div className="relative min-h-[430px] overflow-hidden bg-[#ece7dc] md:min-h-[590px]">
              <img src={active.heroImage} alt={`${active.name} product`} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-6 pt-24 md:p-10">
                <p className="text-[0.66rem] font-bold uppercase tracking-[0.22em] text-[#e0c485]">Actual product view</p>
              </div>
            </div>

            <div className="p-7 md:p-12 lg:p-14">
              <p className="eyebrow text-[#c8a967]">{active.kicker}</p>
              <h3 className="mt-4 font-display text-4xl leading-none md:text-6xl">{active.name}</h3>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/62">{active.description}</p>

              <div className="mt-9 grid gap-4 border-y border-white/10 py-7 sm:grid-cols-2">
                <div className="flex gap-3">
                  <Ruler className="mt-0.5 h-5 w-5 shrink-0 text-[#c8a967]" />
                  <div>
                    <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-white/40">Format</p>
                    <p className="mt-1 text-sm text-white/85">{active.size}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <SwatchBook className="mt-0.5 h-5 w-5 shrink-0 text-[#c8a967]" />
                  <div>
                    <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-white/40">Finishes</p>
                    <p className="mt-1 text-sm text-white/85">{active.colorStatement}</p>
                  </div>
                </div>
              </div>

              <p className="mt-7 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-white/40">Key features</p>
              <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {active.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5 text-sm text-white/78">
                    <span className="grid h-5 w-5 place-items-center border border-[#c8a967]/50 text-[#c8a967]">
                      <Check className="h-3 w-3" />
                    </span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-8 border-l border-[#c8a967] pl-5">
                <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-[#c8a967]">Recommended applications</p>
                <p className="mt-2 text-sm leading-6 text-white/65">{active.applications}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {active.samples.map((sample) => (
              <button
                type="button"
                key={`${active.id}-${sample.name}`}
                onClick={() => setPreview(sample)}
                className="group min-w-0 text-left"
                aria-label={`View ${sample.name}`}
              >
                <span
                  className={`relative block aspect-[3/4] overflow-hidden ${
                    sample.presentation === "narrow" ? "bg-[#ece7dc]" : "bg-[#292929]"
                  }`}
                >
                  <img
                    src={sample.image}
                    alt={sample.name}
                    loading="lazy"
                    className={`h-full w-full transition-transform duration-300 group-hover:scale-[1.035] ${
                      sample.presentation === "narrow" ? "object-contain px-[18%] py-5" : "object-cover"
                    }`}
                  />
                  <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center border border-white/25 bg-black/35 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </span>
                <span className="mt-3 block text-sm font-semibold text-white/88">{sample.name}</span>
                {sample.note && <span className="mt-1 block text-xs text-[#c8a967]">{sample.note}</span>}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <Dialog open={Boolean(preview)} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="max-h-[92vh] max-w-4xl overflow-hidden border-white/10 bg-[#141414] p-0 text-white sm:rounded-none">
          <DialogTitle className="sr-only">{preview?.name ?? "Product preview"}</DialogTitle>
          <DialogClose className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center border border-white/30 bg-black/45 text-white backdrop-blur transition-colors hover:bg-black">
            <X className="h-5 w-5" />
          </DialogClose>
          {preview && (
            <div className="grid max-h-[92vh] md:grid-cols-[1fr_280px]">
              <div className="min-h-0 bg-[#e8e3d8]">
                <img src={preview.image} alt={preview.name} className="h-full max-h-[75vh] w-full object-contain md:max-h-[92vh]" />
              </div>
              <div className="self-end p-7 md:self-auto md:p-8 md:pt-20">
                <p className="eyebrow text-[#c8a967]">Product finish</p>
                <p className="mt-3 font-display text-4xl leading-none">{preview.name}</p>
                {preview.note && <p className="mt-4 text-sm leading-6 text-white/55">{preview.note}</p>}
                <a href="#contact" onClick={() => setPreview(null)} className="mt-8 inline-flex items-center gap-2 border-b border-[#c8a967] pb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#d9bd80]">
                  Ask about this finish <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
