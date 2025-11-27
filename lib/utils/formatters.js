/**
 * Helper to format a date string (YYYY-MM-DD) into a human-readable format
 * with day suffixes (e.g., "Wednesday, November 26th 2025").
 * @param {string} dateString - The date string in "YYYY-MM-DD" format.
 * @returns {string | null} The formatted date string or null if input is invalid.
 */
export const formatDate = (dateString) => {
  if (!dateString) return null;
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return null; // Handle invalid date strings
  }

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Convert to English string format
  const formattedDate = date.toLocaleDateString("en-US", options);

  // Add 'th', 'st', 'nd', 'rd' suffixes to the day number
  const day = date.getDate();
  let suffix = "th";
  if (day % 10 === 1 && day % 100 !== 11) {
    suffix = "st";
  } else if (day % 10 === 2 && day % 100 !== 12) {
    suffix = "nd";
  } else if (day % 10 === 3 && day % 100 !== 13) {
    suffix = "rd";
  }

  // Find the position of the day number in the string and apply the suffix
  // Note: This regex is safe because we know the formattedDate contains the day number.
  const dayRegex = new RegExp(`\\b${day}\\b`);
  return formattedDate.replace(dayRegex, `${day}${suffix}`);
};
