import fm from "front-matter";

export type PostMeta = {
  title: string;
  date: string; // ISO or readable string
  description?: string;
  slug: string;
};

export type Post = PostMeta & { content: string };

// Eagerly import all markdown files in content/posts as raw text
const files = import.meta.glob("../content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const posts: Post[] = Object.entries(files)
  .map(([, raw]) => {
    const parsed = fm<PostMeta>(raw as string);
    const meta = parsed.attributes as PostMeta;
    const content = parsed.body;
    return { ...meta, content };
  })
  .sort((a, b) => (a.date > b.date ? -1 : 1));

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
