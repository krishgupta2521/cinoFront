"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
                        <input type="text" placeholder="devian.ee/yourname" className="px-2 py-2 bg-purple-100 rounded-md focus:outline-purple-800" />
                        <button className="mx-3 font-bold bg-purple-300 rounded-full p-4">
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

            <section className="bg-[#4c1f79] min-h-[100vh] grid grid-cols-2">
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
        </main>
    );
};

export default page;
