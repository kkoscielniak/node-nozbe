const users = [
  // TODO: Add users
];

const siteConfig = {
  title: 'node-nozbe',
  tagline: 'A website for testing',
  url: 'https://your-docusaurus-test-site.com', // Your website URL
  baseUrl: '/',
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  projectName: 'node-nozbe',
  organizationName: 'kkoscielniak',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'overview', label: 'Docs' },
    { doc: 'api', label: 'API' },
  ],

  // users,

  /* Colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  copyright: `Copyright © ${new Date().getFullYear()} kkoscielniak`,

  highlight: {
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
