"use client";

import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { useLocale, useTranslations } from "next-intl";
import toast from "react-hot-toast";
import LoadingButton from "../ui/LoadingButton";

export default function ResumeDownloadButton() {
  const t = useTranslations("AboutMe");
  const locale = useLocale();
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadApiPath = `/api/resume?locale=${locale}`;
  const downloadFileName = `Matin Taherzadeh Resume - ${locale.toUpperCase()}.pdf`;

  const handleDownloadClick = async () => {
    if (isDownloading) return;

    setIsDownloading(true);

    try {
      const response = await fetch(downloadApiPath);

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const tempLink = document.createElement("a");
      tempLink.href = url;
      tempLink.download = downloadFileName;

      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);

      window.URL.revokeObjectURL(url);

      toast.success(t("download_success"));
    } catch (error) {
      console.error("Resume download failed:", error);
      toast.error(t("download_error"));
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <LoadingButton
      isLoading={isDownloading}
      onClick={handleDownloadClick}
      loadingText={t("download_in_progress")}
      icon={<FiDownload className="w-5 h-5" />}
      spinnerSize="h-5 w-5"
      className="
        px-8 py-4 text-lg font-bold rounded-full
        text-blue-light bg-purple-primary
        hover:text-purple-primary hover:bg-blue-300 hover:shadow-lg hover:gap-3.5
      "
    >
      {t("button_resume")}
    </LoadingButton>
  );
}
