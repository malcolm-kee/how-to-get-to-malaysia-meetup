/** @jsx jsx */
import { jsx } from 'theme-ui';

export const Button = ({
  disabled,
  as: Component = 'button',
  type = Component === 'button' ? 'button' : undefined,
  ...props
}) => (
  <Component
    type={type}
    disabled={disabled}
    {...props}
    sx={{
      cursor: disabled ? 'default' : 'pointer',
      display: 'inline-block',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      flex: 'none',
      fontWeight: 'bold',
      minWidth: '64px',
      px: 3,
      py: 2,
      border: 0,
      color: disabled ? 'text' : 'background',
      bg: disabled ? 'background' : 'primary',
      borderRadius: 4,
      '&:hover': disabled
        ? {
            color: 'text',
          }
        : {
            color: 'background',
            bg: 'secondary',
          },
    }}
  />
);
