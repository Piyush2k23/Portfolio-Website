"use client";

import { AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { useState, useEffect } from "react";

const Main = () => {
  const [person, setPerson] = useState(false);

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = person ? "hidden" : "auto";
    };

    handleBodyOverflow();

    return () => {
      handleBodyOverflow();
    };
  }, [person]);

  return (
    <div className="w-full h-screen text-center relative lg:snap-start">
      <div className="max-w-[1480px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-8 ">
          <span className="">LET'S BUILD SOMETHING TOGETHER</span>
          <h1 className="leading-snug">
            Hi, I'm <span className="text-blue-500">Piyush</span>
            <br />A Full Stack Web Developer
          </h1>
          <p className="py-4 text-gray-600">
            Let's turn your ideas into reality. Explore, learn, and create with
            me. Welcome to my world of web development. I turn concepts into
            user-friendly, responsive, and visually stunning websites. My
            toolset includes the latest web technologies, such as React, Next
            Js, tailwind Css, and more.
          </p>
        </div>
        <div className="pt-10">
          <div className="flex items-center w-full sm:w-[80%] mt-10 gap-8 md:gap-16 text-lg md:text-xl lg:text-3xl">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link
                href="http://www.linkedin.com/in/piyush0223"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link href="https://github.com/Piyush2k23" target="_blank">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link
                href="mailto:piyush23pr2000@gmail.com?Subject=Hello%20again"
                target="_top"
              >
                <AiOutlineMail />
              </Link>
            </div>
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
              onClick={() => setPerson(true)}
            >
              <BsFillPersonLinesFill />
            </div>
          </div>
          <div className="mt-24 lg:mt-32">
              <Link
                href={process.env.NEXT_PUBLIC_RESUME}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 hover:bg-blue-700 text-white font-bold py-4 px-4 md:py-4 md:px-8 rounded-md  text-md md:text-xl"
              >
                Download Resume
              </Link>
            </div>
        </div>
        {person && (
          <div className="absolute w-full h-screen bg-black/70 snap-start">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <div className="w-full bg-slate-50 rounded-lg ml-2">
                <div className="flex p-8 ">
                  <div className="w-full  flex flex-col  items-start gap-6  md:mr-12 text-sm  md:text-md lg:text-xl text-sky-950 mx-auto">
                    <h3>Name: Piyush Rathore</h3>
                    <h3 className="w-[243px] lg:w-[341px]">
                      Email: piyush23pr2000@gmail.com
                    </h3>
                    <h3>Phone: +91 7339914934</h3>
                    <h3>Location: Jaipur, Rajasthan </h3>
                  </div>
                  <div
                    className=" w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 rounded-full shadow-lg shadow-greay-500 p-1 md:p-2 lg:p-3  text-md cursor-pointer bg-slate-300 hover:bg-slate-400"
                    onClick={() => setPerson(false)}
                  >
                    <AiOutlineClose className="pb-2 text-2xl text-center mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
