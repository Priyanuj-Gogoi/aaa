const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
	title: 'My Site',
	tagline: 'Dinosaurs are cool',
	url: 'https://priyanuj-gogoi.github.io', // Change
	baseUrl: '/aaa/', // Change
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	onDuplicateRoutes: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'Priyanuj-Gogoi', // Change
	projectName: 'aaa', // Change
	trailingSlash: false,
	noIndex: true,
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
	presets: [
		[
			'classic',
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/priyanuj-gogoi/aaa/edit/master/', // Change
					routeBasePath: '/',
					showLastUpdateTime: true,
					showLastUpdateAuthor: true
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],
	themeConfig:
		({
			navbar: {
				title: 'My Site',
				logo: {
					alt: 'My Site Logo',
					src: 'img/logo.svg',
				},
				hideOnScroll: true,
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Tutorial',
					},
					{
						href: 'https://github.com/facebook/docusaurus',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};
