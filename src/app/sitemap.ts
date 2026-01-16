import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sakfasteners.com";
  const routes = [
    "",
    "/products",
    "/products/technical",
    "/industries",
    "/capabilities",
    "/oem-export",
    "/about",
    "/contact",
    "/resources",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
