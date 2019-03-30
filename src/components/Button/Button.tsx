import * as React from "react";
import "./Button.css";

interface ButtonProps {
  isActive: boolean;
  onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  ["data-testid"]?: string;
}

const Button: React.FunctionComponent<ButtonProps> = props => {
  return (
    <button
      data-testid={props["data-testid"] ? props["data-testid"] : "button"}
      className={`filter-button ${props.isActive ? "selected" : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
