import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      crawlDelay: 1,
    },
    sitemap: `${(process.env.NEXT_PUBLIC_BASE_URL || "https://example.com").replace(/\/$/, "")}/sitemap.xml`,
  };
}
