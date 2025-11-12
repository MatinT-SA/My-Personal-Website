import React, { useState } from "react";

/**
 * Controlled form input field (input or textarea) with floating label and custom HTML5 validation.
 *
 * Props:
 * @param {string} id - Unique identifier for the input/textarea and its label.
 * @param {string} label - Label text (e.g., "Email*").
 * @param {boolean} [isTextarea=false] - If true, renders a textarea instead of an input.
 * @param {string} value - The current value (controlled by the parent).
 * @param {function} onChange - Callback to update parent state.
 * @param {string} [customValidationMessage] - Custom message for invalid input.
 * @param {string} [dir="ltr"|"rtl"] - Text direction (for bilingual layouts).
 * @param {...object} rest - Standard input attributes (type, name, required, etc.)
 */

export const FormInput = ({
  id,
  label,
  isTextarea = false,
  customValidationMessage,
  dir = "ltr",
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const value = rest.value || "";
  const shouldFloat = isFocused || value;

  const InputComponent = isTextarea ? "textarea" : "input";

  const handleInvalid = (e) => {
    if (customValidationMessage) {
      e.target.setCustomValidity(customValidationMessage);
    }
  };

  const handleInput = (e) => {
    e.target.setCustomValidity("");
  };

  return (
    <div
      className={`relative pt-6 pb-2 mb-8 transition-all duration-300 ${
        isTextarea ? "min-h-[120px]" : "h-[75px]"
      }`}
      dir={dir}
    >
      <InputComponent
        id={id}
        {...rest}
        dir={dir}
        type={isTextarea ? undefined : rest.type || "text"}
        className={`
          w-full bg-transparent text-purple-primary text-lg px-2 my-2 leading-none
          placeholder-transparent focus:outline-none transition-all duration-300 relative z-10
          ${isTextarea ? "h-full resize-none pt-4" : "h-full"}
          ${dir === "rtl" ? "text-right" : "text-left"}
        `}
        placeholder={label}
        rows={isTextarea ? 4 : undefined}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onInvalid={handleInvalid}
        onInput={handleInput}
      />

      {/* Underline background */}
      <span
        className="absolute bottom-0 left-0 block w-full bg-white/30 transition-all duration-500 rounded-sm pointer-events-none"
        style={{ height: "2px" }}
      ></span>

      {/* Animated yellow underline */}
      <span
        className="absolute bottom-0 left-0 block w-full bg-yellow-400 transition-all duration-500 rounded-sm pointer-events-none origin-bottom"
        style={{
          height: shouldFloat ? (isTextarea ? "80%" : "40px") : "2px",
        }}
      ></span>

      {/* Floating label */}
      <label
        htmlFor={id}
        className={`
          absolute top-0 px-2 z-20 pointer-events-none transition-all duration-500
          ${dir === "rtl" ? "right-0 text-right" : "left-0 text-left"}
          ${
            shouldFloat
              ? "text-sm text-yellow-400"
              : "text-xl text-yellow-400 translate-y-[30px]"
          }
        `}
      >
        {label}
      </label>
    </div>
  );
};
