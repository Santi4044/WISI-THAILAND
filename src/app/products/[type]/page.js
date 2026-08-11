import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "../../_components/site-header";
import SiteShell from "../../_components/site-shell";
import { cormorant } from "../../_components/brand-fonts";
import { productTypes } from "../_data/productTypes";

export async function generateStaticParams() {
  return productTypes.map((t) => ({ type: t.slug }));
}

export default async function ProductTypePage({ params }) {
  const { type } = await params;
  const productType = productTypes.find((t) => t.slug === type);
  if (!productType) notFound();

  return (
    <SiteShell>
      <SiteHeader />
      <main className="relative pt-20">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden border-b border-[#004874]/8"
          style={{ background: `linear-gradient(135deg, ${productType.color} 0%, #0D1B2A 100%)` }}
        >
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 sm:px-10 lg:grid-cols-2">
            {/* Left — text */}
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                <Link href="/products" className="inline-flex items-center gap-1.5 transition hover:text-white/80">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Products
                </Link>
                <span className="opacity-40">/</span>
                <span className="text-white/70">{productType.name}</span>
              </div>

              {/* Range label */}
              {productType.range && (
                <p className="animate-fade-up mt-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#C8A96E]" style={{ animationDelay: '0ms' }}>
                  {productType.range}
                </p>
              )}

              {/* Name */}
              <h1
                className={`${cormorant.className} animate-fade-up mt-2 text-5xl font-bold text-white sm:text-6xl`}
                style={{ animationDelay: '60ms' }}
              >
                {productType.name}
              </h1>

              {/* Tagline */}
              {productType.tagline && (
                <p className="animate-fade-up mt-1 text-base font-medium text-white/70" style={{ animationDelay: '100ms' }}>
                  {productType.tagline}
                </p>
              )}

              {/* Description */}
              <p className="animate-fade-up mt-4 max-w-xl text-sm leading-7 text-white/60" style={{ animationDelay: '140ms' }}>
                {productType.description}
              </p>

              {/* CTA */}
              <div className="animate-fade-up mt-7" style={{ animationDelay: '200ms' }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C8A96E] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#0D1B2A] shadow-[0_4px_16px_rgba(200,169,110,0.35)] transition hover:bg-[#b8965c]"
                >
                  Get in Touch
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right — image */}
            <div className="animate-fade-up flex items-center justify-center" style={{ animationDelay: '100ms' }}>
              <div className="relative h-64 w-full max-w-sm overflow-hidden rounded-2xl bg-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.35)] sm:h-72">
                <Image
                  src={productType.image}
                  alt={productType.name}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Intro ────────────────────────────────────────────────── */}
        {productType.intro && (
          <section className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10">
            <div
              className="animate-fade-up rounded-2xl border border-[#004874]/10 bg-white p-8 shadow-[0_2px_16px_rgba(0,72,116,0.06)]"
              style={{
                animationDelay: '80ms',
                borderLeft: `4px solid ${productType.color}`,
              }}
            >
              <p className="text-sm leading-8 text-[#4A6274]">{productType.intro}</p>
            </div>
          </section>
        )}

        {/* ── Key Features ─────────────────────────────────────────── */}
        {productType.features && productType.features.length > 0 && (
          <section className="mx-auto w-full max-w-7xl px-6 pb-10 sm:px-10">
            <div className="mb-6 flex items-center gap-4">
              <h2 className={`${cormorant.className} text-2xl font-bold text-[#0D1B2A]`}>Key Features</h2>
              <span className="h-px flex-1 bg-[#004874]/8" />
            </div>
            <div className="grid animate-fade-up gap-3 sm:grid-cols-2" style={{ animationDelay: '60ms' }}>
              {productType.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-[#004874]/8 bg-white px-5 py-3.5 shadow-[0_1px_8px_rgba(0,72,116,0.05)]"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#004874]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm leading-6 text-[#4A6274]">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Detail Sections ───────────────────────────────────────── */}
        {productType.sections && productType.sections.length > 0 && (
          <section className="bg-[#F0F5F9] py-10">
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
              <div className="mb-6 flex items-center gap-4">
                <h2 className={`${cormorant.className} text-2xl font-bold text-[#0D1B2A]`}>Overview</h2>
                <span className="h-px flex-1 bg-[#004874]/8" />
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {productType.sections.map((section, i) => (
                  <div
                    key={section.heading}
                    className="animate-fade-up rounded-2xl border border-[#004874]/10 bg-white p-6 shadow-[0_2px_12px_rgba(0,72,116,0.06)]"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <h3 className={`${cormorant.className} text-xl font-bold text-[#0D1B2A]`}>{section.heading}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#4A6274]">{section.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Products in this family ───────────────────────────────── */}
        <section className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10">
          <div className="mb-6 flex items-center gap-4">
            <h2 className={`${cormorant.className} text-2xl font-bold text-[#0D1B2A]`}>
              Products in this family
            </h2>
            <span className="h-px flex-1 bg-[#004874]/8" />
          </div>
          <div className="rounded-2xl border border-[#004874]/10 bg-white px-8 py-10 text-center shadow-[0_2px_16px_rgba(0,72,116,0.06)]">
            <p className="text-sm leading-7 text-[#4A6274]">
              Individual products in the <span className="font-semibold text-[#0D1B2A]">{productType.name}</span> family will be listed here soon.
            </p>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────────── */}
        <section className="border-t border-[#004874]/8 bg-[#F0F5F9]">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:px-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#004874]/60">Can&rsquo;t find what you need?</p>
              <h2 className={`${cormorant.className} mt-2 text-2xl font-bold text-[#0D1B2A]`}>We may still be able to help.</h2>
              <p className="mt-1 text-sm text-[#4A6274]">Get in touch and our team will look into availability and options for you.</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-xl bg-[#004874] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_4px_16px_rgba(0,72,116,0.3)] transition hover:bg-[#003558] hover:shadow-[0_4px_20px_rgba(0,72,116,0.4)]"
            >
              Contact Us
            </Link>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
