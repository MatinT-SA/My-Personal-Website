"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LiquidButton } from "../components/comment/LiquidButton.js";
import { FormInput } from "../components/comment/FormInput.js";

export default function Comment() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []); // Empty dependency array ensures it runs once after mount

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
      className="py-12 scroll-mt-20 min-h-screen bg-purple-primary font-inter"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          className="text-center text-3xl font-extrabold mb-10 text-white drop-shadow-lg"
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
          className="max-w-6xl mx-auto p-8"
        >
          <input
            type="hidden"
            name="_subject"
            value="ایمیل جدید از قسمت ارسال پیام های سایت شخصی متین طاهرزاده"
          />
          <input type="hidden" name="_next" value={currentUrl} />
          <input type="hidden" name="_captcha" value="false" />

          {/* 1. Name and Last Name Row */}
          <motion.div
            variants={fadeInVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8"
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
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8"
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
              pattern="^\+?([0-9\s-]{10,})$"
              customValidationMessage="شماره تلفن معتبر وارد نمایید"
            />
          </motion.div>

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

          {/* 4. Submit Button using LiquidButton component */}
          <div className="flex justify-center mt-12">
            <LiquidButton>ارسال پیام</LiquidButton>
          </div>
        </form>
      </div>
    </section>
  );
}
