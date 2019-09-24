import { graphql } from 'gatsby';
import React from 'react';
import { Container, Styled } from 'theme-ui';
import { Accordion } from '../components/accordion';
import { Layout } from '../components/layout';
import { GridList, GridItem } from '../components/grid';
import { Seo } from '../components/seo';
import { Step } from '../components/step';

const VenueTemplate = ({ data: { details } }) => {
  return (
    <>
      <Seo
        title={`Getting To ${details.name}`}
        description={`Detailed instructions getting to ${details.name}`}
        keywords={[details.name, 'detailed instructions']}
      />
      <Layout>
        <Container>
          <h1>Getting To {details.name}</h1>
          {details.googleMapUrl && (
            <p>
              <Styled.a href={details.googleMapUrl}>Google Map</Styled.a>
            </p>
          )}
          <h2>Detailed Instructions</h2>
          {details.viaLrt && (
            <Accordion
              summary={<h3>By LRT</h3>}
              details={
                <GridList>
                  {details.viaLrt.steps.map((step, index) => (
                    <GridItem key={index}>
                      <Step
                        stepNumber={index + 1}
                        description={step.description}
                        photo={step.photo}
                      />
                    </GridItem>
                  ))}
                </GridList>
              }
            />
          )}
          {details.viaDriving && (
            <Accordion
              summary={<h3>Driving There or Grab</h3>}
              details={
                <GridList>
                  {details.viaDriving.steps.map((step, index) => (
                    <GridItem key={index}>
                      <Step
                        stepNumber={index + 1}
                        description={step.description}
                        photo={step.photo}
                      />
                    </GridItem>
                  ))}
                </GridList>
              }
            />
          )}
        </Container>
      </Layout>
    </>
  );
};

export default VenueTemplate;

export const pageQuery = graphql`
  query VenueById($id: String!) {
    details: venueYaml(id: { eq: $id }) {
      name
      googleMapUrl
      viaLrt {
        steps {
          description
          photo {
            name
            childImageSharp {
              fluid(maxWidth: 510) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      viaDriving {
        steps {
          description
          photo {
            name
            childImageSharp {
              fluid(maxWidth: 510) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
