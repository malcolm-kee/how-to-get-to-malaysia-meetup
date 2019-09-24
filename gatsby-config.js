const path = require('path');
const packageJson = require('./package.json');

module.exports = {
  siteMetadata: {
    title: `How to Get to Malaysia Meetup`,
    url: `https://how-to-get-to-malaysia-meetup.netlify.com`,
    description: packageJson.description,
    keywords: packageJson.keywords,
    repositoryUrl: packageJson.repository.url,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `venue`,
        path: path.resolve(__dirname, 'venue'),
      },
    },
    `gatsby-transformer-yaml`,
  ],
};
