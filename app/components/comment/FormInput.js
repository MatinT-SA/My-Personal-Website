import React, { useState } from "react";

/**
 * Renders a form input field (Input or Textarea) with a floating label effect and custom HTML5 validation.
 * This component is designed for use in text-based forms (e.g. name, email, message).
 * @param {Object} props
 * @param {string} props.id - A unique identifier for the input/textarea and its label.
 * @param {string} props.label - The label text which will float (e.g. "Email*").
 * @param {string} [props.type="text"] - The input type (text, email, tel, etc.).
 * @param {string} props.name - The field name used when submitting form data.
 * @param {boolean} [props.required=false] - Whether the field is required.
 * @param {boolean} [props.isTextarea=false] - If true, a textarea will be rendered.
 * @param {string|null} [props.pattern=null] - A regex pattern for input validation.
 * @param {string} props.customValidationMessage - Custom error message used for validation.
 */

export const FormInput = ({
  id,
  label,
  name,
  type = "text",
  required = false,
  isTextarea = false,
  pattern,
  customValidationMessage,
}) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const shouldFloat = isFocused || value;

  const handleBlur = (e) => {
    e.target.setCustomValidity("");
    setIsFocused(false);
  };

  const handleInvalid = (e) => {
    e.target.setCustomValidity("");
    if (customValidationMessage) {
      e.target.setCustomValidity(customValidationMessage);
    }
  };

  const InputComponent = isTextarea ? "textarea" : "input";

  return (
    <div
      className={`relative pt-6 pb-2 mb-8 h-auto ${
        isTextarea ? "min-h-[120px]" : "h-[75px]"
      } transition-all duration-300`}
    >
      <InputComponent
        id={id}
        name={name}
        type={isTextarea ? undefined : type}
        required={required}
        d
        pattern={pattern}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full bg-transparent text-purple-primary text-lg px-2 py-1 leading-none placeholder-transparent focus:outline-none transition-all duration-300 relative z-10 ${
          isTextarea ? "h-full resize-none pt-4" : "h-10"
        }`}
        placeholder={label}
        rows={isTextarea ? 4 : undefined}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        onInvalid={handleInvalid}
        onInput={(e) => e.target.setCustomValidity("")}
      />

      <span
        className={`absolute bottom-0 left-0 block w-full bg-white/30 transition-all duration-500 rounded-sm pointer-events-none`}
        style={{ height: "2px" }}
      ></span>

      <span
        className={`absolute bottom-0 left-0 block w-full bg-yellow-400 transition-all duration-500 rounded-sm pointer-events-none origin-bottom`}
        style={{
          height: shouldFloat ? (isTextarea ? "80%" : "40px") : "2px",
        }}
      ></span>

      <label
        htmlFor={id}
        className={`absolute right-0 top-0 transition-all duration-500 pointer-events-none px-2 z-20 ${
          shouldFloat
            ? "text-sm text-yellow-400"
            : "text-xl text-yellow-400 translate-y-[36px]"
        }`}
      >
        {label}
      </label>
    </div>
  );
};
