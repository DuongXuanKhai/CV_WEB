import { banner } from "@/public/assets";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import Button from "./Button";
const Hero = () => {
  return (
    <div className="bg-[url('../public/assets/banner.jpg')] h-screen w-full bg-cover bg-center bg-fixed flex items-center">
      <div className="container px-4 mx-auto ">
        <div className="max-w-[450px] text-white flex flex-col gap-[40px]">
          <div className="">
            <h1 className="text-5xl">Em tên Xuân Khai</h1>
            <h4 className="mt-5 text-2xl">
              <Typewriter
                options={{
                  strings: ["Intern Frontend Developer", "UI/UX"],
                  changeDelay: 3,
                  changeDelete: 2,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
          </div>
          <div className="bg-[#ff4D41] h-[2px] w-[40px]"></div>
          <div className="">
            <p>Em là sinh viên năm ba của trường Đại Học Gia Định.</p>
            <Button link="#" text="Learn more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
