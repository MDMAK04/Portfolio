import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Geo-Proximity",
    category: "Geospatial AI",
    image: "/images/projects/geo-proximity.png",
    description:
      "A geospatial application for location and proximity search in the city of Fès using graph-based data and OpenStreetMap.",
    technologies: [
      "Python",
      "Neo4j",
      "OpenStreetMap",
      "A*",
      "Graph Algorithms",
    ],
    github: "https://github.com/MDMAK04/Geo-Proximity",
  },
  {
    title: "Face Recognition System",
    category: "Computer Vision",
    image: "/images/projects/face-recognition.png",
    description:
      "A smart access control system running a face recognition model on an ESP32-CAM with a web interface and ThingSpeak integration.",
    technologies: [
      "C++",
      "ESP32-CAM",
      "Computer Vision",
      "Embedded AI",
      "ThingSpeak",
    ],
    github:
      "https://github.com/MDMAK04/Face-Recognition-System-with-ESP32-CAM-and-Embedded-AI",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#070911] px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Things I’ve{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              built
            </span>
          </h2>

          <p className="mt-5 text-[16px] leading-7 text-gray-400">
            A selection of projects where I applied machine learning,
            generative AI, RAG and modern software engineering to solve
            practical problems.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0e18] transition duration-300 hover:-translate-y-2 hover:border-violet-500/30"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl transition duration-500 group-hover:bg-violet-600/20" />

              {/* PROJECT VISUAL WITH IMAGE */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-white/[0.06] bg-[#090c15]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e18] via-transparent to-transparent opacity-60" />
              </div>

              {/* CONTENT */}
              <div className="relative p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                  </Link>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}