import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Module 1: ROS 2',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Start your journey into robotics with the Robot Operating System 2. Learn the fundamentals of nodes, topics, and services.
      </>
    ),
  },
  {
    title: 'Module 2: Digital Twin',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Learn how to create high-fidelity digital twins of your robots using Gazebo and Unity for simulation and testing.
      </>
    ),
  },
  {
    title: 'Module 3: AI-Robot Brain',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Dive into the world of AI for robotics with NVIDIA Isaac Sim. Learn about synthetic data generation and perception.
      </>
    ),
  },
  {
    title: 'Module 4: VLA',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Explore Vision-Language-Action models and build a mini-capstone project where a humanoid robot can respond to voice commands.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  let link;
  if (title === 'Module 1: ROS 2') {
    link = '/docs/module1-ros2/ros2-overview';
  } else if (title === 'Module 2: Digital Twin') {
    link = '/docs/module2-digital-twin/intro-to-digital-twins';
  } else if (title === 'Module 3: AI-Robot Brain') {
    link = '/docs/module3-ai-robot-brain/isaac-sim-overview';
  } else if (title === 'Module 4: VLA') {
    link = '/docs/module4-vla/llms-for-robotics';
  }

  return (
    <div className={clsx(' col col--3 ', styles.featureCard)}>
      <Link to={link} className={styles.featureLink}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}