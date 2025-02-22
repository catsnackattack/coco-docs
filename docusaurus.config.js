// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "COCO",
	tagline: "",
	url: "https://your-docusaurus-test-site.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/Coco-initial.svg",
	organizationName: "COCO", // Usually your GitHub org/user name.
	projectName: "COCO", // Usually your repo name.

	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebar.js"),
					// Please change this to your repo.

					routeBasePath: "/",
				},

				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "COCO",
				logo: {
					alt: "COCO",
					src: "img/Coco-initial.svg",
				},
				items: [
					// {
					// 	type: "doc",
					// 	docId: "intro",
					// 	position: "left",
					// 	label: "Tutorial",
					// },

					{
						href: "https://github.com/Janmajayamall/coco-docs",
						label: "GitHub",
						position: "right",
					},
				],
			},
			// footer: {
			// 	style: "dark",
			// 	links: [
			// 		{
			// 			title: "Docs",
			// 			items: [
			// 				{
			// 					label: "Tutorial",
			// 					to: "/docs/intro",
			// 				},
			// 			],
			// 		},
			// 		{
			// 			title: "Community",
			// 			items: [
			// 				{
			// 					label: "Stack Overflow",
			// 					href: "https://stackoverflow.com/questions/tagged/docusaurus",
			// 				},
			// 				{
			// 					label: "Discord",
			// 					href: "https://discordapp.com/invite/docusaurus",
			// 				},
			// 				{
			// 					label: "Twitter",
			// 					href: "https://twitter.com/docusaurus",
			// 				},
			// 			],
			// 		},
			// 		{
			// 			title: "More",
			// 			items: [
			// 				{
			// 					label: "Blog",
			// 					to: "/blog",
			// 				},
			// 				{
			// 					label: "GitHub",
			// 					href: "https://github.com/facebook/docusaurus",
			// 				},
			// 			],
			// 		},
			// 	],
			// 	copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
			// },
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
