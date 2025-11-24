# SBDK.dev - Local-First Data & AI Ecosystem

A complete open-source ecosystem demonstrating how to build local-first data and AI tools—from data ingestion to AI-powered insights—all running on your laptop, without cloud dependencies.

---

## 🌟 The Ecosystem

Five interconnected reference implementations showing how to build a complete local-first analytics platform:

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

## 🎯 Why These Projects?

### Complete Stack
Start with raw data, transform it, analyze it with ML, visualize relationships, and query it conversationally—all without cloud dependencies.

### Reference Implementations
Each project is production-quality, fully documented, and demonstrates best practices for local-first development.

### Fork-Friendly
MIT licensed and designed to be adapted. Take what works, modify what doesn't, and build your own tools.

### Proven Patterns
- **Local-first architecture**: Zero cloud dependencies
- **Modern data stack**: DLT, dbt, DuckDB
- **Rust performance**: High-performance native extensions
- **MCP integration**: Connect to AI assistants
- **Statistical rigor**: Execution-first, preventing AI hallucination

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

## 📚 Documentation

- **[Architecture Overview](https://sbdk.dev#architecture)** - How the ecosystem fits together
- **[Getting Started Guide](https://sbdk.dev#getting-started)** - Fork and build your own
- **Individual Project READMEs** - Detailed documentation in each repo
- **[Website](https://sbdk.dev)** - Central hub with guides and examples

---

## 🤝 Contributing

These projects are archived as reference implementations (November 2025). We welcome:

✅ Bug reports for critical issues
✅ Documentation improvements
✅ Security issue reports

For new features, we encourage forking and building your own! Share your forks by opening an issue—we'd love to see what you create.

---

## 📜 License

All projects are **MIT licensed**. Use them however you want, commercially or personally, with or without attribution.

---

## 🔗 Links

- **Website**: [sbdk.dev](https://sbdk.dev)
- **Organization**: [github.com/sbdk-dev](https://github.com/sbdk-dev)
- **Issues**: [Report issues](https://github.com/sbdk-dev/sbdk.dev/issues)

---

## 💡 Philosophy

**Evidence over assumptions** • **Code over documentation** • **Local-first over cloud-dependent** • **Simple over clever** • **Open source over proprietary**

Built to demonstrate how powerful analytics tools can run entirely on your laptop, maintaining complete privacy and control over your data.

---

<div align="center">

**[Explore the Ecosystem](https://sbdk.dev)** • **[View Projects](https://github.com/orgs/sbdk-dev/repositories)** • **[Get Started](https://sbdk.dev#getting-started)**

</div>
