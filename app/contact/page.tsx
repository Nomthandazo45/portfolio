import Navbar from "@/components/Navbar";

const socials = [
  {
    label: "LinkedIn",
    sub: "View Profile",
    href: "https://www.linkedin.com/in/annah-nomthandazo-khumalo-89910b234/",
  },
  {
    label: "GitHub",
    sub: "View Work",
    href: "https://github.com/Nomthandazo45",
  },
];

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-gray-50 text-slate-900 dark:bg-[#0a0a0f] dark:text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl dark:bg-emerald-950/30" />
      </div>

      <div className="relative">
        <Navbar />

        <main className="mx-auto w-full max-w-4xl px-6 pb-24 pt-20 sm:pt-28">

          {/* Page header */}
          <div className="mb-12 space-y-4">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
              Contact
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Let's build something{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-sky-400 bg-clip-text text-transparent">
                great together.
              </span>
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Reach out for collaboration, roles, or project inquiries.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {/* Email card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Email
              </p>
              <a
                href="mailto:nomteek5@gmail.com"
                className="mt-4 block text-lg font-semibold text-slate-900 transition hover:text-indigo-500 dark:text-white dark:hover:text-indigo-400"
              >
                nomteek5@gmail.com
              </a>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Prefer email for detailed project briefs and timelines.
              </p>
            </div>

            {/* Social card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Social
              </p>
              <div className="flex flex-col gap-2.5">
                {socials.map(({ label, sub, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:text-slate-300 dark:hover:border-white/20 dark:hover:text-white"
                  >
                    {label}
                    <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
                      {sub}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}