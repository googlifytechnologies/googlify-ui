"use client";

import { ArrowRight, CheckCircle } from "lucide-react";

export default function CEOPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">

      {/* BACK BUTTON */}
      <div className="absolute top-6 left-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#111827] border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white transition-all shadow-md"
        >
          ← Back to Home
        </a>
      </div>

      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-green-400 to-yellow-400 bg-clip-text text-transparent">
            Message from the CEO
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          A personal message from our founder about the vision, values, and mission of Googlify Technologies.
        </p>
      </div>

      {/* CEO TEXT – FULL WIDTH */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">Neeraj Kumar Kushwaha</h2>

        <p className="text-green-400 font-semibold mb-2 text-center">
          Founder & CEO — Googlify Technologies
        </p>

        <p className="text-blue-400 font-semibold mb-4 text-center">
  Senior Software Developer (Java | Spring Boot | Cloud)
</p>

{/* LinkedIn Button */}
<div className="flex justify-center mb-10">
  <a
    href="https://linkedin.com/in/neeraj-kushwaha-663266205"
    target="_blank"
    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#0d1117] border border-blue-500/40 text-blue-300 hover:text-white hover:border-blue-400 transition-all shadow-md"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
      2.761 2.239 5 5 5h14c2.761 0 5-2.239 
      5-5v-14c0-2.761-2.239-5-5-5zm-11 
      19h-3v-11h3v11zm-1.5-12.268c-.966 
      0-1.75-.79-1.75-1.764s.784-1.764 
      1.75-1.764 1.75.79 
      1.75 1.764-.784 1.764-1.75 
      1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.112-4 
      0v5.604h-3v-11h3v1.765c1.396-2.586 
      7-2.777 7 2.476v6.759z"/>
    </svg>
    Connect on LinkedIn
  </a>
</div>


        <p className="text-gray-300 leading-relaxed mb-6 text-center">
          I founded Googlify Technologies with a mission to build high-quality digital products
          that help businesses grow and scale. Technology should make life simpler, smarter,
          and more efficient — and that’s exactly what we strive to deliver with every project.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6 text-center">
          With a strong foundation in{" "}
          <span className="text-white font-semibold">
            Java, Spring Boot, Microservices, API Engineering, and Cloud deployment
          </span>, I’ve contributed to multiple real-world enterprise systems, including HRMS platforms,
          workflow-driven government solutions, and scalable backend architectures.
        </p>

        <p className="text-gray-300 leading-relaxed mb-10 text-center">
          My core belief is simple:
          <span className="text-white font-semibold">
            {" "}clean code, clear communication, and complete commitment{" "}
          </span>
          to client success. Whether it's a web application, backend system, or full-stack solution,
          we build with performance and scalability at the foundation.
        </p>

        {/* Highlights */}
        <div className="space-y-4 mt-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-blue-400 h-6 w-6 mt-1" />
            <p className="text-gray-300">Dedicated to delivering premium-quality digital solutions</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-400 h-6 w-6 mt-1" />
            <p className="text-gray-300">Strong focus on performance, scalability & clean architecture</p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="text-yellow-400 h-6 w-6 mt-1" />
            <p className="text-gray-300">Committed to transparency, timelines & long-term support</p>
          </div>
        </div>
      </div>

      {/* ACHIEVEMENTS SECTION */}
      <div className="max-w-5xl mx-auto text-center mt-24">
        <h2 className="text-4xl font-bold mb-4">
          Professional{" "}
          <span className="bg-gradient-to-r from-blue-400 via-green-300 to-yellow-300 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          <div className="bg-[#111827] p-6 rounded-2xl border border-blue-500/40">
            <h3 className="text-xl font-bold text-blue-400 mb-2">4 Years Experience</h3>
            <p className="text-gray-400">
              Skilled in Java, Spring Boot, REST APIs, and scalable backend systems.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-green-500/40">
            <h3 className="text-xl font-bold text-green-400 mb-2">Ex-Infosys Developer</h3>
            <p className="text-gray-400">Worked in enterprise-grade backend systems & microservices.</p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-yellow-500/40">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Built AI Chat App</h3>
            <p className="text-gray-400">
              Created a ChatGPT-like app using Gemini API with full chat history.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-blue-500/40">
            <h3 className="text-xl font-bold text-blue-400 mb-2">HRMS Architecture</h3>
            <p className="text-gray-400">
              Built employee filters, transfers, sanctioned post system & workflows.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-green-500/40">
            <h3 className="text-xl font-bold text-green-400 mb-2">RBAC System</h3>
            <p className="text-gray-400">
              Developed a reusable Role-Permission engine for multi-app platforms.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-yellow-500/40">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Freelance Projects</h3>
            <p className="text-gray-400">
              Delivered complete web and backend solutions for global clients.
            </p>
          </div>

        </div>
      </div>

      {/* VISION SECTION */}
      <div className="max-w-5xl mx-auto text-center mt-24">
        <h2 className="text-4xl font-bold mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-400 via-green-300 to-yellow-300 bg-clip-text text-transparent">
            Vision & Mission
          </span>
        </h2>

        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          We aim to create digital excellence through innovation, modern engineering, and seamless user experiences.
        </p>
      </div>

      {/* VISION CARDS */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="bg-[#111827] p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400/70 transition-all">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Innovation</h3>
          <p className="text-gray-400">
            We build with the latest tools, frameworks, and architecture to ensure long-term success.
          </p>
        </div>

        <div className="bg-[#111827] p-8 rounded-2xl border border-green-500/30 hover:border-green-400/70 transition-all">
          <h3 className="text-2xl font-bold mb-4 text-green-400">Excellence</h3>
          <p className="text-gray-400">
            Every line of code is written with precision, performance, and scalability in mind.
          </p>
        </div>

        <div className="bg-[#111827] p-8 rounded-2xl border border-yellow-500/30 hover:border-yellow-400/70 transition-all">
          <h3 className="text-2xl font-bold mb-4 text-yellow-400">Growth</h3>
          <p className="text-gray-400">
            We help businesses grow through digital transformation and powerful engineering.
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto text-center mt-24">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something Exceptional
        </h2>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Your vision deserves the best. Let’s collaborate and turn your ideas into impactful digital reality.
        </p>

        <a
          href="/#contact"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
        >
          Contact Us
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
