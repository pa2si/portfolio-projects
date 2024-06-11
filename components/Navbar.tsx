"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { socialLinks, email, menuLinks } from "../lib/navbarData";
import ThemeToggle from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";
import ShareButton from "@/components/shared/ShareButton";

const Navbar = () => {
  const pathname = usePathname();

  const {
    about,
    aboutId,
    reasonsToChooseMe,
    reasonsToChooseMeId,
    examples,
    projects,
    projectsId,
    functionalities,
    functionalitiesId,
    contact,
    contactId,
  } = menuLinks;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null); // Ref for the <details> element

  const handleLinkClick = () => {
    // Close mobile menu
    setIsMobileMenuOpen(false);
    // Close details dropdown
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle outside click
  const handleClickOutside = (event: MouseEvent) => {
    // Check if the click is outside the detailsRef element
    if (
      detailsRef.current &&
      !detailsRef.current.contains(event.target as Node)
    ) {
      detailsRef.current.open = false;
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header id="navbar">
      <nav className="navbar mx-auto max-w-7xl bg-base-100 font-bebasNeue">
        <div className="mr-5p xl:mr-15p">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            {/* Mobile View */}
            {isMobileMenuOpen && (
              <ul
                tabIndex={0}
                className="info menu dropdown-content menu-sm fixed z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 text-primary shadow"
              >
                <li>
                  <Link
                    className="text-xl"
                    href={pathname === "/" ? `${aboutId}` : `/${aboutId}`}
                    onClick={handleLinkClick}
                  >
                    {about}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xl"
                    href={
                      pathname === "/"
                        ? `${reasonsToChooseMeId}`
                        : `/${reasonsToChooseMeId}`
                    }
                    onClick={handleLinkClick}
                  >
                    {reasonsToChooseMe}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xl"
                    href={pathname === "/" ? `${projectsId}` : `/${projectsId}`}
                    onClick={handleLinkClick}
                  >
                    {examples}
                  </Link>
                  <ul className="p-2">
                    <li>
                      <Link
                        href={
                          pathname === "/" ? `${projectsId}` : `/${projectsId}`
                        }
                        onClick={handleLinkClick}
                      >
                        {projects}
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={
                          pathname === "/"
                            ? `${functionalitiesId}`
                            : `/${functionalitiesId}`
                        }
                        onClick={handleLinkClick}
                      >
                        {functionalities}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className="text-xl"
                    href={pathname === "/" ? `${contactId}` : `/${contactId}`}
                  >
                    {contact}
                  </Link>
                </li>
                {/* social icons */}
                <div className="mt-2 flex justify-end">
                  <ul className="gap-3 text-primary">
                    {socialLinks.map((link, index) => {
                      const { url, icon } = link;
                      return (
                        <li key={index}>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl transition-all duration-200 ease-in-out hover:scale-125 hover:text-primary-content"
                          >
                            {icon}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                  <ul className="mr-4 flex text-primary">
                    {email.map((item) => {
                      const { email, icon } = item;
                      return (
                        <li key={email}>
                          <a
                            href={`mailto:${email}`}
                            className="text-xl transition-all duration-200 ease-in-out hover:text-primary-content"
                          >
                            {icon}
                          </a>
                        </li>
                      );
                    })}
                    <ShareButton
                      className="text-primary"
                      hoverClassName="hover:text-primary-content"
                    />
                  </ul>
                  <ThemeToggle />
                </div>
              </ul>
            )}
          </div>
          <Link
            className="ml-2 flex gap-3 text-nowrap text-2xl font-bold tracking-[7px] text-primary"
            href="/"
          >
            Pascal <span className="text-nowrap text-secondary">Is Coding</span>
          </Link>
        </div>
        {/* Desktop View */}
        <div className="navbar-center hidden lg:flex">
          <ul className="info menu menu-horizontal divide-purple-200 px-1 text-lg tracking-[4px] text-primary transition-all ease-in-out">
            <li>
              <Link href={pathname === "/" ? `${aboutId}` : `/${aboutId}`}>
                {about}
              </Link>
            </li>
            <li>
              <Link
                href={
                  pathname === "/"
                    ? `${reasonsToChooseMeId}`
                    : `/${reasonsToChooseMeId}`
                }
              >
                {reasonsToChooseMe}
              </Link>
            </li>
            <li>
              <details ref={detailsRef}>
                <summary>{examples}</summary>
                <ul className="p-2">
                  <li>
                    <Link
                      className="whitespace-nowrap"
                      href={
                        pathname === "/" ? `${projectsId}` : `/${projectsId}`
                      }
                      onClick={handleLinkClick}
                    >
                      {projects}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="whitespace-nowrap"
                      href={
                        pathname === "/"
                          ? `${functionalitiesId}`
                          : `/${functionalitiesId}`
                      }
                      onClick={handleLinkClick}
                    >
                      {functionalities}
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={pathname === "/" ? `${contactId}` : `/${contactId}`}>
                {" "}
                {contact}{" "}
              </Link>
            </li>
          </ul>
        </div>
        {/* social icons */}
        <div className="navbar-end mr-4 hidden lg:flex xl:mr-0">
          <ul className="flex gap-3 text-primary">
            {socialLinks.map((link, index) => {
              const { url, icon } = link;
              return (
                <li key={index}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl transition-all duration-200 ease-in-out hover:scale-125 hover:text-primary-content"
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="ml-3 flex gap-3 pr-8 text-primary">
            {email.map((item) => {
              const { email, icon } = item;
              return (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="text-2xl transition-all duration-200 ease-in-out hover:text-primary-content"
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
            <ShareButton
              className="text-primary"
              hoverClassName="hover:text-primary-content"
            />
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
