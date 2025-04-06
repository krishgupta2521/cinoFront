"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { WordRotate } from "@/components/ui/word-rotate";
import Accordion from "@/components/ui/accordian";
import { ReactLenis } from "lenis/react";
// import ProgressBar from "@/components/ui/ProgressBar";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 150,
      easing: "ease-out",
    });
  }, []);

  return (
    <ReactLenis root>
      <main>
        {/* HERO SECTION */}
        <section className="min-h-[100vh] grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 md:px-8">
          <div
            className="flex justify-center flex-col ml-0 md:ml-[5vw] lg:ml-[10vw] gap-1 mt-16"
            data-aos="fade-right"
          >
            <p className="text-[#571b98] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Everything you
            </p>
            <p className="text-[#571b98] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              want. Let us,
            </p>
            <p className="text-[#571b98] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              know we will guide you.
            </p>
            <p className="text-[#571b98] text-base md:text-lg lg:text-xl my-4">
              Your learning journey, your way. Tell us your interests, goals,
              or even just your confusion — and we’ll craft a personalized
              roadmap to get you there. No more guesswork. Just clear
              direction, step by step. Start now — because the right guidance
              changes everything.
            </p>

            <div className="input-group">
              <Link href="/start">
                <button className="my-3 font-bold bg-purple-300 rounded-full p-3 md:p-4 cursor-pointer transition-all duration-300 hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          <div
            className="flex items-center justify-center flex-col mx-auto mt-8 md:mt-0 md:ml-[5vw] md:m-10"
            data-aos="flip-left"
          >
            <img
              className="mt-8 md:mt-20 rounded-xl w-full max-w-md md:max-w-lg"
              src="/Road.png"
              alt="homepage image"
            />
          </div>
        </section>

        {/* CHAT SECTION */}
        <section
          className="bg-[#4c1f79] min-h-[100vh] m-4 sm:m-6 md:m-10 rounded-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center flex-col order-2 md:order-1 h-full py-6 md:py-0">
            <Link href="/">
              <img
                data-aos="flip-right"
                className="m-4 md:m-8 rounded-xl w-[90%] max-w-md md:max-w-full object-contain"
                src="/Resume.png"
                alt="homepage image"
              />
            </Link>
          </div>

          <div
            className="flex justify-center flex-col order-1 md:order-2 mx-4 md:mx-8 gap-1 py-8 md:py-0"
            data-aos="fade-left"
          >
            <p className="text-pink-200 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Build and showcase
            </p>
            <p className="text-pink-200 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              your skills
            </p>
            <p className="text-pink-200 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              in just a few clicks...
            </p>
            <p className="text-pink-200 text-base md:text-lg lg:text-xl my-4">
              Create a professional resume tailored to your goals in minutes.
              Highlight your achievements, projects, and skills with ease.
              Whether you're a student or a job seeker, we've got you covered.
            </p>
            <div className="input-group">
              <Link href="/resume-check">
                <button className="my-2 font-bold bg-pink-100 rounded-full p-3 md:p-5 cursor-pointer transition-all duration-300 hover:scale-105">
                  Build your resume
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* TRUSTED BY SECTION */}
        <section
          className="min-h-[100vh] items-center justify-center px-4 sm:px-6 md:px-8 pb-6 md:pb-16"
          data-aos="fade-in"
        >
          <div className="flex mx-0 sm:mx-4 md:mx-12 flex-col gap-1 mt-16 md:mt-30 text-center">
            <p className="text-[#571b98] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              The only career guide trusted by
            </p>
            <WordRotate
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#571b98]"
              words={["Students..", "Job Seekers..", "Employees.."]}
            />

            <div className="my-12 md:my-24 overflow-hidden">
              <InfiniteSlider durationOnHover={100} gap={20} className="w-full">
                {[
                  "/ipshita_m.jpg",
                  "/krish_m.jpg",
                  "/rachit_m.png",
                  "/kohli_m.jpg",
                  "/umang_m.jpg",
                  "/kd_m.jpg",
                ].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={'profile-${index}'}
                    className="aspect-square w-[150px] sm:w-[180px] md:w-[200px] rounded-[4px]"
                  />
                ))}
              </InfiniteSlider>
            </div>

            <div className="plans-section flex flex-col items-center">
              <div className="input-group mb-2 md:my-4">
                <Link href="/mentors">
                  <button className="font-bold bg-purple-300 shadow-purple-900 rounded-full p-3 md:p-5 cursor-pointer transition-all duration-300 hover:scale-105">
                    Explore All Plans
                  </button>
                </Link>
              </div>

     {/* Progress Bar with Rocket Icon */}
     <div className="bg-gray-100 p-8 rounded-2xl shadow-lg mt-8 w-[90%] md:w-[80%] min-h-[250px] mx-auto" data-aos="zoom-in-up">
                <h2 className="text-xl font-semibold mb-2">See your progress here</h2>
                <p className="text-gray-700">
                See your progress unfold with ease,
From first steps to expertise.
Every milestone brings you near,
To the goals you hold most dear.
                </p>

                {/* <ProgressBar /> */}
              </div>
            

             
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section
          className="bg-[#4c1f79] min-h-[100vh] px-4 sm:px-6 md:px-8 mt-2 md:mt-0"
          data-aos="fade-up"
        >
          <div className="flex justify-center flex-col gap-1 py-6 md:py-10">
            <p className="text-pink-200 text-center my-4 md:my-16 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Got questions?
            </p>
            <div className="max-w-4xl mx-auto w-full">
              <Accordion animate={true} />
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
};

export default Page;