'use client'
import React, { useState} from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import NavbarLg from './navbar-lg';
import NavbarSm from './navbar-sm';



function Navbar() {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };




    return (
        <>
            <div className=" flex flex-row justify-between">

                <NavbarLg />

                <div className="menu lg:hidden">
                    {isOpen ? (
                        <IoClose onClick={closeMenu} style={{ fontSize: '25px' }} />
                    ) : (
                        <IoMenu onClick={toggleMenu} style={{ fontSize: '25px' }} />
                    )}
                </div>
                <div
                    className={`lg:hidden fixed top-14 sm:top-16 right-0 w-full md:w-96 h-full bg-[#01094D] z-10 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <NavbarSm />

                </div>


            </div>



        </>
    )
}

export default Navbar