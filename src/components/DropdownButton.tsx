import React from "react";
import styled from "styled-components";
import { CaretIcon } from "./CaretIcon";

interface DropdownButtonProps {
  className?: string;
  onClick: (args: unknown) => void;
  isDropdownOpen: boolean;
}

const DropdownButtonBase: React.FC<DropdownButtonProps> = ({
  isDropdownOpen,
  children,
  ...props
}) => {
  return (
    <div {...props}>
      {children}
      <CaretIcon
        fill="#9c9fa3"
        transform={isDropdownOpen ? "rotate(0)" : "rotate(180)"}
      />
    </div>
  );
};

export const DropdownButton = styled(DropdownButtonBase)`
  background-color: #18232b;
  color: #9c9fa3;
  cursor: pointer;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
`;
