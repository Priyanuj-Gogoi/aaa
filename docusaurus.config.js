const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'BDFD Wiki',
  description: 'Soon...Rewriting',
  user: 'priyanuj-gogoi',
  repo: 'aaa',
  branch: 'main'
};

module.exports = {
	title: config.title,
  url: `https://${config.user}.github.io`,
  baseUrl: `/${config.repo}/`,
  favicon: 'img/favicon.ico',
	trailingSlash: false,
	noIndex: true,
  markdown: { mermaid: true },
    onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'throw',
	onDuplicateRoutes: 'throw',
	tagline: 'Dinosaurs are cool',
  organizationName: config.user,
	projectName: config.repo,
	themeConfig: {
    docs: {
      sidebar: { hideable: true, autoCollapseCategories: true }
    },
    colorMode: { defaultMode: 'dark' },
    image: 'img/assets/bdfd.png',
    navbar: {
      title: 'Bot Designer For Discord',
      logo: { alt: 'BDFD Logo', src: 'img/logo.svg' },
			items: [
        { type: 'doc', docId: 'getting-started/introduction', position: 'left', label: 'Docs' },
        { type: 'localeDropdown', position: 'right' },
				{ href: `https://github.com/${config.user}/${config.repo}`, position: 'right', className: 'header-github-link', 'aria-label': 'GitHub' }
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
      { name: 'keywords', content: 'bdfd, bot designer for discord, discord, discord bot, bdfd wiki, bdfd docs' },
      { name: 'application-name', content: 'BDFD Wiki' },
      { name: 'apple-mobile-web-app-title', content: 'BDFD Wiki' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@NilPointer-Software' },
      { name: 'twitter:title', content: config.title },
      { name: 'twitter:description', content: config.description },
      { name: 'twitter:url', content: `https://${config.user}.github.io/${config.repo}/` },

      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: config.title },
      { name: 'og:description', content: config.description },
      { name: 'og:url', content: `https://${config.user}.github.io/${config.repo}/` },
      { name: 'og:site_name', content: config.title },

      { name: 'title', content: config.title },
      { name: 'description', content: config.description }
    ],
    headTags: [
      { tagName: 'link', attributes: { rel: 'apple-touch-icon', sizes: '180x180', href: './img/apple-touch-icon.png'}},
			{ tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '32x32', href: './img/favicon-32x32.png'}},
			{ tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '192x192', href: './img/android-chrome-192x192.png'}},
			{ tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '16x16', href: './img/favicon-16x16.png'}},
    ],
    announcementBar: {
      id: 'announcement-bar',
      content: `Give a 🌟 on our <a target="_blank" href="https://github.com/${config.user}/${config.repo}">GitHub</a>, if you liked the new docs!`
    }
  },
  themes: [ '@docusaurus/theme-mermaid' ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: [
          'appInstalled', 'queryString', 'standalone', 'saveData'
        ],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: 'img/' },
          { tagName: 'link', rel: 'manifest', href: 'manifest.json' },
          { tagName: 'link', rel: 'apple-touch-icon', href: 'img/apple-touch-icon.png' },
          { tagName: 'link', rel: 'mask-icon', href: 'img/safari-pinned-tab.svg', color: '#748ad5' },
          { tagName: 'meta', name: 'theme-color', content: '#748ad5' },
          { tagName: 'meta', name: 'apple-mobile-web-app-capable', content: 'yes' },
          { tagName: 'meta', name: 'apple-mobile-web-app-status-bar-style', content: '#748ad5' },
          { tagName: 'meta', name: 'msapplication-TileImage', content: 'img/mstile-144x144.png' },
          { tagName: 'meta', name: 'msapplication-TileColor', content: '#748ad5'}
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
          editUrl: 'https://github.com/priyanuj-gogoi/aaa/edit/main/',
          routeBasePath: '/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: { customCss: 'src/css/custom.css' },
      },
    ],
  ],
  titleDelimiter: '-'
}
