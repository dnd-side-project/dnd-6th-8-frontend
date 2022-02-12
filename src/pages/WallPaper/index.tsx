import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WallPaperHeader from '../../components/WallPaper/WallPaperHeader';
import WallPaperPreview from '../../components/WallPaper/WallPaperPreview';
import { HomeRecFeedData, HomeFeedsType } from '../../constants';
import './style.scss';

function WallPaper() {
  const { id } = useParams();
  const [fetchData, setFetchData] = useState<HomeFeedsType | undefined>();

  useEffect(() => {
    setFetchData(HomeRecFeedData[Number(id)]);
  }, [HomeRecFeedData]);

  return (
    <div className="wallpaper-wrapper">
      <WallPaperHeader />
      <WallPaperPreview fetchData={fetchData} />
    </div>
  );
}

export default WallPaper;
