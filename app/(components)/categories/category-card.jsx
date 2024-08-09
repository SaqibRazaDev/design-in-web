import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function CategoryCard(props) {
    return (
        <>
            <div className="flex flex-col items-center">
                <Link href={props.url}>
                    <div className="ctg-card relative top-5 overflow-hidden w-36 h-24 md:w-56 md:h-36 rounded-xl border-2">
                        <Image src={props.bg} className='border-2 xl:border-4 border-black rounded-xl' layout="fill" objectFit="cover" alt="Category Background" />
                    </div>
                </Link>
                <p className="text-xs md:text-base font-medium text-center my-2 mt-7">{props.title}</p>
            </div>
        </>
    )
}

export default CategoryCard
