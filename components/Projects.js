import Image from "next/image";
import Link from "next/link";
import React from "react";
import SingleProj from "./SingleProj";
import delicioImg from "../public/assets/proj/delicio-proj.png";
import teatokenImg from "../public/assets/proj/teatokens-proj.jpeg";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#F08E80]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-1 gap-8">
          <SingleProj
            title="Delicio"
            description="A Progressive Web App that helps you and your friends decide
            where to eat in a fun and collaborative way. Delicio leverages
            Yelp Fusion API to create a list of possible restaurants that
            match your desired location and restaurant preference."
            backgroundImg={delicioImg}
            projectUrl="https://delicio.fly.dev/"
            githubUrl="https://github.com/capstone-delicio/delicio"
          />
          <SingleProj
            title="TeaTokens"
            description="An e-commerce website with an extensive tea product catalog,
            shopping cart, and checkout. My team and I built this full-stack
            single-page application using Node.js, React, React-Redux,
            Express, Sequelize, PostgreSQL, and Chakra-UI."
            backgroundImg={teatokenImg}
            projectUrl="http://teatokens.herokuapp.com/"
            githubUrl="https://github.com/teamGoldenrod/TeaTokens"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
