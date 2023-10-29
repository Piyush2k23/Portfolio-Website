import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "./../../../public/assets/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 pt-24 lg:pt-40 lg:snap-start"
    >
      <div className="max-w-[1480px] mx-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 te">
            Hello, I'm Piyush Rathore, a passionate and creative full-stack web
            developer. Welcome to my digital space, where I'd love to share my
            journey, skills, and aspirations with you.
            <br />
            Ever since I embarked on my journey into the world of web
            development, I've been captivated by the limitless possibilities
            that technology offers. My fascination with creating elegant,
            functional, and user-friendly websites has only grown stronger over
            the years.
          </p>
          <p className="py-2 text-gray-600">
            My journey in web development began when I discovered the magic of
            HTML and CSS, and since then, there's been no looking back. I've
            honed my skills in front-end development, crafting visually
            appealing and responsive interfaces that seamlessly adapt to
            different devices and screen sizes. <br />In the realm of back-end
            development, I've dived deep into JavaScript and working with library like React and also use  framework like Next js and Tailwind css to
            build robust, dynamic, and data-driven web applications.
          </p>
          <Link href="/#projects">
            <p className="py-4 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects. 
            </p>
          </Link>
        </div>
        <div className="w-72 md:w-full lg:w-96 h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
