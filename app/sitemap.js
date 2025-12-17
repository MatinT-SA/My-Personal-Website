export default function sitemap() {
  const baseUrl = "https://matintaherzadeh.ir";

  const routes = ["", "/experience"];
  const languages = ["en", "fa"];

  const entries = [];

  languages.forEach((lang) => {
    routes.forEach((route) => {
      entries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1.0 : 0.8,
      });
    });
  });

  return entries;
}
