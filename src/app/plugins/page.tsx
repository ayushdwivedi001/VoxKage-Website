"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Copy, 
  Check, 
  Mail, 
  Music, 
  MessageCircle, 
  GitBranch, 
  Database, 
  Cpu, 
  ExternalLink, 
  Globe, 
  Box,
  Terminal,
  Code2,
  BookOpen,
  Layers,
  Settings,
  HelpCircle,
  FileCode,
  Brain,
  Activity,
  Menu,
  X
} from "lucide-react";
import Link from "next/link";
import Grainient from "@/components/Grainient";

interface PluginInfo {
  id: string;
  name: string;
  command: string;
  description: string;
  category: string;
  status: "Core" | "Community" | "Featured";
  icon: React.ComponentType<{ className?: string }>;
}

const PLUGINS_LIST: PluginInfo[] = [
  {
    id: "gmail",
    name: "Gmail Integration",
    command: "voxkage plugins add gmail",
    description: "Access and query inbox messages, draft automated context-aware replies, and securely send or archive emails.",
    category: "Communication",
    status: "Featured",
    icon: Mail,
  },
  {
    id: "spotify",
    name: "Spotify Controller",
    command: "voxkage plugins add spotify",
    description: "Coordinate music playback, pause/play active tracks, queue audio options, and control playlists via assistant nodes.",
    category: "Media Control",
    status: "Core",
    icon: Music,
  },
  {
    id: "telegram",
    name: "Telegram Bridge",
    command: "voxkage plugins add telegram",
    description: "Establish an interactive remote tunnel. Forward critical system warnings and prompt yes/no approvals via bot command.",
    category: "Remote Link",
    status: "Featured",
    icon: MessageCircle,
  },
  {
    id: "github",
    name: "GitHub Developer Pack",
    command: "voxkage plugins add github",
    description: "Perform system-wide git operations, analyze branches, synchronize repository commits, and monitor active workflows.",
    category: "Development",
    status: "Core",
    icon: GitBranch,
  },
  {
    id: "firebase",
    name: "Firebase Cloud Tools",
    command: "voxkage plugins add firebase",
    description: "Inspect Firestore databases, pull secure environment keys, orchestrate hosting rules, and audit active web assets.",
    category: "Database",
    status: "Community",
    icon: Database,
  },
  {
    id: "netlify",
    name: "Netlify Deployer",
    command: "voxkage plugins add netlify",
    description: "Trigger production builds, manipulate remote config variables, retrieve extension profiles, and fetch build status.",
    category: "Hosting",
    status: "Community",
    icon: Globe,
  },
  {
    id: "supabase",
    name: "Supabase Core Link",
    command: "voxkage plugins add supabase",
    description: "Synchronize PostgreSQL tables, invoke remote edge functions, inspect active database logs, and handle row-level tokens.",
    category: "Database",
    status: "Featured",
    icon: Database,
  },
  {
    id: "clickhouse",
    name: "ClickHouse Analytics",
    command: "voxkage plugins add clickhouse",
    description: "Perform high-speed columnar data queries, parse local server clickstreams, and route log entries to telemetry nodes.",
    category: "Analytics",
    status: "Community",
    icon: Activity,
  },
  {
    id: "sequential-thinking",
    name: "Sequential Thinking",
    command: "voxkage plugins add sequential-thinking",
    description: "Inject modular reasoning loops into active LLM contexts, enabling self-correction, visual mapping, and multi-step thoughts.",
    category: "Optimizer",
    status: "Core",
    icon: Brain,
  },
];

