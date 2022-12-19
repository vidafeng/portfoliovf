import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const SingleProj = ({
  title,
  backgroundImg,
  projectUrl,
  description,
  githubUrl,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70">
      <Image
        className="rounded-xl group-hover:opacity-10 w-full"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="uppercase text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{description}</p>
        <div className="pt-10 text-right space-x-5">
          <button className="py-2 px-4 bg-transparent inline-flex items-center hover:opacity-80">
            <FontAwesomeIcon
              className="fill-current w-4 h-4 mr-2"
              icon={faExternalLink}
              size="xl"
            />
            <Link target="_blank" href={projectUrl}>
              <span>Demo</span>
            </Link>
          </button>

          <button className="py-2 px-4 bg-transparent inline-flex items-center hover:opacity-80">
            <FontAwesomeIcon
              className="fill-current w-4 h-4 mr-2"
              icon={faGithub}
              size="xl"
            />
            <Link target="_blank" href={githubUrl}>
              <span>Code</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProj;
