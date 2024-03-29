/** @jsx jsx */
import { Container, jsx } from 'theme-ui';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { NavLink } from './nav-link';
import { GridItem, GridList } from './grid';
import { Link } from 'gatsby';

export const Footer = () => {
  const metadata = useSiteMetadata();

  return (
    <Container sx={{ py: 1 }}>
      <GridList>
        <GridItem>
          <NavLink as={Link} to="/disclaimer/">
            Disclaimer
          </NavLink>
        </GridItem>
        <GridItem>
          <NavLink href={metadata.repositoryUrl}>GitHub</NavLink>
        </GridItem>
      </GridList>
    </Container>
  );
};
