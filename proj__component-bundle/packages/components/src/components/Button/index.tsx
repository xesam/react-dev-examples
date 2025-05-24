import type React from "react"
import type { ButtonHTMLAttributes } from "react"
import "./style.css"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   */
  variant?: "primary" | "secondary" | "text"
  /**
   * Button size
   */
  size?: "small" | "medium" | "large"
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}

export default Button

