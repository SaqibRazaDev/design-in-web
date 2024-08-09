import React from 'react'
import Header from '../(components)/header/header';
import HeaderBg from '../../public/assets/header/photos-bg.svg';

function Photos() {
  return (
    <>
      <Header
        bg={HeaderBg}
        title="Find the Best Photos "
        tagline="Find millions of top-quality photos that will leave your audience speechless"
      />
      Images
    </>
  )
}

export default Photos