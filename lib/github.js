// lib/github.js
import "server-only";

const GITHUB_API_URL = "https://api.github.com/graphql";

export async function getGithubContributions() {
  const token = process.env.GITHUB_TOKEN;

  const res = await fetch(GITHUB_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
          user(login: "MatinT-SA") {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `,
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub data");
  }

  const data = await res.json();
  return data;
}
