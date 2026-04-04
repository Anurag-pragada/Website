import Navbar from "../components/Navbar";
import "./Blog.css";

const Blog = () => {
  const sections: string[] = [
    "Personal",
    "General",
    "Python",
    "Java Language and Technologies",
    "Node.js",
    "Microsoft.NET",
    "React",
    "Angular",
    "Oracle Database",
    "HTML5, JavaScript, jQuery, AngularJS",
    "Android Programming",
  ];

  return (
    <>
    <Navbar/>
    <div className="blog-container">
      <div className="blog-header">Srikanth's Blog</div>

      <p className="blog-description">
        My blogs include technical and personal information. I have divided the
        blogs into following sections.
      </p>

      <div className="accordion">
        {sections.map((section: string, index: number) => (
          <div key={index} className="accordion-item">
            {section}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Blog;