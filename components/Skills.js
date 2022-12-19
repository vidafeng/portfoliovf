import React from "react";
import Image from "next/image";
import Css from "../public/assets/skills/css.png";
import Github from "../public/assets/skills/github.png";
import Html from "../public/assets/skills/html.png";
import Javascript from "../public/assets/skills/javascript.png";
import Node from "../public/assets/skills/node.png";
import Postgres from "../public/assets/skills/postgres.png";
import Reactpng from "../public/assets/skills/react.png";
import Nextjs from "../public/assets/skills/nextjs.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#F08E80]">
          Skills
        </p>
        <h2 className="py-4">Technologies I&apos;ve Worked With</h2>
        {/* grid container */}
        {/* auto 1 col on small devices // md 2 cols etc */}
        <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              {/* images */}
              <div className="m-auto">
                <Image src={Html} alt="/" width={100} height={100} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              {/* images */}
              <div className="m-auto">
                <Image src={Css} width={100} height={100} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              {/* images */}
              <div className="m-auto">
                <Image src={Github} width={100} height={100} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              {/* images */}
              <div className="m-auto">
                <Image src={Javascript} width={100} height={100} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              {/* images */}
              <div className="m-auto">
                <Image src={Node} width={100} height={100} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.js</h3>
              </div>
            </div>
          </div>

          <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              {/* images */}
              <div className="m-auto">
                <Image src={Reactpng} width={100} height={100} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              {/* images */}
              <div className="m-auto">
                <Image src={Postgres} width={100} height={100} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>

          <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              {/* images */}
              <div className="m-auto">
                <Image src={Nextjs} width={100} height={100} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Nextjs</h3>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
