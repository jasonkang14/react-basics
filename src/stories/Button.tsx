import React from "react";
import "./button.css";

import styled from "@emotion/styled";
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  disabled?: boolean;

  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  disabled = false,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <Test
      type="button"
      disabled={disabled}
      // className={["storybook-button", `storybook-button--${size}`, mode].join(
      //   " "
      // )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </Test>
  );
};

const Test = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  width: 230px;
  &:hover {
    background-color: red;
  }
`;
