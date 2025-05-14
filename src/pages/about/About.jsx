import React from "react";
import RootLayout from "../../layout/RootLayout";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <RootLayout className={"space-y-8"}>
      {/* Intro section */}
      <h1 className="text-4xl text-zinc-200 font-bold">About Me</h1>

      <div className="space-y-8">
        <div className="w-full flex items-center gap-10 flex-wrap">
          <div className="md:w-64 w-full h-auto flex items-center justify-center border border-zinc-900/40 bg-zinc-900/20 rounded-lg">
            <img
              src="https://res.cloudinary.com/deoqlqbci/image/upload/v1742070935/photo_yt7k3y.png"
              alt="about img"
              className="w-full aspect-square rounded-lg object-cover object-center"
            />
          </div>
          <div className="flex-1 space-y-5">
            <p className="text-base text-zinc-300 font-normal">
              I’m a passionate Software Engineer with hands-on experience in building responsive, interactive web applications using React.js, Next.js, JavaScript (ES6+), and Tailwind CSS. I thrive on writing clean, maintainable code and crafting seamless user experiences with a strong focus on UI/UX best practices, performance optimization, and cross-browser compatibility.
            </p>
            <p className="text-base text-zinc-300 font-normal">
              At GoMyCode, I contributed to the development of scalable web applications, optimizing page load times by 30% and improving API response times by 25% through efficient RESTful API integration. I also collaborated closely with designers and developers to build reusable UI components, enhancing development efficiency and consistency across projects.
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-between bg-blue-500/5 border border-blue-500/60 hover:border-500/80 md:px-6 px-3 py-3 rounded-lg group cursor-pointer ease-in-out duration-300">
          <p className="text-sm md:text-base font-normal">
            I am available for freelance work.
          </p>
          <Link
            to="mailto:abdulrahmanabiola@gmail.com"
            className="flex items-center gap-2 text-sm md:text-base font-semibold text-zinc-50 group-hover:text-zinc-200 ease-in-out duration-300"
          >
            Hire me{" "}
            <FaArrowRightLong className="group-hover:translate-x-1 ease-in-out duration-300" />
          </Link>
        </div>
        <p className="text-base text-zinc-300 font-normal">
          Beyond coding, I enjoy problem-solving, participating in code reviews, and working within agile teams to create innovative digital solutions. My technical expertise includes JavaScript, TypeScript, Git, and web performance optimization, and I’m constantly exploring new technologies to stay ahead in the ever-evolving web development landscape.
        </p>
      </div>
    </RootLayout>
  );
};

export default About;
