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
        <span className="text-[#295cf1]">1.0</span> The High-Level System Topology
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        VoxKage is not a simple API wrapper or a chat UI. It is an OS-level middleware that bridges a Large Language Model directly to local hardware and system processes. The system operates on three main pillars: The LLM Engine (Reasoning), the Dispatcher (Routing), and the MCP Servers (Execution).
      </p>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">1.1</span> The Core Reasoning Engine
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        Unlike web-based assistants, VoxKage utilizes the official, locally installed <code className="bg-white/10 px-1.5 py-0.5 rounded text-[#295cf1]">gemini</code> CLI as its brain rather than making standard REST API calls. 
      </p>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Asynchronous Subprocessing:</strong> VoxKage spawns the LLM engine as a continuous, asynchronous background process. This non-blocking design ensures the system tray, Telegram watchers, and IPC pipes remain instantly responsive while the LLM is "thinking."</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">1.2</span> Native Multimodal Pipeline
      </h3>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Bypassing Base64:</strong> Instead of converting massive images or PDFs into bloated Base64 strings (which slows down traditional web apps), VoxKage passes absolute local file paths directly into the CLI's argument flags (e.g., <code className="bg-white/10 px-1.5 py-0.5 rounded">gemini --image C:\path\to\screenshot.png</code>).</li>
        <li><strong>The Advantage:</strong> This allows for instant, native ingestion of local context, making OS-level screen reading and file analysis incredibly fast with zero-latency vision.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">1.3</span> Robust Output Parsing
      </h3>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>The Hallucination Filter:</strong> LLMs naturally want to converse and often wrap valid JSON tool calls in markdown or conversational filler.</li>
        <li><strong>Multi-Strategy Extraction:</strong> VoxKage uses a multi-strategy parser (<code className="bg-white/10 px-1.5 py-0.5 rounded">clean_cli_json</code>) that walks the raw stdout character-by-character to extract only valid JSON objects or arrays, completely ignoring surrounding conversational hallucinations. This guarantees the OS only attempts to execute clean, valid commands.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">1.4</span> Inter-Process Communication (IPC) Backbone
      </h3>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Cross-Environment Talk:</strong> The different components (main terminal, background sub-agents, system tray daemon) communicate flawlessly using advanced OS-level IPC.</li>
        <li><strong>Named Pipes:</strong> On Windows, VoxKage uses Named Pipes that allow external processes (like the Telegram watcher) to securely physically inject text directly into the active terminal's stdin stream, keeping everything perfectly synchronized live.</li>
      </ul>
    </div>
  </div>
);

