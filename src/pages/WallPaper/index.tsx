import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WallPaperHeader from '../../components/WallPaper/WallPaperHeader';
import WallPaperPreview from '../../components/WallPaper/WallPaperPreview';
import { HomeRecFeedData } from '../../constants';
import './style.scss';

function WallPaper() {
  const { id } = useParams();
  const [imgUrl, setImgUrl] = useState<string>();
  useEffect(() => {
    setImgUrl(HomeRecFeedData[Number(id)].image);
  }, []);
  return (
    <div className="wallpaper-wrapper">
      <WallPaperHeader />
      <WallPaperPreview />
    </div>
  );
}

export default WallPaper;
