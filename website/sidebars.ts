import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  courseSidebar: [
    {
      type: 'category',
      label: 'Module 1: ROS 2',
      items: [
        'module1-ros2/ros2-overview',
        'module1-ros2/nodes-topics-services',
        'module1-ros2/rclpy-agent-integration',
        'module1-ros2/urdf-basics',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Digital Twin',
      items: [
        'module2-digital-twin/intro-to-digital-twins',
        'module2-digital-twin/gazebo-physics',
        'module2-digital-twin/unity-interaction',
        'module2-digital-twin/sensor-simulation',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: AI-Robot Brain',
      items: [
        'module3-ai-robot-brain/isaac-sim-overview',
        'module3-ai-robot-brain/synthetic-data',
        'module3-ai-robot-brain/isaac-ros-vslam',
        'module3-ai-robot-brain/nav2-for-bipedal',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: VLA',
      items: [
        'module4-vla/llms-for-robotics',
        'module4-vla/whisper-voice-to-action',
        'module4-vla/cognitive-planning',
        'module4-vla/mini-capstone',
      ],
    },
  ],
};

export default sidebars;
