import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, RefreshCw, Hexagon, ShieldCheck, Code2, Eye, Database, MonitorSmartphone, Settings, HelpCircle, FileText, Terminal, Network, Search, FileEdit, Send, CheckCircle2, GitBranch, Mail, Music, MessageCircle, ChevronDown } from "lucide-react";

export const DOC_SECTIONS = [
  { id: "architecture", label: "Deep Architecture", category: "Core Engine", icon: Cpu },
  { id: "loop", label: "Agentic Loop", category: "Core Engine", icon: RefreshCw },
  { id: "honeycomb", label: "MCP Honeycomb", category: "Core Engine", icon: Hexagon },
  { id: "security", label: "Shield Protocol", category: "Core Engine", icon: ShieldCheck },
  { id: "ace", label: "Coding Engine (ACE)", category: "Capabilities", icon: Code2 },
  { id: "vision", label: "Browser & Vision", category: "Capabilities", icon: Eye },
  { id: "memory", label: "Memory (SOUL)", category: "Capabilities", icon: Database },
  { id: "remote", label: "Tray & Remote", category: "Control", icon: MonitorSmartphone },
  { id: "plugins", label: "Plugin Ecosystem", category: "Control", icon: Settings },
  { id: "faq", label: "FAQ & Support", category: "Resources", icon: HelpCircle },
  { id: "license", label: "License & Terms", category: "Resources", icon: FileText },
];

const ArchitectureContent = () => (
  <div className="flex flex-col gap-10 pb-12">
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">1.0</span> High-Level System Topology & Orchestration
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        VoxKage is a high-performance system-wide capability coordinator and local middleware. Unlike standalone chatbot loops or restrictive wrappers, VoxKage acts as an omnipresent launcher and orchestrator. It maps, registers, and scaffolds a unified network of built-in Model Context Protocol (MCP) servers directly into your active front-end developer shells—specifically the **Antigravity CLI (<code>agy</code>)** and the **OpenCode CLI**.
      </p>
      <p className="opacity-70 leading-relaxed text-[15px]">
        Instead of executing its own isolated LLM loop, VoxKage supercharges these CLI clients with native system capabilities. VoxKage is the capability provider; the host CLI is the reasoning shell.
      </p>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">1.1</span> Dual-Engine Context Routing
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        VoxKage dynamically adapts to and pre-scaffolds its capability suite depending on your active developer environment, linking your prompts directly to top-tier developer models:
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14.5px]">
        <li><strong>Antigravity CLI Mode:</strong> VoxKage automatically configures and injects its local sub-servers into <code className="bg-white/10 px-1.5 py-0.5 rounded text-[#295cf1]">~/.gemini/config/mcp_config.json</code>, enabling your active session to tap into **Gemini 3.5 Flash**, **Gemini 3.1 Pro**, **Claude 4.6 Sonnet**, and **Claude 4.6 Opus** with full system toolkits.</li>
        <li><strong>OpenCode CLI Mode:</strong> VoxKage scaffolds its server schemas directly into <code className="bg-white/10 px-1.5 py-0.5 rounded text-[#295cf1]">~/.config/opencode/opencode.json</code>, routing execution through OpenCode's free high-efficiency Zen portfolio, including **DeepSeek v4 Flash**.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">1.2</span> Shared Consciousness & Session Syncing
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        At the heart of VoxKage's multi-shell architecture is the central background coordinator: <code className="bg-white/10 px-1.5 py-0.5 rounded text-[#295cf1]">session_server.py</code>.
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14.5px]">
        <li><strong>Dynamic Interception:</strong> Whether you are working through an Antigravity shell or an OpenCode window, the session manager intercepts, structures, and logs active command history and workspace contexts to a centralized memory repository.</li>
        <li><strong>Unified Memory:</strong> Both shells draw from the same local vector RAG database and problem/solution registries. Context established in an `agy` session is instantly recalled and seamlessly utilized when you pivot to `opencode`, creating a unified "shared consciousness" across your OS.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">1.3</span> Named-Pipe IPC & Daemon Backbone
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        To coordinate background automation across isolated applications, VoxKage runs persistent lightweight daemons that communicate over an optimized Inter-Process Communication (IPC) backbone:
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14.5px]">
        <li><strong>System Tray Control Center:</strong> A native tray UI (<code className="bg-white/10 px-1.5 py-0.5 rounded">tray.py</code>) that allows manual setting swaps, switches active engines, toggles Safe Mode gating, and monitors connected connectors.</li>
        <li><strong>Telegram Watcher Daemon:</strong> A background polling script (<code className="bg-white/10 px-1.5 py-0.5 rounded">telegram_watcher.py</code>) that persistently listens for remote commands and secures remote file transfers.</li>
        <li><strong>Secure Injection:</strong> On Windows, background watchers communicate with your active shell window using secure **Named Pipes**, allowing remote messages to securely inject text directly into the active shell's stdin stream for live execution.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">1.4</span> Zero-Latency Vision & Code Skeletons
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        To maximize execution speed and stay strictly within LLM context boundaries, VoxKage routes resources surgically:
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14.5px]">
        <li><strong>Bypassing Base64:</strong> For multimodal screen perceptions and OCR, VoxKage bypasses massive Base64 conversions, passing absolute local file paths directly into the client's argument flags for native, instant rendering.</li>
        <li><strong>Structural Code Skeletons:</strong> When exploring directories, the capability layer parses source files (.py, .ts, .tsx, .js) through a local Abstract Syntax Tree (AST) parser to strip implementation code and return clean imports, classes, and function signatures. This maps massive codebases with a 95% token context saving.</li>
      </ul>
    </div>
  </div>
);

const LoopContent = () => (
  <div className="flex flex-col gap-10 pb-12">
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">2.0</span> The Host-Orchestrated Agentic Loop
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        Unlike standard chatbots that print text and stop, VoxKage-powered environments operate under a persistent, goal-oriented agentic loop. Rather than running a custom standalone reasoning script, this loop is driven entirely by the hosting CLI client (**Antigravity** or **OpenCode**). 
      </p>
      <p className="opacity-70 leading-relaxed text-[15px]">
        The host shell receives your high-level goal, acts as the cognitive maestro, dynamically routes reasoning to top-tier developer models, and queries VoxKage's capability servers to execute steps sequentially until the goal is mathematically validated.
      </p>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">2.1</span> State Assembly (The Context Ingestion)
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        Before the hosting model generates a plan, it must understand the environment. The hosting CLI dynamically assemblies context at the start of every turn:
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14.5px]">
        <li><strong>RAG Queries:</strong> The client queries VoxKage's embedded vector database (<code className="bg-white/10 px-1.5 py-0.5 rounded">query_rag</code>) to fetch semantically relevant code snippets and files across the repository.</li>
        <li><strong>Rule Integration:</strong> It reads and parses project instructions (<code className="bg-white/10 px-1.5 py-0.5 rounded">GEMINI.md</code> or <code className="bg-white/10 px-1.5 py-0.5 rounded">AGENTS.md</code>) to adapt to your codebase conventions, active configurations, and custom boundaries.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">2.2</span> Atomic JSON-RPC Tool Selection & Execution
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        Once the host CLI determines the current step's intent, it maps the required action to a specific, registered MCP tool schema.
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14.5px]">
        <li><strong>Turn-by-Turn Isolation:</strong> The system executes exactly one tool per conversational turn. This strict sequential flow prevents overlapping shell operations, file race conditions, and process blockages.</li>
        <li><strong>Dynamic Spawning:</strong> The host client targets a VoxKage sub-server (e.g., <code className="bg-white/10 px-1.5 py-0.5 rounded">os_control_server</code>) and pipes the JSON-RPC execution string via secure standard input/output channels.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">2.3</span> Stderr Capture & Self-Healing
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        Traditional scripts crash when they encounter a permission error, a missing dependency, or a command failure. The active agentic loop circumvents this through automated self-healing:
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14.5px]">
        <li><strong>Error Interception:</strong> When a tool execution fails, VoxKage catches the raw error streams, maps them to structured JSON exceptions, and returns them directly into the host model's next prompt block.</li>
        <li><strong>Autonomous Re-entry:</strong> Instead of prompting you for help, the hosting model reads the error stack trace, diagnoses the issue, adjusts its strategy (e.g., modifying its syntax or requesting a permission override), and automatically retries the action.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">2.4</span> Persistent Progress Verification
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        During multi-step refactoring, the active client tracks milestones live. In the background, the AST parser and planning engine (<code className="bg-white/10 px-1.5 py-0.5 rounded">coding_server</code>) persistently update an interactive checklist (<code className="bg-white/10 px-1.5 py-0.5 rounded">active_plan.md</code>) outlining current progress. 
      </p>
      <p className="opacity-70 leading-relaxed text-[15px]">
        Once all plan milestones are satisfied and the model validates its modifications via automated checks, the host CLI terminates cleanly, presenting a concise, factual summary of accomplishments.
      </p>
    </div>
  </div>
);

