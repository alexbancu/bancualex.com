interface SubstackPost {
  title: string;
  subtitle: string;
  link: string;
  pubDate: string;
}

export async function getLatestSubstackPost(): Promise<SubstackPost | null> {
  try {
    const res = await fetch("https://alexbancu.substack.com/feed", {
      next: { revalidate: 3600 },
    });
    const xml = await res.text();

    const itemMatch = xml.match(/<item>([\s\S]*?)<\/item>/);
    if (!itemMatch) return null;

    const item = itemMatch[1];
    const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1]
      ?? item.match(/<title>(.*?)<\/title>/)?.[1]
      ?? "";
    const subtitle = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1]
      ?? item.match(/<description>(.*?)<\/description>/)?.[1]
      ?? "";
    const link = item.match(/<link>(.*?)<\/link>/)?.[1] ?? "";
    const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "";

    return { title, subtitle, link, pubDate };
  } catch {
    return null;
  }
}
