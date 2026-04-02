import "./Blog.css";

interface BlogItemProps {
  title: string;
  date: string;
  description: string;
  link: string;
}

function BlogItem({ title, date, description, link }: BlogItemProps) {
  return (
    <div className="blog-item">
      <a href={link} className="blog-title">
        {title}
      </a>
      <div className="blog-date">{date}</div>
      <p className="blog-desc">{description}</p>
    </div>
  );
}

export default BlogItem;
