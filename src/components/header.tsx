import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <>
            <div className="border border-amber-950 flex">
                <div className="w-170 ml-19 mt-35">
                    <img src="NAME.png" className=""></img>
                    <div className="text-[#00000099] text-5xl mt-5 m-5">Unleash your phonky style. Stand out Be <span className="font-bold text-[#FF7F3E]">bold</span></div>
                    <button className="flex text-2xl border-3 border-black-600 rounded-xl w-50 h-15 pt-4 text-center mt-7 ml-25 bg-amber-600 justify-center align-center text-white">Explore<img src="arrow.png" className="h-5 w-5 ml-4 pt-1 "></img></button>
                </div>
                <img src="image.png" className="ml-35 "></img>
            </div>
        </>
    )
}

