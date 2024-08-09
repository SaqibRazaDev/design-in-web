import React from 'react'
import Image from 'next/image'
import shape from '../../../public/assets/header/header-shape-1.svg'
import shape2 from '../../../public/assets/header/header-shape-2.svg'
import Navbar from '../navbar/navbar';
import SearchBar from '../seearch-bar/search-bar';
import Categories from '../categories/categories';

function HeaderMain() {
    return (
        <>

            <div className="con bg-cover py-4 sm:py-6 md:py-8 " style={{ backgroundImage: "url('../../assets/header/header-bg.svg')" }}>

                <Navbar />

                <div className="h mt-10 sm:mt-12 md:mt-20 xl:mt-24 flex flex-col items-center gap-1 md:gap-4">
                    <div className="head flex flex-row flex-wrap items-center gap-1 md:gap-3">
                        <h1 className="heading-hg ">
                            DESIGN
                        </h1>
                        <Image
                            alt='Shape 1'
                            src={shape}
                            className='h-auto w-16 sm:w-32 md:w-36 lg:w-40'
                        />
                        <h1 className="heading-hg out-line-span">
                            YOUR VISION
                        </h1>
                    </div>
                    <div className="head2 flex flex-row flex-wrap items-center gap-1 md:gap-3">
                        <h1 className="heading-hg">
                            SHAPING YOUR FUTURE
                        </h1>
                        <Image
                            alt='Shape 2'
                            src={shape2}
                            className='h-auto w-20 sm:w-32 md:w-40 lg:w-56'
                        />
                    </div>
                </div>

                <div className="flex justify-center">
                    <p className="tag-line heading-xs">Turn your ideas into outstanding designs with high quality vectors, photos, videos, mockups and many more.</p>
                </div>

                <div className="flex my-8 lg:my-12 justify-center">
                    <SearchBar />
                </div>

                <div className="ctg ">
                    <Categories />
                </div>

            </div>


        </>
    )
}

export default HeaderMain