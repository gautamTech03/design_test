import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className="flex border place-items-center">
                <div>
                    <img src="logo.png" alt="Logo" className="w-40 h-20" />
                </div>
                <div className="ms-50 ">
                    <ul className="ms-8 inline-flex">
                        <Link href=" " className="ms-9">HOME</Link>
                        <Link href=" " className="ms-9">NEW ARRIVALS</Link>
                        <Link href=" " className="ms-9">SHOP</Link>
                        <Link href=" " className="ms-9">SUPPORT</Link>
                    </ul>
                </div>
                    <div className="ms-30 border-3 border-black-600 rounded-full w-65 h-8 flex color text-grey-200">
                    <img src="Search.png" alt="searchicon" className="h-6 ms-1 m-1"/>
                    <div className="ms-4 m-1 text-grey-900">Search</div>
                    </div>
                    <div className="flex ml-10">
                    <img src="Cart.png" alt="searchicon" className="h-6 ms-1 m-1"/>
                    <img src="Profile.png" alt="searchicon" className="h-6 ms-1 m-1 ml-10 "/>
                    </div>
            </div>
        </>
    )
}

