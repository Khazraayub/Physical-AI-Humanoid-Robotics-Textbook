import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'A textbook on the fundamentals of modern robotics.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // // Set the production url of your site here
  // url: 'https://user.github.io',
  // // Set the /<baseUrl>/ pathname under which your site is served
  // // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/humanoid-robotics-course/',
  url: 'https://physical-ai-humanoid-robotics-textbook.vercel.app',
  baseUrl: '/',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'user', // Usually your GitHub org/user name.
  projectName: 'Physical-AI-Humanoid-Robotics-Textbook', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Humanoid Robotics Textbook',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'module1-ros2/ros2-overview',
          position: 'left',
          label: 'Module 1: ROS 2',
        },
        {
          type: 'doc',
          docId: 'module2-digital-twin/intro-to-digital-twins',
          position: 'left',
          label: 'Module 2: Digital Twin',
        },
        {
          type: 'doc',
          docId: 'module3-ai-robot-brain/isaac-sim-overview',
          position: 'left',
          label: 'Module 3: AI-Robot Brain',
        },
        {
          type: 'doc',
          docId: 'module4-vla/llms-for-robotics',
          position: 'left',
          label: 'Module 4: VLA',
        },
        {
          href: 'https://github.com/Khazraayub',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Course Modules',
          items: [
            {
              label: 'Module 1: ROS 2',
              to: '/docs/module1-ros2/ros2-overview',
            },
            {
              label: 'Module 2: Digital Twin',
              to: '/docs/module2-digital-twin/intro-to-digital-twins',
            },
            {
              label: 'Module 3: AI-Robot Brain',
              to: '/docs/module3-ai-robot-brain/isaac-sim-overview',
            },
            {
              label: 'Module 4: VLA',
              to: '/docs/module4-vla/llms-for-robotics',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Khazraayub',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Humanoid Robotics Textbook. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
