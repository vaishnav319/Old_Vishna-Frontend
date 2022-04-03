import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillPhone } from "react-icons/ai";
import { BsGithub, BsGoogle, BsInstagram, BsLinkedin } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
const Footer = () => {
  return (
    <div className="bg-temp-50 text-white ">
      <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
          <div className="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="flex justify-center">
            <a href="#!" className="mr-6 text-gray-600">
              <FaFacebookF />
            </a>
            <a href="#!" className="mr-6 text-gray-600">
              <AiOutlineTwitter />
            </a>
            <a href="#!" className="mr-6 text-gray-600">
              <BsGoogle />
            </a>
            <a href="#!" className="mr-6 text-gray-600">
              <BsInstagram />
            </a>
            <a href="#!" className="mr-6 text-gray-600">
              <BsLinkedin />
            </a>
            <a href="#!" className="text-gray-600">
              <BsGithub />
            </a>
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="">
              <img src="logo2.png" className="bg-temp-50 rounded-xl pb-2" />
              <p className="m-2">
                Our research addresses the theoretical foundations and practical
                applications of computational vision.
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Other Links
              </h6>
              <p className="mb-4">
                <a href="/research" className="text-gray-600">
                  Publications
                </a>
              </p>
              <p className="mb-4">
                <a href="/projects" className="text-gray-600">
                  Projects
                </a>
              </p>
              <p className="mb-4">
                <a href="/research" className="text-gray-600">
                  Workshops
                </a>
              </p>
              <p>
                <a href="#!" className="text-gray-600">
                  Conferences
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Useful links
              </h6>
              <p className="mb-4">
                <a href="/" className="text-gray-600">
                  Dashboard
                </a>
              </p>
              <p className="mb-4">
                <a href="people" className="text-gray-600">
                  People
                </a>
              </p>
              <p className="mb-4">
                <a href="/research" className="text-gray-600">
                  Research
                </a>
              </p>
              <p>
                <a href="#!" className="text-gray-600">
                  Help
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Contact
              </h6>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <HiHome className="w-4 mr-4" />
                Coimbatore, TN
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <GrMail className="w-4 mr-4" />
                email@example.com
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <AiFillPhone />
                +91 876787678
              </p>
            </div>
          </div>
        </div>
        <div className="text-center p-6 bg-gray-200">
          <span>© 2022 Copyright </span>
          <a className="text-gray-600 font-semibold" href="/">
            Computer Vision Lab
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
