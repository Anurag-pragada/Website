import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

// Recursive helper to render blocks (strings, paragraphs, lists, tables)
const renderBlock = (block: any, index: number): React.ReactNode => {
  if (typeof block === "string") {
    return (
      <p key={index} className="mt-4 first:mt-0">
        {block}
      </p>
    );
  }

  if (Array.isArray(block)) {
    return (
      <div key={index} className="my-4">
        {block.map((b, i) => renderBlock(b, i))}
      </div>
    );
  }

  if (block.type === "paragraph") {
    if (Array.isArray(block.text)) {
      return (
        <p key={index} className="mt-4 first:mt-0">
          {block.text.map((t: any, i: number) => {
            if (typeof t === "string") return <span key={i}>{t}</span>;
            if (t.type === "link")
              return (
                <a
                  key={i}
                  href={t.url}
                  className="text-blue-600 hover:underline"
                >
                  {t.text}
                </a>
              );
            if (t.type === "bold")
              return (
                <strong key={i} className="font-bold text-gray-900">
                  {t.text}
                </strong>
              );
            return null;
          })}
        </p>
      );
    }
    return (
      <p key={index} className="mt-4 first:mt-0">
        {block.text}
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul key={index} className="pl-6 mt-4 space-y-2 list-disc first:mt-0">
        {block.items.map((item: string, itemIndex: number) => (
          <li key={itemIndex}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "table") {
    return (
      <div
        key={index}
        className="my-6 overflow-x-auto border border-gray-200 rounded-lg shadow-sm"
      >
        <table className="min-w-full text-sm text-left divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            {block.rows.map((row: string[], rowIndex: number) => (
              <tr key={rowIndex} className="even:bg-gray-50 hover:bg-gray-100">
                {row.map((cell: string, cellIndex: number) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-3 font-medium text-gray-700 whitespace-nowrap"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === "subheading") {
    return (
      <h3 key={index} className="mt-8 mb-3 text-xl font-semibold text-red-700">
        {block.text}
      </h3>
    );
  }

  if (block.type === "image") {
    return (
      <figure
        key={index}
        className="my-6 overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm"
      >
        <img
          src={block.src}
          alt={block.caption || ""}
          className="block object-cover w-full h-auto"
        />
        {block.caption && (
          <figcaption className="px-4 py-3 text-base font-semibold text-center text-gray-700">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return null;
};

const BlogPostPage = () => {
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="p-10">Blog not found</div>;
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8 xl:px-10">
      <div className="w-full">
        <h1 className="mb-4 text-3xl font-bold text-blue-800">{post.title}</h1>

        <p className="mb-6 text-sm text-gray-500">
          {post.category} • {post.date}
        </p>

        {post.intro &&
          (Array.isArray(post.intro) ? (
            <div className="mb-8 font-medium text-gray-700 text-md">
              {post.intro.map((line, index) => renderBlock(line, index))}
            </div>
          ) : (
            <div className="mb-8 font-medium text-gray-700 text-md">
              {renderBlock(post.intro, 0)}
            </div>
          ))}

        <div className="space-y-10">
          {post.sections?.map((section) => (
            <section key={section.id}>
              {section.title && (
                <h2 className="mb-4 text-2xl font-semibold text-blue-800">
                  {section.title}
                </h2>
              )}

              <div className="space-y-4 leading-7 text-gray-800">
                {section.content.map((block, index) =>
                  renderBlock(block, index),
                )}
              </div>

              {section.images && section.images.length > 0 && (
                <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
                  {section.images.map((image, i) => (
                    <figure
                      key={i}
                      className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                    >
                      <div className="w-full overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.caption}
                          className="block h-auto w-full object-cover"
                        />
                      </div>
                      <figcaption className="px-4 py-3 text-center text-base font-semibold text-gray-700">
                        {image.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
