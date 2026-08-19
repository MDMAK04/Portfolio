import React from "react";
import Link from "next/link";

// --- EDUCATION DATA ---
const educationData = [
  {
    institution: "FST Fès",
    degree: "Master MLAIM (Machine Learning & AI)",
    period: "2024 - Present",
    status: "Current",
    progress: 85,
    description:
      "Intensive specialized training in Machine Learning, Deep Learning, RAG architectures, and Computer Vision.",
    skills: ["Deep Learning", "Computer Vision", "RAG", "PyTorch", "Neo4j"],
    achievements: [
      "Advanced AI research projects",
      "Graph-based geospatial search models",
      "Embedded AI integration",
    ],
    website: "https://www.fst-fes.ac.ma/",
    side: "left", // Panneau d'info à gauche
    accent: {
      cardBorder: "border-cyan-500/20 hover:border-cyan-500/40",
      panelBg: "bg-cyan-950/30 border-r border-white/5",
      badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      progressBg: "bg-cyan-500",
      skillTag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    },
  },
  {
    institution: "EST Fès",
    degree: "DUT / Licence Informatique",
    period: "2022 - 2024",
    status: "Completed",
    progress: 100,
    description:
      "Comprehensive computer science training with specialization in software engineering, database systems, and algorithms.",
    skills: ["Python", "C/C++", "SQL", "Oracle 21c", "Git"],
    achievements: [
      "Database administration fundamentals",
      "Object-Oriented Programming mastery",
      "Embedded Systems prototypes",
    ],
    website: "http://www.est-usmba.ac.ma/",
    side: "right", // Panneau d'info à droite
    accent: {
      cardBorder: "border-purple-500/20 hover:border-purple-500/40",
      panelBg: "bg-purple-950/30 border-l border-white/5",
      badge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      progressBg: "bg-purple-500",
      skillTag: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    },
  },
];

// --- CERTIFICATIONS DATA ---
const certificationsData = [
  {
    role: "Oracle Database 21c Administration",
    institution: "Oracle",
    period: "2024",
    description: "Database administration, multitenant architecture management, and SQL tuning.",
    tags: ["Oracle 21c", "SQL", "Database Admin"],
    credentialUrl: "https://www.linkedin.com/in/mohammed-el-makhloufi/",
    side: "left",
    accentColor: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400",
    lineDotColor: "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]",
  },
  {
    role: "Neo4j Certified Associate",
    institution: "Neo4j",
    period: "2024",
    description: "Graph database modeling, Cypher query optimization, and graph algorithms.",
    tags: ["Neo4j", "Cypher", "Graph DB"],
    credentialUrl: "https://www.linkedin.com/in/mohammed-el-makhloufi/",
    side: "right",
    accentColor: "border-amber-500/30 bg-amber-500/5 text-amber-400",
    lineDotColor: "bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]",
  },
  {
    role: "Deep Learning Specialization",
    institution: "Coursera / DeepLearning.AI",
    period: "2024",
    description: "Deep neural networks, CNNs, Sequence Models, and hyperparameter tuning.",
    tags: ["Neural Networks", "PyTorch", "TensorFlow"],
    credentialUrl: "https://www.linkedin.com/in/mohammed-el-makhloufi/",
    side: "left",
    accentColor: "border-blue-500/30 bg-blue-500/5 text-blue-400",
    lineDotColor: "bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]",
  },
];

export default function AcademicAndCertifications() {
  return (
    <section className="relative min-h-screen bg-[#070911] px-4 py-24 text-white md:px-8">
      <div className="mx-auto max-w-6xl space-y-32">

        {/* SECTION 1: ACADEMIC FORMATION */}
        <div>
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-cyan-400 md:text-4xl">
              Academic Formation
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              A journey of excellence from fundamental science to artificial intelligence
            </p>
          </div>

          <div className="space-y-8">
            {educationData.map((item, index) => {
              const isLeft = item.side === "left";

              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl border bg-[#0b0e18] transition-all duration-300 ${item.accent.cardBorder}`}
                >
                  <div className="flex flex-col lg:flex-row">

                    {/* SIDE PANEL (INFO + PROGRESS) */}
                    <div
                      className={`w-full lg:w-72 p-6 flex flex-col justify-between ${item.accent.panelBg} ${
                        isLeft ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                          <span
                            className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${item.accent.badge}`}
                          >
                            ✓ {item.status}
                          </span>
                        </div>

                        <div className="mt-6">
                          <div className="flex justify-between text-xs font-mono text-gray-400">
                            <span>Progress</span>
                            <span className="font-bold text-white">{item.progress}%</span>
                          </div>
                          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/10">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${item.accent.progressBg}`}
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                        </div>

                        <p className="mt-6 font-mono text-xs text-gray-400">{item.period}</p>
                      </div>

                      <div className="mt-6">
                        <Link
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-white transition"
                        >
                          Official Website ↗
                        </Link>
                      </div>
                    </div>

                    {/* MAIN CONTENT (TITLE, DESCRIPTION, SKILLS, ACHIEVEMENTS) */}
                    <div
                      className={`flex-1 p-6 lg:p-8 ${
                        isLeft ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-white">{item.degree}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-300">
                        {item.description}
                      </p>

                      <div className="mt-6 grid gap-6 md:grid-cols-2">
                        {/* SKILLS */}
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                            Key Skills
                          </h4>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.skills.map((skill) => (
                              <span
                                key={skill}
                                className={`rounded-lg border px-3 py-1 font-mono text-xs ${item.accent.skillTag}`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* ACHIEVEMENTS */}
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                            Achievements
                          </h4>
                          <ul className="mt-3 space-y-1.5 text-xs text-gray-300">
                            {item.achievements.map((ach, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="text-cyan-400">•</span> {ach}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: CERTIFICATIONS TIMELINE */}
        <div>
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Verified Credentials
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              Professional Certifications
            </h2>
          </div>

          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-amber-500 to-blue-500 hidden md:block" />

            <div className="space-y-12">
              {certificationsData.map((cert, index) => {
                const isLeft = cert.side === "left";

                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center md:flex-row md:justify-between"
                  >
                    {/* Carte certification */}
                    <div className={`w-full md:w-[45%] ${isLeft ? "md:text-right" : "md:order-2 md:text-left"}`}>
                      <div className={`rounded-2xl border p-6 ${cert.accentColor} bg-[#0b0e18]/90 backdrop-blur-sm transition duration-300 hover:-translate-y-1`}>
                        <div className={`flex items-center gap-2 text-xs font-mono mb-2 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                          <span className="text-gray-400">{cert.period}</span>
                          <span className="text-gray-500">•</span>
                          <span className="font-semibold text-white">{cert.institution}</span>
                        </div>

                        <h3 className="text-lg font-bold text-white">{cert.role}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-gray-300">{cert.description}</p>

                        <div className={`mt-4 flex flex-wrap gap-1.5 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                          {cert.tags.map((tag) => (
                            <span key={tag} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-mono text-gray-300">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className={`mt-4 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                          <Link
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline"
                          >
                            Verify Credential ↗
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Point central */}
                    <div className="absolute left-1/2 top-1/2 z-10 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#070911] md:block">
                      <div className={`h-full w-full rounded-full ${cert.lineDotColor}`} />
                    </div>

                    {/* Espace vide */}
                    <div className={`hidden w-[45%] md:block ${isLeft ? "md:order-2" : "md:order-1"}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}