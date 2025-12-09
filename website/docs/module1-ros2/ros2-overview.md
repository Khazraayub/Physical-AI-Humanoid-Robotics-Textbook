---
title: ROS 2 Overview
description: An introduction to the core concepts of the Robot Operating System 2.
keywords: [ROS 2, robotics, overview]
order: 1
---

# ROS 2 Overview

This chapter provides a high-level overview of the Robot Operating System 2 (ROS 2).

ROS 2 is an open-source software framework for robotics research and development. It is a complete redesign of ROS 1 that addresses some of the limitations of its predecessor, making it more suitable for production environments and real-time systems. ROS 2 is built on top of the Data Distribution Service (DDS) standard, which provides a robust and scalable communication layer for distributed systems. This allows for improved performance, security, and interoperability compared to the custom communication system used in ROS 1.

The core philosophy of ROS is to provide a standardized way for different parts of a robotic system to communicate with each other. This is achieved through a graph-based architecture where different processes, called nodes, can publish and subscribe to streams of data, called topics. This decoupled architecture allows for modularity and reusability, as different nodes can be developed and tested independently and then integrated into a larger system. ROS 2 also provides a rich ecosystem of tools and libraries for tasks such as navigation, manipulation, and perception, which can significantly accelerate the development of complex robotic applications.

### Key Improvements in ROS 2

ROS 2 introduces several key improvements over ROS 1, including:
- **Real-time Support**: ROS 2 is designed to support real-time systems, which is crucial for applications that require deterministic and low-latency communication, such as robot control.
- **Improved Security**: ROS 2 provides a security framework that allows for authentication, encryption, and access control of ROS 2 communication. This is a critical feature for production and commercial robotics applications.
- **Support for Multiple Platforms**: ROS 2 is designed to be a cross-platform framework that can run on Linux, macOS, and Windows. This makes it easier to develop and deploy robotics applications on a wider range of platforms.
- **Microcontroller Support**: ROS 2 has improved support for microcontrollers and other resource-constrained devices, which is important for creating more lightweight and power-efficient robotic systems.
- **Improved Communication**: ROS 2's use of DDS provides a more robust and scalable communication layer that can handle a wider range of network configurations and quality of service (QoS) requirements.
