import banner_2 from "../assets/images/banner_2.png";

const Navbar = () => {
  return (
    <>
      {/* Banner */}
      <div className="w-full bg-red-600 shadow-md">
        <img src={banner_2} alt="logo" className="w-full h-auto" />
      </div>

      {/* Navbar */}
      <nav className="bg-[#1f1f1f] text-white px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Left Menu */}
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">Blog</li>

            {/* Training Dropdown */}
            <li className="relative group cursor-pointer">
              Training ▾
              <ul className="absolute left-0 mt-2 hidden w-48 bg-white text-black shadow-lg rounded-md group-hover:block">
                <li className="px-4 py-2 hover:bg-gray-100">Course Schedule</li>
                <li className="px-4 py-2 hover:bg-gray-100">Courses offered</li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  Corporate Training
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">Video Courses</li>
              </ul>
            </li>

            {/* Resources Dropdown */}
            <li className="relative group cursor-pointer">
              Resources ▾
              <ul className="absolute left-0 mt-2 hidden w-48 bg-white text-black shadow-lg rounded-md group-hover:block">
                <li className="px-4 py-2 hover:bg-gray-100">Projects</li>
                <li className="px-4 py-2 hover:bg-gray-100">Programs</li>
                <li className="px-4 py-2 hover:bg-gray-100">Video Tutorials</li>
                <li className="px-4 py-2 hover:bg-gray-100">My Favorites</li>
              </ul>
            </li>

            <li className="hover:text-gray-300 cursor-pointer">Exam</li>

            {/* Books Dropdown */}
            <li className="relative group cursor-pointer">
              Books ▾
              <ul className="absolute left-0 mt-2 hidden w-48 bg-white text-black shadow-lg rounded-md group-hover:block">
                <li className="px-4 py-2 hover:bg-gray-100">Books Read</li>
                <li className="px-4 py-2 hover:bg-gray-100">Books Written</li>
              </ul>
            </li>

            <li className="hover:text-gray-300 cursor-pointer">Testimonials</li>
            <li className="hover:text-gray-300 cursor-pointer">Feedback</li>
            <li className="hover:text-gray-300 cursor-pointer">FAQs</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
          </ul>

          {/* Right Search */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 text-sm rounded-md bg-white text-black placeholder-gray-500 outline-none"
            />
            <button className="bg-red-600 px-3 py-1 rounded-md hover:bg-red-700">
              🔍
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
