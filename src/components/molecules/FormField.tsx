
import styled from 'styled-components';
import Input from '../atoms/Input';

const Label = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 0rem;
`;

type FormFieldProps = {
  icon?: React.ReactNode;
}

type Props = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  error?: string;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: ReturnType<any>;
} & FormFieldProps;

const FormField = ({ label, type, placeholder, error, register, name, icon, disabled }: Props) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        icon={icon}
        disabled={disabled}
        {...register}
      />
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </div>
  );
};

export default FormField;