import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='w-full space-y-12'>
       <div className="space-y-8">
                <div className="space-y-3">
                    <h1 className="text-3xl md:text-4xl text-zinc-50 font-bold">
                        Hi, I'm Abdulrahman Abiola
                    </h1>
                    <div className="w-full flex items-center gap-x-4">
                        <p className="text-xl text-zinc-300 font-medium">
                            Software Developer
                        </p>
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />

                        <div className="w-fit px-2 py-1 border border-zinc-600 rounded-md flex items-center gap-x-2">
                            <MdOutlineLocationOn size={20} />
                            <p className="text-sm text-zinc-300 font-semibold">
                                Nigeria
                            </p>
                        </div>
                    </div>
                </div>

                <p className="text-base text-zinc-400 font-normal">
                    I'm currently working <spant className="text-zinc-50 font-semibold"></spant> as a software developer.
                    Frontend developer and design system specialist with over 2+ years of experience focusing on user experience, I specialize in UI/Ux and front-end development. I love turning ideas into impactful solutions that inspire and engage. Let's create something amazing together!
                </p>
            </div>

            <div className="w-full flex items-center gap-6">
                <Link to='/me'>
                    <button className="w-fit px-6 py-2.5 border border-amber-600 bg-amber-600 text-zinc-50 rounded-lg flex items-center gap-x-2 cursor-pointer ease-in-out duration-300">
                        About Me
                    </button>
                </Link>
                <Link to='https://docs.google.com/document/d/1gm0IHBJh-nctm_BSA1_f0A9dkTz4pS-uHsxprUajEPM/edit?usp=sharing'>
                <button className="w-fit px-6 py-2.5 border border-zinc-600 hover:bg-zinc-700/60 text-zinc-50 rounded-lg flex items-center gap-x-2 cursor-pointer ease-in-out duration-300">
                    Download CV
                </button>
                </Link>
            </div>

    </div>
  )
}

export default Hero
