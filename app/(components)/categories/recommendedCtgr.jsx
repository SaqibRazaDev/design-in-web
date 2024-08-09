import React from 'react'
import RecommendedCard from './recommendedCard'
import nature from '../../../public/assets/category-section/nature-videos.svg'
import fireworks from '../../../public/assets/category-section/fireworks.svg'
import winter from '../../../public/assets/category-section/winter.svg'
import party from '../../../public/assets/category-section/party.svg'
import aiimages from '../../../public/assets/category-section/ai-images.svg'

function RecommendedCtgr() {
    return (
        <>


            <div className="con text-center my-8">
                <p className="heading-lg my-4"><span className='text-[#FAD007]'>Recommended Categories</span> to Stay Inspired</p>
                <p className="heading-xs font-normal">Check what’s popular on Design In Studio and make your project look trendy and professional.</p>

            </div>


            <div className="con flex justify-between items-center gap-4 overflow-x-auto">


                <div className="flex flex-row xl:flex-col gap-4">
                    <RecommendedCard
                        url="/"
                        bg={nature}
                        title="Nature Videos"
                        dimentions="w-36 h-24 md:w-56 md:h-36 lg:w-[400px] lg:h-64"

                    />
                    <RecommendedCard
                        url="/"
                        bg={fireworks}
                        title="Fireworks"
                        dimentions="w-36 h-24 md:w-56 md:h-36 lg:w-[400px] lg:h-64"
                    />
                </div>


                {/* // Full Height */}

                <div className="h-full hidden xl:block">
                    <RecommendedCard
                        url="/"
                        bg={winter}
                        title="Winter Wallpapers"
                        dimentions="w-36 h-24 md:w-56 md:h-36 lg:w-[400px] lg:h-full"

                    />
                </div>


                <div className="flex flex-row xl:flex-col gap-4">


                    <RecommendedCard
                        url="/"
                        bg={party}
                        title="Party Videos"
                        dimentions="w-36 h-24 md:w-56 md:h-36 lg:w-[400px] lg:h-64"

                    />
                    <RecommendedCard
                        url="/"
                        bg={aiimages}
                        title="AI Images"
                        dimentions="w-36 h-24 md:w-56 md:h-36 lg:w-[400px] lg:h-64"
                    />
                </div>
            </div>



        </>
    )
}

export default RecommendedCtgr