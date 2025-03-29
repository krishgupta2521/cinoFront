import React from 'react'
import Link from 'next/link'
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,


} from '@clerk/nextjs'


const Navbar = () => {
    return (
        <ClerkProvider>
            <nav className="flex h-20 justify-between items-center text-white bg-purple-700">

                <div className="logo flex items-center justify-center">
                    <img className='flex rounded-full m-3 px-1 h-12' src='https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-student-glyph-black-icon-png-image_691145.jpg' />
                    <ul className='flex gap-4 text-xl font-semibold'>
                        <Link href="/"><li>Home </li></Link>
                        <Link href="/"><li>About</li></Link>
                        <Link href="/"><li>Discover</li></Link>
                        <Link href="/"><li>Pricing</li></Link>
                        <Link href="/"><li>Learn</li></Link>
                    </ul>
                </div>
                <div className="flex gap-3 m-2">
                    <SignedOut>
                        <Link href="/register">
                            <button className="login text-black bg-gray-200 p-3 rounded-lg font-bold hover:bg-gray-300 transition duration-200 m-2 cursor-pointer">
                                Log in
                            </button>
                        </Link>
                        <SignUpButton >
                            <button className="signup bg-gray-900 text-white font-bold p-2 rounded-full hover:bg-gray-800 transition duration-200 mb-1 me-1 mt-0.5 cursor-pointer">
                                Sign up free
                            </button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>

                        <div className='flex px-2 h-5 m-1 items-center'>
                            <p className='text-white font-bold m-2 text-xl'>Welcome!</p>
                            <UserButton />
                        </div>


                    </SignedIn>
                </div>

            </nav >
        </ClerkProvider>

    )
}

export default Navbar
