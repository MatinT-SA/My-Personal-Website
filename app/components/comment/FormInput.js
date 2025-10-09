import React, { useState } from "react";

/**
 * Renders a form input field (Input or Textarea) with a floating label effect and custom HTML5 validation.
 * This component is now a CONTROLLED COMPONENT, meaning it relies on the parent component
 * (Comment.js) to manage its 'value' and 'onChange' state.
 * * @param {Object} props
 * @param {string} props.id - A unique identifier for the input/textarea and its label.
 * @param {string} props.label - The label text which will float (e.g. "Email*").
 * @param {boolean} [props.isTextarea=false] - If true, a textarea will be rendered.
 * @param {string} props.value - The current value, controlled by the parent. (REQUIRED)
 * @param {function} props.onChange - The handler function to update the parent state. (REQUIRED)
 * @param {Object} [props.rest] - All other standard HTML input attributes (name, type, required, pattern, etc.)
 */

export const FormInput = ({
  id,
  label,
  isTextarea = false,
  customValidationMessage,
  ...rest
}) => {
  const value = rest.value || "";
  const [isFocused, setIsFocused] = useState(false);
  const shouldFloat = isFocused || value;

  const handleBlur = (e) => {
    setIsFocused(false);
  };

  const handleInvalid = (e) => {
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
        {...rest}
        type={isTextarea ? undefined : rest.type || "text"}
        className={`w-full bg-transparent text-purple-primary text-lg px-2 my-1 leading-none placeholder-transparent focus:outline-none transition-all duration-300 relative z-10 ${
          isTextarea ? "h-full resize-none pt-4" : "h-full"
        }`}
        placeholder={label}
        rows={isTextarea ? 4 : undefined}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        onInvalid={handleInvalid}
        onInput={(e) => {
          e.target.setCustomValidity("");
        }}
      />

      {/* Style Spans (no change) */}
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
            : "text-xl text-yellow-400 translate-y-[30px]"
        }`}
      >
        {label}
      </label>
    </div>
  );
};
