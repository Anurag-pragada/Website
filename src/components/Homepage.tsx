import Navbar from "./Navbar";
import My_picture from "../images/My_picture.jpg";
import coursesData from "./courseTablecomponent/coursesData";
import CourseTable from "./courseTablecomponent/courseTable";
import C_language_digital_book_cover from "../images/C_language_digital_book_cover.jpg";
import "./Homepage.css";
import Python_digital_book_cover from "../images/Python_digital_book_cover.jpg";
import Oracle_digital_book_cover from "../images/Oracle_digital_book_cover.jpg";
import Java_digital_book_cover from "../images/Java_digital_book_cover.jpg";
import Java_EE_digital_book_cover from "../images/Java_EE_digital_book_cover.jpg";
import AWS_certification from "../images/AWS_certification.png";
import Java_certified_programmer from "../images/Java_certified_programmer.png";
import Java_certified_Web_component_developer from "../images/Java_certified_Web_component_developer.png";
import Java_certified_Business_component_developer from "../images/Java_certified_Business_component_developer.png";
import Microsoft_certified_Technology_specialist from "../images/Microsoft_certified_Technology_specialist.png";
import Oracle_certified_Database_SQL from "../images/Oracle_certified_Database_SQL.png";
import Oracle_certified_PL_SQL_developer from "../images/Oracle_certified_PL_SQL_developer.png";
import BlogItemSection from "./Blogcomponent/BlogItemSection";
import Footer from "./Footer";


const Homepage = () => {
  return (
    <>
      <Navbar />

      <div className="homepage-container">
        {/* Left Sidebar */}
        <aside className="left-sidebar">
          <img src={My_picture} alt="Trainer" className="profile-image" />
          <div className="profile-text">
            <p>
              <strong>Srikanth Pragada</strong> is the trainer and founder of
              <strong> Srikanth Technologies</strong>, a software training company. Srikanth conducts training on C, Java, Oracle, Microsoft.NET, Python, Data Science, Angular, React and AWS. He is webmaster of this site and writes the entire content of this site. This website is meant to provide his blog, programs, online exam, projects etc. to learning community.
            </p>
          </div>
          <div className="sidebar-box certification-box">
  <div className="sidebar-title">Certifications</div>

  <div className="certification-list">
      <img
        src={AWS_certification} alt="Certification" className="certification-image"
      />
      <img
        src={Java_certified_programmer} alt="Certification" className="certification-image"
      />
      <img
        src={Java_certified_Web_component_developer} alt="Certification" className="certification-image"
      />
      <img
        src={Java_certified_Business_component_developer} alt="Certification" className="certification-image"
      />
     <img
        src={Microsoft_certified_Technology_specialist} alt="Certification" className="certification-image"
      />
    <img
        src={Oracle_certified_Database_SQL} alt="Certification" className="certification-image"
      />
      <img
        src={Oracle_certified_PL_SQL_developer} alt="Certification" className="certification-image"
      />
  </div>
</div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <CourseTable data={coursesData} />

          <div className="notice-block">
  <div className="notice-links">
    <a href="#" className="left-link">
      [Can't find batch in the schedule?]
    </a>

    <a href="#" className="right-link">
      [Customized Corporate Training]
    </a>
  </div>

  <a href="#" className="video-link">
  Video Tutorial - How to Clone and Pull GitHub Repo
 </a>

  <p className="hybrid-note">
    <strong className="hybrid-word">[Hybrid]</strong> means both classroom and online modes are available!
  </p>
</div>
            <div className="promo-title">
                Srikanth Pragada's On-demand Video Courses at Udemy.com
            </div>
          <div className="promo-grid">
            <div className="promo-card peach">Java Language</div>
            <div className="promo-card yellow">Test Your Python Knowledge</div>
            <div className="promo-card red">JavaScript for Beginners</div>
            <div className="promo-card navy">Database and SQL for Beginners</div>
            <div className="promo-card gray">Angular for Beginners</div>
            <div className="promo-card orange">Oracle Database for Beginners</div>
            <div className="promo-card black">C Language for Beginners</div>
            <div className="promo-card brown">Web Applications using Java EE</div>
            <div className="promo-card blue">Building Web Applications using Django Framework</div>
            <div className="promo-card purple">Java Interview Questions</div>
            <div className="promo-card green">C Language Interview Questions</div>
          </div>
          <div>
            <BlogItemSection />
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="right-sidebar">
          <div className="sidebar-box">
            <div className="sidebar-title">Quick Links</div>
            <ul>
              <li>Udemy Courses</li>
              <li>Books on Amazon</li>
              <li>Video Tutorials</li>
              <li>GitHub Repos</li>
              <li>Using Online Courses</li>
              <li>Online Admission Form</li>
              <li>Payment Details</li>
            </ul>
          </div>

          <div className="sidebar-box book-box">
            <div className="sidebar-title">Digital Books</div>
            <div className="book-list">
              <img src={Python_digital_book_cover} alt="Book author" className="book-image" />
              <img src={C_language_digital_book_cover} alt="Book author" className="book-image" />
              <img src={Oracle_digital_book_cover} alt="Book author" className="book-image" />
              <img src={Java_digital_book_cover} alt="Book author" className="book-image" />
              <img src={Java_EE_digital_book_cover} alt="Book author" className="book-image" />
            </div>
          </div>
        </aside>
      </div>
      <Footer/>
    </>
  );
};

export default Homepage;