'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'

import logo from '../../../public/assets/logo.svg'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


function Footer() {


    const [aboutOpen, setAboutOpen] = useState(true);
    const [conditionsOpen, setConditionsOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);

    useEffect(() => {
        const updateConditionsOpen = () => {
            setConditionsOpen(window.innerWidth >= 1024);
        };
        updateConditionsOpen();
        window.addEventListener('resize', updateConditionsOpen);
        return () => window.removeEventListener('resize', updateConditionsOpen);
    }, []);

    useEffect(() => {
        const updateContactOpen = () => {
            setContactOpen(window.innerWidth >= 1024);
        };
        updateContactOpen();
        window.addEventListener('resize', updateContactOpen);
        return () => window.removeEventListener('resize', updateContactOpen);
    }, []);



    const aboutDrop = () => {
        setAboutOpen(!aboutOpen);
    };
    const closeAboutDrop = () => {
        setAboutOpen(false);
    }

    const conditionsDrop = () => {
        setConditionsOpen(!conditionsOpen);
    };

    const closeConditionsDrop = () => {
        setConditionsOpen(false);
    }

    const contactDrop = () => {
        setContactOpen(!contactOpen);
    };

    const closeContactDrop = () => {
        setContactOpen(false);
    }





    return (
        <>


            <div
                className="con bg-cover py-8 flex flex-col w-full"
                style={{ backgroundImage: "url('../../assets/footer/footer-bg.svg')" }}
            >

                <div className="flex flex-wrap gap-5 lg:gap-0">

                    <div className="order-4 lg:order-1  w-full lg:w-2/5 m-0 p-0 flex justify-center lg:justify-start">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt='Logo'
                                className='h-auto w-20 md:w-24 lg:w-28'
                            />
                        </Link>

                    </div>


                    {/* About Us */}
                    {/* About Us */}

                    <div className="about-us order-1 lg:order-2 w-full lg:w-1/5 m-0 p-0">
                        <div className="flex items-center justify-between xl:justify-start xl:gap-2">
                            <Link href="/assets" className='nav-link'>About Us</Link>
                            {aboutOpen ? <FaAngleUp onClick={closeAboutDrop} /> : <FaAngleDown onClick={aboutDrop} />}
                        </div>
                        {aboutOpen && (
                            <div className="dropdownMenu flex flex-col">
                                <Link href="/" className='nav-link-b' >About Us</Link>
                                <Link href="/" className='nav-link-b' >Features</Link>
                                <Link href="/" className='nav-link-b' >Services</Link>
                                <Link href="/" className='nav-link-b' >Blog</Link>
                                <Link href="/" className='nav-link-b' >Careers</Link>
                            </div>
                        )}
                    </div>


                    {/* <div className="order-1 lg:order-2 w-full lg:w-1/5 m-0 p-0 flex flex-col">
                        <Link href="/">About Us</Link>
                        <Link href="/">Features</Link>
                        <Link href="/">Services</Link>
                        <Link href="/">Blog</Link>
                        <Link href="/">Contact Us</Link>
                    </div> */}

                    {/* T&Cs */}
                    {/* T&Cs */}

                    <div className="t&cs order-2 lg:order-3 w-full lg:w-1/5 m-0 p-0">
                        <div className="flex items-center justify-between xl:justify-start xl:gap-2">
                            <Link href="/assets" className='nav-link'>Terms & Conditions</Link>
                            {conditionsOpen ? <FaAngleUp onClick={closeConditionsDrop} /> : <FaAngleDown onClick={conditionsDrop} />}
                        </div>
                        {conditionsOpen && (
                            <div className="dropdownMenu flex flex-col">
                                <Link href="/" className='nav-link-b' >Terms & Conditions</Link>
                                <Link href="/" className='nav-link-b' >Integrations</Link>
                                <Link href="/" className='nav-link-b' >Privacy Policy</Link>
                                <Link href="/" className='nav-link-b' >Cookie Policy</Link>
                            </div>
                        )}
                    </div>

                    {/* <div className="order-2 lg:order-3 w-full lg:w-1/5 m-0 p-0 flex flex-col">
                        <Link href="/">Integrations</Link>
                        <Link href="/">Careers</Link>
                        <Link href="/">Privacy Policy</Link>
                        <Link href="/">Terms & Condition</Link>
                        <Link href="/">Cookie Policy</Link>
                    </div> */}

                    {/* Contact Us */}
                    {/* Contact Us */}

                    <div className="contact-us order-2 lg:order-3 w-full lg:w-1/5 m-0 p-0">
                        <div className="flex items-center justify-between xl:justify-start xl:gap-2">
                            <Link href="/assets" className='nav-link'>Contact Us</Link>
                            {contactOpen ? <FaAngleUp onClick={closeContactDrop} /> : <FaAngleDown onClick={contactDrop} />}
                        </div>
                        {contactOpen && (
                            <div className="dropdownMenu flex flex-col">
                                <Link href="/" className='nav-link-b' >+92 327 8700641</Link>
                                <Link href="/" className='nav-link-b' >admin@designinstudio.com</Link>
                                <Link href="/" className='nav-link-b' >Gulgusht Colony Multan, Pakistan</Link>
                                <Link href="/" className='nav-link-b' >Leave a Massage</Link>
                            </div>
                        )}
                    </div>


                    {/* <div className="order-3 lg:order-4 w-full lg:w-1/5 m-0 p-0 flex flex-col">
                        <Link href="/">+92 3278700 641</Link>
                        <Link href="/">admin@designinstudio.com</Link>
                        <Link href="/">Gulgusht Colony Multan, Pakistan</Link>
                    </div> */}

                </div>

                <div className="links mt-8 flex flex-col md:flex-row items-center justify-between">

                    <div className="social flex flex-row items-center gap-4">
                        <p className="text-base">
                            Follow Us
                        </p>
                        <Link href="https://youtube.com/@designinnstudio4928?si=5tb1gV99ZP8g4JCM" target='blank'>
                            <FaXTwitter />
                        </Link>
                        <Link href="https://www.instagram.com/design_inn_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='blank'>
                            <FaInstagram />
                        </Link>
                        <Link href="https://youtube.com/@designinnstudio4928?si=5tb1gV99ZP8g4JCM" target='blank'>
                            <TbBrandYoutube />
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=100093811385396&mibextid=ZbWKwL" target='blank'>
                            <PiFacebookLogoBold />
                        </Link>


                    </div>
                    <div className="copyright">
                        <p className="text-base">Copyright © 2024 All Rights Reserved</p>
                    </div>

                </div>

            </div>









        </>
    )
}

export default Footer