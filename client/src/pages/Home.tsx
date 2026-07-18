/**
 * Design reminder: Architectural Material Gallery—flyer-led black, ivory, and brushed-gold identity,
 * asymmetric editorial compositions, accurate products, and clear direct-contact pathways.
 */

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Droplets,
  Facebook,
  Hammer,
  Instagram,
  Layers3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Volume2,
  Wrench,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import ProductCatalog from "@/components/ProductCatalog";
import ProjectRequestForm from "@/components/ProjectRequestForm";
import { applicationImages } from "@/data/products";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Premium quality",
    text: "Material-forward finishes selected for lasting visual impact.",
  },
  {
    icon: Droplets,
    title: "Waterproof PVC",
    text: "Moisture-ready surfaces across our PVC panel collections.",
  },
  {
    icon: Hammer,
    title: "Easy installation",
    text: "Practical panel formats for efficient residential and commercial projects.",
  },
  {
    icon: Sparkles,
    title: "Indoor & outdoor",
    text: "Options for interiors, exterior features, entries, and façades.",
  },
  {
    icon: Volume2,
    title: "Sound acoustic",
    text: "Felt-backed wood slat panels help soften room acoustics.",
  },
  {
    icon: Wrench,
    title: "Professional installation",
    text: "High-quality installation is available, with free project quotes.",
  },
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-[#f6f2e9] text-[#171717]">
      <SiteHeader />

      <main>
        <section className="relative isolate min-h-[780px] overflow-hidden bg-[#101010] text-white md:min-h-[880px]">
          <img
            src="./assets/nova-hero-material-gallery.png"
            alt="Premium NOVA wall panel materials in an architectural showroom"
            className="absolute inset-0 h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,.94)_0%,rgba(7,7,7,.72)_37%,rgba(7,7,7,.12)_72%,rgba(7,7,7,.3)_100%)]" />
          <div className="hero-grid absolute inset-0 opacity-20" />

          <div className="container relative z-10 flex min-h-[780px] items-end pb-20 pt-36 md:min-h-[880px] md:pb-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-4xl"
            >
              <p className="eyebrow text-[#dfc381]">Architectural wall & surface collections</p>
              <h1 className="mt-6 max-w-4xl font-display text-[4.2rem] leading-[.84] tracking-[-.045em] sm:text-[5.7rem] md:text-[7.6rem] lg:text-[9rem]">
                Premium panels.
                <br />
                <span className="italic text-[#d8bd82]">Timeless spaces.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-white/70 md:text-lg">
                UV Marble, PVC Wood, Acoustic Wood, PU Stone, and White Natural Stone for contractors,
                homeowners, designers, businesses, and hospitality projects.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-3 bg-[#c6a561] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.18em] text-black transition-all hover:bg-[#dfc789] active:scale-[.97]"
                >
                  Explore products <ArrowDownRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 border border-white/35 bg-black/20 px-6 py-4 text-xs font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur transition-all hover:border-[#d9bd80] hover:text-[#e8d19d] active:scale-[.97]"
                >
                  Contact our team <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 right-0 z-10 hidden border-l border-t border-white/15 bg-black/45 px-8 py-6 backdrop-blur-lg lg:block">
            <p className="text-[0.63rem] font-bold uppercase tracking-[0.2em] text-[#cfb373]">
              Visit our Lorton showroom
            </p>
            <p className="mt-2 text-sm text-white/75">7300 Lockport Place, Suite #3</p>
          </div>
        </section>

        <section className="border-b border-black/10 bg-[#f6f2e9] py-6">
          <div className="container grid gap-4 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-black/60 sm:grid-cols-3 md:grid-cols-6">
            {["UV Marble", "PVC Wood", "Acoustic Wood", "PU Stone", "White PU Stone", "White Natural Stone"].map(
              (item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-black/10 py-2 sm:border-r sm:last:border-0"
                >
                  <span className="font-display text-xl text-[#a27e3d]">0{index + 1}</span>
                  <span>{item}</span>
                </div>
              ),
            )}
          </div>
        </section>

        <ProductCatalog />

        <section id="applications" className="scroll-mt-20 bg-[#f6f2e9] py-24 md:py-32">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#9a783d]">Material in context</p>
                <h2 className="mt-5 font-display text-5xl leading-[.95] md:text-7xl">
                  See the finish.
                  <br />
                  <span className="italic text-[#987541]">Imagine the space.</span>
                </h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-black/60 lg:ml-auto">
                Staged application imagery helps communicate scale, texture, and atmosphere. Product swatches in
                the catalog remain the reference for available finishes.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
              {applicationImages.map((item, index) => (
                <article
                  key={item.title}
                  className={`group relative min-h-[420px] overflow-hidden bg-black ${
                    index === 0
                      ? "lg:row-span-2 lg:min-h-[760px]"
                      : index === 3
                        ? "lg:col-span-2 lg:min-h-[540px]"
                        : "lg:min-h-[370px]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#d7bb7b]">
                      Application {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-3xl md:text-4xl">{item.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/70">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="scroll-mt-20 border-y border-black/10 bg-[#ece5d8] py-24 md:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <p className="eyebrow text-[#96733a]">Why NOVA</p>
              <h2 className="mt-5 font-display text-5xl leading-[.95] md:text-7xl">
                A better wall starts with the right surface.
              </h2>
            </div>
            <div className="mt-14 grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {benefits.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="min-h-[250px] border-b border-r border-black/15 p-6 md:p-7">
                  <div className="flex items-start justify-between">
                    <Icon className="h-7 w-7 text-[#9d793e]" strokeWidth={1.5} />
                    <span className="font-display text-xl text-black/25">0{index + 1}</span>
                  </div>
                  <h3 className="mt-14 font-display text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/55">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-black/10 bg-[#ded5c7] text-[#141414]">
          <div className="container grid min-h-[340px] items-center gap-10 py-16 lg:grid-cols-[.42fr_1.58fr] lg:py-20">
            <div className="flex items-center gap-5 lg:block">
              <Layers3 className="h-11 w-11 text-[#9b7639]" strokeWidth={1.35} />
              <p className="eyebrow text-[#85632e] lg:mt-8">The collection is growing</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="max-w-3xl font-display text-5xl leading-[.9] md:text-7xl">
                  New products <span className="italic">coming soon.</span>
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-black/70">
                  Contact us or visit the NOVA showroom to learn more about new finishes, formats, and material
                  options for contractor, commercial, and individual projects.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 bg-[#151515] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.17em] text-white transition-colors hover:bg-black active:scale-[.97]"
                >
                  Contact NOVA <ArrowDownRight className="h-4 w-4" />
                </a>
                <a
                  href="https://maps.google.com/?q=7300+Lockport+PL+Suite+3+Lorton+VA+22079"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-[#98733a] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.17em] text-[#6e5127] transition-colors hover:bg-[#b99653]/12 active:scale-[.97]"
                >
                  Visit showroom <MapPin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-[#141414] text-white">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative min-h-[520px] overflow-hidden lg:min-h-[720px]">
              <img
                src="./assets/white-natural-stone-detail-refined.png"
                alt="NOVA White Natural Stone formats and natural surface variation"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-xl p-8 md:p-12">
                <p className="eyebrow text-[#ddc17f]">Local material source</p>
                <p className="mt-4 font-display text-4xl leading-none md:text-6xl">See the materials in person.</p>
                <p className="mt-5 text-sm leading-7 text-white/70">
                  Visit NOVA Elite Panels in Lorton, Virginia to compare finishes and discuss material supply,
                  professional installation, and a free project quote.
                </p>
              </div>
            </div>

            <div className="flex items-center px-7 py-20 md:px-14 lg:px-16">
              <div className="w-full max-w-xl">
                <p className="eyebrow text-[#c8a967]">Contact NOVA</p>
                <h2 className="mt-5 font-display text-5xl leading-[.95] md:text-7xl">Let’s find your finish.</h2>
                <p className="mt-6 max-w-lg text-base leading-8 text-white/60">
                  Tell us what you are covering and where it will be installed. Our team can help you narrow the
                  material, color, and panel type.
                </p>

                <div className="mt-10 grid gap-3">
                  <a href="tel:+14437799936" className="contact-row">
                    <Phone className="h-5 w-5" />
                    <span>+1 (443) 779-9936</span>
                    <ArrowUpRight className="ml-auto h-4 w-4" />
                  </a>
                  <a href="tel:+19803610915" className="contact-row">
                    <Phone className="h-5 w-5" />
                    <span>+1 (980) 361-0915</span>
                    <ArrowUpRight className="ml-auto h-4 w-4" />
                  </a>
                  <a href="mailto:info@novaelitepanels.com" className="contact-row">
                    <Mail className="h-5 w-5" />
                    <span>info@novaelitepanels.com</span>
                    <ArrowUpRight className="ml-auto h-4 w-4" />
                  </a>
                  <a
                    href="https://maps.google.com/?q=7300+Lockport+PL+Suite+3+Lorton+VA+22079"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-row"
                  >
                    <MapPin className="h-5 w-5" />
                    <span>7300 Lockport PL, Suite #3, Lorton, VA 22079</span>
                    <ArrowUpRight className="ml-auto h-4 w-4" />
                  </a>
                </div>

                <div className="mt-9 flex items-center gap-3 border-t border-white/15 pt-7">
                  <span className="mr-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/40">
                    Find NOVA on
                  </span>
                  <span className="social-link" aria-label="Facebook">
                    <Facebook className="h-4 w-4" />
                  </span>
                  <span className="social-link" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10">
            <ProjectRequestForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0e0e0e] py-8 text-white">
        <div className="container flex flex-col gap-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="./assets/nova-emblem.png" alt="" className="h-9 w-9 object-contain" />
            <span className="font-semibold uppercase tracking-[0.16em] text-white/75">NOVA Elite Panels LLC</span>
          </div>
          <p>© {new Date().getFullYear()} NOVA Elite Panels LLC. All rights reserved.</p>
          <a href="https://www.novaelitepanels.com" className="transition-colors hover:text-[#d3b775]">
            www.novaelitepanels.com
          </a>
        </div>
      </footer>
    </div>
  );
}
