const path = require('path');
const packageJson = require('./package.json');

module.exports = {
  siteMetadata: {
    title: `How to Get to Malaysia Meetup`,
    url: `https://how-to-get-to-malaysia-meetup.netlify.com`,
    description: packageJson.description,
    keywords: packageJson.keywords,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `instruction`,
        path: path.resolve(__dirname, 'instruction'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.resolve(__dirname, 'data'),
      },
    },
    `gatsby-transformer-yaml`,
  ],
};
