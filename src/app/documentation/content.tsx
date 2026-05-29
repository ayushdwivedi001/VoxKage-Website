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

const AceContent = ({ isDark = true }: { isDark?: boolean }) => {
  const renderCode = (text: string) => (
    <code className={`px-1.5 py-0.5 rounded font-mono text-[13.5px] transition-colors duration-300 ${isDark ? "bg-white/10 text-[#8ba2ff]" : "bg-black/10 text-[#295cf1] font-semibold"}`}>
      {text}
    </code>
  );

  return (
    <div className="flex flex-col gap-10 pb-12">
      <div className="flex flex-col gap-3">
        <p className="opacity-70 leading-relaxed text-[15px] mb-2">
          VoxKage does not just write isolated code snippets; it operates as an autonomous local development lead embedded directly in your repository. The Agentic Coding Engine (ACE) is powered by a dedicated capabilities server ({renderCode("voxkage-coding")}) designed specifically to navigate, map, and surgically refactor sprawling codebases with absolute token efficiency.
        </p>

        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2 mt-4">
          <span className="text-[#295cf1]">5.0</span> The 6-Phase Reasoning Pipeline
        </h3>
        <p className="opacity-70 leading-relaxed text-[15px]">
          ACE forces VoxKage to abandon the unsafe "shoot from the hip" approach common in basic AI wrappers. The capabilities server ({renderCode("coding_server.py")}) enforces a rigorous six-stage reasoning loop:
        </p>
        <ul className="list-decimal pl-5 opacity-70 flex flex-col gap-2 mt-1 text-[14.5px]">
          <li><strong>Phase 0 — Problem Decomposition:</strong> Deconstructs high-level requests into atomic, single-turn developer issues.</li>
          <li><strong>Phase 1 — RAG-First Awareness:</strong> Auto-indexes and queries the local repository vector space prior to reading files.</li>
          <li><strong>Phase 2 — Knowledge Gap Fill:</strong> Utilizes browser automation to fetch external APIs/documentation if unknown APIs are detected.</li>
          <li><strong>Phase 3 — Blueprint Checklist:</strong> Generates a step-by-step markdown task list ({renderCode("active_plan.md")}) detailing the execution path.</li>
          <li><strong>Phase 4 — Execute & Verify:</strong> Operates an iterative execution cycle, validating changes using test suites or shell compiles.</li>
          <li><strong>Phase 5 — Final System Check:</strong> Performs system checks, syntax compilations, and health reports before concluding.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">5.1</span> The 95% Efficiency Breakthrough: Code Skeletons
        </h3>
        <p className="opacity-70 leading-relaxed text-[15px]">
          The biggest bottleneck in AI-driven software development is LLM context windows. Sending a 3,000-line source file into a model just to modify a single method is slow, expensive, and leads to context loss where details are dropped.
        </p>
        <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14.5px]">
          <li><strong>The AST Structural Parser ({renderCode("get_code_skeleton")}):</strong> ACE introduces a proprietary, local abstract syntax parser. Instead of ingestion of massive files, the model queries a skeleton map first.</li>
          <li><strong>Multi-Language Syntactic Stripping:</strong>
            <ul className="list-[circle] pl-5 mt-1 flex flex-col gap-1.5 text-[14px]">
              <li><strong>Python ({renderCode(".py")}):</strong> Leverages the native {renderCode("ast")} module to strip implementation code, extracting imports, class structures, function/async method signatures with return annotations, docstrings, and global uppercase constants.</li>
              <li><strong>JavaScript &amp; TypeScript ({renderCode(".js, .ts, .tsx, .jsx")}):</strong> Employs precise regular expression parsing to map exports, imports, functions, arrow methods, and class hierarchies.</li>
              <li><strong>Styling &amp; Data ({renderCode(".css, .json, .yaml")}):</strong> Extracts stylesheet selectors and parses YAML or JSON top-level keys to represent structure cleanly.</li>
            </ul>
          </li>
          <li><strong>The Result:</strong> Sprawling monoliths are compressed into a compact 40-line structural outline. This saves **over 95% of token context** while providing perfect spatial awareness of imports, files, and signatures.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">5.2</span> The ACE Pre-Flight Protocol
        </h3>
        <p className="opacity-70 leading-relaxed text-[15px]">
          When a coding task is received, ACE triggers an unskippable sequence of MCP tools before editing a single line:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[16px] md:text-[17px] text-[#295cf1] tracking-wide">Step A: Cache-Aware Indexing</h4>
            <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
              Indices are dynamically generated via {renderCode("index_directory")}.
            </p>
            <p className={`text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/50" : "text-[#1a1a1a]/65"}`}>
              To maximize speed, ACE caches indexing times in {renderCode("index_cache.json")}. If a project has been indexed within a 10-minute TTL (Time-To-Live), re-hashing is skipped to ensure near-zero startup lag.
            </p>
          </div>

          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[16px] md:text-[17px] text-[#295cf1] tracking-wide">Step B: Context Retrieval</h4>
            <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
              Code context is loaded using FAISS/ChromaDB via {renderCode("query_rag")}.
            </p>
            <p className={`text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/50" : "text-[#1a1a1a]/65"}`}>
              By querying semantic vector space, ACE fetches relevant file chunks, declarations, and historical problem/solution logs that match the current development goal across the entire repository.
            </p>
          </div>

          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[16px] md:text-[17px] text-[#295cf1] tracking-wide">Step C: Blueprint Creation</h4>
            <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
              Plans are formulated and stored inside {renderCode("active_plan.md")}.
            </p>
            <p className={`text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/50" : "text-[#1a1a1a]/65"}`}>
              Calling {renderCode("coding_thinking")} compiles steps and injects semantic RAG contexts into a persistent log at {renderCode("~\\.voxkage\\data\\brain\\active_plan.md")}, establishing secure short-term session state.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">5.3</span> Iterative Execution &amp; Progress Tracking
        </h3>
        <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14.5px]">
          <li><strong>Surgical File Editing:</strong> Navigates via AST outlines, executing replacements on precise coordinates rather than rewriting entire files to maintain structure.</li>
          <li><strong>Milestone State Management:</strong> After completing each subtask, the model calls {renderCode("update_coding_plan(step_number, status)")}. This updates {renderCode("active_plan.md")}'s overall status (e.g. `COMPLETE`, `IN PROGRESS`, `COMPLETE WITH FAILURES`) and appends logged completions with precise timestamps under the execution log.</li>
          <li><strong>Session Syncing:</strong> Developers and agents inspect plans using {renderCode("get_coding_plan()")}, providing transparent session state recovery even across shell reboots.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">5.4</span> Evolution Tasks: Safe Refactoring
        </h3>
        <p className="opacity-70 leading-relaxed text-[15px]">
          For complex, sweeping, or structural modifications, ACE leverages {renderCode("spawn_evolution_task")} to run safe refactoring campaigns:
        </p>
        <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14.5px]">
          <li><strong>Automated Restores:</strong> Prior to modifications, ACE captures active repository state, auto-generating a secure Git commit or a `.zip` file snapshot of the workspace.</li>
          <li><strong>TDD Loop:</strong> Automatically structures tests, compiles changes, and executes testing commands locally to evaluate compatibility.</li>
          <li><strong>Auto-Rollbacks:</strong> If tests fail repeatedly and cannot be self-healed, ACE abandons modifications and automatically restores the repository to the pristine snapshot, guaranteeing a secure environment that is never left broken.</li>
        </ul>
      </div>
    </div>
  );
};

