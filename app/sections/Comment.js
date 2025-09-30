"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
// Removed: import { Send } from 'lucide-react';

// --- 1. Reusable Form Input Component (Handles Floating Label Logic) ---
const FormInput = ({
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
            placeholder=" " // Important for CSS sibling selectors in native setups, but managed by state here
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
            placeholder=" " // Important for label positioning
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

// --- 2. Custom CSS for the Liquid Button Animation ---
// Note: Keyframes must be defined globally, so we include them in a style block.
const LiquidButtonStyles = () => (
  <style>
    {`
            @keyframes CommentButton {
                0% { transform: translate(-50%, -75%) rotate(0deg); }
                100% { transform: translate(-50%, -75%) rotate(360deg); }
            }
            .liquid-button-container {
                position: relative;
                width: 200px;
                padding: 1.5rem 4rem; /* Adjusted padding for better look */
                display: block;
                text-align: center;
                overflow: hidden;
                border-radius: 9999px; /* Full rounded corners */
                border: none;
                outline: none;
                background: none;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Added slight shadow */
            }
            .liquid-button-container:hover .liquid,
            .liquid-button-container:focus .liquid {
                top: -150px; /* Moves liquid further up on hover/focus */
            }
            .liquid-button-container span {
                font-size: 1.5rem;
                position: relative;
                z-index: 10;
                color: #fff;
                transition: color 0.3s;
            }
            .liquid-button-container .liquid {
                position: absolute;
                width: 250px; /* Slightly larger liquid area */
                height: 250px;
                left: 50%;
                top: 0px; /* Start liquid at the top */
                background: #0039fa; /* Liquid base color */
                box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
                transition: 0.7s cubic-bezier(0.4, 0, 0.2, 1); /* Slower, smoother transition */
                transform: translateX(-50%);
            }
            .liquid-button-container .liquid::before,
            .liquid-button-container .liquid::after {
                position: absolute;
                content: "";
                width: 200%;
                height: 200%;
                top: 0;
                left: 50%;
                transform: translate(-50%, -75%);
            }
            .liquid-button-container .liquid::before {
                border-radius: 45%;
                background: rgba(255, 255, 255, 0.2); /* Lighter wave */
                animation: CommentButton 6s linear infinite;
            }
            .liquid-button-container .liquid::after {
                border-radius: 40%;
                background: rgba(255, 255, 255, 0.1); /* Darker wave */
                animation: CommentButton 12s linear infinite;
            }
        `}
  </style>
);

// --- 3. Main CommentForm Component ---
export default function CommentForm() {
  // Frame motion variant for the form rows
  const fadeInVariant = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "easeIn", duration: 0.7, delay: 0.2 },
    },
  };

  return (
    <section
      id="comment"
      className="py-12 my-8 scroll-mt-20 bg-purple-primary min-h-[85vh]"
    >
      <LiquidButtonStyles /> {/* Inject custom styles for the liquid button */}
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-center text-3xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ارسال پیام
        </motion.h2>

        <form
          action="https://formsubmit.co/matin.taherzadeh.mmtsa@gmail.com"
          autoComplete="off"
          method="POST"
          className="max-w-4xl mx-auto"
        >
          {/* Hidden field for form subject */}
          <input
            type="hidden"
            name="_subject"
            value="ایمیل جدید از قسمت ارسال پیام های سایت شخصی متین طاهرزاده"
          />
          {/* Disable auto-redirect after submit */}
          <input type="hidden" name="_next" value={window.location.href} />

          {/* 1. Name and Last Name Row */}
          <motion.div
            variants={fadeInVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-10"
          >
            <FormInput id="name" label="نام" name="name" />
            <FormInput id="familyname" label="نام خانوادگی" name="lastName" />
          </motion.div>

          {/* 2. Email and Phone Row */}
          <motion.div
            variants={fadeInVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-10"
          >
            <FormInput
              id="CommentEmail"
              label="ایمیل*"
              type="email"
              name="email"
              required
              customValidationMessage="برای دریافت پاسخ، باید ایمیل معتبر وارد شود"
            />
            <FormInput
              id="phonenumber"
              label="شماره تلفن"
              type="tel"
              name="phoneNumber"
              pattern="^\+?([0-9\s-]{10,})$" // Simplified regex for phone number validation
              customValidationMessage="شماره تلفن معتبر وارد نمایید"
            />
          </motion.div>

          {/* 3. Message Textarea Row */}
          <motion.div
            variants={fadeInVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1"
          >
            <FormInput
              id="CommentMessage"
              label="متن پیام*"
              name="message"
              required
              isTextarea
              customValidationMessage="لطفا متن پیام را وارد کنید"
            />
          </motion.div>

          {/* 4. Submit Button */}
          <div className="flex justify-center mt-16">
            <button type="submit" className="liquid-button-container group">
              <span className="flex items-center gap-3 justify-center">
                ارسال پیام
              </span>
              <div className="liquid"></div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
