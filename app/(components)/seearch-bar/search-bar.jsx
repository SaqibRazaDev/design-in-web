import React from 'react'
import Dropdown from '../dropdown/dropdown';

function SearchBar() {
  return (
    <>


      <input
        className='h-9 md:h-11 lg:h-14 w-full max-w-4xl py-2 px-6 bg-transparent border-2 rounded-md text-xs md:text-sm lg:text-base'
        placeholder='Search all assets.'
        type="text"
      />
      <button className='ml-3 bg-[#010749] h-9 md:h-11 lg:h-14 w-32 md:w-48 rounded-md border-2 text-xs md:text-sm lg:text-base' type="submit">
        Search
      </button>




    </>
  )
}

export default SearchBar