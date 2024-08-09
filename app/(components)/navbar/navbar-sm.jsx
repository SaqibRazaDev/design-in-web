'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

function NavbarSm() {


    const [assetsOpen, setAssetsOpen] = useState(false);
    const [aitoolsOpen, setAitoolsOpen] = useState(false);

    useEffect(() => {
        const updateAssetsOpen = () => {
            setAssetsOpen(window.innerWidth <= 1024);
        };
        updateAssetsOpen();
        window.addEventListener('resize', updateAssetsOpen);
        return () => window.removeEventListener('resize', updateAssetsOpen);
    }, []);



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


            <div className="px-6 flex flex-col gap-3 items-start mt-10">
                <Link href="/" className="nav-link">
                    Home
                </Link>
                <div className="Assets">
                    <div className="accets flex items-center gap-2">
                        <Link href="/assets" className='nav-link'>Assets</Link>
                        {assetsOpen ? <FaAngleUp onClick={closeAssetsDrop} /> : <FaAngleDown onClick={assetsDrop} />}
                    </div>
                    {assetsOpen && (
                        <div className="dropdownMenu flex flex-col">
                            <Link href="/photos" className='nav-link-b' >Vectors</Link>
                            <Link href="/photos" className='nav-link-b' >PSD</Link>
                            <Link href="/photos" className='nav-link-b' >Templates</Link>
                        </div>
                    )}
                </div>
                <div className="ai-tools">
                    <div className="accets flex items-center gap-2">
                        <Link href="/ai-tools" className='nav-link'>AI Tools</Link>
                        {aitoolsOpen ? <FaAngleUp onClick={closeAitoolsDrop} /> : <FaAngleDown onClick={aitoolsDrop} />}
                    </div>
                    {aitoolsOpen && (
                        <div className="dropdownMenu flex flex-col">
                            <Link href="/ai-tools" className='nav-link-b' >AI Image Enhancer</Link>
                            <Link href="/" className='nav-link-b' >AI Image Generator</Link>
                            <Link href="/" className='nav-link-b' >AI Writer</Link>
                        </div>
                    )}
                </div>
                <Link href="/photos" className="nav-link" >
                    Photos
                </Link>
                <Link href="/videos" className="nav-link" >
                    Videos
                </Link>
                <Link href="/hire" className="nav-link">
                    Hire Us
                </Link>
            </div>


        </>
    )
}

export default NavbarSm