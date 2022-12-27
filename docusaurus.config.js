const bdscript = require('./src/bdscript/highlight');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

for (let str of bdscript) {
  darkCodeTheme.styles.push(str);
};

const git_repo = process.env.GITHUB_REPOSITORY.split('/');
const dev = process.env.DEV_LINK || '';

const user = git_repo[0];
const repo = git_repo[1] + dev + '/';

const title = 'BDFD Docs';
const description = 'Soon...Rewriting';

module.exports = {
  title: 'BDFD Docs',
  url: `https://${user}.github.io`,
  baseUrl: `/${repo}`,
  favicon: require.resolve('./static/img/favicon/favicon.ico'),
  trailingSlash: false,
  noIndex: true,
  markdown: { mermaid: true },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  tagline: 'Dinosaurs are cool',
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true
      }
    },
    colorMode: { defaultMode: 'dark' },
    image: require.resolve('./static/img/assets/bdfd.png'),
    navbar: {
      title: 'Bot Designer For Discord',
      logo: {
        alt: 'BDFD Logo',
        src: require.resolve('./static/img/assets/bdfd.png'),
        srcDark: require.resolve('./static/img/assets/bdfd-transparent.png')
      },
      items: [
        { type: 'doc', docId: 'getting-started/introduction', position: 'left', label: 'Docs' },
        { type: 'localeDropdown', position: 'right' },
        { href: `https://github.com/${user}/${git_repo[1]}`, position: 'right', className: 'header-github-link', 'aria-label': 'GitHub' }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.com/servers/bot-designer-for-discord-official-server-566363823137882154' },
            { label: 'Reddit', href: 'https://reddit.com/r/DiscordBotDesigner' }
          ]
        },
        {
          title: 'External Links',
          items: [
            { label: 'Web App', href: 'https://botdesignerdiscord.com/app' },
            { label: 'Android App', href: 'https://play.google.com/store/apps/details?id=com.jakubtomana.discordbotdesinger' },
            { label: 'iOS App', href: 'https://apps.apple.com/us/app/bot-designer-for-discord/id1495536477' }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a target="_blank" href="https://nilpointer.software" title="NilPointer Software">NilPointer Software</a><br>Powered by <a target="_blank" href="https://docusaurus.io">Docusaurus</a>`
    },
    hideOnScroll: true,
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' }
        },
        {
          className: 'code-block-error-line',
          line: 'error-next-line',
          block: { start: 'error-start', end: 'error-end' }
        },
      ]
    },
    metadata: [
      { name: 'title', content: title },
      { name: 'description', content: description },
      { name: 'keywords', content: 'bdfd, bot designer for discord, discord, discord bot, bdfd wiki, bdfd docs' },
      { name: 'application-name', content: 'BDFD Wiki' },
      { name: 'apple-mobile-web-app-title', content: 'BDFD Wiki' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:url', content: `https://${user}.github.io/${repo}` },

      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:url', content: `https://${user}.github.io/${repo}` }
    ],
    headTags: [
      { tagName: 'link', attributes: { rel: 'apple-touch-icon', sizes: '180x180', href: require.resolve('./static/img/apple-touch-icon.png') } },
      { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '32x32', href: require.resolve('./static/img/favicon-32x32.png') } },
      { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '192x192', href: require.resolve('./static/img/android-chrome-192x192.png') } },
      { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '16x16', href: require.resolve('./static/img/favicon-16x16.png') } },
    ],
    announcementBar: {
      id: 'announcement-bar',
      content: `Give a 🌟 on our <a target="_blank" href="https://github.com/${user}/${git_repo[1]}">GitHub</a>, if you liked the new docs!`
    }
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    'plugin-image-zoom',
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: [
          'appInstalled', 'queryString', 'standalone', 'saveData'
        ],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: require.resolve('./static/img/favicon-32x32.png') },
          { tagName: 'link', rel: 'manifest', href: require.resolve('./static/manifest.json') },
          { tagName: 'link', rel: 'apple-touch-icon', href: require.resolve('./static/img/apple-touch-icon.png') },
          { tagName: 'link', rel: 'mask-icon', href: require.resolve('./static/img/safari-pinned-tab.svg'), color: '#748ad5' },
          { tagName: 'meta', name: 'theme-color', content: '#748ad5' },
          { tagName: 'meta', name: 'apple-mobile-web-app-capable', content: 'yes' },
          { tagName: 'meta', name: 'apple-mobile-web-app-status-bar-style', content: '#748ad5' },
          { tagName: 'meta', name: 'msapplication-TileImage', content: require.resolve('./static/img/mstile-144x144.png') },
          { tagName: 'meta', name: 'msapplication-TileColor', content: '#748ad5' }
        ]
      }
    ]
  ],
  presets: [
    [
      'classic',
      {
        debug: true,
        docs: {
          editUrl: `https://github.com/${user}/${git_repo[1]}/edit/dev/`,
          routeBasePath: '/' + dev,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      },
    ],
  ],
}
