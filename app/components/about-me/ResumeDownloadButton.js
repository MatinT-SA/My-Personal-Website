// components/about-me/ResumeDownloadButton.js
"use client";

import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { useLocale, useTranslations } from "next-intl";
import toast from "react-hot-toast";

export default function ResumeDownloadButton() {
  const t = useTranslations("AboutMe");
  const locale = useLocale();
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadApiPath = `/api/resume?locale=${locale}`;
  const downloadFileName = `Matin Taherzadeh Resume - ${locale.toUpperCase()}.pdf`;

  const handleDownloadClick = async () => {
    setIsDownloading(true);

    try {
      const response = await fetch(downloadApiPath);

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const tempLink = document.createElement("a");
        tempLink.href = url;
        tempLink.setAttribute("download", downloadFileName);
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);

        window.URL.revokeObjectURL(url);

        toast.success(t("download_success"));
      } else {
        const errorMessage = await response.text();
        console.error("Download Error:", response.status, errorMessage);

        toast.error(t("download_error"));
      }
    } catch (error) {
      console.error("Network Error:", error);

      toast.error(t("network_error"));
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownloadClick}
      disabled={isDownloading}
      className={`
        relative px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 ease-in-out flex items-center gap-2
        ${
          isDownloading
            ? "bg-gray-400 text-gray-600 cursor-not-allowed"
            : "text-blue-light bg-purple-primary hover:text-purple-primary hover:bg-blue-300 hover:shadow-lg hover:gap-3.5 cursor-pointer"
        }
      `}
    >
      {isDownloading ? t("download_in_progress") : t("button_resume")}

      {isDownloading ? (
        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        <FiDownload className="w-5 h-5" />
      )}
    </button>
  );
}
