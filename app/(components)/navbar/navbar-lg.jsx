'use client'
import React, { useState} from 'react';
import Image from 'next/image'
import Link from 'next/link';
import logo from '../../../public/assets/logo.svg'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";




function NavbarLg() {




    const [assetsOpen, setAssetsOpen] = useState(false);
    const [aitoolsOpen, setAitoolsOpen] = useState(false);


   
    const assetsDrop = () => {
        setAssetsOpen(!assetsOpen);
    };
    const closeAssetsDrop = () => {
        setAssetsOpen(false);
    }

    const aitoolsDrop = () => {
        setAitoolsOpen(!aitoolsOpen);
    };

    const closeAitoolsDrop = () => {
        setAitoolsOpen(false);
    }








    return (
        <>


            <div className="navbar flex items-center gap-8">
                <div className="logo">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt='Logo'
                            className='h-auto w-20 md:w-24 lg:w-28'
                        />
                    </Link>
                </div>

                <div className='hidden lg:block'>
                    <div className="nav flex gap-8 items-center">
                        <div className="Assets">
                            <div className="accets flex items-center gap-2">
                                <Link href="/assets" className='nav-link'>Assets</Link>
                                {assetsOpen ? <FaAngleUp onClick={closeAssetsDrop} /> : <FaAngleDown onClick={assetsDrop} />}
                            </div>
                            {assetsOpen && (
                                <div className="dropdownMenu flex flex-col absolute top-20">
                                    <Link href="/" className='nav-link-b' onClick={closeAssetsDrop}>Vectors</Link>
                                    <Link href="/" className='nav-link-b' onClick={closeAssetsDrop}>PSD</Link>
                                    <Link href="/" className='nav-link-b' onClick={closeAssetsDrop}>Templates</Link>
                                </div>
                            )}
                        </div>
                        <div className="ai-tools">
                            <div className="accets flex items-center gap-2">
                                <Link href="/ai-tools" className='nav-link'>AI Tools</Link>
                                {aitoolsOpen ? <FaAngleUp onClick={closeAitoolsDrop} /> : <FaAngleDown onClick={aitoolsDrop} />}
                            </div>
                            {aitoolsOpen && (
                                <div className="dropdownMenu flex flex-col absolute top-20">
                                    <Link href="/ai-tools" className='nav-link-b' onClick={closeAitoolsDrop}>AI Image Enhancer</Link>
                                    <Link href="/" className='nav-link-b' onClick={closeAitoolsDrop}>AI Image Generator</Link>
                                    <Link href="/" className='nav-link-b' onClick={closeAitoolsDrop}>AI Writer</Link>
                                </div>
                            )}
                        </div>
                        <Link href="/photos" className='nav-link'>Photos</Link>
                        <Link href="/videos" className='nav-link'>Videos</Link>
                        <Link href="/hire" className='nav-link'>Hire Us</Link>
                    </div>
                </div>
            </div>


            <div className="hidden lg:block">
                <div className="login flex gap-8 items-center ">
                    <Link href="/" className='text-lg text-[#FAD007] font-medium'>Create a Portfolio</Link>
                    <Link href="/" className='text-lg font-medium'>Log in</Link>
                    <Link href="/" className='text-lg text-black font-medium bg-white px-3 py-1 border rounded-sm'>Sign up</Link>
                </div>
            </div>
           
        </>
    )
}

export default NavbarLg