import type React from "react"
import type { InputHTMLAttributes } from "react"
import "./style.css"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input label
   */
  label?: string
  /**
   * Error message
   */
  error?: string
}

export const Input: React.FC<InputProps> = ({ label, error, className = "", id, ...props }) => {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`
  const inputClass = `input ${error ? "input-error" : ""} ${className}`

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <input id={inputId} className={inputClass} {...props} />
      {error && <div className="input-error-message">{error}</div>}
    </div>
  )
}

export default Input

