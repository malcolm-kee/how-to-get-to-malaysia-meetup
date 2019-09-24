/** @jsx jsx */
import Image from 'gatsby-image';
import { jsx } from 'theme-ui';

export const Step = ({ stepNumber, description, photo }) => {
  return (
    <section
      sx={{
        position: 'relative',
      }}
    >
      <span
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          borderRadius: '50%',
          backgroundColor: 'primary',
          color: 'background',
          width: '24px',
          height: '24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {stepNumber}
      </span>
      <p
        sx={{
          pl: '28px',
        }}
      >
        {description}
      </p>
      {photo && <Image fluid={photo.childImageSharp.fluid} alt="" />}
    </section>
  );
};
