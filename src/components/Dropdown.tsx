import * as React from "react";
import styled from "styled-components";
import { DropdownButton } from "./DropdownButton";
import { DropdownOption } from "./DropdownOption";

interface DropdownProps {
  className?: string;
  value: string;
  options: Array<string>;
  onChange: (value: string) => void;
  placeholder: string;
}

export const DropdownBase = (props: DropdownProps) => {
  const { className, value, options, onChange, placeholder } = props;

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const toggleDropdownMenu = () =>
    setIsDropdownOpen((previousValue) => !previousValue);

  const handleSelectOption = (value) => {
    onChange(value);
    toggleDropdownMenu();
  };

  const optionsToRender = options.map((option) => (
    <DropdownOption key={option} onClick={() => handleSelectOption(option)}>
      {option}
    </DropdownOption>
  ));

  return (
    <div className={className}>
      <DropdownButton
        onClick={toggleDropdownMenu}
        isDropdownOpen={isDropdownOpen}
      >
        {value || placeholder}
      </DropdownButton>
      <>{isDropdownOpen && optionsToRender}</>
    </div>
  );
};

export const Dropdown = styled(DropdownBase)`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  max-width: 100px;

  ${DropdownButton}:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;
