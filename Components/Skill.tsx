import React from "react";
import Heading from "./Heading";

const Skill = () => {
  return (
    <section className="container px-4 py-10 mx-auto">
      <Heading title="Kỹ năng" />
      <p className="mb-10 -mt-10 text-gray-600 ">
        Có kỹ năng giao tiếp và làm việc nhóm nhiệt tình, năng động. Có thể đọc,
        nghe tài liệu tiếng anh và em khá hứng thú với công nghệ mới về frontend
        lẫn backend.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="">
          <p>HTML (5)</p>
          <div className="relative bg-gray-400 h-[4px] mt-2 ">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[80%]"></div>
          </div>
        </div>
        <div className="">
          <p>CSS (3)</p>
          <div className="relative bg-gray-400 h-[4px] mt-2 ">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[75%]"></div>
          </div>
        </div>
        <div className="">
          <p>JavaScript</p>
          <div className="relative bg-gray-400 h-[4px] mt-2 ">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[10%]"></div>
          </div>
        </div>
        <div className="">
          <p>React.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2 ">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[10%]"></div>
          </div>
        </div>
        <div className="">
          <p>Next.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2 ">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[10%]"></div>
          </div>
        </div>
        <div className="">
          <p>Tailwincss</p>
          <div className="relative bg-gray-400 h-[4px] mt-2 ">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[40%]"></div>
          </div>
        </div>
        <div className="">
          <p>Node.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2 ">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[5%]"></div>
          </div>
        </div>
        <div className="">
          <p>Express.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2 ">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[5%]"></div>
          </div>
        </div>
        <div className="">
          <p>MongoDB/MySQL</p>
          <div className="relative bg-gray-400 h-[4px] mt-2 ">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[5%]"></div>
          </div>
        </div>
        <div className="">
          <p>Redux</p>
          <div className="relative bg-gray-400 h-[4px] mt-2 ">
            <div className="bg-[#ff4d41] absolute h-[4px] w-[5%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
