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
        <nav className="flex justify-between items-center text-white bg-purple-700">
            <ClerkProvider>
                <div className="logo flex items-center justify-center">
                    <img className='flex h-16 rounded-full m-3 px-1' src='https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-student-glyph-black-icon-png-image_691145.jpg' />
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
                        <SignInButton >
                            <button className="login text-black bg-gray-200 p-4 rounded-lg font-bold hover:bg-gray-300 transition duration-200 m-2">
                                Log in
                            </button>
                        </SignInButton >
                        <SignUpButton >
                            <button className="signup bg-gray-900 text-white font-bold p-3 rounded-full hover:bg-gray-800 transition duration-200 mb-1 me-1 mt-0.5">
                                Sign up free
                            </button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>

                        <div className='flex px-2 m-1 items-center'>
                            <UserButton />
                        </div>


                    </SignedIn>
                </div>
            </ClerkProvider>
        </nav >

    )
}

export default Navbar
