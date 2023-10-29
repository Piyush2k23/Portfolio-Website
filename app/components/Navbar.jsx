"use client"

import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import logo from '../../public/assets/logo.png';
import { useState } from "react";
import Image from "next/image";



const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

  return (
    <>
    <div className="w-full fixed shadow-2xl z-30 bg-slate-900">
      <div className="flex justify-between h-16 items-center ">
        <div className="lg:ml-28 text-white">
          <Link href="/"><Image src={logo} className="w-36 md:w-44 lg:w-48"/></Link>
        </div>
        <div className="mr-8 lg:mr-28 ">
          <div className="gap-8 lg:gap-12 hidden md:flex text-white">
            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/#skills">Skills</Link>
            <Link href="/#projects"> Projects</Link>
            <Link href="/#contact"> Contact</Link>
          </div>
          <div className="md:hidden  cursor-pointer text-slate-100" onClick={()=>setNavbar(true)}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
    </div>
    {navbar && <div className="fixed right-0 w-full h-screen bg-black/70  md:hidden z-50">
        <div className="w-[75%] h-screen  bg-[#15023a] ease-in duration-300">
          <div className="flex justify-between p-6 items-center text-white">
            <h3 className="text-xl">Piyush</h3>
            <div className="rounded-full shadow-lg shadow-greay-400 p-3  text-sm cursor-pointer bg-slate-100 text-black" onClick={()=>setNavbar(false)}>
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-400 pl-6 mt-8">
            <p className="mb-2 text-white ">Hey Buddy Welcome</p>
          </div>
          <div className="flex flex-col my-20 md:mt-24 gap-12 md:gap-16  text-white justify-center items-center text-2xl ">
            <Link className="hover:underline" onClick={()=>setNavbar(false)} href="/">Home</Link>
            <Link className="hover:underline" onClick={()=>setNavbar(false)} href="/#about">About</Link>
            <Link className="hover:underline" onClick={()=>setNavbar(false)} href="/#skills">Skills</Link>
            <Link className="hover:underline" onClick={()=>setNavbar(false)} href="/#projects"> Projects</Link>
            <Link className="hover:underline" onClick={()=>setNavbar(false)} href="/#contact"> Contact</Link>
          </div>
        </div>
      </div>}
      </>
  );
};

export default Navbar;
