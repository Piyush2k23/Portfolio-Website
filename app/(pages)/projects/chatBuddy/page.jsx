import Image from "next/image";
import React from "react";
import chatImg from "../../../../public/assets/projects/chat_buddy_app.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const chatBuddy = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={chatImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Chat Buddy App</h2>
          <h3>React JS / Node JS / Socket.io</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="text-justify mt-4">
            Chat Buddy is a MERN chat web app project. A web-based application
            that allows users to communicate with each other in real-time using
            text-based messaging. 
            Chat Buddy enables users to send and receive messages instantly, creating a responsive and immersive chat experience.
            It includes authentication and authorisation
            features and uses socket.io for bidirectional communication between
            client and server. It is a feature-rich and user-friendly
            chat application that I developed using a modern technology stack to
            provide a seamless real-time messaging experience. 
            Users can seamlessly exchange messages, creating a dynamic and immersive environment for communication.
          </p>
          <a
            href="https://github.com/Piyush2k23/Chat_Buddy.git"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://chat-buddy-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mongo DB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Socket.IO
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default chatBuddy;
