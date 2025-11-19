"use client";

import { GitHubCalendar } from "react-github-calendar";

const GITHUB_USERNAME = "MatinT-SA";

export default function GithubContributions({ data }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 text-purple-primary">
        GitHub Contributions
      </h3>

      <GitHubCalendar
        username={GITHUB_USERNAME}
        blockSize={10}
        blockMargin={2}
        fontSize={12}
        color="#7D5A9B"
        responsive
      />
    </div>
  );
}
