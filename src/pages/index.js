import { graphql, Link } from 'gatsby';
import { Container } from 'theme-ui';
import React from 'react';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';

const HomePage = ({ data }) => {
  return (
    <>
      <Seo />
      <Layout>
        <Container>
          <h1>How to Get To Meetup At:</h1>
          {data.venues.nodes.map(venue => (
            <Link to={`/getting-to/${venue.id}/`} key={venue.id}>
              {venue.name}
            </Link>
          ))}
        </Container>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  {
    venues: allVenueYaml {
      nodes {
        id
        name
      }
    }
  }
`;

export default HomePage;
