const path = require('path');

const venueTemplate = path.resolve(__dirname, 'src', 'templates', 'venue-template.jsx');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allDetailsYaml {
        nodes {
          id
        }
      }
    }
  `);

  if (result.errors) {
    reporter.error(result.errors);
    return;
  }

  const venues = result.data.allDetailsYaml.nodes;

  venues.forEach(venue => {
    createPage({
      path: `/getting-to/${venue.id}/`,
      component: venueTemplate,
      context: {
        id: venue.id,
      },
    });
  });
};
