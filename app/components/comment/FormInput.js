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
  name,
  type = "text",
  required = false,
  isTextarea = false,
  pattern,
  customValidationMessage,
}) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // منطق تعیین شناوری لیبل: اگر فوکوس باشد، یا مقدار داشته باشد، یا Textarea باشد
  // FIX: Removed '|| isTextarea'. The label for textarea should only float if it has content or is focused.
  const shouldFloat = isFocused || value;

  // تنظیم پیام اعتبارسنجی سفارشی هنگام از دست دادن فوکوس
  const handleBlur = (e) => {
    e.target.setCustomValidity("");
    setIsFocused(false);
  };

  // تنظیم پیام اعتبارسنجی سفارشی در رویداد نامعتبر
  const handleInvalid = (e) => {
    // Clear validity before setting the custom message
    e.target.setCustomValidity("");
    if (customValidationMessage) {
      e.target.setCustomValidity(customValidationMessage);
    }
  };

  const InputComponent = isTextarea ? "textarea" : "input";

  return (
    // Class equivalent to .Comment-InputBox (relative container)
    // Adjusted container height/padding to create space for the floating label (40px input height)
    <div
      className={`relative pt-6 pb-2 mb-8 h-auto ${
        isTextarea ? "min-h-[120px]" : "h-[75px]"
      } transition-all duration-300`}
    >
      {/* 1. Input/Textarea Component (z-index 1, purple text, 1.8rem font size)
       */}
      <InputComponent
        id={id}
        name={name}
        type={isTextarea ? undefined : type}
        required={required}
        pattern={pattern}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // Styles: full width, transparent, large font (1.8rem approx text-xl), purple text
        className={`w-full bg-transparent text-purple-primary text-xl px-2 placeholder-transparent focus:outline-none transition-all duration-300 relative z-10 ${
          isTextarea ? "h-full resize-none pt-2" : "h-10"
        }`}
        placeholder={label} // Important for ARIA/Accessibility
        rows={isTextarea ? 4 : undefined}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        onInvalid={handleInvalid}
        onInput={(e) => e.target.setCustomValidity("")} // Clear validity on input (similar to legacy oninput)
      />

      {/* 2. Base Line (The faint white line, bottom layer)
       */}
      <span
        className={`absolute bottom-0 left-0 block w-full bg-white/30 transition-all duration-500 rounded-sm pointer-events-none`}
        style={{ height: "2px" }} // Base line height
      ></span>

      {/* 3. Animated Yellow Fill (.Comment-Line equivalent) 
        Animates height on focus/value to match the legacy CSS effect.
      */}
      <span
        className={`absolute bottom-0 left-0 block w-full bg-yellow-400 transition-all duration-500 rounded-sm pointer-events-none origin-bottom`}
        // Sets the animated height: 100% for textarea, 40px for input, 2px (base line) when not floating
        style={{
          height: shouldFloat ? (isTextarea ? "90%" : "40px") : "2px",
        }}
      ></span>

      {/* 4. Floating Label (.Comment-text equivalent) 
        Styles: top-right absolute position, large text (1.8rem approx text-xl), yellow text
      */}
      <label
        htmlFor={id}
        // Tailwind classes matching the legacy CSS positioning and color
        className={`absolute right-0 top-0 transition-all duration-300 pointer-events-none px-2 z-20 ${
          shouldFloat
            ? "text-sm text-yellow-400 -translate-y-4" // Floating state (Pushed up more for clearer visual separation)
            : "text-xl text-yellow-400 translate-y-[28px]" // Default state (line-height 40px equivalent)
        }`}
      >
        {label}
      </label>
    </div>
  );
};
