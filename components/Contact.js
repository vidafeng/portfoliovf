import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rrfdk3d",
        "template_fpbuh3i",
        form.current,
        "_e9XLncsHj8dT6k-W"
      )
      .then(
        () => {
          alert("Thanks for reaching out! Message successfully sent");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-80 w-full">
        <div className="p-6 border border-gray-300 sm:rounded-md">
          <div className="py-8 pb-16 lg:py-16 px-4 mx-auto max-w-screen-md">
            <p className="uppercase text-xl tracking-widest text-[#F08E80]">
              Contact
            </p>
            <h2 className="py-4">Let&apos;s Connect</h2>

            <form className="space-y-8 py-3" ref={form} onSubmit={sendEmail}>
              <div>
                <label
                  htmlFor="email"
                  className="uppercase block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-6"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="uppercase block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="uppercase block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#f59283] tracking-widest sm:w-fit hover:bg-[#F08E80] focus:ring-4 float-right"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-center py-12 ">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="m-auto text-[#F08E80]"
                size={20}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
