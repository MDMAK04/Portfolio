import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#070911] px-6 py-32 sm:py-40"    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">

        {/* LEFT */}
        <div className="flex flex-col items-center lg:translate-x-10 lg:translate-y-10">
          <div className="relative h-[400px] w-[360px]">
            <div className="absolute inset-0 rounded-3xl bg-violet-600/20 blur-3xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-violet-500/20 bg-[#0b0e18]">
              <Image
                src="/images/profile.png"
                alt="Mohammed El Makhloufi"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* SOCIALS */}
          <div className="mt-6 flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/MDMAK04"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohammed-el-makhloufi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V9H3.56v11.45ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 24 22.22V1.78C24 .8 23.2 0 22.22 0Z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:m.mohammedelmakhloufi@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            AI Engineer building{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              intelligent systems
            </span>
          </h2>

          <div className="mt-7 space-y-5 text-[16px] leading-7 text-gray-400">
            <p>
              I’m an AI Engineer focused on building intelligent
              applications with Machine Learning, Generative AI and
              modern software engineering.
            </p>

            <p>
              My work focuses on LLM applications, Retrieval-Augmented
              Generation, Agentic AI and multimodal systems. I enjoy
              turning complex problems into practical AI solutions that
              can be deployed and used in real-world environments.
            </p>

            <p>
              I recently completed my Master’s in Advanced Machine
              Learning and Multimedia Intelligence, where I worked on
              AI systems combining LLMs, RAG and agentic architectures.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block text-sm font-mono"
            >
              <div className="absolute inset-0 rounded-lg bg-teal-400/20 border border-teal-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:opacity-100 group-active:translate-x-0.5 group-active:translate-y-0.5" />
              <div className="relative rounded-lg border border-teal-400/80 bg-[#070911]/90 px-6 py-3 font-medium text-teal-300 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-200 group-active:translate-x-0 group-active:translate-y-0">
                Resume
              </div>
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/10 px-6 py-3 text-sm font-medium text-gray-200 transition hover:border-violet-500/40"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}