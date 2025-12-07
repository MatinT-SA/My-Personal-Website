import React from "react";

export const createTooltipBlockRenderer = (t) => (block, activity) => {
  const count = Number(activity.count ?? 0);
  const date = activity.date;

  let contributionText = "";
  if (count === 0) {
    contributionText = t("no_contribution");
  } else {
    contributionText = t("contributions", { count: count });
  }

  const finalContent =
    "\u200e" +
    contributionText +
    " " +
    t("on_date") +
    " \u200e" +
    date +
    "\u200e";

  return React.cloneElement(block, {
    "data-tooltip-id": "my-github-tooltip",
    "data-tooltip-content": finalContent,
    title: "",
    "aria-label": "",
    children: null,
  });
};
