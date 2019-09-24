/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

export const GridList = props => (
  <Styled.ul
    {...props}
    sx={{
      listStyle: 'none',
      p: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      columnGap: [2, 3],
      rowGap: [2, 3, 4],
    }}
  />
);

export const GridItem = props => <Styled.li {...props} />;
