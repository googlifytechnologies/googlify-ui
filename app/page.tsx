'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Rocket, CheckCircle, Globe, Server, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from "next/image";


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
return (
  <div className="min-h-screen bg-[#0b0f19] text-white">
    
    {/* NAVBAR */}
    <nav className="fixed top-0 w-full bg-[#111827]/80 backdrop-blur-xl z-50 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Googlify Logo"
              width={150}
              height={50}
              className="object-contain drop-shadow-lg"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-300 hover:text-white transition">
              Process
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition">
              About
            </button>

            <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:opacity-90 shadow-lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111827] border-t border-white/10">
          <div className="px-4 py-2 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full py-2 text-gray-300 hover:text-white">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full py-2 text-gray-300 hover:text-white">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="block w-full py-2 text-gray-300 hover:text-white">
              Process
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full py-2 text-gray-300 hover:text-white">
              About
            </button>

            <Button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-green-500">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>

    {/* HERO SECTION */}
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto text-center">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
            Transform Your Ideas
          </span>
          <br />
          <span className="text-white">Into Digital Reality</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
          We build exceptional web applications with cutting-edge technology, robust backends,
          and seamless deployment solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-blue-600 to-green-500 text-lg px-8 shadow-xl hover:opacity-90"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10"
          >
            View Services
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#111827] p-6 rounded-xl shadow-lg border border-blue-500/40">
            <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl shadow-lg border border-green-500/40">
            <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl shadow-lg border border-yellow-500/40">
            <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>

        </div>

      </div>
    </section>


     <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0f19] text-white">
  <div className="max-w-7xl mx-auto">
    
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Our <span className="bg-gradient-to-r from-blue-500 via-green-400 to-yellow-400 bg-clip-text text-transparent">Services</span>
      </h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        Comprehensive solutions for all your digital needs
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* WEB DEV */}
      <Card className="bg-[#111827] border border-blue-500/30 hover:border-blue-400/60 shadow-xl rounded-xl transition-all duration-300 hover:-translate-y-2">
        <CardHeader>
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
            <Code className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-white">Web Development</CardTitle>
          <CardDescription className="text-gray-400 text-base">
            Build modern, responsive, and high-performance web applications
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ul className="space-y-3">

            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1" />
              <span className="text-gray-300">Custom web application development</span>
            </li>

            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1" />
              <span className="text-gray-300">React, Next.js, and modern frameworks</span>
            </li>

            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1" />
              <span className="text-gray-300">Responsive and mobile-first design</span>
            </li>

            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1" />
              <span className="text-gray-300">Progressive Web Apps (PWA)</span>
            </li>

            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1" />
              <span className="text-gray-300">SEO optimization and performance tuning</span>
            </li>

          </ul>
        </CardContent>
      </Card>

      {/* BACKEND */}
      <Card className="bg-[#111827] border border-green-500/30 hover:border-green-400/60 shadow-xl rounded-xl transition-all duration-300 hover:-translate-y-2">
        <CardHeader>
          <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
            <Server className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-white">Backend Development</CardTitle>
          <CardDescription className="text-gray-400 text-base">
            Scalable and secure backend infrastructure for your applications
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ul className="space-y-3">

            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1" />
              <span className="text-gray-300">RESTful and GraphQL API development</span>
            </li>

            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1" />
              <span className="text-gray-300">Database design and optimization</span>
            </li>

            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1" />
              <span className="text-gray-300">Authentication and authorization systems</span>
            </li>

            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1" />
              <span className="text-gray-300">Cloud infrastructure setup</span>
            </li>

            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1" />
              <span className="text-gray-300">Microservices architecture</span>
            </li>

          </ul>
        </CardContent>
      </Card>

      {/* DEVOPS */}
      <Card className="bg-[#111827] border border-yellow-500/30 hover:border-yellow-400/60 shadow-xl rounded-xl transition-all duration-300 hover:-translate-y-2">
        <CardHeader>
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/30">
            <Rocket className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-white">Deployment & DevOps</CardTitle>
          <CardDescription className="text-gray-400 text-base">
            Seamless deployment and continuous integration solutions
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ul className="space-y-3">

            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1" />
              <span className="text-gray-300">CI/CD pipeline setup and automation</span>
            </li>

            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1" />
              <span className="text-gray-300">Cloud deployment (AWS, Azure, GCP)</span>
            </li>

            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1" />
              <span className="text-gray-300">Docker containerization</span>
            </li>

            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1" />
              <span className="text-gray-300">Monitoring & optimization</span>
            </li>

            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1" />
              <span className="text-gray-300">Automated testing & QA</span>
            </li>

          </ul>
        </CardContent>
      </Card>

    </div>
  </div>
</section>

     <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0f19] text-white">
  <div className="max-w-7xl mx-auto">
    
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Our <span className="bg-gradient-to-r from-blue-500 via-green-400 to-yellow-400 bg-clip-text text-transparent">Process</span>
      </h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        A streamlined approach to bring your vision to life
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Step 1 */}
      <div className="bg-[#111827] p-8 rounded-2xl shadow-xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-2">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-500/40">
          1
        </div>
        <p className="text-gray-300 text-center">
          We analyze your requirements and understand your business goals to create a tailored solution.
        </p>
      </div>

      {/* Step 2 */}
      <div className="bg-[#111827] p-8 rounded-2xl shadow-xl border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:-translate-y-2">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-green-500/40">
          2
        </div>
        <p className="text-gray-300 text-center">
          We create detailed wireframes and technical architecture to ensure smooth development.
        </p>
      </div>

      {/* Step 3 */}
      <div className="bg-[#111827] p-8 rounded-2xl shadow-xl border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-300 hover:-translate-y-2">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-300 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-yellow-500/40">
          3
        </div>
        <p className="text-gray-300 text-center">
          Our expert team builds your application using the latest technologies and best practices.
        </p>
      </div>

      {/* Step 4 */}
      <div className="bg-[#111827] p-8 rounded-2xl shadow-xl border border-red-500/30 hover:border-red-400/60 transition-all duration-300 hover:-translate-y-2">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-600 to-red-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-red-500/40">
          4
        </div>
        <p className="text-gray-300 text-center">
          We deploy your application and provide ongoing support to ensure continued success.
        </p>
      </div>

    </div>
  </div>
