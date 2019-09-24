const path = require('path');

const venueTemplate = path.resolve(__dirname, 'src', 'templates', 'venue-template.jsx');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = [
    `type VenueYaml implements Node {
        viaLrt: LrtYaml @link(by: "venue", from: "id")
        viaDriving: DrivingYaml @link(by: "venue", from : "id")
    }`,
  ];
  createTypes(typeDefs);
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allVenueYaml {
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

  const venues = result.data.allVenueYaml.nodes;

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
