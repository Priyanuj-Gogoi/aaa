const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const webpack = require('webpack');

const light = require('./src/theme/Highlight/light');
const dark = require('./src/theme/Highlight/dark');

for (const e of light) {
  lightCodeTheme.styles.push(e);
};

for (const e of dark) {
  darkCodeTheme.styles.push(e);
};

const github = 'https://github.com/priyanuj-gogoi/aaa';
const url = 'https://bdfd-docs.netlify.app';

module.exports = {
  title: 'BDFD Docs',
  url: url,
  baseUrl: '/',
  favicon: '/favicon.ico',
  trailingSlash: false,
  noIndex: true,
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
          label: 'Changelog',
          to: '/changelog',
          position: 'right'
        },
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
      copyright: `Copyright © ${new Date().getFullYear()} Priyanuj Gogoi<br>Built using Docusaurus`,
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
      {
        name: 'title',
        content: 'BDFD Docs'
      },
      {
        name: 'description',
        content: 'Unofficial documentation of BDFD functions, callbacks, features and lots more.'
      },
      {
        name: 'keywords',
        content: 'bdfd, bot designer for discord, discord, discord bot, bdfd wiki, bdfd docs'
      },
      {
        name: 'application-name',
        content: 'BDFD Docs'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'BDFD Docs'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:title',
        content: 'BDFD Docs'
      },
      {
        name: 'twitter:description',
        content: 'Unofficial documentation of BDFD functions, callbacks, features and lots more.'
      },
      {
        name: 'twitter:url',
        content: url
      },
      {
        name: 'og:type',
        content: 'website'
      },
      {
        name: 'og:title',
        content: 'BDFD Docs'
      },
      {
        name: 'og:description',
        content: 'Unofficial documentation of BDFD functions, callbacks, features and lots more.'
      },
      {
        name: 'og:url',
        content: url
      }
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
          { tagName: 'meta', name: 'mobile-web-app-capable', content: 'yes' },
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