const HoneycombMockup = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= 5) return;
    const timer = setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="w-full bg-[#050505] border border-white/5 rounded-xl p-4 md:p-6 font-mono text-[11px] md:text-[13px] shadow-2xl relative overflow-hidden flex flex-col">
      <div className="flex items-start md:items-center gap-3 bg-white/5 px-3 md:px-4 py-3 rounded-lg mb-6 md:mb-8 border border-white/5 shrink-0 pr-16 md:pr-20">
        <Terminal size={16} className="text-[#295cf1] shrink-0 mt-0.5 md:mt-0" />
        <motion.span 
          initial={{ opacity: 0, y: 4 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-white/80 whitespace-normal leading-relaxed break-words"
        >
          search for the latest NEXT JS documentation and updates and send me a word file through my telegram
        </motion.span>
      </div>

      <div className="flex flex-col gap-6 relative pl-6 border-l border-white/5 ml-4">
        {step >= 1 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-4 relative">
            <div className="absolute -left-[35px] bg-[#050505] border border-white/10 p-1.5 rounded-md">
              <Network size={14} className="text-yellow-500" />
            </div>
            <div className="bg-[#111] border border-white/5 px-4 py-3 rounded-lg w-full">
              <span className="text-yellow-500/80 font-bold tracking-widest text-[10px] uppercase mb-1 block">AGENTIC THINKING // PLAN</span>
              <p className="text-white/60">I need to fetch Next.js docs via browser_server, compile to word via file_ops_server, and dispatch via telegram_server.</p>
            </div>
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-4 relative">
            <div className="absolute -left-[35px] bg-[#050505] border border-white/10 p-1.5 rounded-md">
              <Search size={14} className="text-[#295cf1]" />
            </div>
            <div className="bg-[#111] border border-white/5 px-4 py-3 rounded-lg w-full">
              <span className="text-[#295cf1] font-bold tracking-widest text-[10px] uppercase mb-1 block">BROWSER_SERVER.PY // EXECUTE — 42 TOOLS</span>
              <p className="text-white/60">Navigating to nextjs.org/docs... Extracted 4,201 tokens of updated DOM content via Playwright agent.</p>
            </div>
          </motion.div>
        )}

        {step >= 3 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-4 relative">
            <div className="absolute -left-[35px] bg-[#050505] border border-white/10 p-1.5 rounded-md">
              <FileEdit size={14} className="text-emerald-500" />
            </div>
            <div className="bg-[#111] border border-white/5 px-4 py-3 rounded-lg w-full">
              <span className="text-emerald-500 font-bold tracking-widest text-[10px] uppercase mb-1 block">FILE_OPS_SERVER.PY // EXECUTE — 5 TOOLS</span>
              <p className="text-white/60">Compiling extracted data... Created 'NextJS_Updates.docx' at C:\Users\AYUSH\Documents.</p>
            </div>
          </motion.div>
        )}

        {step >= 4 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-4 relative">
            <div className="absolute -left-[35px] bg-[#050505] border border-white/10 p-1.5 rounded-md">
              <Send size={14} className="text-purple-500" />
            </div>
            <div className="bg-[#111] border border-white/5 px-4 py-3 rounded-lg w-full">
              <span className="text-purple-500 font-bold tracking-widest text-[10px] uppercase mb-1 block">TELEGRAM_SERVER.PY // EXECUTE — 8 TOOLS</span>
              <p className="text-white/60">Dispatching secure file payload over IPC pipe to Telegram Bot API... Message sent successfully.</p>
            </div>
          </motion.div>
        )}

        {step >= 5 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-4 mt-4">
            <CheckCircle2 size={18} className="text-[#295cf1] shrink-0 mt-0.5" />
            <p className="text-white/90"><strong>VOXKAGE:</strong> The task is done, sir. The latest Next.js documentation has been compiled and sent to your Telegram.</p>
          </motion.div>
        )}
      </div>

      <button 
        onClick={() => setStep(0)}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-[9px] md:text-[10px] text-white/40 hover:text-white uppercase tracking-widest border border-white/10 px-2 md:px-3 py-1 md:py-1.5 rounded transition-colors z-10 bg-[#050505]"
      >
        Replay
      </button>
    </div>
  );
};

