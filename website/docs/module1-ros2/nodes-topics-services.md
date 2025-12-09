---
title: Nodes, Topics, Services
description: Learn about the fundamental communication concepts in ROS 2.
keywords: [ROS 2, nodes, topics, services]
order: 2
---

# Nodes, Topics, and Services

This chapter explains the core communication mechanisms in ROS 2: nodes, topics, and services.

**Nodes** are the fundamental building blocks of a ROS 2 system. A node is a process that performs a specific task, such as controlling a motor, reading sensor data, or planning a path. Each node is a self-contained executable that can be run independently. Nodes communicate with each other by sending and receiving messages through topics, services, and actions.

**Topics** are named buses over which nodes exchange messages. Topics are used for one-way, asynchronous communication. A node that wants to share data, such as sensor readings, will publish messages to a topic. Other nodes that are interested in that data can subscribe to the topic to receive the messages. This publish-subscribe model allows for decoupling of nodes, as the publisher does not need to know which nodes are subscribing to the topic.

**Services** are used for two-way, synchronous communication. A service consists of a request and a response. A node can offer a service, and another node can call that service with a request. The service provider will then perform some computation and return a response. This is similar to a remote procedure call (RPC) and is useful for tasks that have a clear request-response structure, such as querying the state of a robot or triggering a specific action.

### Actions

**Actions** are used for long-running, asynchronous tasks that provide feedback. An action consists of a goal, feedback, and a result. A client node sends a goal to an action server, which then starts executing the task. While the task is executing, the action server can send feedback to the client to provide updates on the progress of the task. Once the task is complete, the action server sends a result to the client.

Actions are useful for tasks that may take a long time to complete, such as navigating to a specific location or executing a complex manipulation task. The feedback mechanism allows the client to monitor the progress of the task and to preempt it if necessary. This makes actions a more powerful and flexible communication mechanism than services for long-running tasks. The classic example of an action is moving the base of a robot to a certain position. The goal is the target position, the feedback is the current position of the robot, and the result is whether the robot successfully reached the target position.
