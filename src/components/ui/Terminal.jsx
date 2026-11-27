import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { socials, skills, projects } from "../../data/content";

/* ── Command registry ── */
const COMMANDS = {
  help: () => [
    "Available commands:",
    "  about      — Quick bio",
    "  skills     — Tech stack overview",
    "  projects   — Things I've shipped",
    "  contact    — How to reach me",
    "  hire       — Open WhatsApp",
    "  whoami     — Who are you?",
    "  clear      — Clear terminal",
  ],
  about: () => [
    "┌─ Hammad Tanveer ─────────────────────────────┐",
    "│ B.Tech CSE (2022–2026) · AKTU · First Div.   │",
    "│ Freelance Android / KMP Developer (Present)  │",
    "│ Ex-Software Engineer Intern @ Nestor Vision  │",
    "│ Open Source: 3 PRs merged into AnkiDroid     │",
    "│ Research: First-author paper @ IJERT ICTEM   │",
    "└──────────────────────────────────────────────┘",
  ],
  skills: () =>
    skills.flatMap((g) => [
      `[${g.group}]`,
      `  ${g.items.join(" · ")}`,
      "",
    ]),
  projects: () =>
    projects.slice(0, 6).flatMap((p, i) => [
      `${i + 1}. ${p.name}  —  ${p.tag}`,
      `   ${p.stat.label}: ${p.stat.value}`,
      "",
    ]),
  contact: () => [
    `Email     ${socials.email}`,
    `WhatsApp  ${socials.phoneDisplay}`,
    `GitHub    ${socials.github}`,
    `LinkedIn  ${socials.linkedin}`,
  ],
  hire: () => {
    setTimeout(() => window.open(socials.whatsapp, "_blank"), 600);
    return ["Opening WhatsApp… 🚀"];
  },
  whoami: () => [
    "You're someone with impeccable taste in developers. 😎",
    "Clearly, you know talent when you see it.",
  ],
};

const CHIPS = ["help", "about", "skills", "projects", "contact", "hire"];

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: "out", lines: ["Welcome to hammad.dev — type 'help' or click a chip."] },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const run = (cmd) => {
    const c = cmd.trim().toLowerCase();
    if (!c) return;

    if (c === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const next = [...history, { type: "in", text: `❯ ${c}` }];
    const handler = COMMANDS[c];
    next.push({
      type: "out",
      lines: handler
        ? handler()
        : [`Command not found: '${c}'. Type 'help' for options.`],
    });
    setHistory(next);
    setInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="card overflow-hidden"
    >
      {/* ── Title bar ── */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line bg-panel2/60">
        <span className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
        <span className="w-3 h-3 rounded-full bg-[#EAB308]/80" />
        <span className="w-3 h-3 rounded-full bg-[#22C55E]/80" />
        <span className="ml-2 font-mono text-[11px] text-mist select-none">
          hammad@portfolio ~ %
        </span>
      </div>

      {/* ── Output ── */}
      <div
        className="h-52 overflow-y-auto px-4 py-3 font-mono text-[13px] leading-relaxed"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, i) =>
          entry.type === "in" ? (
            <p key={i} className="text-cyan whitespace-pre">{entry.text}</p>
          ) : (
            entry.lines.map((line, j) => (
              <p key={`${i}-${j}`} className="text-mist whitespace-pre">
                {line || "\u00A0"}
              </p>
            ))
          )
        )}
        <div ref={bottomRef} />
      </div>

      {/* ── Input ── */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-t border-line">
        <span className="text-cyan font-mono text-sm select-none">❯</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && run(input)}
          placeholder="Type a command…"
          aria-label="Terminal command input"
          className="flex-1 bg-transparent text-sm font-mono outline-none placeholder:text-mist/70"
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      {/* ── Quick chips ── */}
      <div className="flex flex-wrap gap-2 px-4 py-2.5 border-t border-line">
        {CHIPS.map((c) => (
          <button
            key={c}
            onClick={() => { run(c); inputRef.current?.focus(); }}
            className="text-xs font-mono px-3 min-h-[36px] rounded-md border border-line text-mist hover:text-accent hover:border-accent/50 transition-colors"
          >
            {c}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
