---
title: Gazebo Physics & Environment
description: Learn about the physics simulation and environment creation in Gazebo.
keywords: [Gazebo, physics, simulation, robotics]
order: 2
---

# Gazebo Physics & Environment

This chapter covers the basics of physics simulation and environment creation in the Gazebo simulator.

Gazebo is a popular open-source robotics simulator that provides a high-fidelity physics simulation and a rich set of sensor models. It uses the Open Dynamics Engine (ODE) as its default physics engine, which can simulate the dynamics of rigid bodies, joints, and contacts. This allows for realistic simulation of a robot's interaction with its environment. Gazebo also supports other physics engines like Bullet, Simbody, and DART.

Creating a realistic environment is a crucial part of robotics simulation. In Gazebo, environments are described using SDF (Simulation Description Format) files, which is an XML-based format similar to URDF. You can use SDF to define everything from simple shapes like boxes and spheres to complex environments with buildings, furniture, and outdoor terrain. Gazebo also provides a graphical user interface for creating and editing worlds, which can be a more intuitive way to design complex environments. You can add lighting, textures, and other visual elements to make the simulation more realistic.

### Friction and Contact Models

When simulating a humanoid robot, it is crucial to have accurate models of friction and contact. The interaction between the robot's feet and the ground is what allows it to walk and maintain its balance. Gazebo provides several options for modeling friction and contact, including the ability to set the friction coefficients for different surfaces.

The contact model in Gazebo determines how objects interact when they come into contact with each other. This includes how they bounce off each other and how they transfer forces. For a humanoid robot, it is important to have a contact model that can accurately simulate the forces between the robot's feet and the ground. This will ensure that the robot's walking gait is stable and realistic. You can tune the contact model parameters in Gazebo to match the properties of the real-world materials. This level of detail is essential for developing robust walking algorithms that can be transferred to the physical robot.
