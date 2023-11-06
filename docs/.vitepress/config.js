import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Liip LS Coding Standards',
  description:
    'Current practice and recommendations for web development projects',

  base: process.env.BASE || '/coding-standards/',

  vite: {
    server: {
      port: 3000,
    },
  },

  themeConfig: {
    search: {
      provider: 'local',
    },
    lastUpdated: true,

    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
      {
        text: 'Common',
        items: [{ text: 'Whitespace', link: '/whitespace/' }],
      },
      {
        text: 'Front-end',
        items: [
          { text: 'Browers support', link: '/browsers-support/' },
          { text: 'Accessibility', link: '/accessibility/' },
          { text: 'Assets bundling', link: '/assets-bundling/' },
          { text: 'Packages management', link: '/packages-management/' },
          { text: 'Styleguides', link: '/styleguides/' },
          { text: 'Tools', link: '/tools/' },
        ],
      },
      {
        text: 'Languages',
        items: [
          { text: 'JavaScript', link: '/javascript/' },
          { text: 'CSS', link: '/css/' },
        ],
      },
    ],

    editLink: {
      pattern:
        'https://github.com/liip-lausanne/coding-standards/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/liip-lausanne',
      },
    ],
  },
});
