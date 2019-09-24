import { useStaticQuery, graphql } from 'gatsby';

export function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          repositoryUrl
        }
      }
    }
  `);
  return data.site.siteMetadata;
}
