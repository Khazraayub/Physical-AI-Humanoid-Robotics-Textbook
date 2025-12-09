---
title: Nav2 for Bipedal Path Planning
description: Learn how to use Nav2 for path planning with bipedal robots.
keywords: [Nav2, path planning, bipedal, robotics]
order: 4
---

# Nav2 for Bipedal Path Planning

This chapter covers how to adapt and use the Nav2 stack for path planning with bipedal robots.

Path planning for bipedal robots, such as humanoids, presents a unique set of challenges compared to wheeled robots. Bipedal robots have a more complex dynamics model, and they need to maintain their balance while walking. This means that the path planner needs to take into account the robot's stability and dynamics, as well as the terrain and obstacles in the environment.

The Navigation2 (Nav2) stack is a popular open-source navigation framework for ROS 2. It is designed to be a complete navigation solution for mobile robots, providing everything from global path planning to local obstacle avoidance. While Nav2 is primarily designed for wheeled robots, it can be adapted for use with bipedal robots.

Adapting Nav2 for bipedal path planning involves several key steps. First, you need to provide a custom controller that can take the output of the Nav2 path planner and generate stable walking trajectories for the robot. This controller needs to take into account the robot's dynamics and stability constraints. Second, you may need to customize the costmap parameters to better suit the capabilities of a bipedal robot. For example, you may want to increase the inflation radius around obstacles to account for the robot's larger footprint while walking. By making these and other customizations, you can leverage the power of the Nav2 stack to provide robust and reliable path planning for your humanoid robot.

### Configuring the Nav2 Costmap

The Nav2 costmap is a key component of the navigation stack. It is a 2D grid that represents the robot's environment, where each cell has a value that represents the cost of traversing that cell. The costmap is used by the path planner to find the optimal path from the robot's current location to the goal.

The Nav2 costmap is made up of several layers, including:
- **Static Layer**: This layer represents the static obstacles in the environment, such as walls and furniture. It is typically generated from a pre-existing map of the environment.
- **Obstacle Layer**: This layer represents the dynamic obstacles in the environment, such as people and other robots. It is updated in real-time using data from the robot's sensors.
- **Inflation Layer**: This layer inflates the obstacles in the costmap to account for the size of the robot. This prevents the robot from getting too close to obstacles and colliding with them.

When configuring the Nav2 costmap for a bipedal robot, it is important to take into account the robot's unique kinematics and dynamics. For example, you may want to use a larger inflation radius to account for the robot's swaying motion while walking. You may also want to create a custom layer that represents the robot's stability margin, which would prevent the robot from traversing areas where it is likely to fall over. By carefully configuring the Nav2 costmap, you can create a navigation system that is safe, reliable, and efficient for your humanoid robot.