const HoneycombContent = ({ isDark = true }: { isDark?: boolean }) => {
  const [tab, setTab] = useState<"docs" | "mockup">("docs");

  const servers = [
    { name: "browser_server.py", tools: 42, role: "Web Agent & Browser Automation", desc: "Full Playwright/Chromium orchestration. Handles search, DOM extraction, screenshot-with-vision, click/fill/drag/type via accessibility UIDs, JS execution, multi-tab management, network inspection, performance tracing, and a frontend snippet memory store." },
    { name: "os_control_server.py", tools: 20, role: "OS File & Process Control", desc: "The system hands. Copy, cut, rename, create folders, sort directories, find duplicates, recycle bin control, image compress/resize, wallpaper setting, process kill, Windows Update checks, disk usage analytics, archive compression and extraction." },
    { name: "system_server.py", tools: 56, role: "Full System Control Layer", desc: "The deepest OS integration layer. Controls volume, brightness, audio devices, night light, dark mode, power actions, power plans, battery status, system info, running processes, WiFi/Bluetooth/hotspot/airplane mode, network scanning, speed tests, DNS flushing, window management, clipboard, keystrokes, temp file cleanup, and the native shell executor." },
    { name: "task_server.py", tools: 12, role: "Parallel Sub-Agent Manager", desc: "Spawns headless background sub-agent CLI processes (agy or OpenCode) for long-running tasks. Features a 30-min watchdog timer, hard 90-min kill cap, dual-engine support, auto-model selection (Pro vs Flash by task complexity), step logging heartbeats, and zombie PID detection." },
    { name: "gui_server.py", tools: 5, role: "Desktop GUI Pilot", desc: "Vision-assisted desktop automation. Focuses windows via AttachThreadInput, captures desktop screenshots to disk paths (never base64), executes find-and-click with coordinate extraction, hotkeys, typed text via clipboard-paste for Unicode, drag/drop, and file opening." },
    { name: "memory_server.py", tools: 11, role: "SOUL Memory & Self-Learning", desc: "The hippocampus. Manages the SOUL user profile (remember_user, recall_user, get_user_profile), problem/solution knowledge base (log_problem, log_solution, search_memory), trusted action registry, and full memory lifecycle (list, forget)." },
    { name: "rag_server.py", tools: 6, role: "Vector RAG Database", desc: "The librarian. Handles document chunking, sentence-transformer embedding, FAISS/ChromaDB semantic storage, intelligent retrieval (query_rag), directory-wide indexing (index_directory), change detection (check_and_index), and document lifecycle management." },
    { name: "coding_server.py", tools: 4, role: "Agentic Coding Engine (ACE)", desc: "Powers the ACE workflow. Runs coding_thinking to initialize RAG-backed plans, get_code_skeleton for 95%-token-saving AST structural parsing, and update_coding_plan / get_coding_plan for live milestone tracking across multi-file refactoring sessions." },
    { name: "telegram_server.py", tools: 8, role: "Telegram Remote Control", desc: "Bidirectional Telegram Bot bridge. Sends messages, reports, and files. Checks inbox, handles user confirmation dialogs (telegram_ask_save / telegram_check_reply), retrieves pending messages, and reports bot connection status." },
    { name: "github_server.py", tools: 14, role: "GitHub & Git Automation", desc: "Full Git & GitHub lifecycle. Clone repos, smart commits with auto-messages, pull, fake commit histories, auto-detect and install dependencies, run/kill projects, check project health, list repos, create local repos, and inspect GitHub Actions runs and job logs." },
    { name: "email_server.py", tools: 11, role: "Email Client & Automation", desc: "Complete Gmail/IMAP integration. Check inbox, read emails, send, save drafts, reply, delete, bulk delete, archive, mark read/unread, and get email statistics — all via secure OAuth or App Password flow." },
    { name: "devserver_server.py", tools: 7, role: "Dev Server Manager & Visual QA", desc: "Auto-detects and starts local dev servers (Next.js, Vite, React CRA, Angular, SvelteKit, Nuxt, Django, Flask, FastAPI, static HTML). Manages port conflicts, waits for server readiness, and bridges browser screenshots to Gemini vision scoring for the Visual QA self-correction loop." },
    { name: "media_server.py", tools: 6, role: "Spotify & Media Control", desc: "Full Spotify integration via spotipy. Search and play tracks/playlists by name or URI, control playback (play/pause/skip/volume), search YouTube media options, and play media selections directly from search results." },
    { name: "file_server.py", tools: 5, role: "Smart File Intelligence", desc: "Intelligent file operations. smart_open resolves descriptions to real apps/files and launches them, browse_directory gives structured listings, analyze_specific_file uses Gemini vision for image/doc analysis, and find_and_analyze_file searches the filesystem by keyword." },
    { name: "file_ops_server.py", tools: 5, role: "File Creation & Editing", desc: "Precise file lifecycle management with confirmation gates. Creates new files with content, edits existing files via diff-style replacement, deletes files safely, converts between formats (.docx, .pdf, .txt, etc.), and lists directory contents with metadata." },
    { name: "health_server.py", tools: 7, role: "System Health Monitor", desc: "Comprehensive PC diagnostics. Full health check (CPU/RAM/disk/network), top processes by CPU or memory, startup programs inventory, junk file scanning and cleaning (with confirmation), Windows Defender/antivirus status, and disk usage analysis." },
    { name: "download_server.py", tools: 4, role: "Download & Installer Manager", desc: "Safe agentic download pipeline. Finds official download URLs via browser, shows preview before downloading (confirmed=False gate), tracks download progress, and runs installers silently — all with user confirmation checkpoints before execution." },
    { name: "notify_server.py", tools: 2, role: "Windows Notification Bridge", desc: "Native Windows toast notifications. notify_task_done fires structured completion alerts with task ID and status. notify delivers arbitrary title/message/duration popups to the desktop notification center for background task awareness." },
    { name: "session_server.py", tools: 4, role: "Session Log & Shared Consciousness", desc: "Structured session memory. Creates, lists, retrieves, and searches markdown session logs — the backbone of VoxKage's shared consciousness across Antigravity CLI and OpenCode CLI sessions. Enables seamless context handoff between sessions." },
  ];

  const renderCode = (text: string) => (
    <code className={`px-1.5 py-0.5 rounded font-mono text-[13px] transition-colors duration-300 ${isDark ? "bg-white/10 text-[#8ba2ff]" : "bg-black/10 text-[#295cf1] font-semibold"}`}>
      {text}
    </code>
  );

  return (
    <div className="flex flex-col h-full w-full">
      <div className={`flex items-center gap-2 mb-8 w-max p-1 rounded-xl transition-all duration-300 border ${isDark ? "bg-[#111] border-white/5" : "bg-white/55 border-white/60 shadow-sm"}`}>
        <button 
          onClick={() => setTab("docs")} 
          className={`px-6 py-2 rounded-lg text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
            tab === "docs" 
              ? isDark ? "bg-white/10 text-white shadow" : "bg-white text-[#295cf1] shadow-sm border border-[#295cf1]/10"
              : isDark ? "text-white/50 hover:text-white" : "text-[#1a1a1a]/55 hover:text-[#295cf1]"
          }`}
        >
          Documentation
        </button>
        <button 
          onClick={() => setTab("mockup")} 
          className={`px-6 py-2 rounded-lg text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
            tab === "mockup" 
              ? "bg-[#295cf1] text-white shadow-lg shadow-[#295cf1]/20" 
              : isDark ? "text-white/50 hover:text-[#295cf1]" : "text-[#1a1a1a]/55 hover:text-[#295cf1]"
          }`}
        >
          Live Mockup
        </button>
      </div>

      <AnimatePresence mode="wait">
        {tab === "docs" ? (
          <motion.div key="docs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-10 pb-12">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
                <span className="text-[#295cf1]">3.0</span> The Honeycomb Architecture
              </h3>
              <p className="opacity-70 leading-relaxed text-[15px]">
                VoxKage does not have a single monolithic codebase where all tools are tangled together. Its capabilities are organized into <strong>19 highly-specialized, isolated MCP sub-servers</strong> inside {renderCode("voxkage/mcp_servers/")} — collectively called the <em>Honeycomb</em>. Each cell is an independent Python process with its own capability domain, zero idle overhead, and full crash isolation.
              </p>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {[
                  { val: "19", label: "MCP Servers" },
                  { val: "280+", label: "Total Tools" },
                  { val: "0ms", label: "Idle Overhead" },
                ].map(stat => (
                  <div key={stat.label} className={`rounded-xl p-4 text-center transition-all duration-300 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
                    <p className="text-2xl font-bold text-[#295cf1]">{stat.val}</p>
                    <p className={`text-xs uppercase tracking-widest mt-1 transition-colors duration-300 ${isDark ? "text-white/50" : "text-[#1a1a1a]/60 font-medium"}`}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
                <span className="text-[#295cf1]">3.1</span> Ephemeral stdio Spawning
              </h3>
              <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
                <li><strong>Zero-Idle Overhead:</strong> No servers run continuously in the background. VoxKage maintains an incredibly light memory footprint at rest.</li>
                <li><strong>Dynamic Spawning:</strong> When the Agentic Loop selects a tool, the hosting CLI dynamically spins up the specific server (e.g., {renderCode("browser_server.py")}) via stdio JSON-RPC, executes the command, captures the result, and terminates the process.</li>
                <li><strong>Schema Injection:</strong> VoxKage reads all 19 server schemas at startup and injects their full tool definitions into the host CLI's system prompt — the model always knows exactly what it can do.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
                <span className="text-[#295cf1]">3.2</span> Fault Isolation &amp; Crash Protection
              </h3>
              <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
                <li><strong>Process Boundary Isolation:</strong> Each server is a separate OS subprocess. A Playwright crash in {renderCode("browser_server.py")} cannot destabilize the main VoxKage session or any other server.</li>
                <li><strong>Stderr Self-Healing:</strong> The hosting CLI catches raw stderr crash logs from any dying cell, wraps them as structured tool errors, and injects them directly into the next model turn for autonomous diagnosis and retry.</li>
                <li><strong>Watchdog Protection:</strong> The {renderCode("task_server")} adds an additional layer — background sub-agents that stop logging heartbeats are auto-killed after 30 minutes of silence, with a hard 90-minute absolute limit.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
                <span className="text-[#295cf1]">3.3</span> Complete Cell Inventory
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {servers.map(server => (
                  <div key={server.name} className={`p-4 rounded-xl shadow-inner flex flex-col gap-1.5 transition-all duration-300 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-mono font-bold text-sm bg-gradient-to-r from-[#295cf1] to-[#3b82f6] bg-clip-text text-transparent">{server.name}</h4>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 transition-colors duration-300 ${isDark ? "bg-white/5 border border-white/10 text-white/60" : "bg-[#295cf1]/10 border border-[#295cf1]/20 text-[#295cf1] font-semibold"}`}>{server.tools} tools</span>
                    </div>
                    <p className={`text-xs uppercase tracking-wider font-semibold transition-colors duration-300 ${isDark ? "text-white/40" : "text-[#295cf1]/75"}`}>{server.role}</p>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/85"}`}>{server.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
                <span className="text-[#295cf1]">3.4</span> Cross-Cell Orchestration
              </h3>
              <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
                <li><strong>The Maestro:</strong> The hosting CLI&apos;s Agentic Loop acts as the conductor, seamlessly piping outputs from one cell directly into the inputs of the next — data flows across completely isolated processes with zero manual wiring.</li>
                <li><strong>Example — Research to Telegram:</strong> {renderCode("browser_server")} fetches docs → {renderCode("file_ops_server")} compiles a .docx → {renderCode("telegram_server")} dispatches the file — three isolated cells, one seamless workflow.</li>
                <li><strong>Example — Agentic Coding:</strong> {renderCode("rag_server")} indexes a repo → {renderCode("coding_server")} builds a skeleton plan → {renderCode("os_control_server")} executes shell builds → {renderCode("devserver_server")} starts the dev server → {renderCode("browser_server")} screenshots the result for vision scoring.</li>
                <li><strong>Parallel Execution:</strong> The {renderCode("task_server")} can spawn multiple sub-agents simultaneously, each with its own full access to the entire Honeycomb, running independently in the background while the main session remains free.</li>
              </ul>
            </div>
          </motion.div>
        ) : (
          <motion.div key="mockup" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex-1 w-full max-w-4xl mx-auto pt-4">
            <HoneycombMockup />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SecurityContent = ({ isDark = true }: { isDark?: boolean }) => {
  const renderCode = (text: string) => (
    <code className={`px-1.5 py-0.5 rounded font-mono text-[13.5px] transition-colors duration-300 ${isDark ? "bg-white/10 text-[#8ba2ff]" : "bg-black/10 text-[#295cf1] font-semibold"}`}>
      {text}
    </code>
  );

  return (
    <div className="flex flex-col gap-10 pb-12">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">4.0</span> The Zero-Trust Philosophy
        </h3>
        <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
          <li><strong>Bare-Metal OS Coordination:</strong> Unlike traditional AI wrappers confined within sandboxed Docker containers, VoxKage acts as an omnipresent middleware with bare-metal access to your native filesystem, terminals, and processes.</li>
          <li><strong>Hallucination Defense:</strong> Large Language Models are subject to logical errors, command hallucinations, or path confusion. Giving an AI agent root or admin shell privileges is a massive system risk.</li>
          <li><strong>The Safety Middleware:</strong> The Shield Protocol ({renderCode("voxkage/shield.py")}) acts as an absolute, non-bypassable safety filter. Every single command execution, directory mutation, or delete call requested by the host CLI's Agentic Loop is checked and evaluated against the Shield before execution.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">4.1</span> The Three-Layered Safety Architecture
        </h3>
        <p className="opacity-70 leading-relaxed text-[15px]">
          VoxKage enforces a rigorous three-tiered protection model to prevent system damage:
        </p>
        <div className="grid grid-cols-1 gap-4 mt-2">
          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[16px] md:text-[17px] text-[#295cf1] tracking-wide">Layer 1: Hard-Blocked Path & Command Checks</h4>
            <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
              Absolute paths are normalized via {renderCode("_expand_path")} (handling environment variables like {renderCode("%WINDIR%")} and `~` separators) and validated before any filesystem call.
            </p>
            <p className={`text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/50" : "text-[#1a1a1a]/65"}`}>
              Critical directories such as {renderCode("C:\\Windows")}, {renderCode("C:\\Program Files")}, SSH directories ({renderCode("~\\.ssh")}), GPG stores ({renderCode("~\\.gnupg")}), and configuration keys ({renderCode("~\\.voxkage\\config.json")}) are hard-locked. Furthermore, destructive shell utilities (e.g. {renderCode("format")}, {renderCode("diskpart")}, {renderCode("bcdedit")}, {renderCode("reg delete")}, {renderCode("sfc")}, {renderCode("shutdown")}, {renderCode("rm -rf /")}) are strictly intercepted and blocked. Deletions of binary extensions ({renderCode(".sys")}, {renderCode(".dll")}, {renderCode(".exe")}) inside protected spaces are instantly denied. **These boundaries are absolute and cannot be overridden.**
            </p>
          </div>

          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[16px] md:text-[17px] text-[#295cf1] tracking-wide">Layer 2: Safe Mode Gating</h4>
            <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
              Safe Mode defaults to active ({renderCode("safe_mode: true")}), reinforcing standard boundaries across all active developer environments.
            </p>
            <p className={`text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/50" : "text-[#1a1a1a]/65"}`}>
              Power users can toggle Safe Mode off by setting the environment variable {renderCode("VOXKAGE_SAFE_MODE=0")} or manually switching the parameter inside the local config ({renderCode("~\\.voxkage\\config.json")}). Toggling is also supported natively inside the **System Tray Settings Control Center** ({renderCode("tray/settings_window.py")}) via an interactive GUI. Even with Safe Mode disabled, Hard-Stop Confirmation Dialogs for binary installations and deletions remain active to provide a final safety net.
            </p>
          </div>

          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[16px] md:text-[17px] text-[#295cf1] tracking-wide">Layer 3: Transparent Audit Logging</h4>
            <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
              Provides a continuous, indestructible history of all system-level and filesystem actions performed by the agent.
            </p>
            <p className={`text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/50" : "text-[#1a1a1a]/65"}`}>
              Every path evaluation and shell interception is timestamped and recorded inside a centralized log at {renderCode("audit.log")} within the active brain directory (e.g. {renderCode("~\\.gemini\\antigravity\\brain\\audit.log")}). Logs are formatted in a clean structured layout: {renderCode("[Timestamp] ALLOWED/BLOCKED | action: target")}, ensuring complete accountability and simple audit checks for developer safety.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">4.2</span> MCP Server Integration &amp; Graceful Degradation
        </h3>
        <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
          <li><strong>Direct Server Hooks:</strong> Gating hooks are imported locally inside the microservices. The {renderCode("os_control_server")} intercepts file modifications via {renderCode("shield_gate_path")}, while the {renderCode("system_server")} protects commands via {renderCode("shield_gate_command")}.</li>
          <li><strong>Graceful Degradation:</strong> If the {renderCode("voxkage.shield")} module is missing or cannot be imported (such as in lightweight custom client environments), the MCP servers are designed to gracefully degrade (fail-open) rather than crashing the system, enabling custom setup flexibility.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">4.3</span> Confirmation Dialog Checkpoints
        </h3>
        <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
          <li><strong>confirmed=False Gate:</strong> For high-risk operations (such as deleting files or running executable software packages), the system requires a boolean {renderCode("confirmed")} parameter.</li>
          <li><strong>Two-Step Execution:</strong> The Agentic Loop is forced to call the tool with {renderCode("confirmed=False")} first. This generates a clear visual card in the terminal or Telegram. The loop is paused, and execution will resume ONLY when the user manually submits an explicit confirmation (e.g. "Yes" or "Proceed"), after which the tool is re-called with {renderCode("confirmed=True")}.</li>
        </ul>
      </div>
    </div>
  );
};

const AceContent = () => (
  <div className="flex flex-col gap-10 pb-12">
    <div className="flex flex-col gap-3">
      <p className="opacity-70 leading-relaxed text-[15px] mb-2">
        VoxKage does not just write isolated code snippets; it operates as a senior developer embedded in your repository. The Agentic Coding Engine (ACE) is a dedicated subsystem (<code className="bg-white/10 px-1.5 py-0.5 rounded">voxkage-coding</code>) designed specifically to navigate, understand, and safely modify massive codebases without overwhelming the LLM's context window.
      </p>

      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2 mt-4">
        <span className="text-[#295cf1]">5.0</span> The Core Philosophy: Plan, Understand, Act
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        ACE forces VoxKage to abandon the "shoot from the hip" approach common in chat UIs. It enforces a strict, multi-step protocol before a single line of code is ever modified.
      </p>
      <ul className="list-decimal pl-5 opacity-70 flex flex-col gap-2 mt-1">
        <li><strong>Information Gathering:</strong> Reading the environment.</li>
        <li><strong>Persistent Planning:</strong> Creating an immutable blueprint.</li>
        <li><strong>Targeted Execution:</strong> Making surgical edits based on structural awareness.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">5.1</span> The 95% Efficiency Breakthrough: Code Skeletons
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        The biggest bottleneck in AI coding is context limits. Feeding a 3,000-line source file into an LLM just to change one function is incredibly slow, expensive, and prone to "context loss" where the AI forgets details.
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>The Solution (<code className="bg-white/10 px-1 rounded">get_code_skeleton</code>):</strong> ACE introduces a proprietary AST (Abstract Syntax Tree) parsing tool. Instead of reading raw files, VoxKage requests the skeleton of a file.</li>
        <li><strong>How it Works:</strong> The tool parses Python (.py), JavaScript/TypeScript (.js, .ts, .tsx), and CSS. It strips away all implementation logic, returning only:
          <ul className="list-[circle] pl-5 mt-1 flex flex-col gap-1">
            <li>Import statements.</li>
            <li>Class definitions and docstrings.</li>
            <li>Function/Method signatures (names, arguments, return types).</li>
            <li>Top-level global constants.</li>
          </ul>
        </li>
        <li><strong>The Result:</strong> A sprawling 2,000-line monolith is instantly compressed into a ~40-line structural map. This saves over 95% of token context while giving VoxKage perfect spatial awareness of where functions live and how the file is organized.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">5.2</span> The ACE Pre-Flight Protocol
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        When you ask VoxKage to build a feature or fix a bug, ACE triggers an unskippable sequence of MCP tool calls:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
          <h4 className="text-[#295cf1] font-medium mb-1">Step A: Semantic Indexing</h4>
          <p className="text-xs opacity-50"><code className="bg-white/10 px-1 rounded">index_directory</code> — Before writing code, ACE ensures its knowledge is up-to-date. It rapidly scans the local directory, indexing new or modified files into its local RAG vector database.</p>
        </div>
        <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
          <h4 className="text-[#295cf1] font-medium mb-1">Step B: Context Retrieval</h4>
          <p className="text-xs opacity-50"><code className="bg-white/10 px-1 rounded">query_rag</code> — VoxKage queries its own RAG database with your goal. It retrieves the exact file chunks relevant to the task across the entire repo.</p>
        </div>
        <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
          <h4 className="text-[#295cf1] font-medium mb-1">Step C: Blueprint Generation</h4>
          <p className="text-xs opacity-50"><code className="bg-white/10 px-1 rounded">coding_thinking</code> — Using the context, ACE formulates a precise plan written to a persistent <code className="bg-white/10 px-1 rounded">active_plan.md</code>. This acts as short-term memory, ensuring it never loses its place.</p>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">5.3</span> Iterative Execution & Progress Tracking
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        Once the blueprint is generated, VoxKage switches to execution mode:
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Surgical Editing:</strong> Using the code skeletons for navigation, VoxKage uses targeted file operation tools to insert or modify code exactly where it belongs.</li>
        <li><strong>Mandatory Status Updates:</strong> After every single step, ACE is strictly required to call <code className="bg-white/10 px-1.5 py-0.5 rounded">update_coding_plan</code>, ticking the step as "done" or "failed" in the <code className="bg-white/10 px-1.5 py-0.5 rounded">active_plan.md</code>.</li>
        <li><strong>Visual Transparency:</strong> Because this plan is updated via an MCP tool, the user sees a live, ticking checklist. You always know exactly what VoxKage has completed and what it plans to do next.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">5.4</span> Evolution Tasks: Safe Refactoring
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        For massive, cross-cutting changes, ACE utilizes <code className="bg-white/10 px-1.5 py-0.5 rounded text-[#295cf1]">spawn_evolution_task</code>.
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Automated Checkpoints:</strong> Before touching a single file, ACE automatically creates a safe restore checkpoint (either via a Git commit or a .zip snapshot).</li>
        <li><strong>Test-Driven Development:</strong> It writes the new code, then writes a test file, and executes the test suite.</li>
        <li><strong>Auto-Rollback:</strong> If tests fail and VoxKage cannot resolve the issue after a set number of retries, it abandons the evolution and safely rolls the repository back to the pristine checkpoint, ensuring your codebase is never broken.</li>
      </ul>
    </div>
  </div>
);

const VisionContent = () => (
  <div className="flex flex-col gap-10 pb-12">
    <div className="flex flex-col gap-3">
      <p className="opacity-70 leading-relaxed text-[15px] mb-2">
        VoxKage bridges the gap between raw text processing and human-like visual understanding. It interacts with the web structurally and visually, allowing it to navigate complex modern web apps, bypass anti-bot text blockers, and empirically validate its own actions through "sight."
      </p>

      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2 mt-4">
        <span className="text-[#295cf1]">6.0</span> The Persistent Browser Session
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        VoxKage utilizes a persistent, headless browser instance managed by the <code className="bg-white/10 px-1.5 py-0.5 rounded">browser_server</code>.
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Stateful Interaction:</strong> Unlike simple API fetchers that lose cookies and session data after every request, VoxKage maintains state. It can log into a website, navigate through a multi-page form, and maintain its session across multiple distinct tool calls.</li>
        <li><strong>Dynamic Rendering:</strong> It natively handles Client-Side Rendering (CSR). Websites built with React, Vue, or Angular that rely on JavaScript to load content pose no issue; VoxKage waits for the DOM to fully render before interacting.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">6.1</span> Deep DOM Inspection
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        When VoxKage needs to understand a webpage, it doesn't just read the visible text; it dissects the architecture.
      </p>
      <div className="grid grid-cols-1 gap-4 mt-2">
        <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
          <h4 className="text-[#295cf1] font-medium mb-1">Structural Parsing</h4>
          <p className="text-xs opacity-50"><code className="bg-white/10 px-1 rounded">dom_get_elements</code> — Instead of dumping the entire, cluttered HTML source code into the LLM's context window (which wastes tokens), this tool allows VoxKage to query the live DOM using precise CSS selectors. It extracts clean, isolated components (e.g., extracting just the &lt;article&gt; tags or &lt;ul&gt; lists).</p>
        </div>
        <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
          <h4 className="text-[#295cf1] font-medium mb-1">Aesthetic Awareness</h4>
          <p className="text-xs opacity-50"><code className="bg-white/10 px-1 rounded">dom_get_computed_style</code> — VoxKage can "see" CSS. If tasked with analyzing a UI, it retrieves the live, computed styles of elements—reading exact hex colors, flexbox layouts, font weights, and animation timings directly from the browser's rendering engine.</p>
        </div>
        <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
          <h4 className="text-[#295cf1] font-medium mb-1">Custom Execution</h4>
          <p className="text-xs opacity-50"><code className="bg-white/10 px-1 rounded">dom_execute_js</code> — For complex web apps, VoxKage can inject and execute raw JavaScript directly into the page's console, allowing it to manipulate variables, trigger custom events, or extract deeply nested data arrays that aren't exposed in the standard HTML.</p>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">6.2</span> The Multimodal Vision Loop
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        Text extraction fails when buttons are unlabeled, images contain crucial text, or a layout breaks. VoxKage circumvents this entirely by using the official Gemini Multimodal Vision pipeline.
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Visual Checkpoints:</strong> After navigating to a new URL, clicking a button, or scrolling, VoxKage takes an instantaneous, high-resolution screenshot of the active viewport via <code className="bg-white/10 px-1 rounded">get_browser_state</code> and <code className="bg-white/10 px-1 rounded">take_screenshot</code>.</li>
        <li><strong>Empirical Validation:</strong> VoxKage passes the absolute path of this screenshot directly to the Gemini Engine. It asks itself specific questions based on the image: "Is the download button visible?", "Did the login modal appear?", "Does this image actually depict the 'cyberpunk cityscape' the user asked for?"</li>
        <li><strong>The "See-Act" Cycle:</strong> If VoxKage clicks a link and the vision model confirms an error 404 page appeared in the screenshot, it knows the action failed. It autonomously navigates back and attempts an alternative route. It does not assume success; it verifies it visually.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">6.3</span> Autonomous Image Acquisition
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        Finding and downloading high-quality images is notoriously difficult for standard bots due to lazy-loading and thumbnail generation. VoxKage uses a specialized loop:
      </p>
      <ul className="list-decimal pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Search & Navigate:</strong> Uses web search to find relevant galleries (e.g., Unsplash, NASA).</li>
        <li><strong>Scroll Triggers:</strong> Uses <code className="bg-white/10 px-1 rounded">scroll_and_read</code> to force JavaScript lazy-loaders to render high-resolution images below the fold.</li>
        <li><strong>Live Extraction:</strong> Executes JavaScript to pull the actual source URLs, bypassing thumbnails and hidden &lt;img&gt; tags via <code className="bg-white/10 px-1 rounded">extract_image_urls</code>.</li>
        <li><strong>Vision Quality Control:</strong> After downloading an image, it immediately passes the local file to the vision model. If the image is a low-res thumbnail, watermarked, or visually irrelevant, VoxKage deletes the file and continues searching until a perfect match is found.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">6.4</span> Frontend Template Memory
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        Because VoxKage can understand both the DOM structure and the computed CSS styles, it acts as an autonomous frontend learner.
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Pattern Extraction:</strong> When VoxKage encounters a brilliant CSS animation, a perfectly responsive grid, or an elegant UI component during web browsing, it extracts the HTML/CSS/JS.</li>
        <li><strong>Permanent Storage:</strong> It logs this snippet into its specialized Frontend Memory via <code className="bg-white/10 px-1 rounded">save_frontend_snippet</code>.</li>
        <li><strong>Future Application:</strong> When a user later asks VoxKage to build a new web app or dashboard, VoxKage queries its <code className="bg-white/10 px-1 rounded">search_frontend_snippets</code> database, utilizing the complex UI patterns it learned from browsing the live web.</li>
      </ul>
    </div>
  </div>
);

const MemoryMockup = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= 3) return;
    const timer = setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="w-full bg-[#050505] border border-white/5 rounded-xl p-4 md:p-6 font-mono text-[11px] md:text-[13px] shadow-2xl relative overflow-hidden flex flex-col min-h-[360px]">
      {/* Query Bar */}
      <div className="flex items-start md:items-center gap-3 bg-white/5 px-3 md:px-4 py-3 rounded-lg mb-6 md:mb-8 border border-white/5 shrink-0 pr-16 md:pr-20">
        <Terminal size={16} className="text-[#295cf1] shrink-0 mt-0.5 md:mt-0" />
        <motion.span 
          initial={{ opacity: 0, y: 4 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-white/80 whitespace-normal leading-relaxed break-words"
        >
          Build me Claude. Do no mistakes.
        </motion.span>
      </div>

      <div className="flex flex-col gap-6 relative pl-6 border-l border-white/5 ml-4">
        {step >= 1 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-4 relative">
             <div className="absolute -left-[35px] bg-[#050505] border border-white/10 p-1.5 rounded-md z-10">
              <Database size={14} className="text-purple-500" />
            </div>
            <div className="bg-[#111] border border-purple-500/20 px-4 py-3 rounded-lg w-full relative overflow-hidden">
              <div className="absolute top-0 right-0 px-2 py-1 bg-purple-500/10 text-purple-500 text-[9px] rounded-bl-lg font-bold">SOUL MEMORY TRIGGERED</div>
              <span className="text-purple-400 font-bold tracking-widest text-[10px] uppercase mb-1 block">Date - 23rd January, 2025</span>
              <span className="text-white/90 font-medium mb-1 block">Title - Tech Stack preferred - NEXT JS, Tailwind, Supabase</span>
              <p className="text-white/60 mt-2">User likes to build things with the Next JS, tailwind, supabase.</p>
            </div>
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-4 mt-2">
            <CheckCircle2 size={18} className="text-[#295cf1] shrink-0 mt-0.5" />
            <p className="text-white/90"><strong>VOXKAGE:</strong> Got it sir, moving ahead with your preferred NEXT JS workflow.</p>
          </motion.div>
        )}
      </div>

      <button 
        onClick={() => setStep(0)}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-[9px] md:text-[10px] text-white/40 hover:text-white uppercase tracking-widest border border-white/10 px-2 md:px-3 py-1 md:py-1.5 rounded transition-colors z-10 bg-[#050505]"
      >
        Replay
      </button>
    </div>
  );
};

const MemoryContent = () => {
  const [tab, setTab] = useState<"docs" | "mockup">("docs");

  return (
    <div className="flex flex-col h-full w-full">
      {/* Internal Tab Switcher */}
      <div className="flex items-center gap-2 mb-8 bg-[#111] w-max p-1 rounded-xl border border-white/5">
        <button 
          onClick={() => setTab("docs")} 
          className={`px-6 py-2 rounded-lg text-xs font-medium tracking-widest uppercase transition-all duration-300 ${tab === "docs" ? "bg-white/10 text-white shadow" : "text-white/50 hover:text-white"}`}
        >
          Documentation
        </button>
        <button 
          onClick={() => setTab("mockup")} 
          className={`px-6 py-2 rounded-lg text-xs font-medium tracking-widest uppercase transition-all duration-300 ${tab === "mockup" ? "bg-[#295cf1] text-white shadow-lg shadow-[#295cf1]/20" : "text-white/50 hover:text-[#295cf1]"}`}
        >
          Live Mockup
        </button>
      </div>

      <AnimatePresence mode="wait">
        {tab === "docs" ? (
          <motion.div key="docs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-10 pb-12">
            <div className="flex flex-col gap-3">
              <p className="opacity-70 leading-relaxed text-[15px] mb-2">
                VoxKage learns across sessions. It utilizes a multi-tiered memory architecture managed by the <code className="bg-white/10 px-1.5 py-0.5 rounded">memory_server</code>. This system ensures that VoxKage adapts to your specific workflows, remembers your preferences, and actively learns from its own operational mistakes.
              </p>

              <h3 className="text-xl font-medium tracking-wide flex items-center gap-2 mt-4">
                <span className="text-[#295cf1]">7.0</span> The SOUL Database
              </h3>
              <p className="opacity-70 leading-relaxed text-[15px]">
                The SOUL (Systemic Observation of User Lifestyle) database is where VoxKage stores its understanding of you. It does not require you to fill out a profile; it learns autonomously through observation.
              </p>
              <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
                <li><strong>Autonomous Logging:</strong> When you mention a preference (e.g., "I prefer vanilla CSS over Tailwind"), VoxKage autonomously logs it under Identity, Preferences, or Habits via <code className="bg-white/10 px-1 rounded">remember_user</code>.</li>
                <li><strong>Proactive Recall:</strong> At the start of a session, VoxKage retrieves relevant SOUL data. It automatically knows to open Spotify and play your preferred Lo-Fi beats without you specifying the genre via <code className="bg-white/10 px-1 rounded">recall_user</code>.</li>
                <li><strong>Trusted Actions:</strong> If you repeatedly confirm repetitive tasks, VoxKage logs a <code className="bg-white/10 px-1.5 py-0.5 rounded text-[#295cf1]">trusted_action</code>, permanently bypassing the Shield Protocol's Hard Stop Confirmation Gate for that workflow.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
                <span className="text-[#295cf1]">7.1</span> The Hippocampus: Problem & Solution Logs
              </h3>
              <p className="opacity-70 leading-relaxed text-[15px]">
                VoxKage is designed to be highly fault-tolerant. When it encounters an error it cannot immediately solve, it ensures it never makes the same mistake twice.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
                  <h4 className="text-[#295cf1] font-medium mb-1">Failure Logging</h4>
                  <p className="text-xs opacity-50"><code className="bg-white/10 px-1 rounded">log_problem</code> — Documents the exact context, attempted action, and reason for failure if a tool fails or VoxKage wastes time.</p>
                </div>
                <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
                  <h4 className="text-[#295cf1] font-medium mb-1">Resolution Logging</h4>
                  <p className="text-xs opacity-50"><code className="bg-white/10 px-1 rounded">log_solution</code> — Once the hurdle is overcome (self-correction or user intervention), it permanently updates the log with the working solution.</p>
                </div>
                <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
                  <h4 className="text-[#295cf1] font-medium mb-1">Pre-Flight Checks</h4>
                  <p className="text-xs opacity-50"><code className="bg-white/10 px-1 rounded">search_memory</code> — Before complex tasks, VoxKage queries this database to proactively apply documented solutions to historical failures.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
                <span className="text-[#295cf1]">7.2</span> Frontend Template Memory
              </h3>
              <p className="opacity-70 leading-relaxed text-[15px]">
                VoxKage acts as an autonomous design archivist, building a personalized library of beautiful frontend components as it browses the web.
              </p>
              <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
                <li><strong>DOM Extraction:</strong> When encountering visually striking elements, it extracts raw HTML, computed CSS, and JS logic via <code className="bg-white/10 px-1 rounded">save_frontend_snippet</code>.</li>
                <li><strong>Permanent Indexing:</strong> Saves snippets into the Frontend Memory database, tagged with descriptive keywords (e.g., "animated-gradient-button").</li>
                <li><strong>Application Building:</strong> Queries <code className="bg-white/10 px-1 rounded">search_frontend_snippets</code> when scaffolding apps to construct UI from high-quality components it previously learned from the live web.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
                <span className="text-[#295cf1]">7.3</span> Project-Specific Memory
              </h3>
              <p className="opacity-70 leading-relaxed text-[15px]">
                While SOUL is global, VoxKage maintains strict boundaries for project-specific knowledge.
              </p>
              <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
                <li><strong>GEMINI.md (Team Rules):</strong> Stored in the root of a repository. VoxKage reads this to understand team-wide architectures, linting rules, and strict boundaries.</li>
                <li><strong>MEMORY.md (Private Workflows):</strong> Stored securely in <code className="bg-white/10 px-1 rounded">~/.gemini/tmp/</code>. Holds private notes (local API keys, server ports) that should never be committed to source control.</li>
              </ul>
            </div>
          </motion.div>
        ) : (
          <motion.div key="mockup" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex-1 w-full max-w-4xl mx-auto pt-4">
            <MemoryMockup />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const RemoteContent = () => (
  <div className="flex flex-col gap-10 pb-12">
    <div className="flex flex-col gap-3">
      <p className="opacity-70 leading-relaxed text-[15px] mb-2">
        VoxKage is not confined to a terminal window that you must keep open on your desktop. It integrates directly into your operating system as an omnipresent daemon, allowing for global control and remote telemetry. This architecture ensures VoxKage is always listening and ready to execute, whether you are sitting at your desk or miles away from your PC.
      </p>

      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2 mt-4">
        <span className="text-[#295cf1]">8.0</span> The System Tray Orchestrator
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        When VoxKage is initialized, it anchors itself in the Windows taskbar as a lightweight Qt-based System Tray application. This acts as the master process manager via <code className="bg-white/10 px-1.5 py-0.5 rounded">tray_app.py</code>.
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Daemon Management:</strong> The tray app silently manages all detached background processes. It ensures the MCP Servers, the Telegram Watcher, and long-running sub-agents (<code className="bg-white/10 px-1 rounded">spawn_task</code>) remain active and healthy even if the main CLI terminal is closed.</li>
        <li><strong>One-Click Accessibility:</strong> Provides immediate UX shortcuts to launch the main terminal, open the central <code className="bg-white/10 px-1 rounded">settings.json</code> configuration file, or access logging directories without navigating through the file system.</li>
        <li><strong>Graceful Teardown:</strong> When you exit via the tray, it safely intercepts running LLM operations, flushes memory buffers to disk, and sends kill signals to all orphaned subprocesses, ensuring your OS isn't left with zombie processes.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">8.1</span> True Remote Execution
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        This is VoxKage's standout feature. Using the Telegram Bot API via <code className="bg-white/10 px-1.5 py-0.5 rounded">telegram_watcher.py</code>, VoxKage allows you to command your physical PC from anywhere in the world using your smartphone.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div className="bg-[#ffffff05] border border-white/5 p-5 rounded-xl shadow-inner flex flex-col gap-2">
          <h4 className="text-[#295cf1] font-medium text-[15px]">Live Injection (IPC)</h4>
          <p className="text-xs opacity-50 mb-1">The remote control is not a separate web server; it is a direct neural link to the active LLM engine.</p>
          <ul className="list-disc pl-4 opacity-70 flex flex-col gap-1 text-[13px]">
            <li><strong>Continuous Polling:</strong> Runs as a highly efficient background thread, polling for messages from an authorized <code className="bg-white/10 px-1 rounded">CHAT_ID</code>.</li>
            <li><strong>Named Pipe IPC:</strong> Intercepts messages and uses Named Pipe Inter-Process Communication to physically inject text directly into the active gemini CLI terminal's stdin stream.</li>
            <li><strong>Live Execution:</strong> The main engine instantly parses the prompt, executes OS commands locally, and responds.</li>
          </ul>
        </div>
        <div className="bg-[#ffffff05] border border-white/5 p-5 rounded-xl shadow-inner flex flex-col gap-2">
          <h4 className="text-[#e11d48] font-medium text-[15px]">The Inbox Fallback Protocol</h4>
          <p className="text-xs opacity-50 mb-1">What if you text VoxKage while the main CLI window is closed?</p>
          <ul className="list-disc pl-4 opacity-70 flex flex-col gap-1 text-[13px]">
            <li><strong>Persistent Queuing:</strong> Detects if the main engine is offline. Instead of dropping the message, it saves the prompt to a secure local <code className="bg-white/10 px-1 rounded">_INBOX_FILE</code>.</li>
            <li><strong>Catch-Up Execution:</strong> The next time you open the VoxKage terminal, it automatically checks the inbox, reads all missed messages, and executes the backlog of remote commands automatically.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">8.2</span> Bi-Directional File Telemetry
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        Remote control isn't limited to text commands; it supports full multimedia data transfer.
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-3 mt-2">
        <li>
          <strong>Inbound Telemetry (Phone to PC):</strong> If you take a photo of a document on your phone and send it to the VoxKage Telegram bot, the watcher automatically downloads the file to your PC's local storage. It then passes the absolute file path to the LLM. VoxKage uses its Vision Pipeline to instantly "read" the physical document and executes commands based on its contents.
        </li>
        <li>
          <strong>Outbound Telemetry (PC to Phone):</strong> VoxKage can push data back to you globally. If it completes a massive, 2-hour research task in the background, it uses the <code className="bg-white/10 px-1 rounded">telegram_send_report</code> and <code className="bg-white/10 px-1 rounded">telegram_send_file</code> tools to send the formatted markdown summary and any generated PDFs directly to your phone.
        </li>
        <li>
          <strong>Interactive Confirmation Gates:</strong> If VoxKage needs to perform a dangerous action while you are away, it uses <code className="bg-white/10 px-1 rounded">telegram_ask_save</code>. It sends the prompt to your phone and pauses execution, waiting for you to reply "Yes" or "No" before proceeding with the file deletion on your physical machine.
        </li>
      </ul>
    </div>
  </div>
);

const PluginsContent = () => (
  <div className="flex flex-col gap-10 pb-12">
    <div className="flex flex-col gap-3">
      <p className="opacity-70 leading-relaxed text-[15px] mb-2">
        For more information, head to the <a href="/#plugins" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#295cf1] to-cyan-400 hover:opacity-80 transition-opacity">PLUGINS</a> section.
      </p>
      <p className="opacity-70 leading-relaxed text-[15px] mb-2">
        VoxKage is not a closed, rigid system. It is a highly scalable platform designed to absorb the world's open-source MCP tools, granting it near-infinite capabilities. VoxKage’s core architecture handles file operations, coding, and browser automation natively. However, the true power of VoxKage lies in its Plugin Ecosystem. By leveraging the open standard of the Model Context Protocol (MCP), VoxKage can seamlessly integrate third-party APIs, external hardware, and community-built skills.
      </p>

      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2 mt-4">
        <span className="text-[#295cf1]">9.0</span> The MCP Integration Layer
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        VoxKage does not require complex, hardcoded API integrations in its main codebase. It treats plugins as isolated, plug-and-play MCP servers.
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>The Model Context Protocol:</strong> MCP acts as a universal translator. When the community builds an MCP server for a new service (e.g., Slack, Jira, AWS, or local smart home devices), VoxKage can instantly "speak" to it.</li>
        <li><strong>Dynamic Discovery:</strong> You do not need to alter VoxKage's core code to add a capability. When an MCP server is registered in the system, VoxKage automatically reads its JSON schema at startup. It injects the new tool definitions directly into the LLM's system prompt. The LLM instantly knows the tool exists, what arguments it requires, and how to use it.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">9.1</span> The VoxKagePlugin Base Class
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        To ensure stability and a flawless user experience, all VoxKage plugins inherit from a strict, abstract base class (<code className="bg-white/10 px-1.5 py-0.5 rounded">base.py</code>). This enforces a unified lifecycle across all community additions:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
          <h4 className="text-[#295cf1] font-medium mb-1">is_configured()</h4>
          <p className="text-xs opacity-50">Validates that all necessary environment variables (like API keys or OAuth tokens) are securely stored in the local <code className="bg-white/10 px-1 rounded">~/.voxkage/.env</code> vault before the tool is ever exposed to the LLM.</p>
        </div>
        <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
          <h4 className="text-[#295cf1] font-medium mb-1">is_package_installed()</h4>
          <p className="text-xs opacity-50">Verifies that any underlying Python dependencies required by the MCP server are correctly installed in the virtual environment.</p>
        </div>
        <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
          <h4 className="text-[#295cf1] font-medium mb-1">setup_interactive()</h4>
          <p className="text-xs opacity-50">Provides a standardized, secure CLI wizard. If a user installs a new plugin, they simply run the setup command. The plugin will securely prompt the user for their API keys (hiding the input) and automatically write them to the encrypted .env vault.</p>
        </div>
        <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
          <h4 className="text-[#295cf1] font-medium mb-1">get_mcp_server_config()</h4>
          <p className="text-xs opacity-50">Automates the final step. It generates the exact JSON block needed to register the new server and injects it into VoxKage's central configuration, making the tool instantly live.</p>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">9.2</span> Current Core Integrations
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        Out of the box, VoxKage ships with several powerful, built-in plugins that demonstrate this architecture:
      </p>
      <div className="flex flex-col gap-2 mt-2">
        <div className="bg-[#111] border border-white/5 px-4 py-3 rounded-lg flex items-center gap-4">
          <GitBranch className="text-white shrink-0" size={18} />
          <div>
            <h4 className="text-white text-sm font-medium">github.py</h4>
            <p className="text-white/60 text-xs">Grants full repository management. VoxKage can clone repos, analyze commit histories, install dependencies automatically based on package managers, and orchestrate pull requests.</p>
          </div>
        </div>
        <div className="bg-[#111] border border-white/5 px-4 py-3 rounded-lg flex items-center gap-4">
          <Mail className="text-emerald-500 shrink-0" size={18} />
          <div>
            <h4 className="text-emerald-500 text-sm font-medium">gmail.py</h4>
            <p className="text-white/60 text-xs">Provides secure Inbox access. VoxKage can read unread mail, summarize threads, draft replies, and send reports, acting as an autonomous executive assistant.</p>
          </div>
        </div>
        <div className="bg-[#111] border border-white/5 px-4 py-3 rounded-lg flex items-center gap-4">
          <Music className="text-green-500 shrink-0" size={18} />
          <div>
            <h4 className="text-green-500 text-sm font-medium">spotify.py & Media Control</h4>
            <p className="text-white/60 text-xs">Bridges the gap between the OS and entertainment, allowing VoxKage to search tracks, manage playlists, and control playback purely through natural language commands.</p>
          </div>
        </div>
        <div className="bg-[#111] border border-white/5 px-4 py-3 rounded-lg flex items-center gap-4">
          <MessageCircle className="text-blue-400 shrink-0" size={18} />
          <div>
            <h4 className="text-blue-400 text-sm font-medium">telegram.py</h4>
            <p className="text-white/60 text-xs">The backbone of the remote control telemetry, allowing bi-directional messaging and file transfer globally.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">9.3</span> Community Extensions via Python Entry-Points
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        VoxKage is built to be a community-driven platform. The plugin registry uses standard Python <code className="bg-white/10 px-1 rounded">entry_points</code> discovery in <code className="bg-white/10 px-1.5 py-0.5 rounded">registry.py</code>.
      </p>
      
      <div className="mt-4 mb-2">
        <div className="bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden font-mono text-[13px]">
          <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-white/40 text-[10px] ml-2 tracking-widest uppercase">voxkage shell</span>
          </div>
          <div className="p-4 flex flex-col gap-3 text-white/80">
            <div>
              <span className="text-[#295cf1] font-bold">~</span> <span className="text-emerald-500">❯</span> <span className="text-white">voxkage plugins</span>
              <div className="text-white/50 mt-1 pl-4">
                [SYSTEM] Detected Active Plugins:<br/>
                - github (v1.2.0) [ACTIVE]<br/>
                - gmail (v2.0.1) [ACTIVE]<br/>
                - spotify (v1.0.0) [ACTIVE]<br/>
                - telegram (v1.0.5) [ACTIVE]
              </div>
            </div>
            <div>
              <span className="text-[#295cf1] font-bold">~</span> <span className="text-emerald-500">❯</span> <span className="text-white">voxkage plugins add aws</span>
              <div className="text-white/50 mt-1 pl-4">
                [REGISTRY] Discovering 'voxkage-plugin-aws' via PyPI...<br/>
                [INSTALL] Downloading dependencies... Done.<br/>
                [SETUP] Please enter your AWS Access Key ID: <span className="text-white/20">********************</span><br/>
                [SYSTEM] AWS plugin configured and live injected to LLM schema.
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Zero-Friction Installation:</strong> A developer anywhere in the world can write a VoxKage plugin (e.g., <code className="bg-white/10 px-1 rounded">voxkage-plugin-aws</code>). They publish it to PyPI (pip).</li>
        <li><strong>Auto-Registration:</strong> When a user runs <code className="bg-white/10 px-1 rounded">pip install voxkage-plugin-aws</code>, VoxKage's registry automatically detects the new entry-point the next time it boots. It prompts the user to run the interactive setup, and instantly, VoxKage gains the ability to manage AWS infrastructure.</li>
        <li><strong>Isolation Guarantee:</strong> Because these community tools run as separate MCP subprocesses, a poorly written community plugin cannot crash the main VoxKage engine or expose the core memory systems to memory leaks.</li>
      </ul>
    </div>
  </div>
);

const FaqItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#111] border border-white/5 rounded-xl overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="font-medium text-white/90 text-[15px] pr-8">{question}</span>
        <ChevronDown 
          size={18} 
          className={`text-[#295cf1] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-[14px] leading-relaxed text-white/60 border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqContent = () => {
  return (
    <div className="flex flex-col gap-10 pb-12">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">10.0</span> For First-Time Users
        </h3>
        <div className="flex flex-col gap-3">
          <FaqItem 
            question="What exactly does 'OS-Living Agentic AI' mean?"
            answer="Traditional AI waits for you to type a prompt, replies with text, and stops. It exists in a vacuum. VoxKage is 'agentic,' meaning it has a goal-oriented execution loop. It lives on your OS, meaning it can read your local files, execute native shell commands, click buttons in a browser, and control your media. You don't ask it how to do something; you ask it to do something."
          />
          <FaqItem 
            question="Is VoxKage safe to run on my personal machine?"
            answer={<>Yes. Because VoxKage has native OS access, we built the Shield Protocol—a non-bypassable middleware that intercepts every command. By default (in Safe Mode), it blocks destructive shell commands (like formatting drives or mass deletion) and prevents the AI from modifying protected system directories like <code className="bg-white/10 px-1 rounded">C:\Windows</code> or <code className="bg-white/10 px-1 rounded">.git</code> folders. Furthermore, any irreversible action (like running a .exe installer or deleting a document) hits a Hard Stop Confirmation Gate, requiring you to type "Yes" before it executes.</>}
          />
          <FaqItem 
            question="Does VoxKage spy on me or upload my personal files?"
            answer={<>No. VoxKage operates strictly locally. The only data sent to the cloud is the specific context required for the LLM to process your current command. Your SOUL memory (your preferences and habits) and your <code className="bg-white/10 px-1 rounded">MEMORY.md</code> (private project notes) are stored entirely locally on your hard drive in encrypted formats. We do not harvest your data for training.</>}
          />
          <FaqItem 
            question="Why does VoxKage sometimes take screenshots of my screen?"
            answer="VoxKage uses screenshots for its Vision Validation Loop. When it interacts with a complex website or needs to verify if a UI button was clicked successfully, it relies on 'sight' rather than unreliable text scraping. It takes a screenshot, analyzes it locally using the multimodal model to confirm its action, and immediately discards the image once verification is complete."
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">10.1</span> For Developers & Power Users
        </h3>
        <div className="flex flex-col gap-3">
          <FaqItem 
            question="How does the Agentic Coding Engine (ACE) handle massive mono-repos without crashing the context window?"
            answer={<>ACE achieves 95% token efficiency using a dual-pronged approach. First, it uses local RAG (Retrieval-Augmented Generation) to semantically index the codebase, pulling only relevant chunks. Second, when navigating files, it uses the <code className="bg-white/10 px-1 rounded">get_code_skeleton</code> tool, which strips out all implementation logic and returns only class names, imports, and function signatures. This allows VoxKage to map a 10,000-line architecture using a fraction of the token context.</>}
          />
          <FaqItem 
            question="Can I turn off the Shield Protocol's Safe Mode?"
            answer={<>Yes. If you need VoxKage to perform deep system configurations or automated refactoring of protected directories, you can open <code className="bg-white/10 px-1 rounded">~/.voxkage/settings.json</code> via the System Tray and set <code className="bg-white/10 px-1 rounded text-[#e11d48]">"safe_mode": false</code>. <br/><br/><span className="text-[#e11d48] font-medium">Warning:</span> This removes the path and regex command gating, granting the LLM root-level execution freedom. Hard Stop confirmation gates for critical deletions remain active, but proceed with extreme caution.</>}
          />
          <FaqItem 
            question="How do I inject my own MCP tools into the Honeycomb?"
            answer={<>The Plugin Ecosystem uses standard Python <code className="bg-white/10 px-1 rounded">entry_points</code>. You can write a Python package inheriting from the <code className="bg-white/10 px-1 rounded">VoxKagePlugin</code> base class. Once installed via pip in VoxKage's environment, the registry automatically discovers it on boot, prompts you for any required API keys securely via the CLI, and dynamically injects the new JSON schema into the main LLM context.</>}
          />
          <FaqItem 
            question="I sent a command via Telegram, but my PC's VoxKage terminal was closed. What happens?"
            answer={<>The lightweight <code className="bg-white/10 px-1 rounded">telegram_watcher.py</code> daemon saves all missed incoming commands to a local <code className="bg-white/10 px-1 rounded">_INBOX_FILE</code>. The next time you launch the main VoxKage terminal, it instantly reads the inbox, catches up on the missed telemetry, and executes the commands you queued up while it was offline.</>}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">10.2</span> Tiers and Accessibility
        </h3>
        <div className="flex flex-col gap-3">
          <FaqItem 
            question="Is VoxKage free to use?"
            answer={<>Yes. VoxKage utilizes the Gemini Free tier models such as Gemini-3-flash, gemini-2.5-flash, gemini-3.1-flash lite preview and even the pro models for the pro users. The daily cap of these models even for a standard user is 1000+ RPD and 60+ RPMs alongside FREE 1 Million Context Window (for more information on the free tier, visit <a href="https://geminicli.com/docs/resources/quota-and-pricing/" target="_blank" rel="noopener noreferrer" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#295cf1] to-blue-400">Gemini CLI</a>). Users can either just authenticate with their google account or they can also go for an google API. The core VoxKage OS framework and the standard plugin ecosystem (GitHub, Telegram, System Tray) are entirely free and open-source. You run it locally on your own hardware.</>}
          />
          <FaqItem 
            question="What are the costs associated with the LLM API?"
            answer="Because VoxKage is an AI which utilizes the Gemini CLI as its interface, users get the free generous limits for the flash and flash lite models. Pro users get the pro models. However, with the ACE coding workflow and optimized agentic actions, VoxKage makes the flash tier models perform equally close with the Pro models."
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">10.3</span> Support & Troubleshooting
        </h3>
        <div className="flex flex-col gap-3">
          <FaqItem 
            question="VoxKage seems stuck in a loop trying to solve a bug. What do I do?"
            answer="If VoxKage encounters an unresolvable error and loops its strategy, you can always issue an explicit STOP command or hit Ctrl+C in the terminal to interrupt the execution."
          />
          <FaqItem 
            question="How do I clear VoxKage's memory if it learned a bad habit?"
            answer={<>You can manually edit the global memory file located at <code className="bg-white/10 px-1 rounded">~/.gemini/GEMINI.md</code> to remove or correct any stored SOUL preferences or habits it may have miscategorized by just asking VoxKage to remove that specific memory.</>}
          />
          <FaqItem 
            question="Where can I report bugs or suggest new MCP plugins?"
            answer={<>Please visit our official <a href="https://github.com/ayushdwivedi001/VoxKage" target="_blank" rel="noopener noreferrer" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-pink-500">GitHub repository</a>.<br/><br/><ul className="list-disc pl-5 flex flex-col gap-1"><li><strong>Bugs:</strong> Use the issue tracker. If your issue involves a blocked command, please include the text from your local <code className="bg-white/10 px-1 rounded">audit_log</code> so we can adjust the Shield Protocol blocklists.</li><li><strong>Plugins:</strong> Use the Discussions tab for proposing new community plugins or sharing MCP servers you have built for the Honeycomb.</li></ul></>}
          />
        </div>
      </div>
    </div>
  );
};

const LicenseContent = () => (
  <div className="flex flex-col gap-10 pb-12">
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">11.0</span> Apache License 2.0
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        VoxKage is proud to be open-source software, properly licensed under the permissive <strong>Apache License, Version 2.0</strong> (January 2004). This grants you immense flexibility to use, modify, and distribute the framework whether you are an individual developer or an enterprise.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-[#ffffff05] border border-emerald-500/20 p-5 rounded-xl shadow-inner flex flex-col gap-3 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/50"></div>
          <h4 className="text-emerald-500 font-medium text-[16px] flex items-center gap-2">
            The Freedom (Permissions)
          </h4>
          <ul className="list-none opacity-80 flex flex-col gap-2 text-[13.5px]">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5">✓</span>
              <span><strong>Commercial Use:</strong> You can use VoxKage for commercial purposes and internally at your company without fees.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5">✓</span>
              <span><strong>Modification:</strong> You can fork the engine, tweak the Agentic Loop, and build your own custom AI solutions on top of the codebase.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5">✓</span>
              <span><strong>Distribution:</strong> You can distribute the original or modified code.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5">✓</span>
              <span><strong>Patent Use:</strong> You receive an express grant of patent rights from contributors.</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#ffffff05] border border-[#e11d48]/20 p-5 rounded-xl shadow-inner flex flex-col gap-3 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#e11d48]/50"></div>
          <h4 className="text-[#e11d48] font-medium text-[16px] flex items-center gap-2">
            The Limitations & Conditions
          </h4>
          <ul className="list-none opacity-80 flex flex-col gap-2 text-[13.5px]">
            <li className="flex items-start gap-2">
              <span className="text-[#e11d48] mt-0.5">✕</span>
              <span><strong>Trademark Use:</strong> You cannot use the "VoxKage" name, logos, or trademarks to endorse your derivative products without explicit permission.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#e11d48] mt-0.5">✕</span>
              <span><strong>Liability:</strong> VoxKage is provided "AS IS". The creators are <strong>not liable</strong> for any damages or data loss caused by autonomous agentic actions (especially if Safe Mode is bypassed).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">ℹ</span>
              <span><strong>Notice & Attribution:</strong> If you distribute modifications, you must include a copy of the Apache 2.0 license, state your changes, and preserve original copyright notices.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-3 mt-4">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">11.1</span> Full License Text & Repository
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        We believe in transparent, community-driven AI. For the complete legal text of the Apache 2.0 license, or to inspect the source code, please visit the official <a href="https://github.com/ayushdwivedi001/VoxKage" target="_blank" rel="noopener noreferrer" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#295cf1] to-blue-400">GitHub/VoxKage</a> repository. 
      </p>
      <div className="mt-4 p-5 rounded-xl bg-[#0a0a0a] border border-white/5 font-mono text-xs text-white/40 overflow-y-auto custom-scrollbar leading-relaxed max-h-[160px]">
        Copyright 2026 Ayush Dwivedi<br/><br/>
        Licensed under the Apache License, Version 2.0 (the "License");<br/>
        you may not use this file except in compliance with the License.<br/>
        You may obtain a copy of the License at<br/><br/>
        http://www.apache.org/licenses/LICENSE-2.0<br/><br/>
        Unless required by applicable law or agreed to in writing, software<br/>
        distributed under the License is distributed on an "AS IS" BASIS,<br/>
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br/>
        See the License for the specific language governing permissions and<br/>
        limitations under the License.
      </div>
    </div>
  </div>
);

export const DOC_CONTENT: Record<string, {
  title: string;
  description: string;
  content: React.FC<{ isDark?: boolean }>;
}> = {
  architecture: {
    title: "Deep Architecture & Execution Engine",
    description: "VoxKage operates natively within the operating system using a custom execution engine, breaking away from traditional chatbot wrappers.",
    content: ArchitectureContent,
  },
  loop: {
    title: "The Agentic Loop",
    description: "The psychology and behavioral execution of VoxKage. A continuous, autonomous Plan-Act-Validate cycle.",
    content: LoopContent,
  },
  honeycomb: {
    title: "MCP Server Honeycomb",
    description: "Decentralized, independent microservices managing core capabilities without monolithic bottlenecks.",
    content: HoneycombContent,
  },
  security: {
    title: "Security & Shield Protocol",
    description: "Because VoxKage operates natively without sandboxes, robust security is paramount.",
    content: SecurityContent,
  },
  ace: {
    title: "Agentic Coding Engine (ACE)",
    description: "A sophisticated subsystem for software development designed for massive token efficiency.",
    content: AceContent,
  },
  vision: {
    title: "Browser & Vision Intelligence",
    description: "Bypasses simple text scraping for deep DOM inspection and multimodal vision loops.",
    content: VisionContent,
  },
  memory: {
    title: "Memory System (SOUL)",
    description: "VoxKage is not amnesic; it learns across sessions using a multi-tiered architecture.",
    content: MemoryContent,
  },
  remote: {
    title: "System Tray & Remote Control",
    description: "Background operation and secure remote interaction.",
    content: RemoteContent,
  },
  plugins: {
    title: "Plugin Ecosystem",
    description: "Extend VoxKage through Python entry-point community plugins.",
    content: PluginsContent,
  },
  faq: {
    title: "FAQ & Support",
    description: "Common questions and troubleshooting.",
    content: FaqContent,
  },
  license: {
    title: "License & Terms",
    description: "Open-source and Apache 2.0 governed.",
    content: LicenseContent,
  }
};
