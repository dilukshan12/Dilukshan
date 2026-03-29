import { Link2, Link, Mail, ArrowUpRight, Download } from "lucide-react";
import profileImg from "./assets/Dilukshan.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* soft glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[10%] h-[250px] w-[250px] bg-[#0EA5E9]/10 blur-[120px] rounded-full" />
        <div className="absolute right-[10%] bottom-[10%] h-[250px] w-[250px] bg-[#0EA5E9]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 items-center min-h-screen px-6 md:px-12 gap-16">

        {/* LEFT */}
        <div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Available for opportunities
          </div>

          {/* 🔥 NAME COLOR */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            <span className="text-[#0EA5E9]">Dilukshan</span> <br />
            Sothyrajah
          </h1>

          {/* 🔥 ROLE COLOR */}
          <p className="mt-6 text-sm md:text-base uppercase tracking-widest text-[#0EA5E9]">
            Computer Science Undergraduate · Software Engineering · Full-Stack Web Developer
          </p>

          <h2 className="mt-8 text-xl md:text-2xl italic text-white/50">
            Crafting Digital Experiences That Matter
          </h2>

          <p className="mt-6 text-white/60 leading-7 max-w-xl">
            Computer Science undergraduate with a solid foundation in software
            development, problem solving, and system design. Demonstrates strong
            analytical thinking and the ability to develop efficient, scalable
            solutions to real world challenges. Eager to apply technical
            knowledge and contribute effectively within a professional
            engineering environment.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4 flex-wrap">

            {/* 🔥 BUTTON COLOR */}
            <a href="#projects" className="px-6 py-3 bg-[#0EA5E9] text-black rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition">
              View My Work <ArrowUpRight size={18} />
            </a>

            <a href="/resume.pdf" download className="px-6 py-3 border border-white/20 rounded-xl flex items-center gap-2 text-white/80 hover:bg-white/10 transition">
              <Download size={18} />
              Download Resume
            </a>

          </div>

          {/* SOCIAL */}
          <div className="mt-8 flex gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Link2 className="cursor-pointer text-white/60 hover:text-[#0EA5E9]" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Link className="cursor-pointer text-white/60 hover:text-[#0EA5E9]" />
            </a>
            <a href="mailto:yourmail@gmail.com" aria-label="Email">
              <Mail className="cursor-pointer text-white/60 hover:text-[#0EA5E9]" />
            </a>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">

          <div className="absolute w-[350px] h-[350px] bg-[#0EA5E9]/10 blur-[120px] rounded-full" />

          {/* floating tags */}
          <div className="absolute left-0 top-[20%] hidden md:block px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white/80">
            {"</>"} Clean Code
          </div>

          <div className="absolute right-0 bottom-[25%] hidden md:block px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white/80">
            Great Design
          </div>

          {/* IMAGE */}
          <div className="relative w-[300px] h-[400px] md:w-[340px] md:h-[450px] overflow-hidden rounded-[40%]">
            <img
              src={profileImg}
              alt="Dilukshan"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}