// AboutMeText.js (Finalized with state management for button)
"use client";

import { useState } from "react"; // 💡 1. Import useState
import { FiDownload } from "react-icons/fi";
import TypedHeading from "./TypedHeading";
import { useLocale, useTranslations } from "next-intl";
import toast, { Toaster } from "react-hot-toast";

export default function AboutMeText() {
  const t = useTranslations("AboutMe");
  const locale = useLocale();

  // 💡 2. Define state to track loading status for the button
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadApiPath = `/api/resume?locale=${locale}`;
  const downloadFileName = `Matin Taherzadeh Resume - ${locale.toUpperCase()}.pdf`;

  const handleDownloadClick = async () => {
    // 💡 3. START: Set loading state to true and show a simple, persistent loading toast
    setIsDownloading(true);

    // Use a toast ID that won't be dismissed until the end,
    // but only contains the message you want to keep in the toast area.
    const loadingToastId = toast.loading(
      t("download_in_progress") || "Checking availability...",
      // NOTE: I added a new i18n key for the toast message to keep it separate from the button text
      { id: "download_status", duration: Infinity } // Make it persistent
    );

    try {
      const response = await fetch(downloadApiPath);

      if (response.ok) {
        // --- SUCCESS ---
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const tempLink = document.createElement("a");
        tempLink.href = url;
        tempLink.setAttribute("download", downloadFileName);
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);

        window.URL.revokeObjectURL(url);

        // Dismiss loading toast and show success toast
        toast.dismiss(loadingToastId);
        toast.success(t("download_success") || "Resume download started!");
      } else {
        // --- ERROR (e.g., 404 Not Found) ---
        const errorMessage = await response.text();
        console.error("Download Error:", response.status, errorMessage);

        // Dismiss loading toast and show a user-friendly error toast
        toast.dismiss(loadingToastId);
        toast.error(
          t("download_error") ||
            "Error: The resume file is not available for this language."
        );
      }
    } catch (error) {
      // --- NETWORK/FETCH ERROR ---
      console.error("Network Error:", error);

      // Dismiss loading toast and show network error toast
      toast.dismiss(loadingToastId);
      toast.error(
        t("network_error") ||
          "A network error occurred. Please check your connection."
      );
    } finally {
      // 💡 4. END: Reset the loading state regardless of success or failure
      setIsDownloading(false);
    }
  };

  return (
    <div className="p-4 sm:px-20 py-4">
      {/* Positioned the Toaster component */}
      <Toaster position="bottom-right" reverseOrder={false} />

      <TypedHeading />

      <p className="text-base sm:text-lg text-gray-700 leading-relaxed sm:leading-12">
        {t("text1")}
        <br />
        {t("text2")}
        <br />
        {t("text3")}
        <br />
        {t("text4")}
        <br />
        {t("text5")}
      </p>

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleDownloadClick}
          // 💡 5. Use the isDownloading state to disable the button
          disabled={isDownloading}
          className={`
            relative px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 ease-in-out flex items-center gap-2
            ${
              isDownloading
                ? "bg-gray-400 text-gray-600 cursor-not-allowed" // Disabled style
                : "text-blue-light bg-purple-primary hover:text-purple-primary hover:bg-blue-300 hover:shadow-lg hover:gap-3.5 cursor-pointer" // Active style
            }
          `}
        >
          {/* 💡 6. Conditional Button Text */}
          {
            isDownloading
              ? t("download_in_progress") || "Downloading..." // Text when loading
              : t("button_resume") // Original text
          }

          {/* 💡 7. Optional: Show a spinner or the icon */}
          {isDownloading ? (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <FiDownload className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}
