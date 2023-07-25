import Link from "next/link";
import React, { useState, useRef } from "react";
import { HiDownload, HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithubFilled } from "react-icons/tb";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
const Navbar = () => {
  const ref = useRef<string | any>();
  const [showmenu, setShowMenu] = useState(false);
  return (
    <div className="bg-white fixed top-0 w-[100%] z-10">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div className="text-[24px]">Duong Xuan Khai</div>
        <div className="hidden gap-6 md:flex">
          <Link href="/" legacyBehavior>
            <a className="hover:text-[#ff4D41]">Home</a>
          </Link>
          <Link href="#" legacyBehavior>
            <a className="hover:text-[#ff4D41]">Giới thiệu</a>
          </Link>
          <Link href="#" legacyBehavior>
            <a className="hover:text-[#ff4D41]">Dự án</a>
          </Link>
          <Link href="#" legacyBehavior>
            <a className="hover:text-[#ff4D41]">Liên hệ</a>
          </Link>
        </div>
        <a
          href="#"
          className="hidden  md:flex border border-[#ff4D41] px-4 py-1 text-[#ff4D41] rounded-[5px] 
          items-center gap-2 hover:bg-[#ff4D41] hover:text-white transition duration-200"
        >
          Download CV
          <HiDownload />
        </a>
        {/* small menu */}
        {/* <div className="md:hidden text-[24px]">
          <HiOutlineMenu />
        </div> */}
        <div
          onClick={() => setShowMenu(true)}
          className="flex flex-col items-center justify-between w-6 h-5 ml-auto overflow-hidden text-4xl cursor-pointer md:hidden text-textGreeb group"
        >
          <HiOutlineMenu />
        </div>
        {showmenu && (
          <div
            ref={(node) => (ref.current = node)}
            className="absolute top-0 right-0 flex flex-col items-end w-full h-screen bg-white bg-opacity-50 mdl:hidden"
          >
            <div className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#ffffff] px-4 py-10 relative flex flex-col items-center">
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="absolute text-3xl cursor-pointer text-textGreeb top-4 right-4 hover:bg-red-500"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base text-[13px] gap-7 ">
                  <Link
                    href="#home"
                    className="flex items-center gap-1 font-medium duration-300 cursor-pointer nav-link text-textDark hover:text-textGreeb"
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    href="#about"
                    className="flex items-center gap-1 font-medium duration-300 cursor-pointer nav-link text-textDark hover:text-textGreeb"
                  >
                    <li>
                      <span className="text-textGreeb"></span> Giới thiệu
                    </li>
                  </Link>
                  <Link
                    href="#about"
                    className="flex items-center gap-1 font-medium duration-300 cursor-pointer nav-link text-textDark hover:text-textGreeb"
                  >
                    <li>
                      <span className="text-textGreeb"></span>
                      Dự án
                    </li>
                  </Link>
                  <Link
                    href="#about"
                    className="flex items-center gap-1 font-medium duration-300 cursor-pointer nav-link text-textDark hover:text-textGreeb"
                  >
                    <li>
                      <span className="text-textGreeb"></span> Liên hệ
                    </li>
                  </Link>
                </ul>
                <a href="/assets/menusmall.jpg" target="_blank">
                  <button className="px-4 py-2 rounded-md text-textGreeb text-[13px] border border-textGreeb hover:bg-hoverColor duration-300">
                    Download CV
                  </button>
                </a>
                <div className="flex-col items-center justify-end w-full h-full gap-4 text-textLight">
                  <div className="flex-col gap-6 px-10 ">
                    <a href="https://github.com/DuongXuanKhai" target="_blank">
                      <span className="inline-flex items-center justify-center w-10 h-10 mx-3 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreeb hover:-translate-y-2">
                        <TbBrandGithubFilled />
                      </span>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100011629720229"
                      target="_blank"
                    >
                      <span className="inline-flex items-center justify-center w-10 h-10 mx-3 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreeb hover:-translate-y-2">
                        <SlSocialFacebook />
                      </span>
                    </a>
                    <a
                      href="https://www.instagram.com/khaiduongxuan/"
                      target="_blank"
                    >
                      <span className="inline-flex items-center justify-center w-10 h-10 mx-3 text-xl transition-all duration-300 rounded-full cursor-pointer bg-hoverColor hover:text-textGreeb hover:-translate-y-2">
                        <SlSocialInstagram />
                      </span>
                    </a>
                    <a
                      className="mt-4 text-sm tracking-widest text-center w-72 text-textGreeb"
                      href="mailto:duongxuankhai@gmail.com"
                    >
                      <p className="mt-4">duongxuankhai@gmail.com</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