const LoopContent = () => (
  <div className="flex flex-col gap-10 pb-12">
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">2.0</span> From Chatbot to Autonomous Agent
      </h3>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>The Paradigm Shift:</strong> Traditional AI waits for a prompt, outputs text, and stops. VoxKage is an agent. It receives a high-level goal, executes a step, evaluates the result, and loops continuously until the goal is achieved.</li>
        <li><strong>Persistence:</strong> VoxKage does not execute a linear script. It runs a persistent, recursive execution loop (<code className="bg-white/10 px-1.5 py-0.5 rounded">agentic_loop.py</code>) that operates entirely autonomously once a command is given.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">2.1</span> State Assembly (The Context Phase)
      </h3>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Dynamic Injection:</strong> Before making a decision, VoxKage silently injects the local file system state, project rules (GEMINI.md), active background tasks, and recent learnings (MEMORY.md) into its context window.</li>
        <li><strong>Awareness:</strong> This ensures every single decision is grounded in the current, real-time state of the operating system, not just the original prompt.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">2.2</span> Tool Selection (The Plan Phase)
      </h3>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Intent Parsing:</strong> The engine analyzes the request to determine if it is conversational (chitchat) or actionable (requires OS interaction).</li>
        <li><strong>Strategic Hierarchy:</strong> The LLM is strictly programmed to prefer specific, safe MCP tools (like <code className="bg-white/10 px-1.5 py-0.5 rounded">read_file</code>) over generic, risky shell commands. It formulates a single, atomic action for its current turn.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">2.3</span> The Feedback Loop & Self-Correction
      </h3>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Execution & Capture:</strong> Once the MCP Dispatcher executes a tool, the raw output (success message, file contents, or an error stack trace) is captured.</li>
        <li><strong>The Auto-Reentry:</strong> Instead of crashing or asking the user for help when an error occurs, VoxKage automatically feeds the error output back into itself.</li>
        <li><strong>Self-Correction:</strong> If a command fails (e.g., "Permission Denied"), VoxKage reads the error, adjusts its strategy, and generates a new, corrected tool call autonomously.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">2.4</span> Turn-by-Turn Execution
      </h3>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Atomic Actions:</strong> VoxKage executes exactly one tool per conversational turn. It does not queue multiple tools simultaneously (preventing race conditions and timeouts).</li>
        <li><strong>Sequential Verification:</strong> It performs an action, waits for the result, verifies it succeeded, and only then proceeds to the next step of a complex task.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">2.5</span> The GOAL_MET Sentinel
      </h3>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Knowing When to Stop:</strong> Once the LLM determines that the original user request has been fully satisfied and validated, it outputs a specialized string starting with <code className="bg-white/10 px-1.5 py-0.5 rounded">GOAL_MET:</code>.</li>
        <li><strong>Synthesis:</strong> This acts as a hard break in the agentic loop, stopping further tool execution and triggering the final, concise summary presented to the user.</li>
      </ul>
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
    <div className="w-full bg-[#050505] border border-white/5 rounded-xl p-6 font-mono text-[13px] shadow-2xl relative overflow-hidden flex flex-col">
      {/* Query Bar */}
      <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg mb-8 border border-white/5 shrink-0">
        <Terminal size={16} className="text-[#295cf1] shrink-0" />
        <motion.span 
          initial={{ width: 0, opacity: 0 }} 
          animate={{ width: "auto", opacity: 1 }} 
          transition={{ duration: 1.5, ease: "linear" }}
          className="text-white/80 overflow-hidden whitespace-nowrap"
        >
          search for the latest NEXT JS documentation and updates and send me a word file through my telegram
        </motion.span>
      </div>

      {/* Honeycomb Nodes */}
      <div className="flex flex-col gap-6 relative pl-6 border-l border-white/5 ml-4">
        
        {step >= 1 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-4 relative">
            <div className="absolute -left-[35px] bg-[#050505] border border-white/10 p-1.5 rounded-md">
              <Network size={14} className="text-yellow-500" />
            </div>
            <div className="bg-[#111] border border-white/5 px-4 py-3 rounded-lg w-full">
              <span className="text-yellow-500/80 font-bold tracking-widest text-[10px] uppercase mb-1 block">AGENTIC THINKING // PLAN</span>
              <p className="text-white/60">I need to fetch Next.js docs via browser, compile to word via os_control, and dispatch via telegram server.</p>
            </div>
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-4 relative">
            <div className="absolute -left-[35px] bg-[#050505] border border-white/10 p-1.5 rounded-md">
              <Search size={14} className="text-[#295cf1]" />
            </div>
            <div className="bg-[#111] border border-white/5 px-4 py-3 rounded-lg w-full">
              <span className="text-[#295cf1] font-bold tracking-widest text-[10px] uppercase mb-1 block">BROWSER_SERVER.PY // EXECUTE</span>
              <p className="text-white/60">Navigating to nextjs.org/docs... Extracted 4,201 tokens of updated DOM content.</p>
            </div>
          </motion.div>
        )}

        {step >= 3 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-4 relative">
            <div className="absolute -left-[35px] bg-[#050505] border border-white/10 p-1.5 rounded-md">
              <FileEdit size={14} className="text-emerald-500" />
            </div>
            <div className="bg-[#111] border border-white/5 px-4 py-3 rounded-lg w-full">
              <span className="text-emerald-500 font-bold tracking-widest text-[10px] uppercase mb-1 block">FILE_OPS_SERVER.PY // EXECUTE</span>
              <p className="text-white/60">Compiling extracted data... Created 'NextJS_Updates.docx' at C:\Temp.</p>
            </div>
          </motion.div>
        )}

        {step >= 4 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-4 relative">
            <div className="absolute -left-[35px] bg-[#050505] border border-white/10 p-1.5 rounded-md">
              <Send size={14} className="text-purple-500" />
            </div>
            <div className="bg-[#111] border border-white/5 px-4 py-3 rounded-lg w-full">
              <span className="text-purple-500 font-bold tracking-widest text-[10px] uppercase mb-1 block">TELEGRAM_SERVER.PY // EXECUTE</span>
              <p className="text-white/60">Dispatching secure payload over IPC pipe... Message sent successfully.</p>
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
        className="absolute top-4 right-4 text-[10px] text-white/40 hover:text-white uppercase tracking-widest border border-white/10 px-3 py-1 rounded transition-colors z-10"
      >
        Replay
      </button>
    </div>
  );
};

