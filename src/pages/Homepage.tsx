import My_picture from "../assets/images/My_picture.jpg";
import C_language_digital_book_cover from "../assets/images/C_language_digital_book_cover.jpg";
import Python_digital_book_cover from "../assets/images/Python_digital_book_cover.jpg";
import Oracle_digital_book_cover from "../assets/images/Oracle_digital_book_cover.jpg";
import Java_digital_book_cover from "../assets/images/Java_digital_book_cover.jpg";
import Java_EE_digital_book_cover from "../assets/images/Java_EE_digital_book_cover.jpg";
import AWS_certification from "../assets/images/AWS_certification.png";
import Java_certified_programmer from "../assets/images/Java_certified_programmer.png";
import Java_certified_Web_component_developer from "../assets/images/Java_certified_Web_component_developer.png";
import Java_certified_Business_component_developer from "../assets/images/Java_certified_Business_component_developer.png";
import Microsoft_certified_Technology_specialist from "../assets/images/Microsoft_certified_Technology_specialist.png";
import Oracle_certified_Database_SQL from "../assets/images/Oracle_certified_Database_SQL.png";
import Oracle_certified_PL_SQL_developer from "../assets/images/Oracle_certified_PL_SQL_developer.png";
import BlogItemSection from "../components/Blogcomponent/BlogItemSection";
import CourseTable from "../components/courseTablecomponent/courseTable";
import coursesData from "../components/courseTablecomponent/coursesData";
import { FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";

const Homepage = () => {
  const promoCards = [
    { title: "Java Language", bg: "bg-rose-200", text: "text-gray-900" },
    {
      title: "Test Your Python Knowledge",
      bg: "bg-yellow-300",
      text: "text-gray-900",
    },
    { title: "JavaScript for Beginners", bg: "bg-red-600", text: "text-white" },
    {
      title: "Database and SQL for Beginners",
      bg: "bg-indigo-900",
      text: "text-white",
    },
    { title: "Angular for Beginners", bg: "bg-gray-400", text: "text-white" },
    {
      title: "Oracle Database for Beginners",
      bg: "bg-red-500",
      text: "text-white",
    },
    { title: "C Language for Beginners", bg: "bg-black", text: "text-white" },
    {
      title: "Web Applications using Java EE",
      bg: "bg-orange-700",
      text: "text-white",
    },
    {
      title: "Building Web Applications using Django Framework",
      bg: "bg-blue-700",
      text: "text-white",
    },
    {
      title: "Java Interview Questions",
      bg: "bg-purple-600",
      text: "text-white",
    },
    {
      title: "C Language Interview Questions",
      bg: "bg-lime-700",
      text: "text-white",
    },
  ];

  const quickLinks = [
    "Udemy Courses",
    "Books on Amazon",
    "Video Tutorials",
    "GitHub Repos",
    "Using Online Courses",
    "Online Admission Form",
    "Payment Details",
  ];

  const certificationImages = [
    AWS_certification,
    Java_certified_programmer,
    Java_certified_Web_component_developer,
    Java_certified_Business_component_developer,
    Microsoft_certified_Technology_specialist,
    Oracle_certified_Database_SQL,
    Oracle_certified_PL_SQL_developer,
  ];

  const digitalBooks = [
    Python_digital_book_cover,
    C_language_digital_book_cover,
    Oracle_digital_book_cover,
    Java_digital_book_cover,
    Java_EE_digital_book_cover,
  ];

  return (
    <div className="min-h-screen bg-slate-100 px-2 py-4">
      <div className="grid w-full grid-cols-1 gap-3 xl:grid-cols-[220px_minmax(0,1fr)_220px]">
        {/* Left Sidebar */}
        <aside className="space-y-6">
          <div className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200">
            <img
              src={My_picture}
              alt="Trainer"
              className="h-auto w-full object-cover"
            />
            <div className="p-5">
              <p className="text-[15px] leading-8 text-slate-700">
                <strong className="text-blue-700">Srikanth Pragada</strong> is
                the trainer and founder of{" "}
                <strong>Srikanth Technologies</strong>, a software training
                company. Srikanth conducts training on C, Java, Oracle,
                Microsoft.NET, Python, Data Science, Angular, React and AWS. He
                is webmaster of this site and writes the entire content of this
                site. This website is meant to provide his blog, programs,
                online exam, projects etc. to learning community.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200">
            <div className="bg-red-500 px-5 py-4 text-center text-2xl font-bold text-white">
              Certifications
            </div>

            <div className="grid grid-cols-1 gap-2 p-2">
              {certificationImages.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-2"
                >
                  <img
                    src={img}
                    alt="Certification"
                    className="h-auto w-full rounded-lg object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="space-y-6">
          <div className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200">
            <div className="p-2 md:p-3">
              <CourseTable data={coursesData} />
            </div>
          </div>

          <div className="relative rounded-2xl bg-white p-4 shadow-md ring-1 ring-slate-200 text-center">
            {/* Center Content */}
            <div className="space-y-2">
              <a
                href="#"
                className="text-lg font-bold text-red-600 hover:underline"
              >
                Video On How Online Course Works!
              </a>

              <p className="text-sm text-slate-700">
                <strong className="text-red-600">[Hybrid]</strong> means both
                classroom and online modes are available!
              </p>
            </div>

            {/* Bottom Left Link */}
            <a
              href="#"
              className="absolute bottom-3 left-4 text-blue-700 text-sm hover:underline"
            >
              [Can't find batch in the schedule?]
            </a>

            {/* Bottom Right Link */}
            <a
              href="#"
              className="absolute bottom-3 right-4 text-blue-700 text-sm hover:underline"
            >
              [Customized Corporate Training]
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200">
            <div className="bg-black px-4 py-4 text-center text-lg font-bold text-white md:text-2xl">
              Srikanth Pragada&apos;s On-demand Video Courses at Udemy.com
            </div>

            <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2 lg:grid-cols-3">
              {promoCards.map((card, index) => (
                <div
                  key={index}
                  className={`flex min-h-[110px] items-center justify-center rounded-xl px-4 py-6 text-center text-xl font-bold shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${card.bg} ${card.text}`}
                >
                  {card.title}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-2 shadow-md ring-1 ring-slate-200">
            <BlogItemSection />
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="space-y-6">
          <div className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200">
            <div className="p-5">
              <div className="mb-5 flex items-center justify-center gap-3">
                <a
                  href="https://www.youtube.com/user/srikanthpragada"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-red-600 transition hover:scale-110"
                >
                  <FaYoutube />
                </a>

                <a
                  href="https://www.facebook.com/srikanthtechnologies"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-blue-700 transition hover:scale-110"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://x.com/srikanthpragada"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-sky-500 transition hover:scale-110"
                >
                  <FaTwitter />
                </a>
              </div>

              <div className="rounded-xl bg-red-500 px-4 py-3 text-center text-2xl font-bold text-white">
                Quick Links
              </div>

              <ul className="mt-5 space-y-3 text-center">
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-lg font-semibold text-blue-700 transition hover:text-blue-900 hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200">
            <div className="bg-red-500 px-4 py-4 text-center text-2xl font-bold text-white">
              Digital Books
            </div>

            <div className="space-y-4 p-2">
              {digitalBooks.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-3"
                >
                  <img
                    src={img}
                    alt="Book author"
                    className="h-auto w-full rounded-lg object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Homepage;
