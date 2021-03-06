import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="md:flex w-full bg-dark-blue-primary p-8 items-center text-center justify-between max-w-8xl mx-auto p-4 md:p-8 text-sm">
      <div className="flex flex-col md:flex-row text-center">
        {[
          {
            route: "https://git.io/Jemzv",
            title: "Code of Conduct"
          },
          {
            route: "https://oscafrica.org/community",
            title: "Community"
          },
          {
            route: "https://opencollective.com/osca",
            title: "Open Collective"
          },
          {
            route: "https://blog.oscafrica.org",
            title: "Blog"
          }
        ].map(link => (
          <ul className="m-0 p-0" key={link.title}>
            <li className="pb-8 md:pr-8 md:pb-0 p2">
              <a className="no-underline text-white" href={link.route}>
                {link.title}
              </a>
            </li>
          </ul>
        ))}
      </div>
      <div className="mt-4">
        {[
          {
            key: 0,
            faIcon: ["fa", "envelope"],
            href: "mailto:info@oscafrica.org"
          },
          {
            key: 1,
            faIcon: ["fab", "twitter"],
            href: "https://twitter.com/oscafrica"
          },
          {
            key: 2,
            faIcon: ["fab", "facebook-square"],
            href: "https://facebook.com/opensourcecommunityafrica"
          },
          {
            key: 3,
            faIcon: ["fab", "github"],
            href: "https://github.com/oscommunityafrica"
          }
        ].map(icon => (
          <a
            key={icon.key}
            className="font-bold p-2 no-underline text-white"
            href={icon.href}
          >
            <i className="pr-2">
              <FontAwesomeIcon icon={icon.faIcon} />
            </i>
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