</section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent">Googlify?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Googlify Technologies, we're passionate about creating exceptional digital experiences. With years of expertise in web development, backend engineering, and deployment automation, we deliver solutions that drive real business results.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team combines technical excellence with creative innovation to build applications that are not only functional but also beautiful and user-friendly.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Expert Team</h4>
                    <p className="text-gray-600">Skilled developers with extensive industry experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Quality Assurance</h4>
                    <p className="text-gray-600">Rigorous testing to ensure flawless performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Timely Delivery</h4>
                    <p className="text-gray-600">We respect deadlines and deliver on time, every time</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
  {/* Outer gradient border */}
  <div className="rounded-2xl p-[2px] bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 shadow-xl">
    
    {/* Inner dark container */}
    <div className="rounded-2xl bg-[#0d1117] p-8">

      <Database className="h-16 w-16 text-blue-400 mb-6" />

      <h3 className="text-3xl font-semibold mb-6 text-white">
        Technology Stack
      </h3>

      <div className="grid grid-cols-2 gap-4">

        {/* Frontend */}
        <div className="bg-[#111827] p-4 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all">
          <p className="font-semibold text-white">Frontend</p>
          <p className="text-sm text-gray-400">React, Next.js, TypeScript</p>
        </div>

        {/* Backend */}
        <div className="bg-[#111827] p-4 rounded-xl border border-white/10 hover:border-green-500/40 transition-all">
          <p className="font-semibold text-white">Backend</p>
          <p className="text-sm text-gray-400">Node.js, Python, Go</p>
        </div>

        {/* Database */}
        <div className="bg-[#111827] p-4 rounded-xl border border-white/10 hover:border-blue-400/40 transition-all">
          <p className="font-semibold text-white">Database</p>
          <p className="text-sm text-gray-400">PostgreSQL, MongoDB</p>
        </div>

        {/* Cloud */}
        <div className="bg-[#111827] p-4 rounded-xl border border-white/10 hover:border-yellow-400/40 transition-all">
          <p className="font-semibold text-white">Cloud</p>
          <p className="text-sm text-gray-400">AWS, Azure, GCP</p>
        </div>

      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      <section
  id="contact"
  className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0b0f19] via-[#0d1324] to-[#0b0f19] text-white"
>
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
      Ready to Start Your Project?
    </h2>

    <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
      Let's build something amazing together. Contact us today to discuss your next project.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">

      {/* Primary Button */}
      <Button
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-green-500 hover:opacity-90 text-white text-lg px-10 shadow-lg shadow-blue-600/30"
      >
        Get in Touch
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      {/* Outline Button */}
      <div className="p-[2px] rounded-lg bg-gradient-to-r from-blue-500 to-green-500">
  <Button
    size="lg"
    variant="outline"
    className="w-full bg-[#0b0f19] text-white border-none text-lg px-10 hover:bg-[#111726]"
  >
    View Portfolio
  </Button>
</div>



    </div>

    {/* Contact Details */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-300">

  {/* EMAIL */}
  <div className="flex flex-col items-center space-y-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-blue-400">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
    <h4 className="font-semibold text-white text-lg">Email</h4>
    <p className="text-gray-400 text-center">googlifytechnologies@gmail.com</p>
  </div>

  {/* PHONE */}
  <div className="flex flex-col items-center space-y-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-green-400">
      <path d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l1.9-1.9c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3 .5.7 0 1.2.6 1.2 1.2V20c0 .7-.6 1.2-1.2 1.2C10.5 21.2 2.8 13.5 2.8 4.2 2.8 3.6 3.4 3 4.1 3H7c.7 0 1.2.6 1.2 1.2 0 1 .2 2 .5 3 .1.4 0 .9-.3 1.2l-1.8 1.4z"/>
    </svg>
    <h4 className="font-semibold text-white text-lg">Phone</h4>
    <p className="text-gray-400 text-center">+91 63888 80784</p>
  </div>

  {/* LOCATION */}
  <div className="flex flex-col items-center space-y-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-yellow-400">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
    </svg>
    <h4 className="font-semibold text-white text-lg">Location</h4>
    <p className="text-gray-400 text-center">Lucknow, Uttar Pradesh</p>
  </div>

  {/* INSTAGRAM */}
  <div className="flex flex-col items-center space-y-2">
    <a href="https://www.instagram.com/googlifytrchnologies/" target="_blank" className="text-gray-300 hover:text-pink-500 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
      </svg>
    </a>
    <h4 className="font-semibold text-white text-lg">Instagram</h4>
    <a href="https://www.instagram.com/googlifytrchnologies/" target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors text-center">
      @googlifytrchnologies
    </a>
  </div>





    </div>
  </div>
</section>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">Googlify Technologies</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming ideas into exceptional digital experiences with cutting-edge technology and innovative solutions.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Backend Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Deployment & DevOps</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Googlify Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
