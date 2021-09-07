import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";

import { navItems } from "../../utils/data";

import { ModalContext } from "../../config/contexts/ModalContext";

const Header = ({ useScrolled }) => {
  const { setIsModalOpen } = useContext(ModalContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolledHero, setScrolledHero] = useState(
    useScrolled ? useScrolled : null
  );
  const [alternateHeader, setAlternateHeader] = useState(null);

  const router = useRouter();

  const handleScroll = () => {
    if (useScrolled) return;
    setScrolledHero(window.scrollY > 15);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, true);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (router.pathname.includes("turmas")) return setAlternateHeader(true);
    return setAlternateHeader(false);
  }, [router.pathname]);

  const scrollTo = (id, path) => {
    const yOffset = -100;
    const element = document.querySelector(id);
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      return window.scrollTo({ top: y, behavior: "smooth" });
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(path);
  };

  return (
    <nav className="w-full z-10 fixed top-0 left-0 right-0">
      <div
        id="white-nav"
        className="bg-white fixed w-full shadow-xl transition duration-100 ease-in-out"
        style={{
          transform: scrolledHero ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "left top",
          transition: "all .2s ease-in-out",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-8 sm:px-12 lg:px-16 ">
          <div className="flex items-center">
            <div className="flex items-center flex-shrink-0">
              <img
                className="object-cover cursor-pointer"
                src="/assets/images/logo-horizontal-blue.png"
                width={180}
                height={60}
                alt="Logo"
                onClick={() => router.replace("/")}
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navItems.map(({ path, name, id, redirect }, i) => (
                    <a
                      key={i}
                      onClick={() => scrollTo(id, path, redirect)}
                      className="px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                      id="nav-white-menu-item"
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="ml-3 relative flex">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary-lighter text-white inline-flex items-center justify-center py-2 px-4 tracking-wide font-medium rounded-sm focus:outline-none"
                >
                  Seja um Hipnoterapeuta
                </button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-primary-dark focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 transition duration-100 ease-in-out",
          scrolledHero ? "opacity-0" : "opacity-100",
          alternateHeader ? "bg-primary-blue" : ""
        )}
      >
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="flex items-center flex-shrink-0">
              <img
                className="object-cover cursor-pointer"
                src="/assets/images/logo-horizontal.png"
                width={180}
                height={60}
                alt="Logo"
                onClick={() => router.replace("/")}
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navItems.map(({ path, name, id, redirect }, i) => (
                    <a
                      key={i}
                      onClick={() => scrollTo(id, path, redirect)}
                      className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-primary-lighter cursor-pointer"
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="ml-3 relative flex">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white inline-flex items-center justify-center py-2 px-4 tracking-wide font-medium rounded-sm text-primary-lighter focus:outline-none"
                >
                  Seja um Hipnoterapeuta
                </button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          display: showMobileMenu ? "inline" : "none",
          transform: showMobileMenu ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "left top",
          transition: "all .2s ease-in-out",
        }}
      >
        <div className="py-2 space-y-1 bg-white">
          {navItems.map(({ name, id, redirect, path }, i) => (
            <a
              key={i}
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
                setTimeout(() => {
                  scrollTo(id, path, redirect);
                }, 100);
              }}
              className="block px-3 py-2 my-2 rounded-md text-base font-medium text-gray-800 hover:text-primary-blue"
            >
              {name}
            </a>
          ))}
          <button
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
              setTimeout(() => {
                setIsModalOpen(true);
              }, 100);
            }}
            className="w-full text-left block px-3 py-2 text-base font-medium text-white bg-primary-blue hover:bg-primary-blue-darker transition duration-200 ease"
          >
            Seja um Hipnoterapeuta
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
