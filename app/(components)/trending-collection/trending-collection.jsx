import React from 'react'
import TrendingCard from './tranding-card'
import templateA from '../../../public/assets/trending-section/temp-a.svg'
import templateB from '../../../public/assets/trending-section/temp-b.svg'
import templateC from '../../../public/assets/trending-section/temp-c.svg'
import collageA from '../../../public/assets/trending-section/collage-a.svg'
import collageB from '../../../public/assets/trending-section/collage-b.svg'
import collageC from '../../../public/assets/trending-section/collage-c.svg'
import strA from '../../../public/assets/trending-section/str-a.svg'
import strB from '../../../public/assets/trending-section/str-b.svg'
import streetC from '../../../public/assets/trending-section/str-c2.svg'

function TrendingCollection() {
  return (
    <>

      <div className="py-6">


        <div className="con text-center my-8">
          <p className="heading-lg my-4">Trending Collections to Boost <span className='text-[#FAD007]'> Your Ideas.</span></p>
          <p className="heading-xs font-normal">Explore Design Inn Trendiest Collections and Find the Perfect Visual.</p>
        </div>

        <div className="con flex flex-row justify-between gap-4 my-8 lg:my-12 overflow-x-auto">

          <TrendingCard
            urlA="/"
            urlB="/"
            urlC="/"
            bgA={templateA}
            bgB={templateB}
            bgC={templateC}
          />

          <TrendingCard
            urlA="/"
            urlB="/"
            urlC="/"
            bgA={collageA}
            bgB={collageB}
            bgC={collageC}
          />

          <TrendingCard
            urlA="/"
            urlB="/"
            urlC="/"
            bgA={strA}
            bgB={strB}
            bgC={strA}
          />

        </div>



      </div>

    </>
  )
}

export default TrendingCollection