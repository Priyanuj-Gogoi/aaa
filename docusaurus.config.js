const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const webpack = require('webpack');

const { light } = require('./src/bdscript/highlight')

for (const e of light) {
  darkCodeTheme.styles.push(e)
}

const github = 'https://github.com/priyanuj-gogoi/aaa';
const url = 'https://bdfd-docs.netlify.app';

module.exports = {
  title: 'BDFD Docs',
  url: url,
  baseUrl: '/',
  favicon: '/favicon.ico',
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
      defaultMode: 'dark',
      respectPrefersColorScheme: true
    },
    image: '/img/icons/logo-512x512.png',
    navbar: {
      title: 'Bot Designer For Discord',
      logo: {
        alt: 'BDFD Logo',
        src: '/img/icons/logo-512x512.png',
        srcDark: '/img/icons/logo-transparent.png'
      },
      hideOnScroll: true,
      items: [
        {
          type: 'doc',
          docId: 'getting-started/introduction',
          position: 'left',
          label: 'Docs'
        },
        {
          type: 'localeDropdown',
          position: 'right'
        },
        {
          href: github,
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/servers/bot-designer-for-discord-official-server-566363823137882154'
            },
            {
              label: 'Reddit',
              href: 'https://reddit.com/r/DiscordBotDesigner'
            }
          ]
        },
        {
          title: 'External Links',
          items: [
            {
              label: 'Web App',
              href: 'https://botdesignerdiscord.com/app'
            },
            {
              label: 'Android App',
              href: 'https://play.google.com/store/apps/details?id=com.jakubtomana.discordbotdesinger'
            },
            {
              label: 'iOS App',
              href: 'https://apps.apple.com/us/app/bot-designer-for-discord/id1495536477'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NilPointer Software`,
    },
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
      { name: 'title', content: 'BDFD Docs' },
      { name: 'description', content: 'Unofficial documentation of BDFD functions, callbacks, features and lots more.' },
      { name: 'keywords', content: 'bdfd, bot designer for discord, discord, discord bot, bdfd wiki, bdfd docs' },

      { name: 'application-name', content: 'BDFD Docs' },
      { name: 'apple-mobile-web-app-title', content: 'BDFD Docs' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'BDFD Docs' },
      { name: 'twitter:description', content: 'Unofficial documentation of BDFD functions, callbacks, features and lots more.' },
      { name: 'twitter:url', content: url },

      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'BDFD Docs' },
      { name: 'og:description', content: 'Unofficial documentation of BDFD functions, callbacks, features and lots more.' },
      { name: 'og:url', content: url }
    ],
    headTags: [
      { tagName: 'link', attributes: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
      { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/icons/favicon/favicon-32x32.png' } },
      { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/icons/android/android-chrome-192x192.png' } },
      { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/icons/favicon/favicon-16x16.png' } },
    ],
    announcementBar: {
      id: 'announcement-bar',
      content: `Give a 🌟 on our <a target="_blank" href="${github}">GitHub</a>, if you liked the new docs!`,
      backgroundColor: '#E5F9E0',
      textColor: '#091E42',
    },
    tableOfContents: {
      maxHeadingLevel: 4
    },
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
          { tagName: 'link', rel: 'icon', href: '/favicon.ico' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'link', rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
          { tagName: 'link', rel: 'mask-icon', href: '/img/icons/safari-pinned-tab.svg', color: '#748ad5' },

          { tagName: 'meta', name: 'theme-color', content: '#748ad5' },
          { tagName: 'meta', name: 'apple-mobile-web-app-capable', content: 'yes' },
          { tagName: 'meta', name: 'apple-mobile-web-app-status-bar-style', content: '#748ad5' },
          { tagName: 'meta', name: 'msapplication-TileImage', content: '/img/icons/ms-tile/mstile-144x144.png' },
          { tagName: 'meta', name: 'msapplication-TileColor', content: '#748ad5' }
        ]
      }
    ],
    function WebpackPlugin(context, options) {
      return {
        name: 'plugin-configure-webpack',
        configureWebpack() {
          return {
            resolve: {
              fallback: {
                stream: require.resolve('stream-browserify'),
                buffer: require.resolve('buffer/'),
              },
            },
            plugins: [
              new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
              }),
            ],
          };
        },
      };
    },
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
        sitemap: {
          ignorePatterns: ['/tags/**'],
        }
      },
    ],
  ],
}