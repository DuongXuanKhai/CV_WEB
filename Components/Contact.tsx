import React from "react";
import Heading from "./Heading";

const Contact = () => {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto">
        <Heading title="Liên hệ" />
        <form className="flex flex-col gap-8 ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <input
              type="text"
              placeholder="Họ và tên "
              className="inputStyle"
              required
            />
            <input
              type="text"
              placeholder="email"
              className="inputStyle"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Tiêu đề"
            className=" inputStyle"
            required
          />
          <textarea
            rows="6"
            placeholder="Nội dung "
            className="inputStyle"
            required
          ></textarea>
          <div className="">
            <button type="submit" className="btn">
              Liên hệ ngay !
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
