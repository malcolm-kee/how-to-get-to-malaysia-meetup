/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

export const GridList = props => (
  <Styled.ul
    {...props}
    sx={{
      listStyle: 'none',
      p: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
      gridGap: [2, 3],
    }}
  />
);

export const GridItem = props => <Styled.li {...props} />;
