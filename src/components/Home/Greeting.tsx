import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import './Greeting.scss';

function Greeting() {
  const homeData = useSelector((state: RootState) => state.home.home.data);

  // 이미지 null값 처리
  const images = [];
  if (homeData?.firstArchiveImage) images.push(homeData.firstArchiveImage);
  if (homeData?.secondArchiveImage) images.push(homeData.secondArchiveImage);
  if (homeData?.thirdArchiveImage) images.push(homeData.thirdArchiveImage);

  return (
    <div className="greeting-wrapper">
      <div className="greeting">
        <div>{homeData?.userNickName} 님, 트레셔스를 통해</div>
        <div>
          <span>여행의 설렘</span>을 간직해보세요.
        </div>
      </div>
      <div className="image-container">
        {images.map((image, index) => (
          <div className="image" key={image} style={{ zIndex: 3 - index }}>
            <img
              src={image}
              alt="인기 포스트 이미지"
              style={{ filter: index === images.length - 1 ? 'brightness(0.5)' : '' }}
            />
            {index === images.length - 1 && <span>+{homeData?.totalArchiveNum}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Greeting;
