import React from 'react'
import HeaderMain from "./(components)/header-main/header-main";
import Categories from './(components)/categories/categories';
import RecommendedCtgr from './(components)/categories/recommendedCtgr';
import TrendingCollection from './(components)/trending-collection/trending-collection'

export default function Home() {
  return (

    <>
      <div className="">
        <HeaderMain />
        <RecommendedCtgr/>
        <TrendingCollection/>


        <br /><br /><br />





      </div>


    </>

  );
}
