import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  const [openCategory, setOpenCategory] = useState<string | null>("Personal");

  const groupedBlogs = useMemo(() => {
    return blogPosts.reduce(
      (acc, post) => {
        if (!acc[post.category]) {
          acc[post.category] = [];
        }
        acc[post.category].push(post);
        return acc;
      },
      {} as Record<string, typeof blogPosts>,
    );
  }, []);

  const categories = Object.keys(groupedBlogs);

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Srikanth&apos;s Blog
          </h1>
        </div>

        <p className="mx-auto mb-8 max-w-3xl text-center text-base leading-7 text-gray-600 sm:text-lg">
          My blogs include technical and personal information. I have divided
          the blogs into the following sections.
        </p>

        <div className="space-y-4">
          {categories.map((category) => {
            const isOpen = openCategory === category;

            return (
              <div
                key={category}
                className="overflow-hidden rounded-xl border border-gray-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenCategory(isOpen ? null : category)}
                  className="flex w-full items-center justify-between bg-blue-600 px-5 py-4 text-left text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <span>{category}</span>
                  <span className="text-lg">{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && (
                  <div className="bg-gray-50 px-6 py-5">
                    <ul className="list-disc space-y-2 pl-5 text-sm text-gray-800 sm:text-base">
                      {groupedBlogs[category].map((post) => (
                        <li key={post.id}>
                          <Link
                            to={`/blog/${post.slug}`}
                            className="transition hover:text-red-600 hover:underline"
                          >
                            {post.title} ({post.date})
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
