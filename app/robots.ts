import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/private/", "/_next/", "/static/"],
    },
    sitemap: "https://bunburywellness.com.au/sitemap.xml",
    host: "https://bunburywellness.com.au",
  };
}
