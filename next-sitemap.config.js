/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  generateRobotsTxt: false,
  changefreq: "weekly",
  priority: 1,
  sitemapSize: 7000,
};
