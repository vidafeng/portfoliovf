import Image from "next/image";
import Link from "next/link";
import React from "react";
import vflogo from "../public/assets/vflogo.png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z=[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={vflogo} alt="/" priority width="125" height="60" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-20 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-20 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-20 text-sm uppercase hover:border-b">Work</li>
            </Link>
            <Link href="/">
              <li className="ml-20 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
