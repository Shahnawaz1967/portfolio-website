import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import DailyMotionImg from "@/public/DailyMotion.png";
import FlashcardgeneratorImg from "@/public/Flashcardgenerator.png";
import WishmartImg from "@/public/Wishmart.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated",
    location: "Bhopal, Madhya Pradesh",
    description:
      "I graduated with Electronics & Communication at Bhopal",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Front-End Developer",
    location: "Banglore, remote",
    description:
      "i had intership in almabetter for front and i had worked on projects .",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Banglore, Remote",
    description:
      "I'm now a full-stack developer I had worked on various projects. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Dailymotion-clone",
    description:
      "I had worked on this projects .Users can watch share and different content.",
    tags: ["React", "Nodejs", "Expressjs" ,"MongoDB", "Tailwind"],
    imageUrl: DailyMotionImg,
  },
  {
    title: "flashcard Generartor",
    description:
      "In this projects users can create flashcard in which there are three pages first page is create flash cads in which users create flashcard, second page is myflashcard in which users can see all flahcards",
    tags: ["React", "Tailwind", "Formik", "RTK"],
    imageUrl: FlashcardgeneratorImg,
  },
  {
    title: "Wishmart web app",
    description:
      "wishmart web app is a shopping web app. in which users can shop.",
    tags: ["React", "firebase", "Tailwind"],
    imageUrl: WishmartImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "TypeScript",
  "Next.js",
  "Git",
] as const;
