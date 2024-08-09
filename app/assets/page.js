import React from 'react'
import Header from '../(components)/header/header';
import HeaderBg from '../../public/assets/header/photos-bg.svg'

function Assets() {
  return (
    <>
      <Header
        bg={HeaderBg}
        title="Browse Assets"
        tagline="Find the perfect asset for your next project"
      />
      Assets
    </>


  )
}

export default Assets