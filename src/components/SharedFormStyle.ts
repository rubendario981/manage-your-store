import { css } from 'styled-components';

export const sharedFormStyles = css`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #333;
  }

  &::placeholder {
    color: #aaa;
  }

  &::invalid {
    border-color: red;
  }

  transition: border-color 0.3s;
`;
