"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  // --- Effet Typewriter sur le NOM UNIQUEMENT ---
  const fullName = "EL MAKHLOUFI MOHAMMED";
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let speed = isDeleting ? 50 : 90;

    if (!isDeleting && charIndex === fullName.length) {
      speed = 2200; // Pause à la fin quand le nom est complet
    } else if (isDeleting && charIndex === 0) {
      speed = 600; // Pause avant de réécrire
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < fullName.length) {
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === fullName.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting]);

  // --- Shell Logic ---
  const [history, setHistory] = useState<
    { command: string; output: React.ReactNode }[]
  >([
    {
      command: "whoami",
      output: (
        <span className="font-semibold text-emerald-400 ">
          EL MAKHLOUFI MOHAMMED
        </span>
      ),
    },
    {
      command: "fetch --profile",
      output: (
        <div className="space-y-1 text-gray-300">
          <p><span className="text-violet-400">Formation :</span> Master MLAIM (Machine Learning)</p>
          <p><span className="text-violet-400">Spécialité :</span> LLMs, RAG & Agentic AI</p>
          <p><span className="text-violet-400">Statut :</span> Disponible pour opportunités AI / ML</p>
        </div>
      ),
    },
  ]);

  const [inputVal, setInputVal] = useState("");

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: React.ReactNode = "";

    if (trimmed === "help") {
      response = (
        <span className="text-gray-400">
          Commandes : <span className="text-violet-400">bio</span>,{" "}
          <span className="text-violet-400">stack</span>,{" "}
          <span className="text-violet-400">projects</span>,{" "}
          <span className="text-violet-400">contact</span>,{" "}
          <span className="text-violet-400">clear</span>
        </span>
      );
    } else if (trimmed === "bio") {
      response = (
        <p className="leading-relaxed text-gray-300">
          Ingénieur IA & ML spécialisé dans la conception d'applications intelligentes, pipelines RAG et architectures multi-agents.
        </p>
      );
    } else if (trimmed === "stack") {
      response = (
        <p className="font-medium text-amber-300">
          Stack : Python • PyTorch • Qdrant • LangChain • Docker • FastAPI • Next.js
        </p>
      );
    } else if (trimmed === "projects") {
      response = (
        <div className="space-y-1 text-gray-300">
          <p className="text-emerald-400">➔ MedIntel-AI : Système QA Médical RAG</p>
          <p className="text-emerald-400">➔ Geo-Proximity-Fes : Extraction & Analyse réseau spatial</p>
        </div>
      );
    } else if (trimmed === "contact") {
      response = (
        <p className="text-violet-300">
          GitHub: github.com • LinkedIn: linkedin.com
        </p>
      );
    } else if (trimmed === "clear") {
      setHistory([]);
      return;
    } else if (trimmed !== "") {
      response = (
        <span className="text-rose-400">
          Commande inconnue : '{trimmed}'. Tapez 'help'.
        </span>
      );
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
    setInputVal("");
  };

  return (
    <section className="relative flex min-h-[calc(100vh-68px)] items-center justify-center overflow-hidden bg-[#070911] py-16 lg:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[160px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* GAUCHE : Content & Dynamic Name Animation */}
          <div className="z-10 flex flex-col justify-center lg:col-span-7 space-y-6">
            
            {/* Badge Status */}
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs sm:text-sm font-medium tracking-wide text-emerald-400">
                  AI & Machine Learning Engineer
                </span>
              </div>
            </div>

            {/* Title with Infinite Name Typing */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-gray-300">
                Hi, I’m
              </h2>
              <div className="min-h-[80px] sm:min-h-[100px] flex items-center">
              <h1 className="text-2xl sm:text-4xl lg:text-4xl font-black tracking-tight whitespace-nowrap">                  <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
                    {fullName.substring(0, charIndex)}
                  </span>
                  <span className="ml-1 inline-block h-8 sm:h-10 w-1 translate-y-1 bg-violet-400 animate-pulse" />
                </h1>
              </div>
            </div>

            {/* Subtitle & Description */}
            <div className="space-y-3 pt-1">
              <p className="text-lg sm:text-xl font-semibold tracking-wide text-violet-300">
                Builder of Intelligent Systems & AI Architectures
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-gray-400 max-w-xl">
               I design high-performance AI applications based on LLMs, RAG architectures, and autonomous agent systems.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-violet-600/30 transition duration-300 hover:shadow-violet-600/50 hover:scale-[1.02]"
              >
                View my projects ↗
              </Link>
            </div>

          </div>

          {/* DROITE : Shell Intégré */}
          <div className="relative flex flex-col justify-center lg:col-span-5">
            <div className="relative w-full overflow-hidden rounded-3xl bg-violet-950/10 p-6 sm:p-8 backdrop-blur-sm border border-violet-500/10 [mask-image:linear-gradient(to_bottom,white_75%,transparent_100%)]">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-violet-300/70">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-violet-500/60 animate-pulse" />
                  <span>interactive_node.sh</span>
                </div>
                <button
                  onClick={() => handleCommand("clear")}
                  className="text-gray-500 hover:text-violet-300 transition"
                >
                  [clear]
                </button>
              </div>

              <div className="my-4 flex flex-wrap gap-2 font-mono text-xs">
                <span className="text-gray-500">run:</span>
                {["bio", "stack", "projects"].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleCommand(cmd)}
                    className="rounded border border-violet-500/20 bg-violet-500/10 px-2.5 py-1 text-violet-300 hover:bg-violet-500/30 hover:text-white transition"
                  >
                    ./{cmd}
                  </button>
                ))}
              </div>

              <div className="space-y-4 font-mono text-xs sm:text-sm leading-relaxed min-h-[280px] max-h-[380px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-violet-500/20">
                {history.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-violet-400">
                      <span className="opacity-60">mohammed@ai-node:~$</span>
                      <span className="font-semibold text-white">{item.command}</span>
                    </div>
                    {item.output && <div className="pl-4 text-gray-300">{item.output}</div>}
                  </div>
                ))}

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleCommand(inputVal);
                  }}
                  className="flex items-center gap-2 pt-2"
                >
                  <span className="text-emerald-400 font-semibold">mohammed@ai-node:~$</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Tapez 'help'..."
                    className="flex-1 bg-transparent font-mono text-white focus:outline-none placeholder-gray-600"
                  />
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}