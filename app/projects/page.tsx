import Navbar from "@/components/Navbar";

const projects = [
  {
    category: "Insurance Platform",
    title: "FlexSure Insurance App",
    description:
      "Insurance system for managing device protection workflows, claims, and customer onboarding experiences.",
    tech: ["Angular", "Spring Boot", "PostgreSQL"],
    link: "https://github.com/Nomthandazo45",
    linkLabel: "View on GitHub",
  },
  {
    category: "Networking",
    title: "LAN Network Project",
    description:
      "Planned, configured, and troubleshot a local area network with emphasis on stable connectivity and documentation.",
    tech: ["Networking"],
    link: null,
    linkLabel: null,
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-gray-50 text-slate-900 dark:bg-[#0a0a0f] dark:text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-sky-100/50 blur-3xl dark:bg-sky-950/30" />
      </div>

      <div className="relative">
        <Navbar />

        <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-20 sm:pt-28">

          {/* Page header */}
          <div className="mb-12 space-y-4">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
              Projects
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Selected work with{" "}
              <span className="bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent">
                real-world impact.
              </span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
              A selection of projects that showcase full-stack development,
              systems thinking, and practical delivery.
            </p>
          </div>

          {/* Project cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map(({ category, title, description, tech, link, linkLabel }) => (
              <article
                key={title}
                className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
              >
                {/* Category */}
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  {category}
                </p>

                {/* Title */}
                <h2 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
                  {title}
                </h2>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {description}
                </p>

                {/* Tech stack */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-500 transition hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    {linkLabel}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </article>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}