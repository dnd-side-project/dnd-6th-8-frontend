import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HomeRecFeedData } from '../../constants';
import './style.scss'; 

function WallPaper() {
  const { id } = useParams();
  useEffect(()=>{
    console.log(HomeRecFeedData[Number(id)].image)
  },[]);
  return <div className='wallpaper-wrapper'>
    <img src={HomeRecFeedData[Number(id)].image} alt=''/>
  </div>;
}

export default WallPaper;
