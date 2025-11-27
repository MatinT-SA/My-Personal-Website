"use client";

import React, { useState, useEffect } from "react";
import GithubCalendarGraph from "./GithubCalendarGraph";

export default function GithubContributions({ data }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading/hydration delay
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-8 flex flex-col items-center w-full">
      <h3 className="text-xl font-semibold mb-4 text-purple-primary self-start">
        GitHub Contributions
      </h3>

      <div className="w-full max-w-xl bg-[#2D1B69] rounded-xl shadow-lg border border-purple-500/30 overflow-hidden relative min-h-40">
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            {/* Loading Spinner */}
            <svg
              className="animate-spin h-8 w-8 text-blue-light"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : (
          <GithubCalendarGraph username="MatinT-SA" />
        )}
      </div>
    </div>
  );
}
