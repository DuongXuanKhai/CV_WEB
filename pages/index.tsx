import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Skill from "@/Components/Skill";
import Project from "@/Components/project";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
