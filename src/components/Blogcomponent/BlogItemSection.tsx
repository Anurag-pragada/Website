import NewsItem from "./BlogItem";
import newsData from "./blogs.tsx";
import "./Blog.css";

function BlogItemSection() {
  return (
    <section className="blogs-section">
      <div className="whats-new-header">What's New!</div>

      <div className="blogs-list">
        {newsData.map((item) => (
          <NewsItem
            key={item.id}
            title={item.title}
            date={item.date}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}

export default BlogItemSection;