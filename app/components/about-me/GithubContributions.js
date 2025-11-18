// app/components/about-me/GithubContributions.js
"use client";

// Changed to a NAMED import: { GitHubCalendar }
import { GitHubCalendar } from "react-github-calendar";
// Note: The casing (GitHubCalendar vs GithubCalendar) is also crucial.

const GITHUB_USERNAME = "MatinT-SA";
// ... (rest of your logic for selectLastHalfYear remains the same)

export default function GithubContributions({ data }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 text-purple-primary">
        GitHub Contributions
      </h3>
      <GitHubCalendar // 👈 Component name now matches the import
        username={GITHUB_USERNAME}
        // ... (rest of props)
      />
    </div>
  );
}
