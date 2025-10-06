"use client";

import React, { useState } from "react"; // Removed unused useEffect
import { motion } from "framer-motion";
import { LiquidButton } from "../components/comment/LiquidButton.js";
import { FormInput } from "../components/comment/FormInput.js";

export default function Comment() {
  const [formData, setFormData] = useState({
    name: "",
    familyname: "",
    email: "",
    phonenumber: "",
    CommentMessage: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'submitting', 'success', 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("submitting");

    // The formData state keys (name, familyname, etc.) already match the required payload keys.
    const payload = formData;

    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        // Clear the form
        setFormData({
          name: "",
          familyname: "",
          email: "",
          phonenumber: "",
          CommentMessage: "",
        });
      } else {
        setSubmissionStatus("error");
        // Log the error response from the server (e.g., validation failure)
        console.error("API response error:", await response.json());
      }
    } catch (error) {
      setSubmissionStatus("error");
      console.error("Fetch failed:", error);
    }

    // Clear status message after 5 seconds
    setTimeout(() => setSubmissionStatus(null), 5000);
  };

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
      className="py-15 scroll-mt-20 h-full bg-purple-primary font-inter"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          className="text-center text-3xl font-extrabold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ارسال پیام
        </motion.h2>

        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto p-4"
        >
          {/* 1. Name and Last Name Row */}
          <motion.div
            variants={fadeInVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6"
          >
            <FormInput
              id="name"
              label="نام"
              name="name" // Matches formData.name
              onChange={handleInputChange}
              value={formData.name}
            />
            <FormInput
              id="familyname"
              label="نام خانوادگی"
              name="familyname" // Matches formData.familyname
              onChange={handleInputChange}
              value={formData.familyname}
            />
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
              name="email" // Matches formData.email
              required
              onChange={handleInputChange}
              value={formData.email}
              customValidationMessage="برای دریافت پاسخ، باید ایمیل معتبر وارد شود"
            />
            <FormInput
              id="phonenumber"
              label="شماره تلفن"
              type="tel"
              name="phonenumber" // Matches formData.phonenumber
              pattern="^\+?([0-9\s-]{10,})$"
              onChange={handleInputChange}
              value={formData.phonenumber}
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
              name="CommentMessage" // Matches formData.CommentMessage
              required
              isTextarea
              onChange={handleInputChange}
              value={formData.CommentMessage}
              customValidationMessage="لطفا متن پیام را وارد کنید"
            />
          </motion.div>

          {/* Submission Status Message */}
          {submissionStatus && (
            <p
              className={`text-center mt-4 font-bold transition-colors duration-300 ${
                submissionStatus === "submitting"
                  ? "text-yellow-400"
                  : submissionStatus === "success"
                  ? "text-neon-green"
                  : "text-red-500"
              }`}
            >
              {submissionStatus === "submitting" && "در حال ارسال پیام..."}
              {submissionStatus === "success" &&
                "پیام شما با موفقیت ارسال شد! ✅"}
              {submissionStatus === "error" &&
                "خطا در ارسال پیام. لطفاً دوباره تلاش کنید. ❌"}
            </p>
          )}

          {/* 4. Submit Button using LiquidButton component */}
          <div
            className="flex justify-center"
            // The LiquidButton should handle the disabled state visually based on the status, but the submit type handles form submission
          >
            <LiquidButton
              type="submit"
              disabled={submissionStatus === "submitting"}
            >
              {submissionStatus === "submitting"
                ? "در حال ارسال..."
                : "ارسال پیام"}
            </LiquidButton>
          </div>
        </form>
      </div>
    </section>
  );
}
