"use client";

import { Link } from "react-scroll";

export const Navbar = () => {
  const navItem = (
    <>
      <li>
        <Link to="home" spy={true} smooth={true} offset={-65} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" spy={true} smooth={true} offset={5} duration={500}>
          About
        </Link>
      </li>
      <li>
        <Link
          to="education"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="blogs"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Blogs
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md text-white"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between p-4">
          {/* Left Section: Hamburger Menu and Logo */}
          <div className="flex items-center justify-between w-full">
            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button
                className="p-2 text-white"
                onClick={() => {
                  const menu = document.getElementById("mobile-menu");
                  if (menu) {
                    menu.classList.toggle("hidden");
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <Link to="home" className="flex items-center justify-start w-full">
              <h2 className="font-bold text-xl uppercase">Anamul Haque</h2>
            </Link>
          </div>

          {/* Right Section: Desktop Menu */}
          <div className="hidden md:flex w-full justify-end items-center">
            <ul className="flex space-x-3">{navItem}</ul>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          id="mobile-menu"
          className="md:hidden hidden bg-black/50 p-4 absolute top-16 left-0 right-0"
        >
          <ul className="space-y-4">{navItem}</ul>
        </div>
      </div>
    </div>
  );
};