const VisionContent = ({ isDark = true }: { isDark?: boolean }) => {
  const renderCode = (text: string) => (
    <code className={`px-1.5 py-0.5 rounded font-mono text-[13.5px] transition-colors duration-300 ${isDark ? "bg-white/10 text-[#8ba2ff]" : "bg-black/10 text-[#295cf1] font-semibold"}`}>
      {text}
    </code>
  );

  return (
    <div className="flex flex-col gap-10 pb-12">
      <div className="flex flex-col gap-3">
        <p className="opacity-70 leading-relaxed text-[15px] mb-2">
          VoxKage bridges the gap between static text processing and human-like visual understanding. It interacts with the web both structurally and visually, allowing it to navigate complex modern web applications, bypass anti-bot mechanisms, and empirically validate its own actions through Playwright-driven browser automation and Gemini's vision pipeline.
        </p>

        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2 mt-4">
          <span className="text-[#295cf1]">6.0</span> The Persistent Browser Session
        </h3>
        <p className="opacity-70 leading-relaxed text-[15px]">
          VoxKage maintains a persistent, headless browser instance managed by the stateful Chromium automation server ({renderCode("browser_server.py")}).
        </p>
        <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14.5px]">
          <li><strong>Stateful Tab Lifecycle:</strong> Manages browser tabs statefully. It maintains session cookies, logins, and local state across distinct conversational turns via {renderCode("new_page")}, {renderCode("select_page")}, and {renderCode("list_pages")}.</li>
          <li><strong>Client-Side Rendering (CSR):</strong> Bypasses simple HTML fetchers, waiting for modern JS frameworks (React, Angular, Vue, Next.js) to fully render page graphics and data before interacting.</li>
          <li><strong>Page Emulation:</strong> Simulates custom viewports, mobile environments, network throttling, CPU throttling, and custom geolocations via the {renderCode("emulate")} tool.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">6.1</span> Deep DOM Inspection &amp; JS Execution
        </h3>
        <p className="opacity-70 leading-relaxed text-[15px]">
          When analyzing a layout or scraping data, VoxKage dissects the active document structure without cluttering context window limits:
        </p>
        <div className="grid grid-cols-1 gap-4 mt-2">
          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[16px] md:text-[17px] text-[#295cf1] tracking-wide">Targeted Node Scraping</h4>
            <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
              Isolated elements are queried using CSS selectors via {renderCode("dom_get_elements")}.
            </p>
            <p className={`text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/50" : "text-[#1a1a1a]/65"}`}>
              Instead of dumping the entire cluttered HTML page, this tool returns only specified properties (e.g. innerHTML, class, id, href, textContent) for matches, keeping context highly compressed and readable.
            </p>
          </div>

          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[16px] md:text-[17px] text-[#295cf1] tracking-wide">Aesthetic &amp; Layout Audits</h4>
            <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
              Computed element styles are extracted directly via {renderCode("dom_get_computed_style")}.
            </p>
            <p className={`text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/50" : "text-[#1a1a1a]/65"}`}>
              By reading exact layout dimensions, flexbox details, fonts, color hexes, and animation values, VoxKage can audit layouts, diagnose styling issues, or copy visual components with absolute precision.
            </p>
          </div>

          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[16px] md:text-[17px] text-[#295cf1] tracking-wide">Direct Page Manipulation</h4>
            <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
              Raw JS scripts are evaluated page-wide using {renderCode("dom_execute_js")}.
            </p>
            <p className={`text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/50" : "text-[#1a1a1a]/65"}`}>
              Allows VoxKage to interact with page-level variables, trigger complex state changes, bypass anti-scraping blockers, or extract deeply nested data arrays that are not visible in standard HTML tags.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">6.2</span> High-Fidelity Accessibility Tree Navigation
        </h3>
        <p className="opacity-70 leading-relaxed text-[15px]">
          Unlike standard browser bots that rely on fragile CSS selectors that break constantly when layouts shift, VoxKage acts as a human by operating on a structured Accessibility Tree:
        </p>
        <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14.5px]">
          <li><strong>Structural Snapshotting ({renderCode("take_snapshot")}):</strong> Translates the live webpage into a clean structural tree, mapping interactive elements to unique ID coordinators ({renderCode("uid")}).</li>
          <li><strong>Precise Element Actions:</strong> Clicks, hovers, and entries are executed directly on the tree via {renderCode("click(uid)")}, {renderCode("hover(uid)")}, and {renderCode("fill(uid, value)")}, bypassing shadow DOM and frame limitations.</li>
          <li><strong>Simulated Hardware Inputs:</strong> Executes native keyboard typing, drag-and-drop operations, and key presses (such as Enter or Control shortcuts) via {renderCode("type_text")}, {renderCode("drag")}, and {renderCode("press_key")}.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">6.3</span> The See-Act Multimodal Vision Loop
        </h3>
        <p className="opacity-70 leading-relaxed text-[15px]">
          Text parsers fail when buttons are graphical, layout elements shift, or error modals occur. VoxKage uses real-time visual inspection to self-correct:
        </p>
        <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14.5px]">
          <li><strong>Visual Checkpoints:</strong> After page actions, the system takes a high-resolution viewport screenshot via {renderCode("take_screenshot")} or {renderCode("get_browser_state")}.</li>
          <li><strong>Path perception:</strong> The screenshot path is fed directly to Gemini's vision pipeline, prompting questions: *"Is the target link visible?", "Did the alert modal cover the page?", "Does the UI align properly?"*</li>
          <li><strong>Self-Healing loop:</strong> If vision checks indicate an action failed or an overlay blocks focus, VoxKage automatically rolls back, removes overlays via JS, and tries alternate coordinates until validated.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">6.4</span> Autonomous Acquisition Gating
        </h3>
        <p className="opacity-70 leading-relaxed text-[15px]">
          Finding official packages or downloading high-res imagery is automated and secured via target loops:
        </p>
        <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14.5px]">
          <li><strong>Software Sourcing ({renderCode("find_download_url")}):</strong> Navigates to official directories (e.g. VS Code, Python), extracts download links, filters for your target operating system architecture (`.exe`, `.msi`, `.dmg`, `.deb`), and prepares the installer.</li>
          <li><strong>Lazy-Load Bypassing:</strong> Employs {renderCode("scroll_and_read")} to trigger page scrolling, forcing lazy-loaded images to render, and extracts source links directly using {renderCode("extract_image_urls")}.</li>
          <li><strong>Visual Quality Gates:</strong> Validates downloaded images via the vision pipeline. If an image is watermarked, pixelated, or incorrect, it is auto-deleted and skipped, collecting only pristine files.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
          <span className="text-[#295cf1]">6.5</span> Frontend Pattern Memory
        </h3>
        <p className="opacity-70 leading-relaxed text-[15px]">
          By coupling DOM extraction with computed styling audits, VoxKage acts as a local frontend crawler:
        </p>
        <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14.5px]">
          <li><strong>Visual Pattern Logging ({renderCode("save_frontend_snippet")}):</strong> Autonomously saves beautiful layouts, CSS animations, or custom components into a local frontend directory ({renderCode("frontend_memory.jsonl")}).</li>
          <li><strong>Layout Splicing ({renderCode("search_frontend_snippets")}):</strong> Retrieves saved templates from its knowledge base during new project Refactoring, allowing the agent to write premium, highly responsive code elements learned from the web.</li>
        </ul>
      </div>
    </div>
  );
};

