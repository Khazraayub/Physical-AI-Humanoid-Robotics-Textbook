Physical AI & Humanoid Robotics Textbook

A complete AI/spec-driven interactive textbook built with Docusaurus, covering the foundations of Physical AI, humanoid robotics, simulation, and intelligent robot behavior.
This project is part of a capstone series on Embodied Intelligence — connecting AI systems with real-world physical environments.

🚀 Project Overview

This repository contains:

✔️ A Docusaurus-based online textbook

✔️ Four full modules on Physical AI & Humanoid Robotics

✔️ Structured content generated using Spec-Kit Plus and Claude Code

✔️ Ready for deployment (GitHub Pages / Vercel)

🚧 Coming soon: Integrated RAG chatbot powered by FastAPI, Qdrant, NeonDB, and OpenAI Agents

📘 Textbook Modules
Module 1 — The Robotic Nervous System (ROS 2)

ROS 2 Nodes, Topics, Services

Python–ROS bridges using rclpy

URDF for humanoid robot structure

Robot middleware fundamentals

Module 2 — The Digital Twin (Gazebo & Unity)

Physics simulation, gravity, collisions

Unity environment building

Simulated sensors: LiDAR, Depth Cameras, IMUs

High-fidelity digital twin workflows

Module 3 — The AI-Robot Brain (NVIDIA Isaac)

Isaac Sim for photorealistic robotics

VSLAM using Isaac ROS

Nav2 for bipedal path planning

Synthetic data generation for AI models

Module 4 — Vision-Language-Action (VLA)

Voice-to-Action using OpenAI Whisper

LLM-driven cognitive planning

Perception + navigation + manipulation

Final Project: Autonomous Humanoid Robot

🧩 Tech Stack
Component	Technologies
Book Platform	Docusaurus
Content Authoring	Spec-Kit Plus, Claude Code
Deployment	GitHub Pages / Vercel
Upcoming RAG Chatbot	FastAPI, OpenAI Agents, ChatKit SDK, Qdrant, Neon Serverless Postgres
📦 Installation
git clone https://github.com/Khazraayub/Physical-AI-Humanoid-Robotics-Textbook.git
cd website
npm install
npm run start

🚀 Deploy to Vercel

Inside /website:

npm run build


Then connect the repository to Vercel
and set:

Build Command: npm run build
Output Directory: build

❗ Troubleshooting Base URL (Docusaurus)

If the deployed site shows:

“Your Docusaurus site did not load properly”

Fix by editing docusaurus.config.ts:

baseUrl: '/',


Commit → redeploy.

🧭 Project Goals

Teach Physical AI through hands-on simulation & robotics

Provide an accessible open-source textbook

Enable a built-in AI tutor via RAG chatbot

🤝 Contributing

Pull requests are welcome.
For major changes, please open an issue to discuss.

⭐ Support

If you find this project helpful:

🌟 Star the repo — it motivates future updates!