const HoneycombContent = () => {
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
              <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
                <span className="text-[#295cf1]">3.0</span> The Honeycomb Paradigm
              </h3>
              <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
                <li><strong>The Standard:</strong> The Model Context Protocol (MCP) is an open standard for connecting AI models to data sources and tools securely.</li>
                <li><strong>The Metaphor:</strong> VoxKage does not have a massive, monolithic codebase where all tools are tangled together. Its capabilities are separated into highly specialized, isolated "cells" (micro-servers) located in the <code className="bg-white/10 px-1.5 py-0.5 rounded">voxkage/mcp_servers/</code> directory.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
                <span className="text-[#295cf1]">3.1</span> Ephemeral Execution
              </h3>
              <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
                <li><strong>Zero-Idle Overhead:</strong> These servers do not run continuously in the background eating up RAM. VoxKage maintains an incredibly light memory footprint.</li>
                <li><strong>Dynamic stdio Spawning:</strong> When the Agentic Loop decides to use a tool, the MCP Dispatcher dynamically spins up the specific server (e.g., <code className="bg-white/10 px-1.5 py-0.5 rounded">browser_server.py</code>) via standard input/output (stdio), sends the JSON-RPC execution command, captures the result, and immediately terminates the server.</li>
                <li><strong>Schema Injection:</strong> VoxKage automatically reads the schemas of all cells in the Honeycomb at startup and injects them into the LLM's system prompt, keeping it perfectly aware of its capabilities.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
                <span className="text-[#295cf1]">3.2</span> Fault Isolation & Stability
              </h3>
              <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
                <li><strong>Crash Protection:</strong> Because each cell operates as an isolated subprocess, a crash in the browser server cannot crash the main VoxKage engine.</li>
                <li><strong>The Firewall:</strong> The MCP Dispatcher catches the stderr crash log, cleanly closes the dead cell, and passes the error text back to the Agentic Loop for self-correction.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
                <span className="text-[#295cf1]">3.3</span> Anatomy of the Cells
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
                  <h4 className="text-[#295cf1] font-medium mb-1">browser_server.py</h4>
                  <p className="text-sm opacity-60">The Web Interface. Handles Selenium/Playwright orchestration, deep DOM element extraction, and visual viewport states.</p>
                </div>
                <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
                  <h4 className="text-emerald-500 font-medium mb-1">os_control_server.py</h4>
                  <p className="text-sm opacity-60">The Hands. Manages native OS commands, directory traversal, precise file creation/editing, and process management.</p>
                </div>
                <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
                  <h4 className="text-yellow-500 font-medium mb-1">coding_server.py</h4>
                  <p className="text-sm opacity-60">The Developer Brain. Powers the Agentic Coding Engine (ACE) by generating structure skeletons and managing plans.</p>
                </div>
                <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
                  <h4 className="text-purple-500 font-medium mb-1">rag_server.py</h4>
                  <p className="text-sm opacity-60">The Librarian. Handles chunking, embedding, and semantic retrieval, allowing VoxKage to "read" massive repositories.</p>
                </div>
                <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
                  <h4 className="text-cyan-500 font-medium mb-1">memory_server.py</h4>
                  <p className="text-sm opacity-60">The Hippocampus. Manages read/write operations for the SOUL system (user preferences) and the Problem/Solution logs.</p>
                </div>
                <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
                  <h4 className="text-rose-500 font-medium mb-1">task_server.py</h4>
                  <p className="text-sm opacity-60">The Manager. Responsible for spawning, tracking, and killing detached background sub-agents.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
                <span className="text-[#295cf1]">3.4</span> Cross-Cell Orchestration
              </h3>
              <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
                <li><strong>The Synergy:</strong> The Agentic Loop acts as the maestro, seamlessly passing data between completely isolated cells.</li>
                <li><strong>Example Workflow:</strong> VoxKage uses the browser_server to find a GitHub link, the os_control_server to run git clone, the rag_server to index the files, and the coding_server to analyze them. Data flows effortlessly.</li>
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

const SecurityContent = () => (
  <div className="flex flex-col gap-10 pb-12">
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">4.0</span> The Zero-Trust Philosophy
      </h3>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Bare-Metal Execution:</strong> VoxKage does not run inside a restrictive Docker container or virtual machine. To be truly useful, it needs raw, bare-metal access to your native file system, applications, and shell.</li>
        <li><strong>The Problem:</strong> Large Language Models can hallucinate, misunderstand context, or make logical errors. Giving an LLM unrestricted root/admin access is inherently dangerous.</li>
        <li><strong>The Solution:</strong> The Shield Protocol (<code className="bg-white/10 px-1.5 py-0.5 rounded">voxkage/shield.py</code>) acts as a non-bypassable middleware layer. Every single action requested by the Agentic Loop must pass through the Shield before the MCP Dispatcher is allowed to execute it.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">4.1</span> Multi-Layered Defense System
      </h3>
      <p className="opacity-70 leading-relaxed text-[15px]">
        The Shield uses three distinct gating mechanisms to evaluate actions in real-time:
      </p>
      <div className="grid grid-cols-1 gap-4 mt-2">
        <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
          <h4 className="text-[#295cf1] font-medium mb-1">Layer 1: Path Gating</h4>
          <p className="text-sm opacity-60 mb-2">Before any file operation, the Shield checks the target absolute path.</p>
          <p className="text-xs opacity-50"><code className="bg-white/10 px-1 rounded">shield_gate_path</code> matches the path against a dynamic blocklist. VoxKage is strictly forbidden from mutating critical OS directories (e.g., C:\Windows\System32) and repository history folders (like .git/ or .svn/).</p>
        </div>
        <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
          <h4 className="text-[#295cf1] font-medium mb-1">Layer 2: Command Gating</h4>
          <p className="text-sm opacity-60 mb-2">Intercepts raw command strings sent to the native shell.</p>
          <p className="text-xs opacity-50"><code className="bg-white/10 px-1 rounded">shield_gate_command</code> uses aggressive Regex pattern matching to block globally destructive commands involving bulk deletions (rm -rf /*, del *.*), disk formatting (format C:), or critical registry modifications.</p>
        </div>
        <div className="bg-[#ffffff05] border border-white/5 p-4 rounded-xl shadow-inner">
          <h4 className="text-[#295cf1] font-medium mb-1">Layer 3: Extension Gating</h4>
          <p className="text-sm opacity-60 mb-2">A safeguard specifically for preventing accidental codebase destruction.</p>
          <p className="text-xs opacity-50"><code className="bg-white/10 px-1 rounded">shield_check_delete</code> prevents the deletion of critical source code files or configuration files (e.g., .py, .json, .env) even if the file is in an allowed directory, unless explicitly overridden.</p>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">4.2</span> Hard Stop Confirmation Gates
      </h3>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>The Mechanism:</strong> For sensitive MCP tools like <code className="bg-white/10 px-1.5 py-0.5 rounded">delete_file</code> or <code className="bg-white/10 px-1.5 py-0.5 rounded">run_installer</code>, the tool requires a <code className="bg-white/10 px-1.5 py-0.5 rounded text-[#ff4d4d]">confirmed</code> boolean parameter.</li>
        <li><strong>The Workflow:</strong> The Agentic Loop is forced to call the tool with confirmed=False first. This pauses the loop and presents a security preview to the user. VoxKage must wait for the user to explicitly type "Yes" or "Agreed" before it can call the tool again with confirmed=True.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">4.3</span> Transparent Audit Logging
      </h3>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Accountability:</strong> Because VoxKage operates autonomously, the user must always know what it did while they weren't looking.</li>
        <li><strong>The Log:</strong> Every potentially destructive action—whether executed or blocked—is permanently recorded via the <code className="bg-white/10 px-1.5 py-0.5 rounded">audit_log</code> function into a secure local file, providing a clear, timestamped trail of the AI's physical footprint.</li>
      </ul>
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-medium tracking-wide flex items-center gap-2">
        <span className="text-[#295cf1]">4.4</span> Managing "Safe Mode"
      </h3>
      <ul className="list-disc pl-5 opacity-70 flex flex-col gap-2 mt-2">
        <li><strong>Default State:</strong> VoxKage ships with Safe Mode ON (<code className="bg-white/10 px-1.5 py-0.5 rounded">"safe_mode": true</code>), enforcing maximum strictness across all gating layers.</li>
        <li><strong>Power User Override:</strong> If a developer specifically needs VoxKage to manage system-level configurations, they can manually open <code className="bg-white/10 px-1.5 py-0.5 rounded">~/.voxkage/settings.json</code> and toggle Safe Mode to false.</li>
        <li><strong>The Caveat:</strong> Disabling Safe Mode turns off automatic Path and Command gating, but the Hard Stop Confirmation Gates for running unverified .exe files and deleting data remain active to provide a final safety net.</li>
      </ul>
    </div>
  </div>
);

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
    <div className="w-full bg-[#050505] border border-white/5 rounded-xl p-6 font-mono text-[13px] shadow-2xl relative overflow-hidden flex flex-col min-h-[360px]">
      {/* Query Bar */}
      <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg mb-8 border border-white/5 shrink-0">
        <Terminal size={16} className="text-[#295cf1] shrink-0" />
        <motion.span 
          initial={{ width: 0, opacity: 0 }} 
          animate={{ width: "auto", opacity: 1 }} 
          transition={{ duration: 1.5, ease: "linear" }}
          className="text-white/80 overflow-hidden whitespace-nowrap"
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
        className="absolute top-4 right-4 text-[10px] text-white/40 hover:text-white uppercase tracking-widest border border-white/10 px-3 py-1 rounded transition-colors z-10"
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
  content: React.FC;
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
