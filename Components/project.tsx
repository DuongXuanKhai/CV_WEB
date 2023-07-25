import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { vegan2 } from "@/public/assets";

const project = () => {
  return (
    <section className="container px-4 py-10 mx-auto">
      <Heading title="Dự án cá nhân" />
      <div className="grid grid-cols-3 gap-4">
        <div className="relative row-span-2 group">
          <Image className="" src={vegan2} alt="vegan" />
          <a href="https://mern-app-self.vercel.app/" target="_blank">
            <div className="bg-[#000000bd] absolute w-[100%] h-full top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">
              Vegan Shop
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default project;
