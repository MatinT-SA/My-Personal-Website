"use client";

import { CommentForm } from "@/app/components/comment/CommentForm.js";
import { CommentHeader } from "@/app/components/comment/CommentHeader.js";
import { useCommentForm } from "@/lib/hooks/useCommentForm.js";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";

export default function Comment() {
  const t = useTranslations("comment");
  const locale = useLocale();
  const isRTL = useMemo(() => locale === "fa", [locale]);
  const dir = useMemo(() => (isRTL ? "rtl" : "ltr"), [isRTL]);

  const { formData, handleInputChange, handleSubmit, isSubmitting } =
    useCommentForm({ t });

  return (
    <section
      id="comment"
      className="py-15 scroll-mt-20 h-full bg-purple-primary font-inter"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <CommentHeader title={t("title")} />
        <CommentForm
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          t={t}
          dir={dir}
        />
      </div>
    </section>
  );
}
