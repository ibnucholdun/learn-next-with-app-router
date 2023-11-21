import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login/", "/register/"], // route yang tidak boleh diakses oleh user agent
    },
    sitemap: "https://acme.com/sitemap.xml",
  };
}
