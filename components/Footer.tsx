"use client";

import Link from "next/link";
import { socialLinks, email, menuLinks } from "../lib/navbarData";
import { usePathname } from "next/navigation";
import ShareButton from "@/components/ShareButton";

const Footer = () => {
  const pathname = usePathname();

  const currentYear = new Date().getFullYear();
  const {
    about,
    aboutId,
    reasonsToChooseMe,
    reasonsToChooseMeId,
    projects,
    projectsId,
    contact,
    contactId,
  } = menuLinks;
  return (
    <footer className="primary-dark-2 footer footer-center rounded bg-primary p-10 text-primary-content">
      <nav className="grid gap-3 md:grid-cols-7">
        <Link
          className="link-hover link transition-all duration-200 ease-in-out hover:text-slate-400 hover:no-underline"
          href={pathname === "/" ? `${aboutId}` : `/${aboutId}`}
        >
          {about}
        </Link>
        <Link
          className="link-hover link transition-all duration-200 ease-in-out hover:text-slate-400 hover:no-underline"
          href={
            pathname === "/"
              ? `${reasonsToChooseMeId}`
              : `/${reasonsToChooseMeId}`
          }
        >
          {reasonsToChooseMe}
        </Link>
        <Link
          className="link-hover link transition-all duration-200 ease-in-out hover:text-slate-400 hover:no-underline"
          href={pathname === "/" ? `${projectsId}` : `/${projectsId}`}
        >
          {projects}
        </Link>

        <Link
          className="link-hover link transition-all duration-200 ease-in-out hover:text-slate-400 hover:no-underline"
          href={pathname === "/" ? `${contactId}` : `/${contactId}`}
        >
          {contact}
        </Link>
        <Link
          className="link-hover link transition-all duration-200 ease-in-out hover:text-slate-400 hover:no-underline"
          href={"/imprint"}
        >
          Imprint
        </Link>
        <Link
          className="link-hover link transition-all duration-200 ease-in-out hover:text-slate-400 hover:no-underline"
          href={"/privacy"}
        >
          Privacy Policy
        </Link>
      </nav>
      <nav>
        <ul className="flex gap-3 text-primary">
          {socialLinks.map((link, index) => {
            const { url, icon } = link;
            return (
              <li key={index}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slater3text-gray-300 ease-in-ou4 text-2xl text-primary-content transition-all duration-200 hover:text-slate-400"
                >
                  {icon}
                </a>
              </li>
            );
          })}
          {email.map((item) => {
            const { email, icon } = item;
            return (
              <li key={email}>
                <a
                  href={`mailto:${email}`}
                  className="ease-slateo3t duration-204 text-2xl text-primary-content transition-all hover:text-slate-400"
                >
                  {icon}
                </a>
              </li>
            );
          })}
          <li>
            <ShareButton className="text-primary-content transition-all duration-200 ease-in-out hover:text-slate-400" />
          </li>
        </ul>
      </nav>
      <aside>
        <p>Copyright © {currentYear} - All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
