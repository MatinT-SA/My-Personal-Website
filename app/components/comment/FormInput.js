import React, { useState } from "react";

/**
 * رندر یک فیلد ورودی فرم (Input یا Textarea) با افکت لیبل شناور و اعتبارسنجی HTML5 سفارشی.
 * این کامپوننت برای استفاده در فرم‌های متنی (مانند نام، ایمیل، پیام) طراحی شده است.
 * @param {Object} props
 * @param {string} props.id - شناسه منحصر به فرد برای تگ input/textarea و label.
 * @param {string} props.label - متن لیبل که به صورت شناور عمل می کند (مثلاً "ایمیل*").
 * @param {string} [props.type="text"] - نوع ورودی (text, email, tel, etc.).
 * @param {string} props.name - نام فیلد برای ارسال داده های فرم.
 * @param {boolean} [props.required=false] - مشخص می کند آیا فیلد اجباری است.
 * @param {boolean} [props.isTextarea=false] - اگر true باشد، یک textarea رندر می شود.
 * @param {string|null} [props.pattern=null] - الگوی regex برای اعتبارسنجی ورودی.
 * @param {string} props.customValidationMessage - پیام خطای سفارشی برای اعتبارسنجی.
 */
export const FormInput = ({
  id,
  label,
  type = "text",
  name,
  required = false,
  isTextarea = false,
  pattern = null,
  customValidationMessage,
}) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const hasValue = value.length > 0;
  const shouldFloat = isFocused || hasValue;

  const handleValidation = (e) => {
    const target = e.target;
    if (required && target.validity.valueMissing) {
      target.setCustomValidity(
        customValidationMessage || `لطفا ${label} را وارد کنید.`
      );
    } else if (target.validity.patternMismatch) {
      target.setCustomValidity(
        customValidationMessage || `مقدار وارد شده برای ${label} معتبر نیست.`
      );
    } else {
      target.setCustomValidity("");
    }
  };

  // Determines the style for the label and underline
  const activeStyle = "h-full bg-yellow-primary";
  const inactiveStyle = "h-[2px] bg-yellow-primary";

  return (
    <div className="relative w-full py-8 md:py-12 transition-all duration-300">
      <div
        className={`relative w-full ${isTextarea ? "h-32 md:h-40" : "h-10"}`}
      >
        {/* The Input/Textarea Element */}
        {isTextarea ? (
          <textarea
            id={id}
            name={name}
            required={required}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onInvalid={handleValidation}
            onInput={handleValidation}
            placeholder=" "
            className="absolute w-full h-full bg-transparent border-none outline-none text-xl p-2 z-10 text-purple-primary resize-none transition-colors duration-300 peer"
          ></textarea>
        ) : (
          <input
            id={id}
            type={type}
            name={name}
            required={required}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onInvalid={handleValidation}
            onInput={handleValidation}
            pattern={pattern}
            autoComplete={
              type === "email" ? "email" : type === "tel" ? "tel" : "off"
            }
            placeholder=" "
            className="absolute w-full h-full bg-transparent border-none outline-none text-xl p-2 z-10 text-purple-primary transition-colors duration-300 peer"
          />
        )}

        {/* The Floating Label (Managed by shouldFloat state) */}
        <label
          htmlFor={id}
          className={`absolute right-2 text-xl font-normal text-yellow-primary transition-all duration-300 pointer-events-none z-0 
            ${
              shouldFloat
                ? "top-[-30px] md:top-[-45px] right-0 text-yellow-primary !text-lg" // Floating position
                : "top-0 leading-10" // Normal position
            }`}
        >
          {label}
        </label>

        {/* The Underline/Line Element (Expands on focus/value) */}
        <span
          className={`absolute bottom-0 left-0 w-full rounded-sm transition-all duration-500 ${
            shouldFloat ? activeStyle : inactiveStyle
          }`}
        ></span>
      </div>
    </div>
  );
};
