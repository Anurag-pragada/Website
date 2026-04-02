import banner from "../images/banner.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
       <>
      <img 
        src={banner} 
        alt="logo" 
        style={{ width: "100%", height: "auto" }} 
      />
      <nav className="navbar">
        <ul className="nav-left">
          <li>Home</li>
          <li>Blog</li>

          <li className="dropdown">
            Training ▾
            <ul className="dropdown-menu">
              <li>Course Schedule</li>
              <li>Courses offered</li>
              <li>Corporate Training</li>
              <li>Video Courses</li>
            </ul>
          </li>

          <li className="dropdown">
            Resources ▾
            <ul className="dropdown-menu">
              <li>Projects</li>
              <li>Programs</li>
              <li>Video Tutorials</li>
              <li>My Favorites</li>
            </ul>
          </li>

          <li>Exam</li>
          
          <li className="dropdown">
            Books ▾
            <ul className="dropdown-menu">
              <li>Books Read</li>
              <li>Books Written</li>
            </ul>
          </li>

          <li>Testimonials</li>
          <li>Feedback</li>
          <li>FAQs</li>
          <li>About</li>
        </ul>

        <div className="nav-right">
          <input type="text" placeholder="Search" />
          <button>🔍</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;