---
title: Cognitive Planning with LLMs
description: Learn how to use Large Language Models for cognitive planning in robotics.
keywords: [LLM, cognitive planning, robotics, AI]
order: 3
---

# Cognitive Planning with LLMs

This chapter covers the use of Large Language Models (LLMs) for cognitive planning, where the LLM generates a sequence of actions to achieve a high-level goal.

Cognitive planning is a type of AI planning that aims to mimic the way that humans think and reason about problems. It involves breaking down a high-level goal into a sequence of smaller, more manageable steps. This is in contrast to traditional AI planning algorithms, which often rely on a predefined set of actions and a detailed model of the world.

Large Language Models (LLMs) have shown great promise for cognitive planning in robotics. By leveraging their vast knowledge of the world and their ability to reason about complex problems, LLMs can be used to generate high-quality plans for a wide range of tasks. The basic idea is to provide the LLM with a high-level goal, such as "make a sandwich", and a description of the current state of the world, such as the location of the bread, cheese, and other ingredients. The LLM will then generate a sequence of actions that the robot needs to perform to achieve the goal.

One of the key advantages of using LLMs for cognitive planning is that they can handle a much wider range of tasks than traditional planning algorithms. They can also be easily adapted to new tasks and environments by simply providing them with a new set of goals and a description of the world. This makes them a powerful tool for creating more general-purpose and adaptable robots.

### Chain of Thought Prompting

One of the key techniques for improving the performance of LLMs on complex reasoning tasks is "chain of thought" prompting. The basic idea behind chain of thought prompting is to ask the LLM to "think out loud" and to explain its reasoning process step-by-step. This can help the LLM to break down a complex problem into a sequence of smaller, more manageable steps, which can lead to better performance.

In the context of cognitive planning, you can use chain of thought prompting to ask the LLM to generate a plan for a given task and to explain its reasoning process at each step. For example, you could provide the LLM with the goal "make a sandwich" and ask it to generate a plan, explaining why each step is necessary. The LLM might then generate a plan like this:
1.  Get two slices of bread. (Because a sandwich needs bread)
2.  Get the cheese from the fridge. (Because I want to make a cheese sandwich)
3.  Put the cheese on one of the slices of bread. (Because the cheese goes inside the sandwich)
4.  Put the other slice of bread on top. (To complete the sandwich)

By asking the LLM to explain its reasoning process, you can get a better understanding of how it is thinking about the problem, and you can also identify any potential errors or inconsistencies in its plan. This can be a powerful tool for debugging and improving the performance of your LLM-based planning system.
