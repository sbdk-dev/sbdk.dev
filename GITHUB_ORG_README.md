# SBDK: Local-First Data & AI Development Tools

**Build and test complete data pipelines in 30 seconds. Zero cloud setup, zero Docker, zero cost.**

Five production-ready reference implementations demonstrating how to build local-first data and AI tools—from pipeline sandboxes to ML-in-SQL to conversational analytics.

---

## The Problem We Solve

**Traditional data pipeline development is slow and expensive:**
- Setting up a dev environment takes days (Docker, cloud accounts, configuration)
- Testing requires deploying to cloud infrastructure ($$$)
- Iteration cycles are painfully slow (push → wait → test → repeat)
- Breaking production is expensive and stressful

**SBDK tools run everything locally:**
- Full dev environment in 30 seconds (1 command)
- Test everything safely on your laptop (zero cost)
- Instant iteration cycles (30-second feedback loops)
- Production patterns validated before deployment

---

## Who Should Use These?

### 🛠️ **Data Engineers**
Testing dbt models and data pipelines without cloud infrastructure

**Use SBDK.dev** to get instant local DuckDB + dbt + DLT environment, test transformations, iterate fast

### 🏗️ **Platform Engineers**
Building data tools and evaluating infrastructure patterns

**Study the codebases** to see professional CLI architecture, MCP server patterns, exception handling, testing frameworks

### 📚 **Data Engineering Students**
Learning modern data stack without deployment complexity

**Run working examples** of dbt transformations, DuckDB queries, Rust extensions, AI integrations—all on your laptop

---

## The 5 Projects

**Core Foundation**

### 1. 🏗️ [SBDK.dev](https://github.com/sbdk-dev/sbdk-dev) - Local Pipeline Sandbox
**Get a complete data pipeline running in 30 seconds** | Python | Active

A local development sandbox giving you DuckDB + dbt + DLT in 1 command. No Docker, no cloud, no configuration.

```bash
pip install sbdk-dev
sbdk init my_project && cd my_project
sbdk run  # Data generation → ingestion → transformation
sbdk query "SELECT * FROM orders_daily LIMIT 10"
```

**Solves:** Days of environment setup → 30 seconds. Cloud testing costs → zero. Slow iteration → instant feedback.

→ **[Try SBDK.dev](https://github.com/sbdk-dev/sbdk-dev)**

**Extensions & Enhancements**

### 2. 🧠 [Mallard (local-inference)](https://github.com/sbdk-dev/local-inference) - ML in SQL
**Run ML models directly in your database—no separate infrastructure** | Rust | Archived

DuckDB extension for zero-shot predictions, embeddings, and feature importance. Write SQL, get ML.

```sql
-- Run zero-shot classification in SQL
SELECT predict_category(description) as category FROM products;

-- Generate embeddings
SELECT embed_text(content) as vector FROM documents;
```

**Solves:** Separate ML infrastructure → All in SQL. Model training complexity → Zero-shot inference. Python overhead → Rust performance.

→ **[Explore Mallard](https://github.com/sbdk-dev/local-inference)**

### 3. 🔍 [Semantic Tracer](https://github.com/sbdk-dev/semantic-tracer) - Lineage Visualization
**Understand complex dbt projects with interactive graphs** | Rust + TypeScript | Archived

Desktop app visualizing dbt semantic layers. See how your metrics, dimensions, and entities connect.

- Interactive lineage graphs (React Flow)
- Direct `semantic_models.yml` integration
- Tauri desktop app (fast Rust backend)

**Solves:** Complex dbt projects → Visual understanding. Scattered docs → Interactive exploration. Cloud tools → Local desktop app.

→ **[Explore Semantic Tracer](https://github.com/sbdk-dev/semantic-tracer)**

### 4. 💬 [Local AI Analyst](https://github.com/sbdk-dev/local-ai-analyst) - Conversational Analytics
**Ask data questions in natural language—with statistical rigor** | Python | Archived

AI analyst that runs real queries first, then explains results. No hallucination—just actual data with confidence intervals.

- Natural language → SQL → Results → Statistical analysis
- Execution-first (prevents AI making up answers)
- Automatic significance testing, confidence intervals

**Solves:** AI hallucination → Execution-first validation. Unreliable insights → Statistical rigor. SQL expertise needed → Natural language queries.

→ **[Explore Local AI Analyst](https://github.com/sbdk-dev/local-ai-analyst)**

### 5. 🔌 [knowDB](https://github.com/sbdk-dev/knowDB) - AI Assistant Integration
**Query your data through Claude Desktop or ChatGPT** | Python | Archived

MCP server connecting local data to AI assistants. Ask questions in Claude Desktop, get real query results.

- MCP (Model Context Protocol) server implementation
- Works with Claude Desktop, ChatGPT Desktop, any MCP client
- Auto-sync dbt semantic layer

**Solves:** Separate tools for data/AI → Unified interface. Complex queries → Natural language. Context switching → Query from chat.

→ **[Explore knowDB](https://github.com/sbdk-dev/knowDB)**

**Documentation Hub**

### 6. 🌐 [sbdk.dev](https://github.com/sbdk-dev/sbdk.dev) - This Website
**Central hub with architecture guides and getting started** | Next.js | Active

→ **[Visit sbdk.dev](https://sbdk.dev)** | **[View Source](https://github.com/sbdk-dev/sbdk.dev)**

---

## What You Get From These Projects

**Complete working code** (not tutorials):
- ✅ Run everything locally—no Docker, no cloud accounts
- ✅ See how DLT, dbt, DuckDB, Rust, and MCP actually fit together
- ✅ Production patterns you can adapt (CLI architecture, exception handling, testing)
- ✅ MIT licensed—fork and use however you want

**Technologies & patterns demonstrated:**
- **Local-first data pipelines**: DuckDB + dbt + DLT running on your laptop
- **Professional CLI design**: Typer + Rich + Pydantic with exception hierarchies
- **Rust database extensions**: High-performance DuckDB extensions
- **MCP server patterns**: Connect data tools to AI assistants
- **Desktop apps with Tauri**: Rust backend + React frontend
- **Statistical rigor**: Execution-first AI to prevent hallucination

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
