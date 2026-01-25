export function GET() {
  const baseUrl = "https://www.sakfasteners.com";
  const content = `# AI Search Crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

# General Crawlers
User-agent: *
Allow: /
Disallow: /api
Disallow: /clients.html

Sitemap: ${baseUrl}/sitemap.xml
Host: ${baseUrl}
`;
  return new Response(content, {
    headers: { "Content-Type": "text/plain" },
  });
}
