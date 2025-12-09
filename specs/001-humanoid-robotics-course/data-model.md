# Data Model: Humanoid Robotics Course

This document defines the data model for the Humanoid Robotics Course content. The model is designed to be easily parsed by Docusaurus and optimized for RAG systems.

## Entities

### Module

Represents a top-level section of the course. Each module is a directory containing chapter files.

### Chapter

Represents a single lesson or topic within a module. Each chapter is a Markdown file.

#### Frontmatter

Each chapter's Markdown file will contain a frontmatter block with the following fields:

- **`title`**: (string, required) The title of the chapter (e.g., "ROS 2 Overview").
- **`description`**: (string, optional) A brief description of the chapter's content. Used for SEO and RAG.
- **`keywords`**: (array of string, optional) A list of keywords related to the chapter's content. Used for search and RAG.
- **`order`**: (number, optional) A number that specifies the order of the chapter in the sidebar.

**Example:**
```yaml
---
title: ROS 2 Overview
description: An introduction to the core concepts of the Robot Operating System 2.
keywords: [ROS 2, robotics, overview]
order: 1
---
```

## Relationships

- A `Module` is represented by a directory, and a `Chapter` is a file within that directory. The file system structure defines the relationship.
- Docusaurus's sidebar configuration will explicitly define the hierarchy.

## State Transitions

Not applicable for this data model, as the content is static.