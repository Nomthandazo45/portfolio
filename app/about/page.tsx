import Navbar from "@/components/Navbar";

const stats = [
  { label: "Focus", value: "Clean UI + reliable backend" },
  { label: "Strengths", value: "Thoughtful UX, tidy systems" },
  { label: "Now", value: "Next.js + cloud foundations" },
];

const skills = [
  "Java", "Spring Boot", "JavaScript", "TypeScript",
  "Next.js", "PostgreSQL", "Angular", "Git",
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-gray-50 text-slate-900 dark:bg-[#0a0a0f] dark:text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-100/50 blur-3xl dark:bg-violet-950/30" />
      </div>

      <div className="relative">
        <Navbar />

        <main className="mx-auto w-full max-w-4xl px-6 pb-24 pt-20 sm:pt-28">

          {/* Page header */}
          <div className="mb-12 space-y-4">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
              About
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Building software that feels{" "}
              <span className="bg-gradient-to-r from-violet-500 to-indigo-400 bg-clip-text text-transparent">
                polished &amp; purposeful.
              </span>
            </h1>
          </div>

          {/* Bio card */}
          <div className="mb-8 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
              I am a software developer passionate about building real-world
              applications. I have experience in Java, Spring Boot, JavaScript,
              and databases. I am currently learning Next.js and cloud
              technologies — focused on shipping work that is both technically
              sound and a pleasure to use.
            </p>
          </div>

          {/* Stat cards */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            {stats.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  {label}
                </p>
                <p className="mt-3 text-base font-semibold text-slate-900 dark:text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}