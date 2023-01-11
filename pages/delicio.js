import Image from "next/image";
import Link from "next/link";
import React from "react";
import delicioImg from "../public/assets/proj/delicio-proj.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const delicio = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
        <Image
          className="absolute z-1"
          fill="current"
          src={delicioImg}
          alt="delicio"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Delicio</h2>
          <h3>Tinder Meets Yelp Progressive Web Application</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="py-2">Project</p>
          <h2 className="pb-3">Description</h2>
          <p className="py-2">
            Delicio is a a fun Progressive Web App available on both mobile and
            computer web browser to help you and your friends answer the age old
            question: where should we go eat? As many of us have experienced in
            the past, getting a group of people to agree upon a restaurant can
            be a tedious back and forth on a never ending group text. Let
            Delicio help you and your friends get to the point and decide where
            to go by letting your eyes decide. After all, a picture is worth a
            thousand bites!
          </p>
          <p>
            Users are able to input preferences including location, cuisine, and
            number of restaurant choices. Inspired by Tinder and Yelp, you and
            your friends vote in a fun and unbiased way by swiping right on the
            dishes that make your mouth water! Once everybody casts their votes,
            Delicio will deliver to you the winning restaurant. A list of
            restaurant choices is made possible with Yelp API.
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
              <Link target="_blank" href="https://delicio.fly.dev">
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
                href="https://github.com/capstone-delicio/delicio"
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
                Material-UI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" />
                PWA
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="mr-2" />
                Yelp API
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

export default delicio;
