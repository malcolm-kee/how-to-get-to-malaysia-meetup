import React from 'react';
import { Container, Styled } from 'theme-ui';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';

function Disclaimer() {
  return (
    <>
      <Seo title="Disclaimer" />
      <Layout>
        <Container>
          <Styled.h1>Disclaimer</Styled.h1>
          <Styled.p />
          <Styled.p>
            Instruction here is contributed by community and volunteers and may be inaccurate.
          </Styled.p>
          <Styled.p>
            We should not be accountable for any misinformation or damaged caused.
          </Styled.p>
        </Container>
      </Layout>
    </>
  );
}

export default Disclaimer;
