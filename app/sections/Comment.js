"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { LiquidButton } from "../components/comment/LiquidButton";
import { FormInput } from "../components/comment/FormInput.js";

// تعریف FormInput حذف شده و در فایل FormInput.jsx قرار گرفته است.

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
      className="py-12 scroll-mt-20 bg-purple-primary min-h-[85vh]"
    >
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

          {/* 4. Submit Button - Now using the imported LiquidButton component */}
          <div className="flex justify-center mt-16">
            <LiquidButton>ارسال پیام</LiquidButton>
          </div>
        </form>
      </div>
    </section>
  );
}
