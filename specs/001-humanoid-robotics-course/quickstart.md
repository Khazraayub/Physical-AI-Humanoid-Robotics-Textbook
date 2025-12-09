# Quickstart: Setting up the Docusaurus Site

This guide provides comprehensive instructions on how to set up the Docusaurus development environment, build the site, and contribute to the content.

## Prerequisites

- **Node.js**: Version 18.0 or higher. You can check your version with `node -v`.
- **npm** or **yarn**: A package manager for Node.js. This guide will use `npm`.

## Setup

1.  **Clone the Repository**:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Navigate to the Website Directory**:
    The Docusaurus project will be located in the `website` subdirectory.
    ```bash
    cd website
    ```

3.  **Install Dependencies**:
    Install all the necessary dependencies for the Docusaurus site.
    ```bash
    npm install
    ```

4.  **Start the Development Server**:
    This command starts a local development server at `http://localhost:3000`.
    ```bash
    npm start
    ```
    The server will automatically reload when you make changes to the content or configuration files.

## Building the Site

To create a static build of the website, ready for deployment, run the following command from the `website` directory:
```bash
npm run build
```
This command generates the static files into a `build` directory. These files can be hosted on any static web hosting service.

## Content Contribution

-   **Structure**: The course content is located in the `docs` directory. Each module is a subdirectory within `docs`.
-   **Creating a New Chapter**: To create a new chapter, add a new Markdown file (`.md`) to the appropriate module directory.
-   **Frontmatter**: Ensure that each new chapter includes the required frontmatter as defined in `data-model.md`.
-   **Code Snippets**: Use `Claude Code` to generate consistent and accurate code snippets.
-   **RAG-Friendliness**: Follow the guidelines from `Spec-Kit Plus` to ensure the content is optimized for RAG systems.