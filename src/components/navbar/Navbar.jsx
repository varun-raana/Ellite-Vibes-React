import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../elitedata/elite logo small.png";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const params = useLocation();

  return (
    <div>
      {/* <!-- ========================== NAVBAR =============================== --> */}
      <nav
        className={`${
          params.pathname === "/elitegames"
            ? "flex flex-wrap items-center py-1 px-3 bg-white w-full fixed top-0 left-0 z-50"
            : "flex flex-wrap items-center py-1 px-3 bg-indigo-900 md:bg-opacity-20 bg-opacity-40 w-full fixed top-0 left-0 z-50 backdrop-blur-md"
        }  `}>
        {/* <!-- =========== LEFT SIDE =========== --> */}
        <div className="inline-flex items-center justify-center mr-4 px-3">
          <NavLink to={"/"}>
            <img
              src={Logo}
              className="w-20 h-20 object-cover"
              alt="elitevibes"
            />
          </NavLink>
        </div>

        {/* <!-- ============ BUTTON ========== --> */}
        <button
          className={`md:hidden border-none outline-none ${
            params.pathname === "/elitegames" ? "text-gray-600" : " text-white"
          }  inline-flex items-center justify-center p-2 ml-auto`}
          data-target=" #navigation"
          onClick={() => setToggle(!toggle)}
          id="toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {/* <!-- ============ END ========== --> */}

        {/* <!-- =========== RIGHT SIDE =========== --> */}
        {toggle && (
          <div
            className=" lg:border-hidden md:border-hidden items-center justify-center w-full md:inline-flex md:flex-grow md:w-auto"
            id="navigation">
            <ul className="flex flex-col flex-wrap items-center justify-center md:ml-auto uppercase w-full font-medium gap-3 py-3">
              <li className="w-full">
                <NavLink
                  className={`inline-flex ${
                    params.pathname === "/elitegames"
                      ? "text-black hover:text-blue-500"
                      : "text-white focus:bg-pink-600  focus:text-white hover:bg-pink-700"
                  } rounded-md  text-xs  transition-all duration-100 p-8 w-full`}
                  to="/">
                  Home
                </NavLink>
              </li>
              {params.pathname === "/aboutUs" && (
                <li className="w-full">
                  <a
                    href="#services"
                    className="inline-flex text-white rounded-md  focus:bg-pink-600  focus:text-white  text-xs hover:bg-pink-700 transition-all duration-100 p-8 w-full">
                    Services
                  </a>
                </li>
              )}
              {params.pathname === "/elitevibes" && (
                <li className="w-full">
                  <a
                    href="#upcoming"
                    className="inline-flex text-white rounded-md  focus:bg-pink-600  focus:text-white  text-xs hover:bg-pink-700 transition-all duration-100 p-8 w-full">
                    Upcoming
                  </a>
                </li>
              )}
              {params.pathname === "/elitegames" && (
                <li className="w-full">
                  <a
                    href="#upcoming"
                    className="inline-flex text-black 
                active:text-blue-600 hover:text-blue-500 text-xs transition-all
                duration-100 p-8 w-full">
                    Upcoming
                  </a>
                </li>
              )}

              {params.pathname === "/" ? null : (
                <li className="w-full">
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    onClick={() => setOpen(!open)}
                    className={`inline-flex text-white rounded-md ${
                      params.pathname === "/elitegames"
                        ? " text-black hover:text-blue-500"
                        : "focus:bg-pink-600  focus:text-white hover:bg-pink-700"
                    }    items-center justify-between  transition-all duration-100 p-8 w-full uppercase text-xs font-medium`}>
                    Brands
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                    </svg>
                  </button>
                  {/* <!-- ================== DROPDOWN MENU ======================== --> */}
                  {open && (
                    <div
                      id="dropdownNavbar"
                      className=" absolute w-[150px] text-base list-none z-50 bg-gray-900 backdrop-blur-md rounded-md">
                      <ul className="flex flex-col items-start justify-start">
                        {params.pathname === "/elitevibes" ? null : (
                          <li className="w-full">
                            <Link
                              to="/elitevibes"
                              className="block text-sm text-gray-300 p-4 w-full hover:backdrop-blur-lg bg-transparent hover:text-white">
                              Elite Vibes
                            </Link>
                          </li>
                        )}
                        {params.pathname === "/elitegames" ? null : (
                          <li className="w-full">
                            <Link
                              to="/elitegames"
                              className="block text-sm text-gray-300 p-4 w-full hover:backdrop-blur-lg bg-transparent hover:text-white ">
                              Elite Games
                            </Link>
                          </li>
                        )}
                        <li className="w-full">
                          <Link
                            to="/elitedivine"
                            className="block text-sm text-gray-300 p-4 w-full hover:backdrop-blur-lg bg-transparent hover:text-white ">
                            Elite Divine
                          </Link>
                        </li>
                        <li className="w-full">
                          <Link
                            to="/elitegold"
                            className="block text-sm text-gray-300 p-4 w-full hover:backdrop-blur-lg bg-transparent hover:text-white ">
                            Elite Gold
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              )}
              {params.pathname === "/elitegames" && (
                <li className="w-full">
                  <a
                    href="#testimonials"
                    className="inline-flex text-black 
                active:text-blue-600 hover:text-blue-500 text-xs transition-all
                duration-100 p-8 w-full">
                    Testimonials
                  </a>
                </li>
              )}
              {params.pathname === "/elitevibes" && (
                <li className="w-full">
                  <a
                    href="#testimonials"
                    className="inline-flex text-white rounded-md  focus:bg-pink-600  focus:text-white  text-xs hover:bg-pink-700 transition-all duration-100 p-8 w-full">
                    testimonials
                  </a>
                </li>
              )}
              {params.pathname === "/" && (
                <li className="w-full">
                  <NavLink
                    to="/aboutUs"
                    className="inline-flex text-white rounded-md  focus:bg-pink-600  focus:text-white  text-xs hover:bg-pink-700 transition-all duration-100 p-8 w-full">
                    About
                  </NavLink>
                </li>
              )}
              {params.pathname === "/" && (
                <li className="w-full">
                  <a
                    href="#brands"
                    className="inline-flex text-white rounded-md  focus:bg-pink-600  focus:text-white  text-xs hover:bg-pink-700 transition-all duration-100 p-8 w-full">
                    Brands
                  </a>
                </li>
              )}
              {params.pathname === "/" && (
                <li className="w-full">
                  <NavLink
                    to="#socials"
                    className="inline-flex text-white rounded-md  focus:bg-pink-600  focus:text-white  text-xs hover:bg-pink-700 transition-all duration-100 p-8 w-full">
                    Socials
                  </NavLink>
                </li>
              )}
              {params.pathname === "/contact" ? null : (
                <li className="w-full">
                  <NavLink
                    to="/contact"
                    className={`inline-flex ${
                      params.pathname === "/elitegames"
                        ? " text-black hover:text-blue-500"
                        : "focus:bg-pink-600 text-white  focus:text-white hover:bg-pink-700"
                    } rounded-md text-xs transition-all duration-100 p-8 w-full`}>
                    Contact
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        )}

        {/* medium navbar */}

        <div
          className="hidden lg:border-hidden md:border-hidden items-center justify-center w-full md:inline-flex md:flex-grow md:w-auto"
          id="navigation">
          <ul className="md:flex flex-wrap items-center justify-center md:ml-auto uppercase font-medium">
            <li>
              <NavLink
                to="/"
                className={`inline-flex ${
                  params.pathname === "/elitegames"
                    ? "text-black hover:text-blue-500"
                    : "text-white hover:text-pink-500"
                }  text-xs transition-all duration-100 p-8 w-full`}>
                Home
              </NavLink>
            </li>
            {params.pathname === "/aboutUs" && (
              <li>
                <a
                  href="#services"
                  className="inline-flex text-white 
                focus:border-pink-600 active:border-pink-600
                active:text-pink-600 hover:text-pink-500 text-xs transition-all
                duration-100 p-8 w-full">
                  Services
                </a>
              </li>
            )}
            {params.pathname === "/elitevibes" && (
              <li>
                <a
                  href="#upcoming"
                  className="inline-flex text-white 
                focus:border-pink-600 active:border-pink-600
                active:text-pink-600 hover:text-pink-500 text-xs transition-all
                duration-100 p-8 w-full">
                  Upcoming
                </a>
              </li>
            )}
            {params.pathname === "/elitegames" && (
              <li>
                <a
                  href="#upcoming"
                  className="inline-flex text-black 
                active:text-blue-600 hover:text-blue-500 text-xs transition-all
                duration-100 p-8 w-full">
                  Upcoming
                </a>
              </li>
            )}
            {params.pathname === "/" ? null : (
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  onClick={() => setOpen(!open)}
                  className={`inline-flex font-medium border-0 ${
                    params.pathname === "/elitegames"
                      ? "text-black hover:text-blue-500"
                      : "text-white hover:text-pink-500"
                  }  uppercase text-xs relative justify-between items-center p-7 w-full `}>
                  Brands
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </button>
                {/* <!-- ================== DROPDOWN MENU ======================== --> */}
                {open && (
                  <div
                    id="dropdownNavbar"
                    className=" absolute w-[150px]  text-base list-none z-50 bg-gray-900 rounded-md overflow-hidden backdrop-blur-lg ">
                    <ul className="flex flex-col items-start justify-start">
                      {params.pathname === "/elitevibes" ? null : (
                        <li className="w-full">
                          <Link
                            to="/elitevibes"
                            className="block text-sm text-gray-300 p-4 w-full hover:backdrop-blur-lg bg-transparent hover:text-white">
                            Elite Vibes
                          </Link>
                        </li>
                      )}
                      {params.pathname === "/elitegames" ? null : (
                        <li className="w-full">
                          <Link
                            to="/elitegames"
                            className="block text-sm text-gray-300 p-4 w-full hover:backdrop-blur-lg bg-transparent hover:text-white">
                            Elite Games
                          </Link>
                        </li>
                      )}
                      <li className="w-full">
                        <Link
                          to="/elitedivine"
                          className="block text-sm text-gray-300 p-4 w-full hover:backdrop-blur-lg bg-transparent hover:text-white ">
                          Elite Divine
                        </Link>
                      </li>
                      <li className="w-full">
                        <Link
                          to="/elitegold"
                          className="block text-sm text-gray-300 p-4 w-full hover:backdrop-blur-lg bg-transparent  hover:text-white ">
                          Elite Gold
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            )}
            {params.pathname === "/elitevibes" && (
              <li>
                <a
                  href="#testimonials"
                  className="inline-flex text-white 
                focus:border-pink-600 active:border-pink-600
                active:text-pink-600 hover:text-pink-500 text-xs transition-all
                duration-100 p-8 w-full">
                  Testimonials
                </a>
              </li>
            )}
            {params.pathname === "/" && (
              <li>
                <NavLink
                  to="aboutUs"
                  className="inline-flex text-white 
                focus:border-pink-600 active:border-pink-600
                active:text-pink-600 hover:text-pink-500 text-xs transition-all
                duration-100 p-8 w-full">
                  About
                </NavLink>
              </li>
            )}
            {params.pathname === "/" && (
              <li>
                <a
                  href="#brands"
                  className="inline-flex text-white 
                focus:border-pink-600 active:border-pink-600
                active:text-pink-600 hover:text-pink-500 text-xs transition-all
                duration-100 p-8 w-full">
                  Brands
                </a>
              </li>
            )}
            {params.pathname === "/elitegames" && (
              <li>
                <a
                  href="#testimonials"
                  className="inline-flex text-black 
                active:text-blue-600 hover:text-blue-500 text-xs transition-all
                duration-100 p-8 w-full">
                  Testimonials
                </a>
              </li>
            )}
            {params.pathname === "/" && (
              <li>
                <a
                  href="#socials"
                  className="inline-flex text-white  focus:border-pink-600 active:border-pink-600 active:text-pink-600 hover:text-pink-500 text-xs transition-all duration-100 p-8 w-full">
                  Socials
                </a>
              </li>
            )}

            {params.pathname === "/contact" ? null : (
              <li>
                <NavLink
                  to="/contact"
                  className={`inline-flex ${
                    params.pathname === "/elitegames"
                      ? "text-black hover:text-blue-500"
                      : " text-white active:text-pink-600 hover:text-pink-500"
                  } text-white   text-xs transition-all duration-100 p-8 w-full`}>
                  Contact
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
      {/* <!-- ================================= END ================================= --> */}
    </div>
  );
}

export default Navbar;
