import React from 'react';
import Navbar from '../navbar/navbar';

function Header(props) {
    return (
        <div className="con w-full bg-cover py-4 sm:py-6 md:py-8 pb-16" style={{ backgroundImage: `url(${props.bg.src})` }}>
            <Navbar />

            <div className="text-center my-10 sm:my-12 md:my-16">
                <h1 className="heading-xl my-1">
                    {props.title}
                </h1>
                <div className="flex justify-center">
                    <p className="tag-line heading-xs">{props.tagline}</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
