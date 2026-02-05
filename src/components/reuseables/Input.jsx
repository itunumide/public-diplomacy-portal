import React from "react";
import { MdVisibility, MdVisibilityOff, MdExpandMore } from "react-icons/md";
import Label from "./Label";

const Input = ({
  label,
  type = "text",
  id,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  className = "",
  icon: Icon,
  showPasswordToggle = false,
  showPassword = false,
  onTogglePassword,
  options = [],
  error,
  ...props
}) => {
  const baseInputClasses = `
    w-full px-4 py-3 border border-border-light rounded-lg bg-background-light
    text-text-main placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
    transition-colors disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const inputWithIconClasses = "pl-10 pr-12";
  const textareaClasses = "resize-none min-h-[140px]";
  const selectClasses = "appearance-none pr-10";

  const getInputClasses = () => {
    let classes = baseInputClasses;
    if (Icon || showPasswordToggle) {
      classes += ` ${inputWithIconClasses}`;
    }
    if (type === "textarea") {
      classes += ` ${textareaClasses}`;
    }
    if (type === "select") {
      classes += ` ${selectClasses}`;
    }
    return classes;
  };

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={`${getInputClasses()} ${className}`}
            {...props}
          />
        );
      case "select":
        return (
          <div className="relative mb-3">
            <select
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              required={required}
              disabled={disabled}
              className={`${getInputClasses()} ${className}`}
              {...props}
            >
              <option value="" disabled>
                {placeholder || "Select an option..."}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
              <MdExpandMore size={20} />
            </div>
          </div>
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            id={id}
            name={name}
            checked={value}
            onChange={onChange}
            disabled={disabled}
            className="h-4 w-4  text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
            {...props}
          />
        );
      default:
        return (
          <div className="relative mb-3">
            {Icon && (
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon className="text-gray-400" size={20} />
              </div>
            )}
            <input
              type={showPasswordToggle && showPassword ? "text" : type}
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              required={required}
              disabled={disabled}
              className={`${getInputClasses()} ${className}`}
              {...props}
            />
            {showPasswordToggle && (
              <button
                type="button"
                onClick={onTogglePassword}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <MdVisibilityOff size={20} />
                ) : (
                  <MdVisibility size={20} />
                )}
              </button>
            )}
          </div>
        );
    }
  };

  if (type === "checkbox") {
    return (
      <div className="flex items-start">
        {renderInput()}
        {label && (
          <label
            htmlFor={id}
            className="ml-2 block text-sm text-gray-600 cursor-pointer"
          >
            {label}
          </label>
        )}
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }

  return (
    <div>
      {label && (
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
      )}
      {renderInput()}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
