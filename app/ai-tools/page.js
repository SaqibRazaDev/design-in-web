import React from 'react';
import Header from '../(components)/header/header';
import HeaderBg from '../../public/assets/header/ai-tools-bg.svg';

function AiTools() {
  return (
    <>
      <div className="">
        <Header
          bg={HeaderBg}
          title="AI Image Generator"
          tagline="Search AI-generated images that go wildly beyond the limits of your imagination"
        />
        AiTools
      </div>

    </>
  );
}

export default AiTools;
