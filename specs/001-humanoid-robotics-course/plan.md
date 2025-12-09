# Implementation Plan: Humanoid Robotics Textbook (Production Ready)

## Technical Context

- **Platform**: Docusaurus v2.
- **Content**: Markdown with MDX support for interactive components.
- **Tooling**:
    - `Spec-Kit Plus`: To enforce content structure and ensure RAG-friendliness of the markdown files.
    - `Claude Code`: For generating accurate and consistent code snippets and examples across the modules.
- **Hosting**: GitHub Pages, with deployment automated via GitHub Actions.
- **Dependencies**: Node.js (v18+), npm/yarn, Docusaurus.

## Constitution Check

The plan adheres to the constitution. The choice of Docusaurus aligns with the principle of using well-supported, open-source tools. The phased approach ensures a structured and testable implementation.

## Phase 0: Research

Completed. The decision to use GitHub Pages for hosting is documented in `research.md`.

## Phase 1: Design

- **`data-model.md`**: This file will be updated to define the frontmatter for modules and chapters. This will include metadata such as `title`, `description`, `keywords` (for RAG), and `order`.
- **`quickstart.md`**: This document will be updated to provide a comprehensive guide for setting up the Docusaurus project, including installing dependencies, running the development server, and building the site.

## Phase 2: Implementation Tasks

The implementation will be broken down into the following high-level tasks:

1.  **Setup Docusaurus Project**: Initialize a new Docusaurus 'classic' project in a `website` subdirectory.
2.  **Configure Docusaurus**:
    -   Update `docusaurus.config.js` with the course title ("Physical AI & Humanoid Robotics"), tagline, and URL.
    -   Configure the navbar with links to the modules.
    -   Configure the sidebar to reflect the module and chapter structure defined in the specification.
3.  **Create Module 1 Content**:
    -   Create markdown files for each chapter in Module 1.
    -   Use `Spec-Kit Plus` to structure the content and `Claude Code` to generate code snippets for ROS 2.
4.  **Create Module 2 Content**:
    -   Create markdown files for each chapter in Module 2, focusing on Gazebo and Unity.
5.  **Create Module 3 Content**:
    -   Create markdown files for each chapter in Module 3, covering NVIDIA Isaac.
6.  **Create Module 4 Content**:
    -   Create markdown files for each chapter in Module 4, including the VLA concepts and the mini-capstone project.
7.  **Review and Publish**:
    -   Perform a full review of the generated content for clarity, consistency, and accuracy.
    -   Set up a GitHub Actions workflow to build and deploy the Docusaurus site to GitHub Pages on every push to the `main` branch.
    -   Publish the first version of the book.