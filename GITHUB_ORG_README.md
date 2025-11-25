# Production-Ready Examples for Building Local-First Data Tools

Five complete, working implementations showing how to build data pipelines, ML-in-SQL, semantic layers, and AI analytics—without cloud dependencies.

**Not tutorials or docs—actual production-quality code you can run, study, and fork.**

---

## Who Should Use These?

### 🛠️ Building Local-First Tools?
Stop piecing together scattered docs. See complete working examples of DLT + dbt + DuckDB pipelines, Rust extensions for DuckDB, MCP server integration, and statistical rigor in AI analytics.

### 📚 Learning Modern Data Stack?
Skip tutorials. Learn from production-quality code showing real architecture patterns, how components connect, error handling, and why tech choices were made.

---

## The 5 Projects

### 1. 🏗️ [SBDK.dev](https://github.com/sbdk-dev/sbdk-dev) - The Foundation
**Data Pipeline Framework** | Python | Active

The core framework providing local-first data pipelines with DLT (ingestion), dbt (transformation), and DuckDB (analytics).

- Lightning-fast setup with `uv`
- 100% local—no cloud dependencies
- Complete ingestion → transformation → analytics toolkit
- Hot reload for iterative development

→ **[Explore SBDK.dev](https://github.com/sbdk-dev/sbdk-dev)**

---

### 2. 🧠 [Mallard (local-inference)](https://github.com/sbdk-dev/local-inference) - Intelligence Layer
**ML/AI in SQL** | Rust | Archived

A DuckDB extension adding ML/AI capabilities directly in SQL. Run zero-shot predictions, generate embeddings, and get feature importance—no separate ML infrastructure.

- Zero-shot ML: Classification and regression without training
- SQL interface: All functionality as SQL UDFs
- Rust performance: Built as a DuckDB extension
- Embeddings & explainability

→ **[Explore Mallard](https://github.com/sbdk-dev/local-inference)**

---

### 3. 🔍 [Semantic Tracer](https://github.com/sbdk-dev/semantic-tracer) - Visualization
**dbt Semantic Layer Visualization** | Rust + TypeScript | Archived

Visualizes dbt semantic layers with interactive lineage graphs. Understand how metrics, dimensions, and entities connect—all processed locally.

- Interactive React Flow graphs
- Direct dbt integration
- Tauri desktop app: Rust backend + web frontend
- 100% local processing

→ **[Explore Semantic Tracer](https://github.com/sbdk-dev/semantic-tracer)**

---

### 4. 💬 [Local AI Analyst](https://github.com/sbdk-dev/local-ai-analyst) - Conversational Analytics
**AI-Powered Data Analysis** | Python | Archived

Ask questions in natural language, get answers based on real query results with statistical rigor. Execution-first approach prevents AI hallucination.

- Natural language queries
- Statistical rigor: Significance testing and confidence intervals
- Execution-first: Runs queries before generating insights
- Multi-query workflows for complex analysis

→ **[Explore Local AI Analyst](https://github.com/sbdk-dev/local-ai-analyst)**

---

### 5. 🔌 [knowDB](https://github.com/sbdk-dev/knowDB) - Integration Layer
**MCP Integration** | Python | Archived

Connects everything to AI assistants via MCP (Model Context Protocol). Query your data through Claude Desktop or ChatGPT Desktop.

- MCP integration: Works with Claude, ChatGPT, and any MCP client
- dbt auto-sync: Automatic semantic layer synchronization
- Natural language queries through AI assistants
- Full local processing

→ **[Explore knowDB](https://github.com/sbdk-dev/knowDB)**

---

## 🏠 Website & Hub

### [sbdk.dev](https://github.com/sbdk-dev/sbdk.dev) - Ecosystem Website
**Next.js Website** | TypeScript | Active

The central hub showcasing the ecosystem with architecture diagrams, getting started guides, and comprehensive documentation.

→ **[Visit sbdk.dev](https://sbdk.dev)** | **[View Source](https://github.com/sbdk-dev/sbdk.dev)**

---

## What You Get

✅ **Complete codebases** that actually run (not toy examples)
✅ **Real architecture patterns** showing how DLT, dbt, DuckDB, and Rust fit together
✅ **Skip months of R&D** with proven patterns for local-first development
✅ **MIT licensed** - fork and adapt however you want

### Technologies Demonstrated
- **Data pipelines**: DLT (ingestion) + dbt (transformation) + DuckDB (analytics)
- **Rust extensions**: High-performance DuckDB extensions for ML/AI
- **MCP integration**: Connect data tools to AI assistants (Claude, ChatGPT)
- **Statistical rigor**: Execution-first AI to prevent hallucination
- **Desktop apps**: Tauri + React Flow for data visualization

---

## 🚀 Getting Started

### Quick Start with SBDK.dev
```bash
git clone https://github.com/sbdk-dev/sbdk-dev
cd sbdk-dev
pip install -e .
sbdk init my-project
```

### Pick Your Project
- **Building data pipelines?** → [SBDK.dev](https://github.com/sbdk-dev/sbdk-dev)
- **Adding ML to your database?** → [Mallard](https://github.com/sbdk-dev/local-inference)
- **Visualizing dbt models?** → [Semantic Tracer](https://github.com/sbdk-dev/semantic-tracer)
- **Building conversational analytics?** → [Local AI Analyst](https://github.com/sbdk-dev/local-ai-analyst)
- **Integrating with AI assistants?** → [knowDB](https://github.com/sbdk-dev/knowDB)

### Learn the Patterns
All projects include complete documentation, real-world examples, and comprehensive test coverage—perfect for learning modern data engineering and local-first development.

---

## Why Archived?

These are **complete, stable reference implementations**—not active products. They're archived because they're *done*: production-quality code demonstrating proven patterns.

Perfect for:
- **Forking** and adapting for your own projects
- **Learning** from real, working code (not tutorials)
- **Understanding** how modern data tools fit together

---

## 🚀 Quick Start

```bash
# Start with the foundation
git clone https://github.com/sbdk-dev/sbdk-dev
cd sbdk-dev
pip install -e .
sbdk init my-project
```

**Or pick a specific project:**
- Data pipelines → [SBDK.dev](https://github.com/sbdk-dev/sbdk-dev)
- ML in SQL → [Mallard](https://github.com/sbdk-dev/local-inference)
- dbt visualization → [Semantic Tracer](https://github.com/sbdk-dev/semantic-tracer)
- AI analytics → [Local AI Analyst](https://github.com/sbdk-dev/local-ai-analyst)
- MCP integration → [knowDB](https://github.com/sbdk-dev/knowDB)

---

## 📚 Learn More

**[→ Visit sbdk.dev](https://sbdk.dev)** for architecture diagrams, use cases, and getting started guides

**[→ Browse all repositories](https://github.com/orgs/sbdk-dev/repositories)** to explore individual projects

---

<sub>MIT Licensed • Open Source • Archived Nov 2025 as reference implementations</sub>

---

<div align="center">

**[Explore the Ecosystem](https://sbdk.dev)** • **[View Projects](https://github.com/orgs/sbdk-dev/repositories)** • **[Get Started](https://sbdk.dev#getting-started)**

</div>
