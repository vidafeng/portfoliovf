import Image from "next/image";
import Link from "next/link";
import React from "react";
import delicioImg from "../public/assets/proj/delicio-proj.png";
import { RiRadioButtonFill } from "react-icons/ri";

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
          <h2 className="py-2">Delicio - Tinder Meets Yelp</h2>
          <h3>
            ReactJS / PostgreSQL / Sequelize / Node / Express / Material-UI /
            Yelp API
          </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
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
            dishes that make your mouth water! Once everybody has cast their
            votes, Delicio will deliver to you the winning restaurant. List of
            restaurant choices is made possible with Yelp API.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4 mr-8">Code</button>
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