const MemoryMockup = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const outputContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) return;
    if (step >= 5) {
      setIsPlaying(false);
      return;
    }
    const timer = setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 3800);
    return () => clearTimeout(timer);
  }, [step, isPlaying]);

  useEffect(() => {
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTo({
        top: outputContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [step]);

  const handleNext = () => {
    if (step < 5) setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleReplay = () => {
    setStep(0);
    setIsPlaying(true);
  };

  return (
    <div className="w-full bg-[#050505] border border-white/10 rounded-xl p-5 md:p-6 font-mono text-[11.5px] md:text-[13px] shadow-2xl relative overflow-hidden flex flex-col min-h-[510px]">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-5 shrink-0 select-none">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          <span className="text-white/40 text-[10px] md:text-[11px] ml-2 tracking-widest uppercase">voxkage@soul-terminal:~</span>
        </div>
        <div className="flex items-center gap-1 bg-[#111] px-2 py-0.5 rounded border border-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-500 text-[9px] font-bold uppercase tracking-wider">LIVE DAEMON ACTIVE</span>
        </div>
      </div>

      {/* Query Bar */}
      <div className="flex items-start md:items-center gap-3 bg-white/5 px-3 md:px-4 py-3 rounded-lg mb-6 border border-white/5 shrink-0 pr-16 md:pr-20 relative">
        <Terminal size={16} className="text-[#295cf1] shrink-0 mt-0.5 md:mt-0 animate-pulse" />
        <div className="flex flex-col md:flex-row md:items-center gap-1 w-full">
          <span className="text-white/40 shrink-0">agy &gt;</span>
          <span className="text-white/95 whitespace-normal leading-relaxed break-words font-semibold animate-pulse">
            Scaffold a custom analytics dashboard with glassmorphism cards, prune my orphaned Docker volumes, and launch my favorite deep-focus chill soundtrack.
          </span>
        </div>
      </div>

      {/* Terminal Scrolling Output */}
      <div 
        ref={outputContainerRef}
        className="flex-1 flex flex-col gap-5 relative pl-4 md:pl-6 border-l border-white/10 ml-2 md:ml-4 mb-4 select-text max-h-[380px] overflow-y-auto pr-1"
      >
        {step >= 0 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-4 w-full">
            <div className="flex flex-col items-center shrink-0">
              <div className="bg-[#111] border border-white/15 p-2 rounded-lg shadow">
                <Terminal size={13} className="text-white/40" />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1 py-1">
              <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest font-bold">
                <span>[2026-05-29T05:28:02]</span>
                <span className="text-[#295cf1]">Session Init</span>
              </div>
              <p className="text-white/80">Initializing agy orchestration core... Handshaking with Honeycomb cells...</p>
            </div>
          </motion.div>
        )}

        {step >= 1 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-4 w-full">
            <div className="flex flex-col items-center shrink-0">
              <div className="bg-[#111] border border-[#3b82f6]/30 p-2 rounded-lg shadow-md animate-pulse">
                <Database size={13} className="text-[#3b82f6]" />
              </div>
            </div>
            <div className="bg-[#0b0c10] border border-[#295cf1]/20 px-4 py-3 rounded-lg flex-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-2 py-0.5 bg-[#295cf1]/10 text-[#3b82f6] text-[8px] md:text-[9px] rounded-bl-lg font-bold tracking-widest uppercase border-l border-b border-[#295cf1]/15">
                SOUL PROFILE RECALL
              </div>
              <span className="text-[#8ba2ff] font-bold tracking-widest text-[9px] md:text-[10px] uppercase mb-1 block">
                mcp_voxkage-memory_recall_user("profile preferences workspace")
              </span>
              <div className="flex flex-col gap-1 text-[11px] md:text-[12px] text-white/90 font-mono">
                <p className="text-[#27c93f]">✔ MATCH FOUND: <span className="text-white/70">identity.name = "Alex"</span></p>
                <p className="text-[#27c93f]">✔ MATCH FOUND: <span className="text-white/70">identity.location = "San Francisco"</span></p>
                <p className="text-[#27c93f]">✔ MATCH FOUND: <span className="text-white/70">preferences.ambient = "Deep Focus Synthwave"</span></p>
                <p className="text-[#27c93f]">✔ MATCH FOUND: <span className="text-white/70">playlists.synthwave = "spotify:playlist:7eM8Yy9uA2fK1oL4xZ8mY"</span></p>
                <p className="text-[#27c93f]">✔ MATCH FOUND: <span className="text-white/70">preferences.aspect = "21:9 Ultrawide Monitor"</span></p>
              </div>
              <p className="text-white/50 mt-2 text-[10px] md:text-[11px] italic">
                Logs: "Welcome back, Alex. Initializing Ultrawide workspace environment. Retrieving deep-focus profile."
              </p>
            </div>
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-4 w-full">
            <div className="flex flex-col items-center shrink-0">
              <div className="bg-[#111] border border-yellow-500/30 p-2 rounded-lg shadow-md animate-pulse">
                <Terminal size={13} className="text-yellow-500" />
              </div>
            </div>
            <div className="bg-[#0b0c10] border border-yellow-500/20 px-4 py-3 rounded-lg flex-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-2 py-0.5 bg-yellow-500/10 text-yellow-400 text-[8px] md:text-[9px] rounded-bl-lg font-bold tracking-widest uppercase border-l border-b border-yellow-500/15">
                FRONTEND SNIPPET SEARCH
              </div>
              <span className="text-[#ffdf6d] font-bold tracking-widest text-[9px] md:text-[10px] uppercase mb-1 block">
                mcp_voxkage-browser_search_frontend_snippets("glassmorphism cards")
              </span>
              <div className="flex flex-col gap-1 text-[11px] md:text-[12px] text-white/90 font-mono">
                <p className="text-[#27c93f]">✔ MATCH FOUND: <span className="text-white/70">"glassmorphic-metric-panels" (similarity: 0.94)</span></p>
                <p className="text-white/70">Status: Splicing raw HTML + computed flex CSS styles from archived browser audits.</p>
                <p className="text-emerald-400 font-bold">✔ Scaffolded: custom glassmorphism metrics layout written to src/components/Dashboard.tsx.</p>
              </div>
              <p className="text-white/50 mt-2 text-[10px] md:text-[11px] italic">
                Logs: "Integrating custom React Tailwind component and backdrop CSS structures learned from past web scraping archives..."
              </p>
            </div>
          </motion.div>
        )}

        {step >= 3 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-4 w-full">
            <div className="flex flex-col items-center shrink-0">
              <div className="bg-[#111] border border-emerald-500/30 p-2 rounded-lg shadow-md">
                <ShieldCheck size={13} className="text-emerald-500" />
              </div>
            </div>
            <div className="bg-[#0b0c10] border border-emerald-500/20 px-4 py-3 rounded-lg flex-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[8px] md:text-[9px] rounded-bl-lg font-bold tracking-widest uppercase border-l border-b border-emerald-500/15">
                TRUST GATING PASS
              </div>
              <span className="text-[#55ea82] font-bold tracking-widest text-[9px] md:text-[10px] uppercase mb-1 block">
                mcp_voxkage-memory_check_trusted("purge_docker_volumes")
              </span>
              <div className="flex flex-col gap-1 text-[11px] md:text-[12px] text-white/90 font-mono">
                <p className="text-[#27c93f]">✔ STATUS: <span className="text-white/70">trusted</span></p>
                <p className="text-white/70">Reason: "user pre-approved orphaned developer docker volumes cleanup on 2026-04-12"</p>
                <p className="text-[#ffbd2e] text-[10.5px]">⚠ SHIELD PROTOCOL: Hard-stop confirmation gate bypassed securely.</p>
              </div>
              <p className="text-white/50 mt-2 text-[10px] md:text-[11px] italic">
                Logs: "Scanning Docker volumes... Located 3.8 GB orphaned volumes. Registry match: trusted = True. Bypassing prompt and purging..."
              </p>
            </div>
          </motion.div>
        )}

        {step >= 4 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-4 w-full">
            <div className="flex flex-col items-center shrink-0">
              <div className="bg-[#111] border border-[#ff5f56]/30 p-2 rounded-lg shadow-md animate-bounce">
                <HelpCircle size={13} className="text-[#ff5f56]" />
              </div>
            </div>
            <div className="bg-[#0b0c10] border border-[#ff5f56]/20 px-4 py-3 rounded-lg flex-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-2 py-0.5 bg-[#ff5f56]/10 text-[#ff5f56] text-[8px] md:text-[9px] rounded-bl-lg font-bold tracking-widest uppercase border-l border-b border-[#ff5f56]/15">
                HURDLE ENCOUNTERED
              </div>
              <span className="text-[#ff8a84] font-bold tracking-widest text-[9px] md:text-[10px] uppercase mb-1 block">
                mcp_voxkage-memory_log_problem()
              </span>
              <div className="flex flex-col gap-1 text-[11px] md:text-[12px] text-white/90 font-mono">
                <p className="text-[#ff5f56]">✖ EXCEPTION: <span className="text-white/70">SpotifyConnectionException (socket port collision)</span></p>
                <p className="text-white/70">Problem: "Failed to connect to local API client. Port 4370 refused handshake."</p>
                <p className="text-[#3b82f6]">ℹ AUTONOMOUS HIPPOCAMPUS ACTION: Roadblock logged with ID 'mem_9x4c' (unsolved).</p>
              </div>
              <p className="text-white/50 mt-2 text-[10px] md:text-[11px] italic">
                Logs: "Port lock detected. Stashing failure details context. Commencing diagnostic recovery loops..."
              </p>
            </div>
          </motion.div>
        )}

        {step >= 5 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-4 w-full">
            <div className="flex flex-col items-center shrink-0">
              <div className="bg-[#111] border border-[#27c93f]/30 p-2 rounded-lg shadow-md">
                <FileEdit size={13} className="text-[#27c93f]" />
              </div>
            </div>
            <div className="bg-[#0b0c10] border border-[#27c93f]/20 px-4 py-3 rounded-lg flex-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-2 py-0.5 bg-[#27c93f]/10 text-[#27c93f] text-[8px] md:text-[9px] rounded-bl-lg font-bold tracking-widest uppercase border-l border-b border-[#27c93f]/15">
                SELF-HEALED & SOLVED
              </div>
              <span className="text-[#7bf096] font-bold tracking-widest text-[9px] md:text-[10px] uppercase mb-1 block">
                mcp_voxkage-memory_log_solution("mem_9x4c")
              </span>
              <div className="flex flex-col gap-1 text-[11px] md:text-[12px] text-white/90 font-mono">
                <p className="text-[#27c93f]">✔ ACTION: <span className="text-white/70">Executed kill_process("SpotifyHelper.exe") on port 4370</span></p>
                <p className="text-[#27c93f]">✔ RETRY STATE: <span className="text-white/70">Spotify process restarted. Synthwave soundtrack initiated successfully.</span></p>
                <p className="text-white/70">Resolution Logged: "Terminated orphaned Helper socket process, refreshed local connection."</p>
                <p className="text-[#3b82f6]">ℹ Prevention: "Verify port 4370 process status before initializing spotipy API connection."</p>
              </div>
              <p className="text-white/50 mt-2 text-[10px] md:text-[11px] italic">
                Logs: "Port released. Playing Synthwave Focus Soundtrack. Hippocampus problem ID 'mem_9x4c' mutated to SOLVED."
              </p>
            </div>
          </motion.div>
        )}

        {step >= 5 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-4 w-full mt-2">
            <div className="flex flex-col items-center shrink-0">
              <div className="bg-[#111] border border-[#3b82f6]/30 p-2 rounded-lg shadow-md animate-pulse">
                <CheckCircle2 size={13} className="text-[#3b82f6]" />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1 py-1">
              <p className="text-white/90">
                <strong>VOXKAGE:</strong> Custom dashboard scaffolded successfully using your archived glassmorphic component layouts, sir. Cleaned 3.8 GB of orphaned Docker volumes without prompt interruptions (pre-approved in your trusted action registry). I encountered and self-healed a Spotify helper socket freeze, logging a permanent prevention patch to memory, and launched your Deep Focus Synthwave soundtrack. Brain environment stable.
              </p>
              <p className="text-[10px] text-white/30 uppercase tracking-wider mt-1 font-mono">Status: WORKFLOW COMPLETE // 0 ERRORS // 1 AUTO-RESOLVED</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Control Panel (Replay, Back, Next, Progress circles) */}
      <div className="mt-auto pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 select-none shrink-0 text-[10px] md:text-[11px]">
        {/* Step Progress Circles */}
        <div className="flex items-center gap-2">
          {[0, 1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              onClick={() => {
                setStep(s);
                setIsPlaying(false);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                s === step 
                  ? "bg-[#295cf1] scale-125 ring-2 ring-[#295cf1]/30" 
                  : s < step 
                    ? "bg-[#295cf1]/60" 
                    : "bg-white/10 hover:bg-white/20"
              }`}
              title={`Jump to step ${s + 1}`}
            />
          ))}
          <span className="text-white/35 ml-2 uppercase font-mono tracking-widest text-[9px]">Step {step + 1} of 6</span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 font-semibold">
          <button
            onClick={handleBack}
            disabled={step === 0}
            className={`px-3 py-1 rounded border border-white/10 uppercase tracking-widest transition-colors ${
              step === 0 ? "text-white/10 cursor-not-allowed" : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            Back
          </button>
          
          <button
            onClick={togglePlay}
            className="px-3 py-1 rounded border border-[#295cf1]/20 bg-[#295cf1]/10 text-[#3b82f6] hover:bg-[#295cf1]/20 uppercase tracking-widest transition-colors font-bold"
          >
            {isPlaying && step < 5 ? "Pause" : "Play"}
          </button>

          <button
            onClick={handleNext}
            disabled={step === 5}
            className={`px-3 py-1 rounded border border-white/10 uppercase tracking-widest transition-colors ${
              step === 5 ? "text-white/10 cursor-not-allowed" : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            Next
          </button>

          <button 
            onClick={handleReplay}
            className="text-white/40 hover:text-white uppercase tracking-widest border border-white/10 px-3 py-1 rounded transition-colors bg-[#050505]"
          >
            Replay
          </button>
        </div>
      </div>
    </div>
  );
};

const MemoryContent = ({ isDark = true }: { isDark?: boolean }) => {
  const [tab, setTab] = useState<"docs" | "mockup">("docs");

  const renderCode = (text: string) => (
    <code className={`px-1.5 py-0.5 rounded font-mono text-[13.5px] transition-colors duration-300 ${isDark ? "bg-white/10 text-[#8ba2ff]" : "bg-black/10 text-[#295cf1] font-semibold"}`}>
      {text}
    </code>
  );

  return (
    <div className="flex flex-col h-full w-full">
      {/* Internal Tab Switcher */}
      <div className={`flex items-center gap-2 mb-8 w-max p-1 rounded-xl border transition-all duration-300 ${isDark ? "bg-[#111] border-white/5" : "bg-white/55 border-white/60 shadow-sm"}`}>
        <button 
          onClick={() => setTab("docs")} 
          className={`px-6 py-2 rounded-lg text-xs font-medium tracking-widest uppercase transition-all duration-300 ${
            tab === "docs" 
              ? isDark ? "bg-white/10 text-white shadow" : "bg-white text-[#295cf1] shadow-sm border border-[#295cf1]/10" 
              : isDark ? "text-white/50 hover:text-white" : "text-[#1a1a1a]/55 hover:text-[#295cf1]"
          }`}
        >
          Documentation
        </button>
        <button 
          onClick={() => setTab("mockup")} 
          className={`px-6 py-2 rounded-lg text-xs font-medium tracking-widest uppercase transition-all duration-300 ${
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
              <p className={`opacity-70 leading-relaxed text-[15px] mb-2 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                VoxKage is not amnesic. It adapts and learns across sessions using a robust, multi-tiered memory architecture managed by the stateful {renderCode("voxkage-memory")} server cell. This system partitions cognitive storage into two highly optimized paths: the append-only self-healing **Hippocampus** and the permanent, identity-defining user **SOUL profile**.
              </p>

              <h3 className="text-xl font-bold tracking-wide flex items-center gap-2 mt-4 font-mono bg-gradient-to-r from-[#295cf1] to-[#3b82f6] bg-clip-text text-transparent">
                7.0 The SOUL Database (Systemic Observation of User Lifestyle)
              </h3>
              <p className={`opacity-70 leading-relaxed text-[15px] transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                The SOUL database manages the permanent, structured profile of the user. Unlike standard agents that require you to fill out static preference forms, VoxKage listens to your voice and observes your actions to build an adaptive identity record stored locally in {renderCode("~/.voxkage/user_profile.json")}.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
                  <h4 className="font-mono font-bold text-[16px] md:text-[17px] text-[#295cf1] tracking-wide">The Profile Structure</h4>
                  <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
                    SOUL partitions your profile into 5 distinct categories:
                  </p>
                  <ul className={`list-disc pl-5 text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 flex flex-col gap-1.5 ${isDark ? "text-white/60" : "text-[#1a1a1a]/70"}`}>
                    <li><strong>identity:</strong> Name (e.g. Alex), location (e.g. San Francisco), device model (e.g. 21:9 Ultrawide Monitor), gender, and personal references.</li>
                    <li><strong>preferences:</strong> Spotify playlists (e.g. <em>Deep Focus Synthwave</em>), image aspect ratios (21:9 ultrawide), streaming apps (e.g. Netflix), and search fallback configurations.</li>
                    <li><strong>habits:</strong> Behavioral workflows (e.g. daily updates protocol, file searches desktop priority, RAG reindexing).</li>
                    <li><strong>trusted_actions:</strong> A registry of routine actions pre-approved to skip Shield Protocol hard-stops.</li>
                    <li><strong>notes:</strong> Observations logged mid-conversation to keep track of shared tasks and session states.</li>
                  </ul>
                </div>

                <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
                  <h4 className="font-mono font-bold text-[16px] md:text-[17px] text-[#295cf1] tracking-wide">Cognitive Handlers</h4>
                  <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
                    Permanent user facts are governed through autonomous API tools:
                  </p>
                  <ul className={`list-disc pl-5 text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 flex flex-col gap-1.5 ${isDark ? "text-white/60" : "text-[#1a1a1a]/70"}`}>
                    <li><strong>remember_user:</strong> Autonomously captures facts in context (e.g., <em>"I prefer Synthwave Lofi Beats for focus soundtrack"</em>) and updates the profile categories.</li>
                    <li><strong>recall_user:</strong> Dynamically matches keyword queries against the profile, returning a token-budget efficient summary of maximum 12 compact bullets.</li>
                    <li><strong>get_user_profile:</strong> Generates a full text visualization of your entire profile, triggered only when you explicitly ask: <em>"What do you know about me?"</em>.</li>
                    <li><strong>forget_user:</strong> Easily prunes outdated or miscategorized facts from any active category.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold tracking-wide flex items-center gap-2 mt-4 font-mono bg-gradient-to-r from-[#295cf1] to-[#3b82f6] bg-clip-text text-transparent">
                7.1 The Hippocampus: Problem &amp; Solution Logs
              </h3>
              <p className={`opacity-70 leading-relaxed text-[15px] transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                VoxKage is engineered to be a self-correcting entity. When it encounters a system roadblock, network timeout, or tool execution failure, it archives the event and patches its reasoning, ensuring it never makes the same mistake twice.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
                  <h4 className="font-mono font-bold text-[15px] text-[#295cf1] tracking-wide">1. Failure Archiving</h4>
                  <p className={`text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
                    When a tool fails 2+ times or a browser action stalls, VoxKage autonomously runs:
                  </p>
                  <p className="text-[12.5px] leading-relaxed mt-1 mb-1">
                    {renderCode("log_problem(...)")}
                  </p>
                  <p className={`text-[13px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/70"}`}>
                    This logs an unsolved entry containing the target context and attempted methods inside the append-only {renderCode("memory.jsonl")} database with a unique short ID (e.g. <em>mem_8f2b</em>).
                  </p>
                </div>

                <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
                  <h4 className="font-mono font-bold text-[15px] text-[#295cf1] tracking-wide">2. Solution Patches</h4>
                  <p className={`text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
                    Once the hurdle is resolved (by autonomous retry or manual user guidance), VoxKage invokes:
                  </p>
                  <p className="text-[12.5px] leading-relaxed mt-1 mb-1">
                    {renderCode("log_solution(...)")}
                  </p>
                  <p className={`text-[13px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/70"}`}>
                    This mutates the problem's status to <strong>solved</strong>, permanently archiving what worked and outlining future prevention rules to shield the engine from repeating the error.
                  </p>
                </div>

                <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
                  <h4 className="font-mono font-bold text-[15px] text-[#295cf1] tracking-wide">3. Pre-Flight Retrieval</h4>
                  <p className={`text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
                    Before starting complex terminal commands or browser flows, VoxKage proactively calls:
                  </p>
                  <p className="text-[12.5px] leading-relaxed mt-1 mb-1">
                    {renderCode("search_memory(...)")}
                  </p>
                  <p className={`text-[13px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/70"}`}>
                    A pure-Python TF-IDF similarity search calculates vector similarity against historical solved/unsolved problems, shielding it from repeating mistakes.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold tracking-wide flex items-center gap-2 mt-4 font-mono bg-gradient-to-r from-[#295cf1] to-[#3b82f6] bg-clip-text text-transparent">
                7.2 Action Gating &amp; Trusted Registry
              </h3>
              <p className={`opacity-70 leading-relaxed text-[15px] transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                To eliminate tedious prompt fatigue while maintaining absolute control, VoxKage coordinates between its memory database and the **Shield Protocol** using a secure confirmation pre-approval gate registry.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
                  <h4 className="font-mono font-bold text-[16px] md:text-[17px] text-[#295cf1] tracking-wide">Confirmation Overrides</h4>
                  <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
                    Routine operations can be pre-approved via:
                  </p>
                  <p className="text-[12.5px] leading-relaxed mt-1 mb-1">
                    {renderCode("set_trusted_action(action_key, trusted, reason)")}
                  </p>
                  <p className={`text-[13.5px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/70"}`}>
                    When the user says <em>"Stop asking me before clearing temp files"</em>, this writes a trusted record. The hosting engine queries {renderCode("check_trusted(action_key)")} before displaying confirmation prompts. If trusted, it bypasses the gate safely.
                  </p>
                </div>

                <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-[#e11d48]/5 border border-[#e11d48]/10" : "bg-[#e11d48]/5 border border-[#e11d48]/20 shadow-sm"}`}>
                  <h4 className="font-mono font-bold text-[16px] md:text-[17px] text-[#e11d48] tracking-wide">The Untrusted Boundary</h4>
                  <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
                    For safety and integrity, dangerous actions can NEVER be trusted:
                  </p>
                  <ul className={`list-disc pl-5 text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 flex flex-col gap-1.5 ${isDark ? "text-white/60" : "text-[#1a1a1a]/70"}`}>
                    <li>Deleting user files or directories outside designated temp folders.</li>
                    <li>Running third-party desktop application installers from unverified URLs.</li>
                    <li>Sending emails or executing bulk messaging programs.</li>
                  </ul>
                  <p className={`text-[13px] italic mt-1 leading-relaxed transition-colors duration-300 ${isDark ? "text-white/40" : "text-[#1a1a1a]/55"}`}>
                    These actions will ALWAYS require a physical human verification click, regardless of preference settings.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold tracking-wide flex items-center gap-2 mt-4 font-mono bg-gradient-to-r from-[#295cf1] to-[#3b82f6] bg-clip-text text-transparent">
                7.3 Project-Specific &amp; Local Context Boundaries
              </h3>
              <p className={`opacity-70 leading-relaxed text-[15px] transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
                While SOUL memory coordinates global lifestyle context, VoxKage enforces strict, isolated parameters for codebase workspaces, ensuring sensitive project details remain private.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
                  <h4 className="font-mono font-bold text-[16px] md:text-[17px] text-[#295cf1] tracking-wide">GEMINI.md (Workspace Rules)</h4>
                  <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
                    Stored at the root of your project directory:
                  </p>
                  <p className={`text-[13.5px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/70"}`}>
                    This standard markdown file instructs VoxKage on repo-specific architecture patterns, coding guidelines, framework overrides, and project constraints. It is shared across team members and committed to source control to keep developers aligned.
                  </p>
                </div>

                <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
                  <h4 className="font-mono font-bold text-[16px] md:text-[17px] text-[#295cf1] tracking-wide">MEMORY.md (Private Context)</h4>
                  <p className={`text-[15px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
                    Stored securely in your local app configuration at {renderCode("~/.gemini/tmp/")}:
                  </p>
                  <p className={`text-[13.5px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/70"}`}>
                    Acts as a private scratchpad. It caches active workspace variables, private local server ports, developer credentials, and sensitive session details. It is never checked into Git, keeping private configuration separate from the codebase.
                  </p>
                </div>
              </div>
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

const RemoteContent = ({ isDark = true }: { isDark?: boolean }) => {
  const renderCode = (text: string) => (
    <code className={`px-1.5 py-0.5 rounded font-mono text-[13.5px] transition-colors duration-300 ${isDark ? "bg-white/10 text-[#8ba2ff]" : "bg-black/10 text-[#295cf1] font-semibold"}`}>
      {text}
    </code>
  );

  return (
    <div className="flex flex-col gap-10 pb-12">
      <div className="flex flex-col gap-3">
        <p className={`opacity-70 leading-relaxed text-[15px] transition-colors duration-300 ${isDark ? "text-white/80" : "text-[#1a1a1a]/95"}`}>
          VoxKage is not confined to a terminal window that you must keep open on your desktop. It integrates directly into your operating system as an omnipresent daemon, allowing for global control, automated process syncing, and remote telemetry. This architecture ensures VoxKage is always listening and ready to execute, whether you are sitting at your desk or miles away from your PC.
        </p>

        <h3 className="text-xl font-bold tracking-wide flex items-center gap-2 mt-4 font-mono bg-gradient-to-r from-[#295cf1] to-[#3b82f6] bg-clip-text text-transparent">
          8.0 The System Tray Daemon &amp; Explorer Path Hooks
        </h3>
        <p className={`opacity-70 leading-relaxed text-[15px] transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/85"}`}>
          When VoxKage is initialized, it anchors itself in the Windows taskbar as a lightweight, background process manager implemented using the {renderCode("pystray")} library inside {renderCode("tray_app.py")}.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[15px] text-[#295cf1] tracking-wide flex items-center gap-1.5">
              <Cpu size={16} /> Singleton Process Control
            </h4>
            <p className={`text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
              The tray process acts as a system-wide singleton by attempting to bind to a local TCP socket at {renderCode("127.0.0.1:49998")}. If another instance starts up, it immediately exits to prevent overlapping resource conflicts. The daemon is bootstrapped via {renderCode("pythonw")} to run in a completely detached, headless state, eliminating distracting terminal window flashes.
            </p>
          </div>

          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[15px] text-[#295cf1] tracking-wide flex items-center gap-1.5">
              <Terminal size={16} /> Explorer path focus hooks
            </h4>
            <p className={`text-[13.5px] md:text-[14px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
              When launching a terminal session, the tray utilizes {renderCode("win32gui")} and {renderCode("win32com.client")} Shell COM hooks. It queries the active window class. If a user has a File Explorer window active ({renderCode("CabinetWClass")} or {renderCode("ExploreWClass")}), it extracts the folder path ({renderCode("window.Document.Folder.Self.Path")}) and initializes the terminal directly focused in that directory via {renderCode("Set-Location -Path")}.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold tracking-wide flex items-center gap-2 mt-4 font-mono bg-gradient-to-r from-[#295cf1] to-[#3b82f6] bg-clip-text text-transparent">
          8.1 The Native Control Center (Settings GUI)
        </h3>
        <p className={`opacity-70 leading-relaxed text-[15px] transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/85"}`}>
          To provide rapid environment adjustments without the massive memory footprint of Chromium wrappers or heavy PySide frameworks, VoxKage implements a native settings dashboard inside {renderCode("settings_window.py")} powered entirely by standard Python {renderCode("tkinter")}.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[14.5px] text-[#295cf1] tracking-wide flex items-center gap-1.5">
              <Settings size={15} /> Lightweight Architecture
            </h4>
            <p className={`text-[13px] md:text-[13.5px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
              Bypasses webview delays with a process load time of near-zero milliseconds. Implements DPI-awareness settings ({renderCode("SetProcessDpiAwareness")}) and positions its compact matte dark window ({renderCode("380x580")}) anchored precisely at the bottom-right corner of the user's screen offset, resting right next to the system tray.
            </p>
          </div>

          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[14.5px] text-[#295cf1] tracking-wide flex items-center gap-1.5">
              <Hexagon size={15} /> SlideToggle canvas widgets
            </h4>
            <p className={`text-[13px] md:text-[13.5px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
              To mimic high-end modern design libraries, the Control Center overrides native retro Tkinter checkbuttons. It deploys custom canvas coordinates to dynamically draw organic capsule pill toggle tracks, rendering sleek slider animations using custom pixel geometry boundaries.
            </p>
          </div>

          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2.5 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[14.5px] text-[#295cf1] tracking-wide flex items-center gap-1.5">
              <Database size={15} /> Dynamic Variable Syncing
            </h4>
            <p className={`text-[13px] md:text-[13.5px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
              Clicking "Apply" serializes toggle states directly to {renderCode("config.json")} and global settings, dynamically triggering registry updates for boot autostart, Shield Protocol gates, execution sandboxing, Windows banner notification sounds, and terminating inactive processes.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold tracking-wide flex items-center gap-2 mt-4 font-mono bg-gradient-to-r from-[#295cf1] to-[#3b82f6] bg-clip-text text-transparent">
          8.2 The Telegram Daemon &amp; Three-Tier Injection Pipeline
        </h3>
        <p className={`opacity-70 leading-relaxed text-[15px] transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/85"}`}>
          The remote control system runs on a persistent background service managed by {renderCode("telegram_watcher.py")}, completely independent of the tray process to avoid race conditions. It queries updates every 2 seconds via a secure long-poll connection, feeding prompts into a highly resilient **three-tier injection chain**.
        </p>

        <div className="flex flex-col gap-3.5 mt-2">
          <div className={`p-5 rounded-xl transition-all duration-300 ${isDark ? "bg-[#111] border border-white/5" : "bg-white/60 border border-white/60 shadow-sm"} flex items-start gap-4`}>
            <div className={`p-2.5 rounded-lg font-mono text-[13.5px] font-bold ${isDark ? "bg-blue-500/10 text-[#8ba2ff]" : "bg-blue-500/15 text-[#295cf1]"}`}>P1</div>
            <div className="flex flex-col gap-1">
              <h4 className={`text-[15px] font-mono font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-[#295cf1]"}`}>Named Pipe IPC (Zero Interruption)</h4>
              <p className={`text-[13.5px] transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/75"}`}>
                The watcher first attempts to bind to Windows Named Pipe {renderCode("\\\\.\\pipe\\voxkage_ipc")}. If an active VoxKage terminal session is open and listening, the message payload is sent directly via the pipe, allowing instant injection into the active LLM engine's input stream with zero UI focus loss or foreground flashing.
              </p>
            </div>
          </div>

          <div className={`p-5 rounded-xl transition-all duration-300 ${isDark ? "bg-[#111] border border-white/5" : "bg-white/60 border border-white/60 shadow-sm"} flex items-start gap-4`}>
            <div className={`p-2.5 rounded-lg font-mono text-[13.5px] font-bold ${isDark ? "bg-blue-500/10 text-[#8ba2ff]" : "bg-blue-500/15 text-[#295cf1]"}`}>P2</div>
            <div className="flex flex-col gap-1">
              <h4 className={`text-[15px] font-mono font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-[#295cf1]"}`}>PyAutoGUI Clipboard Fallback (Window Targeting)</h4>
              <p className={`text-[13.5px] transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/75"}`}>
                If the Named Pipe is unavailable, the daemon searches window handles ({renderCode("EnumWindows")}) filtering strictly for terminal classes ({renderCode("ConsoleWindowClass")}, {renderCode("PseudoconsoleWindowClass")}, etc.) to prevent mistargeting. It then invokes COM APIs to unlock active window limits ({renderCode("AllowSetForegroundWindow")}), restores window focus, copies the text to the Unicode clipboard, and simulates a rapid {renderCode("Ctrl+V")} + {renderCode("Enter")} sequence.
              </p>
            </div>
          </div>

          <div className={`p-5 rounded-xl transition-all duration-300 ${isDark ? "bg-[#111] border border-white/5" : "bg-white/60 border border-white/60 shadow-sm"} flex items-start gap-4`}>
            <div className={`p-2.5 rounded-lg font-mono text-[13.5px] font-bold ${isDark ? "bg-blue-500/10 text-[#8ba2ff]" : "bg-blue-500/15 text-[#295cf1]"}`}>P3</div>
            <div className="flex flex-col gap-1">
              <h4 className={`text-[15px] font-mono font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-[#295cf1]"}`}>Headless agy Subprocess (Autonomous Remote Mode)</h4>
              <p className={`text-[13.5px] transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/75"}`}>
                If the terminal window is closed, the daemon spawns an isolated background {renderCode("agy")} process with {renderCode("VOXKAGE_ACTIVE=1")} and prepends a critical system directive instruction context. This tells the LLM it is in remote mode, forcing it to route final outputs back to the user via {renderCode("telegram_send_message")}. It enforces a hard **180-second execution timeout ceiling** to guard system resources, reporting timeout alerts if exceeded.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold tracking-wide flex items-center gap-2 mt-4 font-mono bg-gradient-to-r from-[#295cf1] to-[#3b82f6] bg-clip-text text-transparent">
          8.3 Bi-Directional Telemetry &amp; Vision-Tool Integration
        </h3>
        <p className={`opacity-70 leading-relaxed text-[15px] transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/85"}`}>
          Remote control extends far beyond text prompts. VoxKage supports complex multimedia uploads and remote confirmation gating.
        </p>

        <ul className="list-disc pl-5 opacity-70 flex flex-col gap-3.5 mt-2 text-[14.5px] leading-relaxed">
          <li className={`transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
            <strong>Inbound Multimedia Parsing:</strong> The daemon parses stickers, location coordinates, text captions, and contacts. If you send a photo or a document to your Telegram bot, the watcher intercepts it, downloads the attachment to your local storage under {renderCode("~/.voxkage/telegram_downloads/")}, and appends a critical vision tool-calling directive directly to the prompt payload:
            <div className="mt-2 pl-4 border-l-2 border-[#295cf1]/30 font-mono text-[13px] opacity-90 text-[#295cf1]">
              [SYSTEM INSTRUCTION: The user attached a PHOTO. Local path: C:\path\to\image.png] | CRITICAL INSTRUCTION: You MUST use the analyze_specific_file tool (with file_path='...' and query='describe this image') BEFORE you answer!
            </div>
            This seamlessly forces the engine to invoke the multimodal vision MCP server to "read" your physical environment before answering.
          </li>
          <li className={`transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
            <strong>Outbound Media Telemetry:</strong> While executing headless operations, the agent utilizes {renderCode("telegram_send_file")} and {renderCode("telegram_send_report")} to dispatch documents, compressed folders, logs, or detailed markdown summaries directly back to your smartphone.
          </li>
          <li className={`transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
            <strong>Interactive Confirmation Gates:</strong> The engine coordinates with the watcher using {renderCode("telegram_ask_save")}. When performing dangerous operations remotely (e.g. deleting directories), the agent dispatches a confirmation inquiry to your chat, pauses execution, and safely checks for inbound responses ({renderCode("Yes")} or {renderCode("No")}) before executing commands on your computer.
          </li>
        </ul>
      </div>
    </div>
  );
};

const PluginsContent = ({ isDark = true }: { isDark?: boolean }) => {
  const renderCode = (text: string) => (
    <code className={`px-1.5 py-0.5 rounded font-mono text-[13.5px] transition-colors duration-300 ${isDark ? "bg-white/10 text-[#8ba2ff]" : "bg-black/10 text-[#295cf1] font-semibold"}`}>
      {text}
    </code>
  );

  return (
    <div className="flex flex-col gap-10 pb-12">
      <div className="flex flex-col gap-3">
        <p className={`opacity-70 leading-relaxed text-[15px] transition-colors duration-300 ${isDark ? "text-white/80" : "text-[#1a1a1a]/95"}`}>
          For more information, head to the <a href="/plugins" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#295cf1] to-cyan-400 hover:opacity-80 transition-opacity">PLUGINS</a> section.
        </p>
        <p className={`opacity-70 leading-relaxed text-[15px] transition-colors duration-300 ${isDark ? "text-white/80" : "text-[#1a1a1a]/95"}`}>
          VoxKage is not a closed, rigid system. It is a highly scalable platform designed to absorb the world's open-source MCP tools, granting it near-infinite capabilities. VoxKage’s core architecture handles file operations, coding, and browser automation natively. However, the true power of VoxKage lies in its Plugin Ecosystem. By leveraging the open standard of the Model Context Protocol (MCP), VoxKage can seamlessly integrate third-party APIs, external hardware, and community-built skills.
        </p>

        <h3 className="text-xl font-bold tracking-wide flex items-center gap-2 mt-4 font-mono bg-gradient-to-r from-[#295cf1] to-[#3b82f6] bg-clip-text text-transparent">
          9.0 The MCP Integration Layer &amp; Schema Injection
        </h3>
        <p className={`opacity-70 leading-relaxed text-[15px] transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/85"}`}>
          VoxKage does not require complex, hardcoded API integrations in its main codebase. It treats plugins as isolated, plug-and-play MCP servers.
        </p>
        <ul className={`list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
          <li><strong>The Model Context Protocol:</strong> MCP acts as a universal translator. When the community builds an MCP server for a new service (e.g., Slack, Jira, AWS, or local smart home devices), VoxKage can instantly "speak" to it.</li>
          <li><strong>Dynamic Discovery:</strong> You do not need to alter VoxKage's core code to add a capability. When an MCP server is registered in the system, VoxKage automatically reads its JSON schema at startup. It injects the new tool definitions directly into the LLM's system prompt. The LLM instantly knows the tool exists, what arguments it requires, and how to use it.</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold tracking-wide flex items-center gap-2 mt-4 font-mono bg-gradient-to-r from-[#295cf1] to-[#3b82f6] bg-clip-text text-transparent">
          9.1 The VoxKagePlugin Lifecycle Protocol
        </h3>
        <p className={`opacity-70 leading-relaxed text-[15px] transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/85"}`}>
          To ensure stability and a flawless user experience, all VoxKage plugins inherit from a strict, abstract base class ({renderCode("VoxKagePlugin")}) defined inside {renderCode("voxkage/plugins/base.py")}. This enforces a unified lifecycle across all community additions:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[14.5px] text-[#295cf1] tracking-wide">is_configured()</h4>
            <p className={`text-[13px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/75"}`}>
              Validates that all required environment parameters outlined in {renderCode("required_env_vars")} are securely defined inside the local app config vault ({renderCode("~/.voxkage/.env")}) and do not contain generic dummy placeholder keys.
            </p>
          </div>

          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[14.5px] text-[#295cf1] tracking-wide">setup_interactive() &amp; Hot-Swapping</h4>
            <p className={`text-[13px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/75"}`}>
              Spawns a structured CLI wizard. Pasted API keys are kept visible ({renderCode("secret=True")} bypass) to prevent duplicate-paste corruption. Newly added variables are written to the env vault, and instantly invoke {renderCode("load_voxkage_env(force=True)")} to hot-swap tokens in-memory without restarting active terminal sessions.
            </p>
          </div>

          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[14.5px] text-[#295cf1] tracking-wide">is_package_installed()</h4>
            <p className={`text-[13px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/75"}`}>
              A dependency safeguard hook. Verifies that any underlying third-party Python modules or packages required by the plugin's MCP server process are correctly installed in the current virtual environment environment.
            </p>
          </div>

          <div className={`p-5 rounded-xl shadow-inner transition-all duration-300 flex flex-col gap-2 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"}`}>
            <h4 className="font-mono font-bold text-[14.5px] text-[#295cf1] tracking-wide">get_mcp_server_config()</h4>
            <p className={`text-[13px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/75"}`}>
              Compiles the standardized JSON-RPC configuration blocks needed for Client registration. Configures correct Python executable paths, points to specific target scripts within {renderCode("mcp_servers/")}, binds working directories, and sets process trust parameters.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold tracking-wide flex items-center gap-2 mt-4 font-mono bg-gradient-to-r from-[#295cf1] to-[#3b82f6] bg-clip-text text-transparent">
          9.2 Built-in Honeycomb Integrations
        </h3>
        <p className={`opacity-70 leading-relaxed text-[15px] transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/85"}`}>
          Out of the box, VoxKage ships with 9 powerful, built-in plugin modules that showcase this lifecycle architecture:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div className={`p-4 rounded-xl transition-all duration-300 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"} flex gap-3`}>
            <MessageCircle className="text-blue-400 shrink-0 mt-0.5" size={18} />
            <div className="flex flex-col gap-0.5">
              <h4 className={`text-[14px] font-mono font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>telegram.py</h4>
              <p className={`text-[12px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/75"}`}>
                Remote mobile gateway. Coordinates bidirectional file transfers, voice parsing, and conformation gates.
              </p>
            </div>
          </div>

          <div className={`p-4 rounded-xl transition-all duration-300 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"} flex gap-3`}>
            <Mail className="text-emerald-500 shrink-0 mt-0.5" size={18} />
            <div className="flex flex-col gap-0.5">
              <h4 className={`text-[14px] font-mono font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>gmail.py</h4>
              <p className={`text-[12px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/75"}`}>
                Inbox telemetry assistant. Handles reading unread emails, thread digests, drafts, and report dispatching.
              </p>
            </div>
          </div>

          <div className={`p-4 rounded-xl transition-all duration-300 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"} flex gap-3`}>
            <Music className="text-green-500 shrink-0 mt-0.5" size={18} />
            <div className="flex flex-col gap-0.5">
              <h4 className={`text-[14px] font-mono font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>spotify.py</h4>
              <p className={`text-[12px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/75"}`}>
                Media playback bridging. Searches tracks, reads custom scenarios playlists, and manages system players.
              </p>
            </div>
          </div>

          <div className={`p-4 rounded-xl transition-all duration-300 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"} flex gap-3`}>
            <GitBranch className="text-white shrink-0 mt-0.5" size={18} />
            <div className="flex flex-col gap-0.5">
              <h4 className={`text-[14px] font-mono font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>github.py</h4>
              <p className={`text-[12px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/75"}`}>
                Git telemetry leads. Handles direct repo checkouts, AST structural changes, dependency updates, and pull requests.
              </p>
            </div>
          </div>

          <div className={`p-4 rounded-xl transition-all duration-300 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"} flex gap-3`}>
            <Hexagon className="text-orange-500 shrink-0 mt-0.5" size={18} />
            <div className="flex flex-col gap-0.5">
              <h4 className={`text-[14px] font-mono font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>firebase.py</h4>
              <p className={`text-[12px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/75"}`}>
                Cloud dashboard suite. Creates database endpoints, configures SDK files, and deploys production folders.
              </p>
            </div>
          </div>

          <div className={`p-4 rounded-xl transition-all duration-300 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"} flex gap-3`}>
            <Terminal className="text-cyan-400 shrink-0 mt-0.5" size={18} />
            <div className="flex flex-col gap-0.5">
              <h4 className={`text-[14px] font-mono font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>netlify.py</h4>
              <p className={`text-[12px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/75"}`}>
                Static site delivery controller. Integrates project builds, fetches live service states, and performs deployments.
              </p>
            </div>
          </div>

          <div className={`p-4 rounded-xl transition-all duration-300 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"} flex gap-3`}>
            <Database className="text-indigo-400 shrink-0 mt-0.5" size={18} />
            <div className="flex flex-col gap-0.5">
              <h4 className={`text-[14px] font-mono font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>supabase.py</h4>
              <p className={`text-[12px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/75"}`}>
                Serverless database manager. Grants secure SQL configurations, credentials generation, and cost reporting.
              </p>
            </div>
          </div>

          <div className={`p-4 rounded-xl transition-all duration-300 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"} flex gap-3`}>
            <Search className="text-pink-400 shrink-0 mt-0.5" size={18} />
            <div className="flex flex-col gap-0.5">
              <h4 className={`text-[14px] font-mono font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>clickhouse.py</h4>
              <p className={`text-[12px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/75"}`}>
                Analytic data storage management. Operates Clickpipe setups, performs SELECT queries, and generates backups.
              </p>
            </div>
          </div>

          <div className={`p-4 rounded-xl transition-all duration-300 ${isDark ? "bg-white/5 border border-white/5" : "bg-white/45 border border-white/60 shadow-sm"} flex gap-3`}>
            <Cpu className="text-yellow-400 shrink-0 mt-0.5" size={18} />
            <div className="flex flex-col gap-0.5">
              <h4 className={`text-[14px] font-mono font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>thinking.py</h4>
              <p className={`text-[12px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/60" : "text-[#1a1a1a]/75"}`}>
                Multi-stage logical reasoning orchestration. Chains agent thought milestones during complex OS executions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold tracking-wide flex items-center gap-2 mt-4 font-mono bg-gradient-to-r from-[#295cf1] to-[#3b82f6] bg-clip-text text-transparent">
          9.3 Dynamic Discovery &amp; Community Extensions
        </h3>
        <p className={`opacity-70 leading-relaxed text-[15px] transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/85"}`}>
          VoxKage is built to be a community-driven platform. The plugin registry uses standard Python {renderCode("entry_points")} discovery in {renderCode("registry.py")} via {renderCode("importlib.metadata")}.
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
                  - telegram (v1.0.5) [ACTIVE]<br/>
                  - gmail (v2.0.1) [ACTIVE]<br/>
                  - spotify (v1.0.0) [ACTIVE]<br/>
                  - github (v1.2.0) [ACTIVE]<br/>
                  - firebase (v1.0.0) [ACTIVE]<br/>
                  - netlify (v1.0.0) [ACTIVE]<br/>
                  - supabase (v1.0.0) [ACTIVE]<br/>
                  - clickhouse (v1.0.0) [ACTIVE]<br/>
                  - sequential-thinking (v1.1.0) [ACTIVE]
                </div>
              </div>
              <div>
                <span className="text-[#295cf1] font-bold">~</span> <span className="text-emerald-500">❯</span> <span className="text-white">voxkage plugins add supabase</span>
                <div className="text-white/50 mt-1 pl-4">
                  [REGISTRY] Initializing setup for Supabase Plugin...<br/>
                  Please enter your SUPABASE_URL: <span className="text-white/20">https://project.supabase.co</span><br/>
                  Please enter your SUPABASE_KEY: <span className="text-white/20">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...</span><br/>
                  [SYSTEM] Supabase credentials saved to ~/.voxkage/.env vault.<br/>
                  [SYSTEM] Config files regenerated. SUPABASE plugin configured and active.
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className={`list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2 text-[14px] leading-relaxed transition-colors duration-300 ${isDark ? "text-white/70" : "text-[#1a1a1a]/80"}`}>
          <li><strong>Zero-Friction Packaging:</strong> A developer anywhere in the world can write a custom VoxKage plugin (e.g., {renderCode("voxkage-plugin-aws")}). They publish it as a standard package to PyPI. By registering a entry-point named {renderCode("voxkage.plugins")} inside their package metadata, the integration is completely auto-discoverable.</li>
          <li><strong>Importlib.Metadata Discovery:</strong> When a user runs {renderCode("pip install voxkage-plugin-aws")}, VoxKage's engine dynamically queries metadata registries on boot, loads custom plugin classes, and appends them to the active integrations registry without modifying a single line of core code.</li>
          <li><strong>Subprocess Crash Isolation:</strong> Because community plugins are built onto the Honeycomb structure, they are initialized inside isolated background process environments. A memory leak or failure inside a third-party plugin cannot affect the main session.</li>
        </ul>
      </div>
    </div>
  );
};

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
