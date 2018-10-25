const users = [
  // TODO: Add users
];

const siteConfig = {
  title: 'node-nozbe',
  tagline: 'A website for testing',
  url: 'https://your-docusaurus-test-site.com', // TODO:
  baseUrl: '/',
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  projectName: 'node-nozbe',
  organizationName: 'kkoscielniak',
  headerLinks: [
    { doc: 'overview', label: 'Docs' },
    { doc: 'api', label: 'API' },
  ],

  // users,

  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  highlight: {
    theme: 'default',
  },

  onPageNav: 'separate',
  cleanUrl: true,
};

module.exports = siteConfig;
