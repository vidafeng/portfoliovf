import Image from "next/image";
import Link from "next/link";
import React from "react";
import SingleProj from "./SingleProj";
import delicioImg from "../public/assets/proj/delicio-proj.png";
import teatokenImg from "../public/assets/proj/teatokens-proj.jpeg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#F08E80]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-1 gap-8">
          <SingleProj
            title="Delicio"
            description="A Progressive Web App inspired by Yelp and Tinder"
            backgroundImg={delicioImg}
            projectUrl="https://delicio.fly.dev/"
            githubUrl="https://github.com/capstone-delicio/delicio"
            moreInfo="/delicio"
          />

          <SingleProj
            title="TeaTokens"
            description="E-commerce website with an extensive tea catalog"
            backgroundImg={teatokenImg}
            projectUrl="http://teatokens.herokuapp.com/"
            githubUrl="https://github.com/teamGoldenrod/TeaTokens"
            moreInfo="/teatokens"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
