import React from "react";
import "./style.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <button className={`c2-btn ${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
