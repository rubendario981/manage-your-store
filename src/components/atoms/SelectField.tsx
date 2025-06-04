import { useState } from 'react';
import styled from 'styled-components';
import Select, { Option } from 'rc-select';
import type { BaseOptionType } from 'rc-select/lib/Select';
import 'rc-select/assets/index.css';
import { RiArrowDownSFill } from 'react-icons/ri';
import { sharedFormStyles } from '../SharedFormStyle';

const StyledSelect = styled.div`
  select, .rc-select {
    ${sharedFormStyles}
    background-color: white;
    cursor: pointer;
    .rc-select-selector {
      border: none;
      outline: none;
    }
    .rc-select-arrow, .rc-select-clear {
      top: 30%;
    }
  }
    
  .rc-select {
    padding: 0.75rem 0.5rem;
    cursor: pointer;
  }
`;

export interface OptionSelectField {
  value: string;
  label: string;
}

type SelectProps = BaseOptionType & {
  options: OptionSelectField[];
};
// type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
//   options: OptionSelectField[];
// };

const SelectField = ({ options, ...props }: SelectProps) => {
  const [ value, setValue ] = useState<string | number | readonly string[] | undefined>('');
  return (
    <StyledSelect>
      <Select 
        {...props}
        placeholder="Seleccione"
        suffixIcon={RiArrowDownSFill}
        allowClear
        value={value}
        onChange={(selected) => setValue((selected))}
      >
        <Option value="">Seleccione</Option>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      {/* <select
        {...props}
        value={value}
        onChange={(e) => setValue((e.target as HTMLSelectElement).value)}
      >
        <option value="">Seleccione</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select> */}
    </StyledSelect>
  );
};

export default SelectField;