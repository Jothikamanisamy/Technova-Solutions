import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import blogData from "@/data/blogs.json";
import type { ApiPost, BlogPost } from "@/types";

const posts = blogData as BlogPost[];

interface PageProps {
  params: { slug: string };
}

function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

// Bonus: API Integration — fetches the full body copy for this post from
// https://jsonplaceholder.typicode.com/posts, mapped via each post's apiId.
async function getApiContent(apiId: number): Promise<ApiPost | null> {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${apiId}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 800, height: 500, alt: post.title }],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const apiContent = await getApiContent(post.apiId);

  return (
    <article className="bg-paper py-20 dark:bg-base">
      <div className="mx-auto max-w-2xl px-6">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-1.5 text-sm text-nova-violet hover:underline dark:text-nova-orange"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Blog
        </Link>

        <span className="mt-6 block text-xs font-medium uppercase tracking-wide text-nova-violet dark:text-nova-orange">
          {post.category}
        </span>
        <h1 className="mt-2 text-3xl font-semibold leading-tight text-inkLight md:text-4xl dark:text-ink">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-inkLight-muted dark:text-ink-muted">
          By {post.author} · {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-lg md:h-96">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="mt-8 text-lg text-inkLight dark:text-ink">
          {post.excerpt}
        </p>

        <div className="prose-content mt-6 space-y-4 text-inkLight-muted dark:text-ink-muted">
          {apiContent ? (
            <p>{apiContent.body}</p>
          ) : (
            <p>
              Full article content is temporarily unavailable. Please check
              back shortly.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
