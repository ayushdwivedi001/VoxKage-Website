<div align="center">

  <p align="center">
    <img src="https://raw.githubusercontent.com/ayushdwivedi001/VoxKage/master/assets/VoxKage_Readme.png" alt="VoxKage Showcase Portal" width="100%" style="max-width: 900px; border-radius: 12px; box-shadow: 0 8px 30px rgba(41, 92, 241, 0.4);">
  </p>

  <br>
  <h1>VOXKAGE SHOWCASE PORTAL</h1>
  <h3><i>Official Web & Documentation Hub</i></h3>
  <p><b>A highly interactive, visually optimized Next.js portal showcasing the architecture and operational systems of the VoxKage framework.</b></p>
  <br>

  <p align="center">
    <a href="https://voxkage.vercel.app">
      <img src="https://img.shields.io/badge/Live_Showcase-voxkage.vercel.app-295cf1?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Site">
    </a>
    <a href="https://github.com/ayushdwivedi001/VoxKage">
      <img src="https://img.shields.io/badge/Main_Engine-ayushdwivedi001_/_VoxKage-0ea5e9?style=for-the-badge&logo=github&logoColor=white" alt="Main Repo">
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Framework-Next.js_15_|_React_19-ffffff?style=flat-square&logo=nextdotjs&logoColor=black" alt="Next.js">
    <img src="https://img.shields.io/badge/Styling-Tailwind_CSS-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind">
    <img src="https://img.shields.io/badge/Animations-Framer_Motion-ff007f?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion">
    <img src="https://img.shields.io/badge/Graphics-WebGL_Shader-475569?style=flat-square&logo=opengl&logoColor=white" alt="WebGL Shader">
  </p>

  <br>
  <hr width="100%">
  <br>
</div>

## 🧠 System Architecture Overview

VoxKage is an advanced, autonomous OS-level orchestration framework designed to extend local intelligence and execute workflows natively beyond sandboxed environments. 

This repository houses the code for the official web portal, acting as an interactive control panel and high-fidelity documentation hub. It translates the operational capabilities of the underlying Python engine—including dynamic AST skeleton parsing, named-pipe IPC watchers, local vector store memories, and modular Model Context Protocol (MCP) servers—into an optimized, modern web interface.

---

## 🎨 Visual Design System & UX Architecture

The portal leverages cutting-edge web technologies to deliver a premium, responsive developer interface:

*   **WebGL 2 Grainient Layer**: Displays a dynamic shader background mapping multi-color depth fields to visually represent operational cycles and processing pipelines.
*   **Frosted-Glass Layouts**: Uses responsive glassmorphic cards (`backdrop-blur-2xl bg-white/5 border-white/10`) to secure maximum readability and structure across varying screen sizes.
*   **Performance Telemetry Loaders**: Utilizes a custom linear `0%` to `100%` percentage animation sequence on load wrappers for a clean console boot feel.
*   **Orchestrated Layout Transitions**: Powered by Framer Motion to provide fluid interactive tabs, sidebar drawers, and state transitions.

---

## 🗺️ Interactive Portal Routes

The portal is organized into four core routes:

*   **Landing Page (`/`)**: Technical overview detailing the transition from static sandboxed agents to native system-level capability.
*   **Documentation Console (`/documentation`)**: A state-aware, 11-chapter dashboard covering local memory configurations (SOUL), Tray Daemon locks, Telegram watchers, and dynamic AST skeleton optimizers (saving 95% API costs), equipped with an interactive FAQ search bar and filtering engine.
*   **Plugins Matrix (`/plugins`)**: Displays the 9 codebase-accurate Python MCP integrations (`Gmail`, `Spotify`, `Telegram`, `GitHub`, `Firebase`, `Netlify`, `Supabase`, `ClickHouse`, `Sequential Thinking`) and interactive sandbox code tabs representing setup boilerplates.
*   **Installation Center (`/installation`)**: Linear bootstrap screen documenting automated setup wizards, pipx environments, and source configurations.

---

## 🛠️ Local Development & Deployment

The portal is compiled as a static web application utilizing Next.js static engine.

### Setup Instructions
```bash
# Clone the repository
git clone https://github.com/ayushdwivedi001/VoxKage-Website.git website
cd website

# Install dependencies
npm install

# Start local development server
npm run dev

# Compile optimized production build
npm run build
```

---

## 🔗 Repository Submodule Mapping

This portal is mounted as a Git submodule under the `/website` directory in the [VoxKage Core Engine Repository](https://github.com/ayushdwivedi001/VoxKage). Synchronization workflow maps directly via commit hashes:

```text
VoxKage (Parent Repository)
└── website/ (Git Submodule ──> VoxKage-Website GitHub Repository)
    ├── src/app/
    │   ├── page.tsx (Home Portal)
    │   ├── plugins/page.tsx (Plugins Grid & Boilerplates)
    │   ├── documentation/page.tsx (Interactive Chapters)
    │   └── installation/page.tsx (Setup Telemetry)
    └── README.md (This File)
```

---

<br>
<div align="center">
  <a href="https://github.com/ayushdwivedi001/VoxKage">
    <img src="https://img.shields.io/badge/GitHub_Repository-VoxKage-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository">
  </a>
  <a href="https://www.linkedin.com/in/ayush-dwivedi29/">
    <img src="https://img.shields.io/badge/LinkedIn_Creator-Ayush_Dwivedi-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Creator">
  </a>
</div>
