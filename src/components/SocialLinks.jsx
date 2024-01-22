import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GrResume } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa"

const SocialLinks = () => {
  const Links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn<FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/sushant-shekhar-29542b22a/",
      style: "rounded-tr-md"
    },
    {
      id: 2,
      child: (
        <>
          GitHub<FaGithub size={30} />
        </>
      ),
      href: "https://github.com/sushantshekhar-tech"
    },
    {
      id: 3,
      child: (
        <>
          Mail<HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:shekharsushant54@gmail.com"
    },
    {
      id: 4,
      child: (
        <>
          Instagram< FaInstagram  size={30} />
        </>
      ),
      href: "https://www.instagram.com/_creativity_unleashed_?igsh=MXJ2OXJidnA4eGNsbw%3D%3D",
     

    },
    {
      id: 5,
      child: (
        <>
          Resume< GrResume  size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {Links.map(({ id, child, href, download, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
