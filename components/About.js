import React from "react";
import Image from "next/image";
import headshot from "../public/assets/headshot.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#F08E80]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hello! I&apos;m Vida, and I&apos;m a Fullstack Software Engineer who
            specializes in Javascript based in New York City. I&apos;m
            passionate about developing scalable, impactful solutions to
            real-world problems.
          </p>
          <p className="py-2 text-gray-600">
            Before I transitioned into the tech industry, I co-founded an
            innovative dessert shop in NYC that specialized in unique
            Asian-inspired ice cream flavors. What I enjoyed most about my job
            was developing creative yet optimized solutions to challenges my
            small business faced. That, combined with my love for continuous
            learning, led me to enroll and complete Fullstack Academy&apos;s
            Software Engineering Immersive Program, where I successfully built a
            solid foundation for full stack development. I&apos;m excited to be
            a part of an industry where creativity and innovation collide to
            create practical solutions that are genuinely useful and enjoyable.
          </p>
          <p className="py-2 text-gray-600">
            When I&apos;m not working on software-related projects or coding,
            you can find me jogging or going on coffee runs with my
            Goldendoodle, Nori.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-full" src={headshot} alt="headshot" />
        </div>
      </div>
    </div>
  );
};

export default About;
