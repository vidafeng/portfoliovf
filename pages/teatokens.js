import Image from "next/image";
import Link from "next/link";
import React from "react";
import teatokensImg from "../public/assets/proj/teatokens-proj.jpeg";
import { RiRadioButtonFill } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const teatokens = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
        <Image
          className="absolute z-1"
          fill="current"
          src={teatokensImg}
          alt="teatokens"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">TeaTokens</h2>
          <h3>E-Commerce Website</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="py-2">Project</p>
          <h2 className="pb-3">Description</h2>
          <p className="py-2">
            TeaTokens is an e-commerce website with an extensive tea product
            catalog, shopping cart, and checkout. Fullstack, single-page
            application built using Node.js, React, React-Redux, Express,
            Sequelize, PostgreSQL, and Chakra-UI.
          </p>
          <p>
            Users can sign up/login, edit user information, and user data is
            secured through JSON web tokens. Logged-in users and guests can view
            all products, search for a specific product, click a single product
            for more details, and add a product to their cart. Our team
            implemented cart persistence on refresh using local storage. Admin
            accounts have backend access to add, edit, and remove products from
            the tea database.
          </p>
          {/* <button className="px-8 py-2 mt-4 mr-8">Demo</button> */}
          {/* <button className="px-8 py-2 mt-4 mr-8">Code</button> */}
          <div className="pt-10 text-left space-x-5">
            <button className="py-2 px-8 mt-4 mr-4 inline-flex items-center hover:opacity-80">
              <FontAwesomeIcon
                className="fill-current w-4 h-4 mr-2"
                icon={faExternalLink}
                size="xl"
              />
              <Link target="_blank" href="http://teatokens.herokuapp.com/">
                <span>Demo</span>
              </Link>
            </button>

            <button className="py-2 px-8 mt-4 mr-4 inline-flex items-center hover:opacity-80">
              <FontAwesomeIcon
                className="fill-current w-4 h-4 mr-2"
                icon={faGithub}
                size="xl"
              />
              <Link
                target="_blank"
                href="https://github.com/teamGoldenrod/TeaTokens"
              >
                <span>Code</span>
              </Link>
            </button>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" />
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" />
                Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" />
                PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" />
                Node
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" />
                Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" />
                Chakra-UI
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default teatokens;
