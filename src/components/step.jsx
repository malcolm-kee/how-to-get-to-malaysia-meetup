/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

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
      <Styled.p
        sx={{
          pl: '28px',
        }}
      >
        {description}
      </Styled.p>
      {photo && (
        <img
          src={photo.publicURL}
          alt=""
          loading="lazy"
          sx={{
            maxWidth: '100%',
          }}
        />
      )}
    </section>
  );
};
