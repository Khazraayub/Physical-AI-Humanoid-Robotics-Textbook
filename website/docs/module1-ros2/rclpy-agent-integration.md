---
title: rclpy Agent Integration
description: Learn how to integrate a ROS 2 node with a Python agent.
keywords: [ROS 2, rclpy, python, agent]
order: 3
---

# rclpy Agent Integration

This chapter covers how to create a ROS 2 node in Python using `rclpy` and integrate it with an agent.

`rclpy` is the official Python client library for ROS 2. It provides a Pythonic interface to the underlying ROS 2 middleware, allowing you to create nodes, publish and subscribe to topics, and call services.

### Creating a Simple Publisher

Here is an example of a simple publisher node that publishes a "Hello, World!" message to a topic called `chatter`:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MyPublisher(Node):
    def __init__(self):
        super().__init__('my_publisher')
        self.publisher_ = self.create_publisher(String, 'chatter', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = f'Hello, World! {self.i}'
        self.publisher_.publish(msg)
        self.get_logger().info(f'Publishing: "{msg.data}"')
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    my_publisher = MyPublisher()
    rclpy.spin(my_publisher)
    my_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Creating a Simple Subscriber

Here is an example of a subscriber node that listens to the `chatter` topic and prints the received messages:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MySubscriber(Node):
    def __init__(self):
        super().__init__('my_subscriber')
        self.subscription = self.create_subscription(
            String,
            'chatter',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info(f'I heard: "{msg.data}"')

def main(args=None):
    rclpy.init(args=args)
    my_subscriber = MySubscriber()
    rclpy.spin(my_subscriber)
    my_subscriber.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Understanding the Code

In both the publisher and subscriber examples, we start by creating a class that inherits from `rclpy.node.Node`. This is the standard way to create a node in `rclpy`. The `__init__` method is used to initialize the node and to create any publishers, subscribers, timers, etc.

The `main` function is the entry point for the node. It initializes `rclpy`, creates an instance of the node class, and then calls `rclpy.spin()`. The `rclpy.spin()` function is a blocking function that keeps the node running and processing callbacks. When you press Ctrl-C in the terminal, `rclpy.spin()` will exit, and the node will be destroyed and `rclpy` will be shut down. This is a common pattern for writing ROS 2 nodes in Python.

### Integrating with an Agent

The "agent" in "rclpy Agent Integration" can refer to any autonomous system that makes decisions. In the context of this course, the agent could be a simple rule-based system, a state machine, or a more complex AI model. The ROS 2 node acts as the interface between the agent and the rest of the robotic system. The agent's logic would typically reside within the node's callbacks. For example, in a subscriber's callback, the agent could process the incoming data and decide what action the robot should take next. The node would then publish a command to another topic to execute that action. This separation of concerns between the agent's logic and the ROS 2 communication makes the system more modular and easier to debug.
