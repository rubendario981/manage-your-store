import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import { sharedFormStyles } from '../SharedFormStyle';

interface Variants {
  icon?: React.ReactNode;
}
const StyledInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    ${sharedFormStyles}
  }

  span {
    position: absolute;
    right: 0.75rem;
    top: 55%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #999;
  }
`;

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  Variants & {
    children: React.ReactNode;
  };

const Input = ({ type = 'text', ...props }: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('');

  const isPasswordField = type === 'password';
  const isClearable = (type === 'text' || type === 'email') && !props.readOnly && !props.disabled && value;

  const inputType = isPasswordField ? (isVisible ? 'text' : 'password') : type;

  const toggleVisibility = () => setIsVisible((prev) => !prev);
  
  const clearInput = () => setValue('');

  return (
    <StyledInput>
      <input
        {...props}
        type={inputType}
        value={value}
        onInput={(e) => setValue((e.target as HTMLInputElement).value)}
      />
      {isClearable && !isPasswordField && (
        <span onClick={clearInput}>
          <IoClose />
        </span>
      )}
      {isPasswordField && (
        <span onClick={toggleVisibility}>
          {isVisible ? <IoMdEyeOff /> : <IoMdEye />}
        </span>
      )}
    </StyledInput>
  );
};

export default Input;