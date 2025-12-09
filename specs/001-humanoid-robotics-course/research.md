# Research: Hosting Platform for Docusaurus Site

## Decision

The Docusaurus site will be hosted on **GitHub Pages**.

## Rationale

GitHub Pages is a free, simple, and well-integrated solution for hosting static sites directly from a GitHub repository. Since the course content is expected to be in a GitHub repository, using GitHub Pages for hosting is a natural choice. It provides a straightforward CI/CD workflow using GitHub Actions to automatically build and deploy the site on every push to the main branch.

## Alternatives Considered

- **Netlify**: A powerful platform for building and deploying web applications and static sites. It offers more features than GitHub Pages, such as serverless functions and identity management, but these are not required for this project.
- **Vercel**: Another excellent platform for hosting frontend applications and static sites, with a strong focus on Next.js (the framework Docusaurus is built on). Like Netlify, it provides more features than are necessary for this project.
