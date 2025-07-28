import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL("https://i.pinimg.com/**"),
      new URL("https://static.vecteezy.com/system/resources/previews/**"),
    ],
  },
};

export default withNextIntl(nextConfig);
