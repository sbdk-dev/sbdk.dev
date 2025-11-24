# SBDK.dev - Local-First Data & AI Reference Implementations

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/sbdk-dev/sbdk-dev.svg?style=social&label=Star)](https://github.com/sbdk-dev/sbdk-dev)

**A complete open-source ecosystem demonstrating how to build local-first data and AI tools**

This repository serves as both the source code for [sbdk.dev](https://sbdk.dev) and a central hub for exploring five interconnected reference implementations that show how to build a complete local-first analytics platform—from data ingestion to AI-powered insights—all running on your laptop, without cloud dependencies.

---

## How The Ecosystem Fits Together

Each project builds on the foundation to create a complete local-first analytics platform:

```
┌─────────────────────────────────────────────────────────────┐
│  5. knowDB - MCP Integration                                │
│     Connect to AI Assistants (Claude, ChatGPT)              │
└─────────────────────────────────────────────────────────────┘
                              ↑
┌─────────────────────────────────────────────────────────────┐
│  4. Local AI Analyst - Conversational Analytics             │
│     Natural Language → Statistical Insights                 │
└─────────────────────────────────────────────────────────────┘
                              ↑
┌─────────────────────────────────────────────────────────────┐
│  3. Semantic Tracer - Visualization                         │
│     Interactive Lineage Graphs for dbt Models               │
└─────────────────────────────────────────────────────────────┘
                              ↑
┌─────────────────────────────────────────────────────────────┐
│  2. Mallard (local-inference) - Intelligence                │
│     ML/AI in SQL (Predictions, Embeddings, Explainability)  │
└─────────────────────────────────────────────────────────────┘
                              ↑
┌─────────────────────────────────────────────────────────────┐
│  1. SBDK.dev - Foundation                                   │
│     Data Pipelines (DLT + dbt + DuckDB)                     │
└─────────────────────────────────────────────────────────────┘
```

## The Projects

### 1. 🏗️ SBDK.dev - The Foundation

**Repository**: [sbdk-dev/sbdk-dev](https://github.com/sbdk-dev/sbdk-dev) | **Status**: Active

The core framework providing local-first data pipelines with DLT (ingestion), dbt (transformation), and DuckDB (analytics). Everything else builds on this foundation.

**Key Features**:
- **Lightning-Fast Setup**: Install and run in seconds with `uv`
- **100% Local**: No cloud dependencies or complex configuration
- **Complete Pipeline**: Ingestion → Transformation → Analytics in one toolkit
- **Hot Reload**: Automatic re-runs when files change for iterative development

**Use Case**: Start here if you're building data pipelines that need to run locally or learning the modern data stack (DLT, dbt, DuckDB).

### 2. 🧠 Mallard (local-inference) - Intelligence Layer

**Repository**: [sbdk-dev/local-inference](https://github.com/sbdk-dev/local-inference) | **Status**: Archived

A DuckDB extension adding ML/AI capabilities directly in SQL. Run zero-shot predictions, generate embeddings, and get feature importance—all without separate ML infrastructure.

**Key Features**:
- **Zero-Shot ML**: Classification and regression without training
- **SQL Interface**: All functionality exposed as SQL UDFs
- **Rust Performance**: Built as a high-performance DuckDB extension
- **Embeddings & Explainability**: Dense vectors and feature importance

**Use Case**: Add ML capabilities to your data pipelines without complex ML infrastructure. Perfect for prototyping ML features or building "Snowflake Cortex" style analytics locally.

### 3. 🔍 Semantic Tracer - Visualization

**Repository**: [sbdk-dev/semantic-tracer](https://github.com/sbdk-dev/semantic-tracer) | **Status**: Archived

Visualizes dbt semantic layers with interactive lineage graphs. Understand how your metrics, dimensions, and entities connect—all processed locally.

**Key Features**:
- **Interactive Graphs**: React Flow-based visualization of semantic models
- **dbt Integration**: Direct connection to `semantic_models.yml`
- **Tauri Desktop App**: Lightweight Rust backend with web frontend
- **100% Local**: Semantic models and data never leave your machine

**Use Case**: Understand complex dbt projects, document semantic relationships, or build similar visualization tools for data platforms.

### 4. 💬 Local AI Analyst - Conversational Analytics

**Repository**: [sbdk-dev/local-ai-analyst](https://github.com/sbdk-dev/local-ai-analyst) | **Status**: Archived

AI-powered data analyst with statistical rigor. Ask questions in natural language, get answers based on real query results with confidence intervals and significance testing.

**Key Features**:
- **Natural Language Queries**: "What's our conversion rate by plan type?"
- **Statistical Rigor**: Automatic significance testing and confidence intervals
- **Execution-First**: Prevents AI hallucination by running queries first
- **Multi-Query Workflows**: Complex analysis with multiple related queries

**Use Case**: Build conversational analytics tools that prevent AI fabrication through statistical validation and execution-first approaches.

### 5. 🔌 knowDB - Integration Layer

**Repository**: [sbdk-dev/knowDB](https://github.com/sbdk-dev/knowDB) | **Status**: Archived

Connects everything to AI assistants via MCP (Model Context Protocol). Query your data through Claude Desktop or ChatGPT Desktop with automatic dbt model syncing.

**Key Features**:
- **MCP Integration**: Works with Claude Desktop, ChatGPT Desktop, and any MCP client
- **dbt Auto-Sync**: Automatic semantic layer synchronization
- **Natural Language Queries**: Ask questions through your AI assistant
- **Full Local**: All processing happens on your machine

**Use Case**: Learn how to build MCP servers that connect data platforms to AI assistants, or fork to add MCP support to your own tools.

---

## Getting Started

### Option 1: Start with the Foundation

```bash
# Clone and install SBDK.dev
git clone https://github.com/sbdk-dev/sbdk-dev
cd sbdk-dev
pip install -e .
sbdk init my-project
```

### Option 2: Fork Any Project

Each project works standalone. Pick the one that matches your needs:

1. **Building data pipelines?** → Start with [SBDK.dev](https://github.com/sbdk-dev/sbdk-dev)
2. **Adding ML to your database?** → Check out [Mallard](https://github.com/sbdk-dev/local-inference)
3. **Visualizing dbt models?** → Explore [Semantic Tracer](https://github.com/sbdk-dev/semantic-tracer)
4. **Building conversational analytics?** → Fork [Local AI Analyst](https://github.com/sbdk-dev/local-ai-analyst)
5. **Integrating with AI assistants?** → Try [knowDB](https://github.com/sbdk-dev/knowDB)

### Option 3: Use as Learning Material

All projects include:
- Complete, production-quality code
- Comprehensive documentation
- Real-world patterns and best practices
- Examples and test cases

Perfect for learning modern data engineering, Rust, MCP integration, or building local-first tools.

---

## Why These Projects Were Archived

These projects represent complete, proven implementations of local-first data tools. They're archived as reference implementations because:

- **They're Complete**: Each project is production-quality and fully functional
- **They Demonstrate Patterns**: Best practices for local-first, data engineering, and AI integration
- **They're Ready to Fork**: Stable codebases perfect for adaptation and extension
- **They Work Together**: Designed as an ecosystem but each works independently

The goal is to help others build similar tools, not to maintain these specific implementations indefinitely.

---

## Contributing

While the individual projects are archived, we welcome:

- **Bug reports and fixes** for critical issues
- **Documentation improvements** to help others understand the code
- **Showcase your fork**: Open an issue to share what you've built

For new features, please fork the project and build it yourself—that's what these are for!

---

## License

All projects in the SBDK ecosystem are MIT licensed. Use them however you want, commercially or personally, with or without attribution.