const CODE_EXAMPLES = {
  plugin: `from abc import ABC, abstractmethod
from voxkage.plugins.base import VoxKagePlugin

class CustomMetricsPlugin(VoxKagePlugin):
    """
    Subclasses VoxKagePlugin to retrieve live CPU diagnostics.
    Saves environment settings directly to ~/.voxkage/.env.
    """
    name = "metrics"
    display_name = "Custom OS Metrics"
    description = "Retrieves CPU temperature and memory utilization benchmarks."
    required_env_vars = ["METRICS_API_KEY", "METRICS_SERVER_URL"]
    mcp_server_name = "voxkage-metrics"
    mcp_server_script = "mcp_servers/metrics_server.py"

    def setup_interactive(self) -> bool:
        print("\\n  --- Custom OS Metrics Setup ---")
        api_key = self._prompt("Enter your Metrics API Key")
        url = self._prompt("Enter server URL (e.g., http://localhost:8080)")
        
        if not api_key or not url:
            return False
            
        self._write_env_var("METRICS_API_KEY", api_key)
        self._write_env_var("METRICS_SERVER_URL", url)
        return True`,
        
  pyproject: `[project.entry-points."voxkage.plugins"]
# Registers your plugin to VoxKage dynamic registry.
# Entry format: name = "package.module:ClassName"
metrics = "voxkage_metrics.plugin:CustomMetricsPlugin"`,

  server: `import mcp
from mcp.server.fastmcp import FastMCP
import os

# Initialize FastMCP server
# Mounted dynamically by voxkage on launch
server = FastMCP("voxkage-metrics")

@server.tool()
def get_cpu_diagnostics() -> str:
    """Retrieve system diagnostics (Requires METRICS_API_KEY env)"""
    api_key = os.environ.get("METRICS_API_KEY")
    # Execute native CPU core checks...
    return "CPU Core Temp: 42°C | RAM Util: 34%"
`
};

