# 🚀 PhoenixCRM

<p align="center">
  <img src="https://img.shields.io/github/license/YOUR_GITHUB_USERNAME/phoenixcrm?style=flat-square" alt="license" />
  <img src="https://img.shields.io/github/package-json/v/YOUR_GITHUB_USERNAME/phoenixcrm?style=flat-square" alt="version" />
  <img src="https://img.shields.io/github/last-commit/YOUR_GITHUB_USERNAME/phoenixcrm?style=flat-square" alt="last commit" />
  <img src="https://img.shields.io/github/issues/YOUR_GITHUB_USERNAME/phoenixcrm?style=flat-square" alt="issues" />
  <img src="https://img.shields.io/github/stars/YOUR_GITHUB_USERNAME/phoenixcrm?style=flat-square" alt="stars" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Tauri-v2-blue?style=flat-square&logo=tauri" alt="Tauri" />
  <img src="https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TailwindCSS-latest-38B2AC?style=flat-square&logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Prisma-ORM-blue?style=flat-square&logo=prisma" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-DB-316192?style=flat-square&logo=postgresql" alt="PostgreSQL" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-macOS%20%7C%20Windows%20%7C%20Linux-black?style=flat-square" alt="Platforms" />
  <img src="https://img.shields.io/badge/Tests-Jest%20%7C%20Cypress-yellow?style=flat-square&logo=jest" alt="Testing" />
</p>


PhoenixCRM is a modern, lightweight, modular CRM application built using **Tauri v2**, **React**, **Vite**, **Tailwind CSS**, **Prisma**, and **PostgreSQL**.

It is designed to be fast, secure, offline-capable, and fully cross-platform, with a flexible architecture suitable for future SaaS expansion.

## 📚 Table of Contents

- [🚀 PhoenixCRM](#-phoenixcrm)
  - [📚 Table of Contents](#-table-of-contents)
  - [📝 Description](#-description)
    - [Demo](#demo)
  - [✨ Features](#-features)
    - [🔐 Core Modules](#-core-modules)
    - [🧑‍🤝‍🧑 CRM Capabilities](#-crm-capabilities)
    - [📊 Optional / Advanced Modules](#-optional--advanced-modules)
    - [🧩 Architectural Approach](#-architectural-approach)
  - [🛠 Tech Stack](#-tech-stack)
  - [⚙️ Installation](#️-installation)
    - [1. Prerequisites](#1-prerequisites)
    - [2. Setup](#2-setup)
      - [1. Clone the repository](#1-clone-the-repository)
      - [2. Install dependencies](#2-install-dependencies)
      - [3. Configure the database (Prisma)](#3-configure-the-database-prisma)
  - [▶️ Usage](#️-usage)
    - [Run the application (Tauri Desktop Mode)](#run-the-application-tauri-desktop-mode)
    - [Run frontend only (Vite development server)](#run-frontend-only-vite-development-server)
  - [📁 Project Structure](#-project-structure)
  - [🧪 Testing](#-testing)
    - [Unit tests (Jest)](#unit-tests-jest)
    - [End-to-End tests (Cypress)](#end-to-end-tests-cypress)
  - [📄 License](#-license)
  - [👥 Credits](#-credits)
  - [🤝 How to Contribute](#-how-to-contribute)

## 📝 Description

PhoenixCRM is a Tauri-based CRM system originally inspired by an Angular CRUD implementation, now completely reimagined using a modern desktop-first architecture.
The system includes customer, project, product, order, and media management features, enhanced with modular expansion capabilities such as sales pipeline and task management.

Its goal is to provide:

- lightning-fast performance
- a secure and lightweight desktop runtime (via Tauri)
- offline-first support
- modular extensibility
- a mobile-first UI
- long-term SaaS scalability

### Demo

(Coming soon — add link here: HREF)

## ✨ Features

### 🔐 Core Modules

- Authentication
- User Settings
- Application Layout
- Shared UI infrastructure

### 🧑‍🤝‍🧑 CRM Capabilities

- Customer / Client management
- Project management
- Product management
- Order management
- Messaging module
- Media storage & management

### 📊 Optional / Advanced Modules

- **Sales** — Kanban-style pipeline
- **Tasks** — task management with statuses

### 🧩 Architectural Approach

- Modular system (every domain lives in `src/modules/`)
- Only the modules included in a user's subscription are loaded
- Unified data layer through Prisma ORM
- PostgreSQL-based centralized database

## 🛠 Tech Stack

| Area            | Technology       |
| --------------- | ---------------- |
| Desktop Runtime | **Tauri v2**     |
| Frontend        | **React + Vite** |
| Styling         | **Tailwind CSS** |
| ORM             | **Prisma**       |
| Database        | **PostgreSQL**   |
| Testing         | Jest, Cypress    |
| Build Tools     | Node.js, Rust    |

## ⚙️ Installation

### 1. Prerequisites

- Node.js (v18+)
- Rust

Install the Tauri CLI:

```bash
cargo install tauri-cli --version 2.0.0-beta.18
```

- PostgreSQL instance
- (Optional) Docker for local PostgreSQL

### 2. Setup

#### 1. Clone the repository

```bash
git clone [YOUR_REPO_URL]
cd phoenixcrm
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Configure the database (Prisma)

- Copy the environment file:

```bash
cp .env.example .env
```

- Update the DATABASE_URL inside .env.

- Initialize the schema:

```bash
npx prisma migrate dev --name init_models
npx prisma generate
```

## ▶️ Usage

### Run the application (Tauri Desktop Mode)

```bash
npm run tauri
```

### Run frontend only (Vite development server)

```bash
npm run dev
```

## 📁 Project Structure

PhoenixCRM follows a modular architecture:

```bash
src/
└── modules/
    ├── Core/        # Auth, Layout, Settings
    ├── Contacts/    # Customer / Client management
    ├── Sales/       # Sales Pipeline (Kanban)
    └── Tasks/       # Task Management
```

This enables:

- clean separation of concerns
- subscription-based module activation
- easier long-term maintenance
- plug-and-play extensibility

## 🧪 Testing

### Unit tests (Jest)

```bash
npm run test:unit
```

### End-to-End tests (Cypress)

Headless:

```bash
npm run test:e2e
```

Interactive:

```bash
npm run test:cypress
```

## 📄 License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

## 👥 Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## 🤝 How to Contribute

If you would like to contribute to this project, or having suggestions, feel free to read the [CONTRIBUTING](CONTRIBUTING.md) documentation and/or the [Contributor Covenant](https://www.contributor-covenant.org/) industry standard.
