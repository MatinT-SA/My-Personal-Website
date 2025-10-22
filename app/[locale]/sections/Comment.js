"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

import { LiquidButton } from "@/app/components/comment/LiquidButton.js";
import { FormInput } from "@/app/components/comment/FormInput.js";

export default function Comment() {
  const [formData, setFormData] = useState({
    name: "",
    familyname: "",
    email: "",
    phonenumber: "",
    CommentMessage: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
        toast.success("پیام شما با موفقیت ارسال شد!", {
          duration: 3000,
          position: "bottom-right",
        });

        setFormData({
          name: "",
          familyname: "",
          email: "",
          phonenumber: "",
          CommentMessage: "",
        });
      } else {
        const errorData = await response.json();
        const errorMessage =
          errorData.message || "خطا در ارسال پیام. لطفا دوباره تلاش کنید.";
        toast.error(errorMessage, {
          duration: 3000,
          position: "bottom-right",
        });
        console.error("API response error:", errorData);
      }
    } catch (error) {
      toast.error("خطا در ارسال پیام", {
        duration: 4000,
        position: "bottom-right",
      });
      console.error("Fetch failed:", error);
    } finally {
      setIsSubmitting(false);
    }
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
      <Toaster
        position="bottom-right"
        toastOptions={{
          success: {
            style: {
              marginBottom: "1.5rem",
              marginLeft: "1.5rem",
              color: "text-purple-primary",
              borderRadius: "10px",
              padding: ".75rem 1.25rem",
              fontSize: "1.2rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            },
          },
          error: {
            style: {
              marginBottom: "1.5rem",
              marginLeft: "1.5rem",
              borderRadius: "10px",
              color: "red",
              padding: ".75rem 1.25rem",
              fontSize: "1.2rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            },
          },
        }}
      />

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
              name="name"
              onChange={handleInputChange}
              value={formData.name}
            />
            <FormInput
              id="familyname"
              label="نام خانوادگی"
              name="familyname"
              onChange={handleInputChange}
              value={formData.familyname}
            />
          </motion.div>

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
              onChange={handleInputChange}
              value={formData.email}
              customValidationMessage="برای دریافت پاسخ، باید ایمیل معتبر وارد شود"
            />
            <FormInput
              id="phonenumber"
              label="شماره تلفن"
              type="tel"
              name="phonenumber"
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
              name="CommentMessage"
              required
              isTextarea
              onChange={handleInputChange}
              value={formData.CommentMessage}
              customValidationMessage="لطفا متن پیام را وارد کنید"
            />
          </motion.div>

          <div className="flex justify-center">
            <LiquidButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
            </LiquidButton>
          </div>
        </form>
      </div>
    </section>
  );
}
