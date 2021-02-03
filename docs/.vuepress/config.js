module.exports = {
  title: 'Liip LS front-end standards',
  base: '/coding-standards/',
  themeConfig: {
    repo: 'liip-lausanne/coding-standards',
    repoLabel: 'GitHub',
    lastUpdated: 'Last Updated',
    sidebar: [
      '/whitespace/',
      '/browsers-support/',
      '/assets-bundling/',
      '/scripts/',
      '/styleguides/',
      '/tools/',
      {
        title: 'Languages',
        collapsable: false,
        children: [
          '/javascript/',
          '/css/',
        ],
      },
    ]
  }
}
