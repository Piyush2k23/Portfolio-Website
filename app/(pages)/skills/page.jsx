"use client";

import Image from "next/image";
import html from "../../../public/assets/skills/html.png";
import css from "../../../public/assets/skills/css.png";
import javascript from "../../../public/assets/skills/javascript.png";
import react from "../../../public/assets/skills/react.png";
import node from "../../../public/assets/skills/node.png";
import mongo from "../../../public/assets/skills/mongo.png";
import nextjs from "../../../public/assets/skills/nextjs.png";
import tailwind from "../../../public/assets/skills/tailwind.png";
import cplus from "../../../public/assets/skills/c++.png";
import express from "../../../public/assets/skills/express.png";
import typescript from "../../../public/assets/skills/typescript.png";
import github from "../../../public/assets/skills/github.png";



import SkillsCard from "./SkillCard";


const Skills = () => {
  return (
    <div id='skills' className="w-full md:h-screen py-16 pt-16 lg:pt-32 lg:snap-start">
      <div className="flex flex-col justify-center h-full max-w-[1480px] mx-auto px-2 py-8 ">
        <p className="text-cyan-600 text-xl">SKILLS</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="w-full mt-8 md:mt-12 lg:mt-16 grid gap-6 md:gap-8  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <SkillsCard image={html} name="HTML" />
          <SkillsCard image={css} name="CSS" />
          <SkillsCard image={javascript} name="JAVASCRIPT" />
          <SkillsCard image={react} name="REACT JS" />
          <SkillsCard image={node} name="NODE JS" />
          <SkillsCard image={mongo} name="MONGO DB" />
          <SkillsCard image={nextjs} name="NEXT JS" />
          <SkillsCard image={tailwind} name="TAILWIND CSS" />
          <SkillsCard image={cplus} name="C++" />
          <SkillsCard image={typescript} name="TYPESCRIPT" />
          <SkillsCard image={express} name="EXPRESS JS" />
          <SkillsCard image={github} name="GITHUB" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
