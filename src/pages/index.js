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
          <ul>
            {data.venues.nodes.map(venue => (
              <li key={venue.id}>
                <Link to={`/getting-to/${venue.id}/`}>{venue.name}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  {
    venues: allDetailsYaml(sort: { fields: name, order: ASC }) {
      nodes {
        id
        name
      }
    }
  }
`;

export default HomePage;
