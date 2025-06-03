import styled, { css } from 'styled-components';

interface Variants {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  fullwidth?: string;
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  iconOnly?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  accessibilityText?: string;
}

const sizeStyles = {
  sm: css`
    padding: 0.4rem 0.75rem;
    font-size: 0.875rem;
  `,
  md: css`
    padding: 0.6rem 1rem;
    font-size: 1rem;
  `,
  lg: css`
    padding: 0.75rem 1.25rem;
    font-size: 1.125rem;
  `,
};

const StyledButton = styled.button<Variants>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background 0.3s ease, opacity 0.3s ease;

  ${({ size = 'md' }) => sizeStyles[size]}

  ${({ fullwidth }) =>
    fullwidth === 'true' &&
    css`
      width: 100%;
      display: block;
    `}

  ${({ theme, variant = 'primary' }) => {
    const styles = theme.buttons[variant];
    return css`
      background: ${styles.background};
      color: ${styles.color};
    `;
  }}

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

// ✅ Aquí se tipan las props extendidas:
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Variants & {
    children: React.ReactNode;
  };

const Button = ({ 
  variant = 'primary',
  fullwidth,
  size = 'md',
  loading,
  iconLeft,
  iconRight,
  accessibilityText,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton 
      variant={variant}
      fullwidth={fullwidth}
      size={size}
      disabled={loading || props.disabled}
      {...props}
    >
      {accessibilityText && <span className='sr-only'>{accessibilityText}</span>}
      {loading ? (
        'Cargando...'
      ) : (
        <>
          {iconLeft && <span>{iconLeft}</span>}
          {children}
          {iconRight && <span>{iconRight}</span>}
        </>
      )}
    </StyledButton>
  )
};

export default Button;
