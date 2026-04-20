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
    const isInline = block.every(
      (b) => typeof b === "string" || b.type === "bold" || b.type === "link"
    );

    if (isInline) {
      return (
        <p key={index} className="mt-4 first:mt-0">
          {block.map((b: any, i: number) => {
            if (typeof b === "string") return <span key={i}>{b}</span>;
            if (b.type === "link")
              return (
                <a
                  key={i}
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {b.text}
                </a>
              );
            if (b.type === "bold")
              return (
                <strong key={i} className="font-bold text-gray-900">
                  {b.text}
                </strong>
              );
            return null;
          })}
        </p>
      );
    }

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
                  target="_blank"
                  rel="noopener noreferrer"
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
        {block.items.map((item: any, itemIndex: number) => {
          if (typeof item === "string") {
            return <li key={itemIndex}>{item}</li>;
          }

          if (Array.isArray(item)) {
            return (
              <li key={itemIndex}>
                {item.map((t: any, i: number) => {
                  if (typeof t === "string") return <span key={i}>{t}</span>;
                  if (t.type === "link")
                    return (
                      <a
                        key={i}
                        href={t.url}
                        target="_blank"
                        rel="noopener noreferrer"
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
              </li>
            );
          }

          if (item.type === "link") {
            return (
              <li key={itemIndex}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {item.text}
                </a>
              </li>
            );
          }

          return <li key={itemIndex} />;
        })}
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
  if (block.type === "link") {
    return (
      <div key={index} className="mt-4">
        <a
          href={block.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium"
        >
          {block.text}
        </a>
      </div>
    );
  }

  if (block.type === "bold") {
    return (
      <strong key={index} className="font-bold text-gray-900">
        {block.text}
      </strong>
    );
  }

  if (block.type === "image") {
    const imageElement = (
      <img
        src={block.src}
        alt={block.caption || ""}
        className="block object-cover w-full h-auto"
      />
    );

    return (
      <figure
        key={index}
        className="my-6 overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm"
      >
        {block.link ? (
          <a href={block.link} target="_blank" rel="noopener noreferrer">
            {imageElement}
          </a>
        ) : (
          imageElement
        )}
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

        {post.intro && (
          <div className="mb-8 font-medium text-gray-700 text-md">
            {renderBlock(post.intro, 0)}
          </div>
        )}

        <div className="space-y-10">
          {post.sections?.map((section) => (
            <section key={section.id}>
              {section.title && (
                <h2 className="mb-4 text-2xl font-semibold text-blue-800">
                  {section.title}
                </h2>
              )}

              <div className="space-y-4 leading-7 text-gray-800">
                {section.content?.map((block, index) =>
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
