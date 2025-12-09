---
title: URDF Basics for Humanoids
description: Learn the basics of the Unified Robot Description Format (URDF) for humanoid robots.
keywords: [ROS 2, URDF, robotics, humanoid]
order: 4
---

# URDF Basics for Humanoids

This chapter introduces the Unified Robot Description Format (URDF) and how to use it to model a humanoid robot.

URDF is an XML-based file format used in ROS to describe the physical properties of a robot. It represents the robot as a tree of links and joints. 
- **Links** represent the rigid parts of the robot, such as the torso, arms, and legs. Each link has properties such as mass, inertia, and visual and collision geometry.
- **Joints** connect the links together and define their relative motion. Each joint has a type (e.g., revolute, prismatic, fixed) and specifies the axis of motion and limits.

### Simple URDF Example

Here is a simple example of a URDF file for a two-link arm:

```xml
<robot name="simple_arm">
  <link name="base_link">
    <visual>
      <geometry>
        <cylinder length="0.2" radius="0.1"/>
      </geometry>
    </visual>
  </link>

  <link name="arm_link">
    <visual>
      <geometry>
        <box size="0.5 0.1 0.1"/>
      </geometry>
    </visual>
  </link>

  <joint name="base_to_arm" type="revolute">
    <parent link="base_link"/>
    <child link="arm_link"/>
    <origin xyz="0 0 0.1"/>
    <axis xyz="0 1 0"/>
    <limit lower="-3.14" upper="3.14" effort="10" velocity="1.0"/>
  </joint>
</robot>
```

This example defines a simple robot with a base link and an arm link connected by a revolute joint. This same structure can be extended to model a complex humanoid robot with many links and joints.

### Key URDF Elements

A URDF file is made up of several key elements:
- **`<robot>`**: The root element of the URDF file. It has a `name` attribute that specifies the name of the robot.
- **`<link>`**: Represents a single rigid body of the robot. It has a `name` attribute that specifies the name of the link.
  - **`<visual>`**: Describes the visual appearance of the link. It contains a `<geometry>` element that can be a `<box>`, `<cylinder>`, or `<sphere>`, and an optional `<material>` element that specifies the color and texture of the link.
  - **`<collision>`**: Describes the collision geometry of the link. This is used by the physics engine to calculate collisions with other objects in the environment. The geometry of the collision element is often a simplified version of the visual geometry to improve performance.
  - **`<inertial>`**: Describes the inertial properties of the link, including its mass and inertia tensor. This is used by the physics engine to simulate the dynamics of the robot.
- **`<joint>`**: Represents a connection between two links. It has a `name` attribute and a `type` attribute that can be `revolute`, `prismatic`, `continuous`, `fixed`, `floating`, or `planar`.
  - **`<parent>`** and **`<child>`**: Specify the two links that are connected by the joint.
  - **`<origin>`**: Specifies the transform from the parent link to the child link.
  - **`<axis>`**: Specifies the axis of rotation for a revolute joint or the axis of translation for a prismatic joint.
  - **`<limit>`**: Specifies the limits of motion for a joint, including its lower and upper bounds, maximum effort, and maximum velocity.
