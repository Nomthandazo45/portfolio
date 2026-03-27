import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-50 text-slate-900 dark:bg-[#0a0a0f] dark:text-white">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-100/60 blur-3xl dark:bg-indigo-950/40" />
      </div>

      <div className="relative">
        <Navbar />

        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-24 pt-20 sm:pt-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

            {/* ── Left: text content ── */}
            <section className="space-y-8">
              {/* Eyebrow */}
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                Portfolio
              </span>

              {/* Heading */}
              <div className="space-y-2">
                <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
                  Annah
                </h1>

                <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-r from-indigo-500 via-violet-400 to-sky-400 bg-clip-text text-transparent">
                    Nomthandazo
                  </span>
                </h1>

                <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  <span className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
                    Khumalo
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="max-w-lg text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Software Developer focused on building polished, human-centered
                digital experiences with modern web technologies.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/Annah Nomthandazo Khumalo CV.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Download CV
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
                  </svg>
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-white/30"
                >
                  View Projects
                </a>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["Full-Stack", "Product Minded", "Clean UI"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* ── Right: profile card ── */}
            <section className="mx-auto w-full max-w-xs lg:mx-0">
              <div className="relative rounded-3xl border border-slate-200/80 bg-white p-7 shadow-xl shadow-slate-200/60 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                {/* Profile badge */}
                <span className="absolute -top-3 right-6 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 shadow-sm dark:border-white/10 dark:bg-[#0a0a0f] dark:text-slate-500">
                  Profile
                </span>

                <div className="flex flex-col items-center gap-5 text-center">
                  {/* Avatar */}
                  <div className="rounded-[22px] bg-gradient-to-br from-indigo-400/30 via-violet-400/20 to-sky-400/30 p-[3px]">
                    <Image
                      src="/profile.png"
                      width={200}
                      height={200}
                      alt="Portrait of Annah Khumalo"
                      priority
                      className="h-44 w-44 rounded-[19px] object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="space-y-1.5">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Software Developer
                    </h2>
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      Passionate about intuitive interfaces, performant code, and collaborative delivery.
                    </p>
                  </div>

                  {/* Status dot */}
                  <div className="flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-800/40 dark:bg-emerald-950/40 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Open to opportunities
                  </div>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}