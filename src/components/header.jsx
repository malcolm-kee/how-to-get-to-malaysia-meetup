/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { NavLink } from './nav-link';

export function Header() {
  const { title } = useSiteMetadata();

  return (
    <NavLink
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
      }}
      css={theme => ({
        [`@media screen and (max-width: ${theme.breakpoints[0]})`]: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      })}
      as={Link}
      to="/"
    >
      {title}
    </NavLink>
  );
}
