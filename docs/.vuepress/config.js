module.exports = {
  title: 'Liip LS front-end standards',
  themeConfig: {
    base: '/coding-standards/',
    repo: 'team-rawbot/coding-standards',
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
