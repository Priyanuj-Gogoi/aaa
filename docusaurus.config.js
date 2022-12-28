const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const github = 'https://github.com/priyanuj-gogoi/aaa';
const url = 'https://bdfd-docs.netlify.app';
const title = 'BDFD Docs';
const description = 'Soon...Rewriting';

module.exports = {
  title: 'BDFD Docs',
  url: url,
  baseUrl: '/',
  favicon: 'https://dropbox.com/s/ucw0j2dsr99dni7/favicon.ico?raw=1',
  trailingSlash: false,
  noIndex: true,
  markdown: {
    mermaid: true
  },
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
    colorMode: {
      defaultMode: 'dark'
    },
    image: 'https://dropbox.com/s/skqpwyli9xexvlt/logo-512x512.png?raw=1',
    navbar: {
      title: 'Bot Designer For Discord',
      logo: {
        alt: 'BDFD Logo',
        src: 'https://dropbox.com/s/skqpwyli9xexvlt/logo-512x512.png?raw=1',
        srcDark: 'https://dropbox.com/s/5blbcou9lcx12lq/logo-transparent.png?raw=1'
      },
      items: [
        { type: 'doc', docId: 'getting-started/introduction', position: 'left', label: 'Docs' },
        { type: 'localeDropdown', position: 'right' },
        { href: github, position: 'right', className: 'header-github-link', 'aria-label': 'GitHub' }
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
      copyright: `Copyright © ${new Date().getFullYear()} <a target="_blank" href="https://nilpointer.software" title="NilPointer Software">NilPointer Software</a>`,
    },
    hideOnScroll: true,
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {
            start: 'highlight-start',
            end: 'highlight-end'
          }
        },
        {
          className: 'code-block-error-line',
          line: 'error-next-line',
          block: {
            start: 'error-start',
            end: 'error-end'
          }
        },
      ]
    },
    metadata: [
      { name: 'title', content: title },
      { name: 'description', content: description },
      { name: 'keywords', content: 'bdfd, bot designer for discord, discord, discord bot, bdfd wiki, bdfd docs' },
      { name: 'application-name', content: 'BDFD Docs' },
      { name: 'apple-mobile-web-app-title', content: 'BDFD Docs' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:url', content: url },

      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:url', content: url }
    ],
    headTags: [
      { tagName: 'link', attributes: { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://dropbox.com/s/lh7c7oyf1hsa5i7/apple-touch-icon.png?raw=1' } },
      { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://dropbox.com/s/2nccq4e3y1um484/favicon-32x32.png?raw=1' } },
      { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://dropbox.com/s/8quajt2nhjfgum3/android-chrome-192x192.png?raw=1' } },
      { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://dropbox.com/s/njk429zzkzy52rt/favicon-16x16.png?raw=1' } },
    ],
    announcementBar: {
      id: 'announcement-bar',
      content: `Give a 🌟 on our <a target="_blank" href="${github}">GitHub</a>, if you liked the new docs!`
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
          { tagName: 'link', rel: 'icon', href: 'https://dropbox.com/s/skqpwyli9xexvlt/logo-512x512.png?raw=1' },
          { tagName: 'link', rel: 'manifest', href: require.resolve('./static/manifest.json') },
          { tagName: 'link', rel: 'apple-touch-icon', href: 'https://dropbox.com/s/lh7c7oyf1hsa5i7/apple-touch-icon.png?raw=1' },
          { tagName: 'link', rel: 'mask-icon', href: 'https://dropbox.com/s/c2qlauf171qu0mz/safari-pinned-tab.svg?raw=1', color: '#748ad5' },
          { tagName: 'meta', name: 'theme-color', content: '#748ad5' },
          { tagName: 'meta', name: 'apple-mobile-web-app-capable', content: 'yes' },
          { tagName: 'meta', name: 'apple-mobile-web-app-status-bar-style', content: '#748ad5' },
          { tagName: 'meta', name: 'msapplication-TileImage', content: 'https://dropbox.com/s/u702vr6juv1dotz/mstile-144x144.png?raw=1' },
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
          editUrl: github + '/edit/dev/',
          routeBasePath: '/',
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