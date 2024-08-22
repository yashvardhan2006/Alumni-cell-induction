import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className='max-w-[100vw] '>
            <div className='bg-gray-200 flex  justify-between w-full py-1'>
                <div className="left flex gap-4 py-1">
                    <img className='h-16' src="https://upload.wikimedia.org/wikipedia/en/c/c4/Indian_Institute_of_Technology%2C_Indore_Logo.png" alt="" />
                    <div className='text-center'>
                        <div className='text-2xl font-semibold'>Alumni & Corporate Relations</div>
                        <div className='text-lg pb-2 m-0'>Indian Institute of Technology Indore</div>
                    </div>
                </div>
                <div className="right flex gap-4 text-xl items-center px-4">
                    <div className=' hover:font-semibold cursor-pointer p-2 rounded-lg hover:text-blue-600 hover:bg-blue-100 '>Home</div>
                    <div className='group relative transition-all'>

                        <div className='hover:font-semibold cursor-pointer p-2 rounded-lg hover:text-blue-600 hover:bg-blue-100 '>About
                        </div>
                        <div className='absolute hidden end-0 z-10 group-hover:block hover:cursor-pointer bg-gray-200  rounded-lg text-base w-40'>
                            <li className=' list-none px-3 py-2 hover: cursor-pointer hover:bg-gray-300'>Overview of ACR</li>
                            <li className=' list-none px-3 py-2 hover: cursor-pointer hover:bg-gray-300'>Vision & Mission</li>
                            <li className=' list-none px-3 py-2 hover: cursor-pointer hover:bg-gray-300'>Director's Message</li>
                            <li className=' list-none px-3 py-2 hover: cursor-pointer hover:bg-gray-300'>Message from Dean ACR</li>
                            
                            
                            
                        </div>
                    </div>
                    <div className=' hover:font-semibold cursor-pointer p-2 rounded-lg hover:text-blue-600 hover:bg-blue-100 '><Link href='/Contact' >Contact</Link></div>

                </div>
            </div>

        </div>
    )
}

export default Navbar
