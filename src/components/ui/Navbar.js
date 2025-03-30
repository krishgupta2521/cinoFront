"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {
    ClerkProvider,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <ClerkProvider>
            <nav className="flex flex-col md:flex-row h-auto md:h-20 items-center text-white bg-purple-700">
                <div className="w-full md:flex md:justify-between md:items-center px-4 py-3 md:py-0">
                    <div className="flex items-center justify-between md:justify-start">
                        <div className="flex items-center">
                            <img className="rounded-full h-10 md:h-12 mr-3" src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-student-glyph-black-icon-png-image_691145.jpg" alt="Logo" />
                            <ul className="hidden md:flex gap-4 text-xl font-semibold ml-4">
                                <Link href="/"><li className="hover:text-gray-200">Home</li></Link>
                                <Link href="/"><li className="hover:text-gray-200">About</li></Link>
                                <Link href="/"><li className="hover:text-gray-200">Discover</li></Link>
                                <Link href="/"><li className="hover:text-gray-200">Pricing</li></Link>
                                <Link href="/"><li className="hover:text-gray-200">Learn</li></Link>
                            </ul>
                        </div>

                        <button
                            className="block md:hidden focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    <div className="hidden md:flex md:items-center">
                        <SignedOut>
                            <Link href="/register">
                                <button className="login text-black bg-gray-200 p-2 rounded-lg font-bold hover:bg-gray-300 transition duration-200 mx-2 cursor-pointer">
                                    Log in
                                </button>
                            </Link>
                            <SignUpButton>
                                <button className="signup bg-gray-900 text-white font-bold p-2 rounded-full hover:bg-gray-800 transition duration-200 cursor-pointer">
                                    Sign up free
                                </button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <div className="flex items-center">
                                <p className="text-white font-bold mx-2 text-lg">Welcome!</p>
                                <UserButton />
                            </div>
                        </SignedIn>
                    </div>
                </div>

                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:hidden px-4 pb-4`}>
                    <ul className="flex flex-col space-y-2 font-semibold text-lg">
                        <Link href="/"><li className="py-2 border-b border-purple-600">Home</li></Link>
                        <Link href="/"><li className="py-2 border-b border-purple-600">About</li></Link>
                        <Link href="/"><li className="py-2 border-b border-purple-600">Discover</li></Link>
                        <Link href="/"><li className="py-2 border-b border-purple-600">Pricing</li></Link>
                        <Link href="/"><li className="py-2">Learn</li></Link>
                    </ul>

                    <div className="mt-4">
                        <SignedOut>
                            <Link href="/register" className="block w-full">
                                <button className="w-full login text-black bg-gray-200 p-4 rounded-lg font-bold hover:bg-gray-300 transition duration-200 my-2 cursor-pointer">
                                    Log in
                                </button>
                            </Link>
                            <SignUpButton>
                                <button className="w-full signup bg-gray-900 text-white font-bold p-4 rounded-full hover:bg-gray-800 transition duration-200 cursor-pointer">
                                    Sign up free
                                </button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <div className="flex items-center justify-center py-3">
                                <p className="text-white font-bold mr-2 text-xl">Welcome!</p>
                                <UserButton />
                            </div>
                        </SignedIn>
                    </div>
                </div>
            </nav>
        </ClerkProvider>
    );
};

export default Navbar;