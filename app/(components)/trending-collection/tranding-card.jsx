import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function TrendingCard(props) {
    return (
        <>


            <div className="flex flex-col">
                <div className="trnd w-40 h-48 xl:w-[392px] xl:h-[450px] border-2 xl:border-4 flex gap-[2px] xl:gap-1 bg-white hover:shrink">
                    <div className="w-1/2 h-full ">
                        {/* Image A */}

                        <Link href={props.urlA}>

                            <Image src={props.bgA} className="w-full h-full object-cover" alt='' />

                        </Link>

                    </div>
                    <div className="w-1/2 h-full flex flex-col gap-[2px] xl:gap-1">
                        <div className="h-1/2 w-full">
                            {/* Image B */}

                            <Link href={props.urlB}>

                                <Image src={props.bgB} className="w-full h-full object-cover" alt='' />

                            </Link>

                        </div>
                        <div className="h-1/2 w-full">
                            {/* Image C */}

                            <Link href={props.urlC}>

                                <Image src={props.bgC} className="w-full h-full object-cover" alt='' />

                            </Link>

                        </div>

                    </div>

                </div>

                <div className="heading mt-4">

                    <p className="heading-md">Instagram Template</p>
                    <p className="total-collection text-xs md:text-base lg:text-xl">100 resources</p>

                </div>
            </div>


        </>
    )
}

export default TrendingCard