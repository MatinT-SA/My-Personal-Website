import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextIntl = createNextIntlPlugin("./app/src/i18n/request.js");

export default withNextIntl(nextConfig);
