import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function RecommendedCard(props) {
  return (
    <>
      <div className={`card relative ${props.dimentions}`}>
        <Link href={props.url}>
          <div className="relative overflow-hidden">
            <Image src={props.bg} alt='' />
          </div>
        </Link>
        <div className="title flex items-center absolute bottom-2 left-2 w-auto h-6 bg-black bg-opacity-30 rounded p-2 text-center">
          <p className="text-xs font-normal text-white text-center">{props.title}</p>
        </div>
      </div>
    </>
  );
}

export default RecommendedCard;
