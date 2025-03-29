"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { WordRotate } from "@/components/ui/word-rotate";
import Accordion from "@/components/ui/accordian";

const page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 150,
            easing: 'ease-out',
        });
    }, []);

    return (

        <main>

            <section className="min-h-[100vh] grid grid-cols-2">
                <div className="flex justify-center flex-col ml-[10vw] gap-1 mt-16">
                    <p className="text-[#571b98] font-extrabold text-6xl">Everything you </p>
                    <p className="text-[#571b98] font-extrabold text-6xl">want. Let us,</p>
                    <p className="text-[#571b98] font-extrabold text-6xl">know we will guide you.</p>
                    <p className="text-[#571b98] text-xl my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>

                    <div className="input-group">
                        <button className="my-3 font-bold bg-purple-300 rounded-full p-4">
                            Get Started
                        </button>
                    </div>

                </div>

                <div className="flex items-center justify-center flex-col ml-[5vw] m-10">
                    <img
                        data-aos="flip-left"
                        className="mt-20 rounded-4xl"
                        src="/Road.png"
                        alt="homepage image"
                    />
                </div>

            </section>

            <section className="bg-[#4c1f79] min-h-[100vh] m-10 rounded-xl grid grid-cols-2">
                <div className="flex items-center justify-center flex-col mr-[9vw]">
                    <Link href="/">
                        <img
                            data-aos="flip-right"
                            className="m-8 rounded-4xl"
                            src="/Resume.png"
                            alt="homepage image"
                        />
                    </Link>
                </div>

                <div className="flex justify-center flex-col mr-[-5vr] m-1 gap-1">
                    <p className="text-pink-200 font-extrabold text-6xl">Chat and ask</p>
                    <p className="text-pink-200 font-extrabold text-6xl">us about your goal in</p>
                    <p className="text-pink-200 font-extrabold text-6xl">minutes...</p>
                    <p className="text-pink-200 text-xl my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <div className="input-group">
                        <button className="my-2 font-bold bg-pink-100 rounded-full p-5">
                            Chat with AI
                        </button>
                    </div>
                </div>
            </section>

            <section className="min-h-[100vh] items-center justify-center">
                <div className="flex mx-12 flex-col gap-1 mt-30 text-center">
                    <p className="text-[#571b98] font-extrabold text-6xl">The only carrer guide trusted by</p>
                    <WordRotate
                        className="text-6xl font-extrabold text-[#571b98]"
                        words={["Students..", "Job Seekers..", "Employees.."]}
                    />

                    <div className='my-24'>
                        <InfiniteSlider durationOnHover={100} gap={35}>
                            <img
                                src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
                                alt="Dean blunt - Black Metal 2"
                                className="aspect-square w-[200px] rounded-[4px]"
                            />
                            <img
                                src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
                                alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
                                className="aspect-square w-[200px] rounded-[4px]"
                            />
                            <img
                                src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf"
                                alt="Yung Lean - Stardust"
                                className="aspect-square w-[200px] rounded-[4px]"
                            />
                            <img
                                src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
                                alt="Lana Del Rey - Ultraviolence"
                                className="aspect-square w-[200px] rounded-[4px]"
                            />
                            <img
                                src="https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288"
                                alt="A$AP Rocky - Tailor Swif"
                                className="aspect-square w-[200px] rounded-[4px]"
                            />
                            <img
                                src="https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520"
                                alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
                                className="aspect-square w-[200px] rounded-[4px]"
                            />
                        </InfiniteSlider>
                    </div>
                    <div className="input-group my-8 ">
                        <button className="my-2 font-bold bg-purple-300 shadow-purple-900 rounded-full p-5">
                            Explore All Plans
                        </button>
                    </div>
                </div>
            </section>


            <section className="bg-[#4c1f79] min-h-[100vh]">

                <div className="flex justify-center flex-col mr-[-5vr]  gap-1">
                    <p className="text-pink-200 text-center my-16 font-extrabold text-6xl">Got questions?</p>
                    <div>
                        <Accordion />
                    </div>
                </div>
            </section>



        </main >
    );
};

export default page;


