export function GET() {
  const baseUrl = "https://www.sakfasteners.com";
  const content = `User-agent: *\nAllow: /\nDisallow: /api\nSitemap: ${baseUrl}/sitemap.xml\nHost: ${baseUrl}\n`;
  return new Response(content, {
    headers: { "Content-Type": "text/plain" },
  });
}