export default function PluginsPage() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [copiedPlugin, setCopiedPlugin] = useState<string | null>(null);
  const [pageTab, setPageTab] = useState<"catalog" | "developer">("catalog");
  const [devFileTab, setDevFileTab] = useState<"plugin" | "pyproject" | "server">("plugin");
  const [copiedCode, setCopiedCode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let loaderRafId: number;
    let startTimestamp: number | null = null;
    
    const simulateProgress = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      
      let currentProgress = Math.min((elapsed / 1000) * 100, 100);
      setProgress(Math.floor(currentProgress));

      if (currentProgress < 100) {
        loaderRafId = requestAnimationFrame(simulateProgress);
      } else {
        setTimeout(() => setLoading(false), 200);
      }
    };
    loaderRafId = requestAnimationFrame(simulateProgress);
    return () => {
      cancelAnimationFrame(loaderRafId);
    };
  }, []);

  const handleCopyCommand = (pluginId: string, command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedPlugin(pluginId);
    setTimeout(() => setCopiedPlugin(null), 2000);
  };

  const handleCopyCode = () => {
    const textToCopy = CODE_EXAMPLES[devFileTab];
    navigator.clipboard.writeText(textToCopy);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const activeCodeLines = CODE_EXAMPLES[devFileTab].split("\n");

  return (
    <main 
      className="relative w-full min-h-screen bg-[#09090b] text-white flex flex-col items-center justify-start py-16 md:py-24 selection:bg-[#295cf1]/30 overflow-x-hidden"
      style={{ overflowY: loading ? "hidden" : "auto", height: loading ? "100vh" : "auto" }}
    >
      
      {/* ── Seamless Progress Loading Overlay ──────────────── */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#09090b] w-screen h-screen overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            <div className="flex flex-col items-center justify-center gap-5">
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-[10px] tracking-[0.2em] text-white/80"
              >
                {progress}%
              </motion.div>
              <div className="relative w-48 h-[1px] bg-white/10 overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-white transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Seamless Background Grainient Layer ────────────────── */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <Grainient
          color1="#7dafef"
          color2="#29577f"
          color3="#5975ac"
          timeSpeed={2}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={0.5}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
        {/* Sleek Overlay layers for maximum typography readability */}
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[1.5px] z-1" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75 z-1" />
      </div>

      {/* ── Fixed Hamburger Button ─────────────────────────── */}
      {!loading && (
        <div className="fixed top-6 right-6 md:top-10 md:right-12 z-40 pointer-events-auto flex items-center">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white hover:text-[#295cf1] transition-colors bg-black/20 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-2 md:p-0 rounded-lg md:rounded-none"
          >
            <Menu size={24} className="md:w-7 md:h-7" strokeWidth={1.5} />
          </button>
        </div>
      )}

      {/* ── Main Layout Content Container ─────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl px-6 sm:px-8 md:px-16 flex flex-col gap-10">
        
        {/* Navigation back and header layout */}
        <div className="flex flex-col gap-6 md:gap-8 items-start">
          <Link 
            href="/" 
            className="flex items-center gap-2 group text-white/50 hover:text-white transition-colors duration-300 uppercase tracking-widest text-[11px] font-mono"
          >
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter flex items-center gap-3">
                <Box className="w-8 h-8 md:w-12 md:h-12 text-[#7dafef]" />
                Plugins Ecosystem
              </h1>
              <p className="max-w-2xl text-[14px] md:text-[15.5px] leading-relaxed text-white/60 font-light">
                VoxKage features a dynamic, hot-reloadable capability architecture. Install community integrations and extend system operations using the built-in python entry-point modules.
              </p>
            </div>

            {/* Premium Tab Swapper */}
            <div className="flex items-center gap-2 p-1 bg-black/45 border border-white/5 rounded-xl self-start lg:self-end">
              <button
                onClick={() => setPageTab("catalog")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 ${
                  pageTab === "catalog"
                    ? "bg-[#7dafef]/15 text-white border border-[#7dafef]/20 shadow-md shadow-[#7dafef]/5"
                    : "text-white/40 hover:text-[#7dafef]"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                Active Catalog
              </button>
              <button
                onClick={() => setPageTab("developer")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 ${
                  pageTab === "developer"
                    ? "bg-indigo-500/15 text-white border border-indigo-500/20 shadow-md shadow-indigo-500/5"
                    : "text-white/40 hover:text-indigo-400"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                Developer Sandbox
              </button>
            </div>
          </div>
        </div>

        {/* ── TABS RENDERING ───────────────────────────────── */}
        <AnimatePresence mode="wait">
          {pageTab === "catalog" ? (
            <motion.div
              key="catalog"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-10"
            >
              {/* Plugins Card Grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {PLUGINS_LIST.map((plugin, idx) => {
                  const Icon = plugin.icon;
                  const isCopied = copiedPlugin === plugin.id;
                  return (
                    <div
                      key={plugin.id}
                      className="group relative flex flex-col justify-between p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-2xl hover:bg-white/[0.05] hover:border-[#7dafef]/25 hover:shadow-sky-500/5 hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* Accent glow corner */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#7dafef]/15 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl pointer-events-none" />

                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-[#7dafef] group-hover:text-white group-hover:bg-[#7dafef]/10 group-hover:border-[#7dafef]/20 transition-all duration-300 shadow-inner">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex gap-2">
                            <span className="text-[9px] font-mono tracking-widest uppercase text-white/30 border border-white/5 px-2 py-0.5 rounded-md">
                              {plugin.category}
                            </span>
                            <span className={`text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-md ${
                              plugin.status === "Core" 
                                ? "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                                : plugin.status === "Featured"
                                ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                            }`}>
                              {plugin.status}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <h3 className="text-base font-bold text-white group-hover:text-[#7dafef] transition-colors duration-300">
                            {plugin.name}
                          </h3>
                          <p className="text-[13px] leading-relaxed font-light text-white/50 transition-colors duration-300 group-hover:text-white/65">
                            {plugin.description}
                          </p>
                        </div>
                      </div>

                      {/* Inline copy command field */}
                      <div className="mt-6 flex items-center justify-between bg-black/40 border border-white/5 rounded-xl p-2.5 pl-3.5 group-hover:border-[#7dafef]/10 transition-colors duration-300">
                        <code className="text-[11.5px] font-mono text-white/70 tracking-tight font-light overflow-hidden text-ellipsis whitespace-nowrap mr-2 select-all">
                          {plugin.command}
                        </code>
                        <button
                          onClick={() => handleCopyCommand(plugin.id, plugin.command)}
                          className={`flex-shrink-0 p-1.5 rounded-lg border border-transparent transition-all duration-300 hover:scale-105 active:scale-95 ${
                            isCopied 
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                              : "bg-white/[0.02] text-white/40 hover:text-[#7dafef] hover:bg-white/[0.08]"
                          }`}
                          title="Copy command"
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Registry listing panel */}
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-xl shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6 mt-4">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-bold tracking-wide flex items-center gap-2 font-mono text-[#7dafef]">
                    <Terminal className="w-4 h-4" />
                    Registry Listing Control
                  </h3>
                  <p className="text-[13.5px] text-white/50 font-light max-w-2xl leading-relaxed">
                    Want to see which plugins are currently loaded or standby in your system? Run the list command in your terminal to inspect configured environment keys.
                  </p>
                </div>
                
                <div className="flex items-center justify-between bg-black/45 border border-white/5 hover:border-[#7dafef]/20 rounded-xl p-3 pl-4 min-w-[280px] transition-colors duration-300 self-stretch md:self-auto">
                  <code className="text-[13px] font-mono text-white/80 select-all pr-4">
                    voxkage plugins list
                  </code>
                  <button
                    onClick={() => handleCopyCommand("registry-list", "voxkage plugins list")}
                    className={`flex-shrink-0 p-2 rounded-lg border border-transparent transition-all duration-300 hover:scale-105 ${
                      copiedPlugin === "registry-list"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                        : "bg-white/[0.02] text-white/40 hover:text-[#7dafef] hover:bg-white/[0.08]"
                    }`}
                  >
                    {copiedPlugin === "registry-list" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="developer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Left Column: Documentation Guide */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                
                {/* Intro Card */}
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-xl shadow-2xl flex flex-col gap-4">
                  <h3 className="text-lg font-bold flex items-center gap-2 text-indigo-400 font-mono">
                    <BookOpen className="w-4 h-4" />
                    Plugins Architecture
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-white/60 font-light">
                    VoxKage operates on a strictly decoupled **Zero-Overhead Mounting** system. Built-in and community modules do not launch as background sub-servers or consume memory footprints until the user explicitly sets credentials.
                  </p>
                  <p className="text-[13.5px] leading-relaxed text-white/60 font-light">
                    Every integration is represented by an dynamic environment map, loading credentials from the secure local config at <code className="bg-white/10 px-1 py-0.5 rounded text-xs text-indigo-300">~/.voxkage/.env</code>.
                  </p>
                </div>

                {/* Developer Checklist */}
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-xl shadow-2xl flex flex-col gap-4">
                  <h3 className="text-lg font-bold flex items-center gap-2 text-indigo-400 font-mono">
                    <Settings className="w-4 h-4" />
                    How to Create Custom Plugins
                  </h3>
                  <ul className="list-decimal pl-5 text-[13px] leading-relaxed text-white/50 flex flex-col gap-3 font-light">
                    <li>
                      <strong className="text-white font-medium">Extend the Base Class:</strong> Create a Python script inheriting from <code className="text-indigo-300 text-xs">VoxKagePlugin</code> defined in <code className="text-indigo-300 text-xs">base.py</code>.
                    </li>
                    <li>
                      <strong className="text-white font-medium">Define Required Variables:</strong> Declare environment keys (e.g. API keys) in the <code className="text-indigo-300 text-xs">required_env_vars</code> list parameter.
                    </li>
                    <li>
                      <strong className="text-white font-medium">Setup Prompts:</strong> Implement <code className="text-indigo-300 text-xs">setup_interactive()</code> to securely collect credentials in console.
                    </li>
                    <li>
                      <strong className="text-white font-medium">Register Entry Point:</strong> Link the subclass in your project's <code className="text-indigo-300 text-xs">pyproject.toml</code> under the entry points mapping to activate auto-discovery.
                    </li>
                  </ul>
                </div>

                {/* FAQ Help card */}
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-xl shadow-2xl flex flex-col gap-3">
                  <h4 className="text-sm font-bold flex items-center gap-1.5 text-indigo-400 font-mono">
                    <HelpCircle className="w-4 h-4" />
                    Discovery & Hot Reloading
                  </h4>
                  <p className="text-[12.5px] leading-relaxed text-white/45 font-light">
                    VoxKage automatically triggers settings updates on startup by checking PyPI packages registered to the entry points registry. When configured, it mounts the corresponding MCP process schemas directly to your client config.
                  </p>
                </div>

              </div>

              {/* Right Column: Code Editor Mockup */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                
                {/* Code Tabs */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 p-1 bg-black/45 border border-white/5 rounded-xl">
                    <button
                      onClick={() => setDevFileTab("plugin")}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 ${
                        devFileTab === "plugin"
                          ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/10 shadow"
                          : "text-white/30 hover:text-indigo-300"
                      }`}
                    >
                      <FileCode className="w-3.5 h-3.5" />
                      plugin.py
                    </button>
                    <button
                      onClick={() => setDevFileTab("pyproject")}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 ${
                        devFileTab === "pyproject"
                          ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/10 shadow"
                          : "text-white/30 hover:text-indigo-300"
                      }`}
                    >
                      <Settings className="w-3.5 h-3.5" />
                      pyproject.toml
                    </button>
                    <button
                      onClick={() => setDevFileTab("server")}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 ${
                        devFileTab === "server"
                          ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/10 shadow"
                          : "text-white/30 hover:text-indigo-300"
                      }`}
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      mcp_server.py
                    </button>
                  </div>

                  <button 
                    onClick={handleCopyCode}
                    className={`text-[10px] font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 ${
                      copiedCode 
                        ? "text-emerald-400 font-extrabold" 
                        : "text-white/40 hover:text-indigo-400"
                    }`}
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy Boilerplate
                      </>
                    )}
                  </button>
                </div>

                {/* Editor window mockup */}
                <div className="border border-white/10 rounded-2xl overflow-hidden font-mono text-[12.5px] leading-relaxed shadow-2xl bg-[#09090b]">
                  <div className="bg-[#111] px-5 py-3.5 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                      </div>
                      <span className="text-white/30 text-[10px] ml-2 tracking-wider uppercase font-semibold">
                        {devFileTab === "plugin" ? "plugin.py" : devFileTab === "pyproject" ? "pyproject.toml" : "mcp_server.py"} — UTF-8
                      </span>
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-[#7dafef] uppercase font-mono">
                      PYTHON 3.11
                    </span>
                  </div>
                  
                  {/* Lines numbered code area */}
                  <div className="p-5 overflow-y-auto max-h-[500px] custom-scrollbar select-text font-mono text-[13px] leading-relaxed bg-[#06080c]">
                    {activeCodeLines.map((line, idx) => (
                      <div key={idx} className="flex hover:bg-white/5 px-2 py-0.5 rounded transition-colors duration-150">
                        <span className="text-white/20 select-none w-8 text-right pr-4 border-r border-white/5 font-light text-[11px] font-mono">{idx + 1}</span>
                        <span className="pl-4 whitespace-pre flex-1 text-white/70 font-mono tracking-wide">{line || " "}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* ── Hamburger Menu Overlay ──────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[36px] right-[36px] z-50 w-60 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden pointer-events-auto"
          >
            <div className="flex justify-end p-4 border-b border-white/5">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex flex-col py-2">
              {[
                { name: "ABOUT", href: "/" },
                { name: "GITHUB", href: "https://github.com/ayushdwivedi001/VoxKage" },
                { name: "DOCUMENTATION", href: "/documentation" },
                { name: "INSTALLATION", href: "/installation" },
                { name: "PLUGINS", href: "/plugins" },
              ].map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                  className="px-6 py-4 text-xs font-medium tracking-widest text-white/70 hover:text-white hover:bg-white/5 transition-all uppercase font-mono"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
