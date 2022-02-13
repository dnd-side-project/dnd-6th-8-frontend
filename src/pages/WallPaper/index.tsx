import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import WallPaperDetailView from '../../components/WallPaper/WallPaperDetailView';
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
      <Swiper spaceBetween={50} slidesPerView={1} >
        <SwiperSlide>
          <WallPaperPreview fetchData={fetchData} />
        </SwiperSlide>
        <SwiperSlide>
          <WallPaperDetailView fetchData={fetchData}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default WallPaper;
