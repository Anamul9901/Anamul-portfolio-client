"use client";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold text-white">About Me</h2>
            <p className="mt-2 text-sm">
              I’m a passionate developer specializing in creating modern and
              user-friendly web applications. Let’s build something great
              together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-teal-500 transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={5}
                  duration={500}
                  className="hover:text-teal-500 transition-colors duration-300"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-teal-500 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="blogs"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-teal-500 transition-colors duration-300"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-bold text-white">Connect</h2>
            <div className="flex md:justify-start justify-center items-center gap-4 pt-4">
              <a
                target="blank"
                href="https://www.linkedin.com/in/anamul-haque-772264299/"
                className="border p-1 hover:text-teal-400 rounded-full text-xl"
              >
                <GrLinkedin />
              </a>
              <a
                target="blank"
                href="https://github.com/Anamul9901"
                className="border p-1 hover:text-teal-400 rounded-full text-xl"
              >
                <FaGithub />
              </a>
              <a
                target="blank"
                href="https://www.facebook.com/Anamul114"
                className="border p-1 hover:text-teal-400 rounded-full text-xl"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            © 2025 Futurista. Built with ❤️ by Anamul Haque.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
