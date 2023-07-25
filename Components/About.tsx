import React from "react";
import Heading from "./Heading";
import { ava } from "@/public/assets";
import Image from "next/image";
import { AiOutlineGift } from "react-icons/ai";
import {
  TbSchool,
  TbCurrentLocation,
  TbBrandGithub,
  TbSend,
  TbBrandFacebook,
  TbPhone,
} from "react-icons/tb";
import Button from "./Button";
const About: React.FC = () => {
  return (
    <section className="container px-4 py-10 mx-auto ">
      <Heading title="Giới thiệu bản thân" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div className="">
          <Image className="w-[400px]" src={ava} alt="ava" />
        </div>
        <div className="">
          <div className="flex items-center justify-between w-[380px]">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 font-medium">
                <AiOutlineGift className="text-[#ff4d41] text-[22px]" />
                Ngày sinh
              </div>
              <div className="flex items-center gap-4 font-medium">
                <TbSchool className="text-[#ff4d41] text-[22px]" />
                Học vấn
              </div>
              <div className="flex items-center gap-4 font-medium">
                <TbCurrentLocation className="text-[#ff4d41] text-[22px]" />
                Địa chỉ
              </div>
              <div className="flex items-center gap-4 font-medium">
                <TbBrandGithub className="text-[#ff4d41] text-[22px]" />
                Github
              </div>
              <div className="flex items-center gap-4 font-medium">
                <TbSend className="text-[#ff4d41] text-[22px]" />
                Email
              </div>
              <div className="flex items-center gap-4 font-medium">
                <TbPhone className="text-[#ff4d41] text-[22px]" />
                Điện thoại
              </div>
            </div>
            <div className="flex flex-col gap-6 text-gray-600">
              <div className="">:</div>
              <div className="">:</div>
              <div className="">:</div>
              <div className="">:</div>
              <div className="">:</div>
              <div className="">:</div>
            </div>
            <div className="flex flex-col gap-6 text-gray-600">
              <div className="">27.11.2002.</div>
              <div className="">Đại Học Gia Định.</div>
              <div className="">Quận Tân Bình, TPHCM.</div>
              <div className="">
                <a href="https://github.com/DuongXuanKhai">
                  https://github.com/DuongXuanKhai
                </a>
              </div>
              <div className="">
                <a href="mailto:duongxuankhai@gmail.com">
                  duongxuankhai@gmail.com
                </a>
              </div>
              <div className="">0857271102</div>
            </div>
          </div>
          <div className="max-w-[800px]">
            <h2 className="mt-8 mb-4 font-bold">Xin chào! Em là Xuân Khai</h2>
            <p className="w-full text-gray-600">
              Em hiện đang là sinh viên năm ba và em hy vọng mình có cơ hội được
              thực tập tại công ty. Mong muốn được làm việc trong một môi trường
              năng động, và từ đó có thể phát huy hết những kỹ năng, phẩm chất
              tốt khác để giúp đỡ những người xung quanh và làm những việc có
              ích cho công ty. Phấn đấu trở thành Full-Stack Web Developer trong
              vòng 1 năm tới.
            </p>
            <Button link="mailto:duongxuankhai@gmail.com" text="Liên hệ" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
