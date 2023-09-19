'use client'

import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Image from "next/image";
import contact from "./../../../public/assets/avatar.png";
import Link from "next/link";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [message, setMessage] = useState(false);
 
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();
  

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }) 
      .finally(() => {
        form.current.reset();
        setMessage(true);
      });
  };




  return (
    <div id="contact" className="w-full  mb-6 mt-16 md:pt-4 mx-auto pt-8 lg:snap-start">
      <div className="text-center max-w-[1480px] mx-auto px-2 py-16">
        <p className="text-sky-500 mb-4 text-xl">CONTACT</p>
        <h2 className="">Get In Touch</h2>
      </div>
      <div className="w-full flex  justify-center gap-10">
        <div className="flex flex-col md:flex-row md:bg-slate-800 rounded-xl">
          <div className="bg-slate-800 p-8 md:p-2 lg:p-8 xl:p-8 flex flex-col gap-4 justify-center items-center rounded-xl mb-16 md:mb-0 md:ml-10 mx-8 md:mx-1 ">
            <div className="flex flex-col gap-4">
              <div className="w-40 lg:w-48 bg-slate-100 rounded-full mx-auto">
                <Image src={contact} className="rounded-lg" />
              </div>
              <h2 className="text-xl md:text-3xl text-slate-100 mx-auto mb-2">
                Piyush Rathore
              </h2>
              <h4 className="text-md md:text-xl text-slate-100">
                Full Stack Web Developer
              </h4>
              <p className="text-slate-100">
                I am available for full-time positions. <br /> Contact me and
                let's talk.
              </p>
            </div>
            <div className="mt-20 md:mt-6 lg:mt-20 flex flex-col justify-center items-center">
              <span className="text-slate-100">CONNECT WITH ME</span>
              <div className="flex justify-centre items-center w-full md:w-[80%] mt-4 md:mt-10  gap-10 md:gap-8  md:pr-12 ">
                <div className="rounded-full bg-slate-200 shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <Link
                href="http://www.linkedin.com/in/piyush0223"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
                </div>
                <div className="rounded-full shadow-lg bg-slate-200 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <Link href="https://github.com/Piyush2k23" target="_blank">
                <FaGithub />
               </Link>
                </div>
                <div className="rounded-full shadow-lg bg-slate-200 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <Link
                href="mailto:piyush23pr2000@gmail.com?Subject=Hello%20again"
                target="_top"
              >
                <AiOutlineMail />
              </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[3px] lg:h-[480px] my-auto bg-sky-500 mx-2  xl:mx-16" />
          <div className="bg-slate-800  md:pr-1 lg:pr-8 p-8 rounded-xl md:mr-10 mx-10">
            <div className=" bg-slate-200 p-6 md:p-2 lg:p-6 xl:p-6 rounded-lg shadow-md md:w-[300px] lg:w-[500px] ">
              <h1 className="text-2xl font-semibold mb-4 md:mb-8">
                Contact Me
              </h1>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-8">
                  <label htmlFor="name" className="block text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border rounded-md p-2 md:p-4 lg:p-5"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-8">
                  <label htmlFor="email" className="block text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border rounded-md p-2 md:p-4 lg:p-5"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="message" className="block text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full border rounded-md p-2 md:p-4 lg:p-5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors md:mt-3" >
                  Send
                </button>
                {message && <p className="text-center mt-4  text-lime-700 text-lg">Thanks, I'll reply ASAP</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
