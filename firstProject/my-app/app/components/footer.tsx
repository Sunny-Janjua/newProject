// components/Footer.js

import React from "react";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-white sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r border-gray-700">
          <div className="text-sm uppercase text-blue-400 font-bold">Menu</div>
          <ul>
            <li className="my-2">
              <Link
                href="/"
                className="hover:text-blue-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li className="my-2">
              <Link
                href="/services"
                className="hover:text-blue-300 transition duration-300"
              >
                About
              </Link>
            </li>
            <li className="my-2">
              <Link
                href="/products"
                className="hover:text-blue-300 transition duration-300"
              >
                Our Team
              </Link>
            </li>
            <li className="my-2">
              <Link
                href="/pricing"
                className="hover:text-blue-300 transition duration-300"
              >
                Courses
              </Link>
            </li>
            <li className="my-2">
              <Link
                href="/pricing"
                className="hover:text-blue-300 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-5 sm:w-7/12 border-r border-gray-700 text-center">
          <h3 className="font-bold text-xl text-blue-400 mb-4">
            Code With Sunny
          </h3>
          <p className="text-gray-300 text-sm mb-10">
            At Code with Sunny, learn essential web development technologies,
            including HTML, CSS, and Tailwind CSS for styling. Gain proficiency
            in JavaScript and TypeScript for dynamic functionality. Master
            front-end frameworks like React and Next.js for building interactive
            user interfaces, while exploring back-end technologies such as
            Node.js and Express.js. Build full-stack applications utilizing
            databases like MongoDB and SQL, equipping yourself with the skills
            needed for a successful career in web development.{" "}
          </p>
        </div>
        <div className="p-5 sm:w-3/12">
          <div className="text-sm uppercase text-blue-400 font-bold">
            Contact Us
          </div>
          <ul>
            <li className="my-2">+92 326 6655307</li>
            <li className="my-2">+92 370 4570873</li>
            <li className="my-2">hussnainmulazam@gmail.com</li>
            <li className="my-2">Depalpur,Okara Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="flex py-5 m-auto text-white text-sm flex-col items-center max-w-screen-xl">
        <p>© 2024 Code With Sunny - Where Ideas Blossom Into Reality 🌱</p>
        <div className="gap-6 md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <Link
            href="https://twitter.com"
            aria-label="Twitter"
            className="w-6 mx-1"
          >
            <FaTwitter
              className="cursor-pointer text-white hover:text-indigo-400 transition duration-300"
              size={24}
            />
          </Link>
          <Link
            href="https://twitter.com"
            aria-label="Twitter"
            className="w-6 mx-1"
          >
            <FaFacebook
              className="cursor-pointer text-white hover:text-indigo-400 transition duration-300"
              size={24}
            />
          </Link>
          <Link
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="w-6 mx-1"
          >
            <FaLinkedin
              className="cursor-pointer text-white hover:text-indigo-400 transition duration-300"
              size={24}
            />
          </Link>
          <Link
            href="https://instagram.com"
            aria-label="Instagram"
            className="w-6 mx-1"
          >
            <FaInstagram
              className="cursor-pointer text-white hover:text-indigo-400 transition duration-300"
              size={24}
            />
          </Link>
          <Link
            href="https://instagram.com"
            aria-label="Instagram"
            className="w-6 mx-1"
          >
            <FaGithub
              className="cursor-pointer text-white hover:text-indigo-400 transition duration-300"
              size={24}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
