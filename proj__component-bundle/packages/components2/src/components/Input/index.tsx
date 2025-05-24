import React from "react";
import "./style.css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<InputProps> = ({ variant = "primary", ...props }) => {
  return <input className={`c2-input ${variant}`} {...props} />;
};

export default Button;
