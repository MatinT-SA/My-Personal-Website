import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withnextIntl = createNextIntlPlugin();

export default withnextIntl(nextConfig);
