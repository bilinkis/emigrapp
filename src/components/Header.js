import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-800 text-white py-4 md:py-6 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 md:px-8">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              fetchPriority="high"
              src="/images/logo.webp"
              alt="Emigrapp Logo"
              width={50}
              height={50}
              className="mr-2 md:mr-3"
            />
            <h1 className="text-2xl md:text-3xl font-bold">Emigrapp</h1>
          </div>
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <nav
          className={`w-full md:w-auto md:flex ${
            isOpen ? "block" : "hidden"
          } mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            {router.pathname !== "/diagnostico" && (
              <li className="relative group">
                <Link href="/diagnostico">
                  <span className="transition-transform transform hover:scale-110 group-hover:shadow-lg group-hover:bg-white group-hover:text-blue-500 rounded-md px-2 py-1">
                    Autodiagnóstico
                  </span>
                </Link>
              </li>
            )}

            {router.pathname === "/" && (
              <>
                <li className="relative group">
                  <ScrollLink
                    to="pricing"
                    smooth={true}
                    offset={-72}
                    className="cursor-pointer"
                  >
                    <span className="transition-transform transform hover:scale-110 group-hover:shadow-lg group-hover:bg-white group-hover:text-blue-500 rounded-md px-2 py-1">
                      Sobre Nosotros
                    </span>
                  </ScrollLink>
                </li>
                <li className="relative group">
                  <ScrollLink
                    to="description"
                    smooth={true}
                    offset={-72}
                    className="cursor-pointer"
                  >
                    <span className="transition-transform transform hover:scale-110 group-hover:shadow-lg group-hover:bg-white group-hover:text-blue-500 rounded-md px-2 py-1">
                      Pricing
                    </span>
                  </ScrollLink>
                </li>
                <li className="relative group">
                  <ScrollLink
                    to="testimonials"
                    smooth={true}
                    offset={-72}
                    className="cursor-pointer"
                  >
                    <span className="transition-transform transform hover:scale-110 group-hover:shadow-lg group-hover:bg-white group-hover:text-blue-500 rounded-md px-2 py-1">
                      Testimonios
                    </span>
                  </ScrollLink>
                </li>
                <li className="relative group">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    offset={-72}
                    className="cursor-pointer"
                  >
                    <span className="transition-transform transform hover:scale-110 group-hover:shadow-lg group-hover:bg-white group-hover:text-blue-500 rounded-md px-2 py-1">
                      Contáctanos
                    </span>
                  </ScrollLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
