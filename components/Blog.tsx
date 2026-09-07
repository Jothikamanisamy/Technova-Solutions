import blogData from "@/data/blogs.json";
import type { BlogPost } from "@/types";
import BlogCard from "./BlogCard";

export default function Blog() {
  const posts = blogData as BlogPost[];

  return (
    <section id="blog" className="bg-paper py-24 dark:bg-base">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-lg">
          <h2 className="text-3xl font-semibold text-inkLight md:text-4xl dark:text-ink">
            From the Blog
          </h2>
          <p className="mt-4 text-inkLight-muted dark:text-ink-muted">
            Notes from our engineering, design, and strategy teams on what's
            actually working right now.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
