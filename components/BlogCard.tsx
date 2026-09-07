import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-base-border/30 bg-paper transition-all hover:-translate-y-1 hover:shadow-xl dark:border-base-border dark:bg-base">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-medium uppercase tracking-wide text-nova-violet dark:text-nova-orange">
          {post.category}
        </span>
        <h3 className="font-display text-lg font-semibold leading-snug text-inkLight dark:text-ink">
          {post.title}
        </h3>
        <p className="flex-1 text-sm text-inkLight-muted dark:text-ink-muted">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="group/link mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-nova-violet hover:underline dark:text-nova-orange"
        >
          Read More
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
