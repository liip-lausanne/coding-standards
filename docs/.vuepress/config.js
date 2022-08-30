module.exports = {
  title: 'Liip Lausanne coding standards',
  base: process.env.BASE || '/coding-standards/',
  themeConfig: {
    repo: 'liip-lausanne/coding-standards',
    repoLabel: 'GitHub',
    lastUpdated: 'Last Updated',
    sidebar: [
      '/whitespace/',
      '/browsers-support/',
      '/accessibility/',
      '/assets-bundling/',
      '/scripts/',
      '/styleguides/',
      '/tools/',
      {
        title: 'Languages',
        collapsable: false,
        children: ['/javascript/', '/css/'],
      },
    ],
  },
  port: 3000,
};
