import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import './Greeting.scss';

function Greeting() {
  const homeData = useSelector((state: RootState) => state.home.home.data);

  return (
    <div className="greeting-wrapper">
      <div className="greeting">
        <div>{homeData?.userNickName} 님, 트레셔스를 통해</div>
        <div>
          <span>여행의 설렘</span>을 간직해보세요.
        </div>
      </div>
      <div className="image-container">
        <div className="image">
          <img src={homeData?.firstArchiveImage} alt="첫번째 이미지" />
        </div>
        <div className="image" />
        <img src="imgs/Home/img_cricle1_home.png" alt="scrap" className="image" />
      </div>
    </div>
  );
}

export default Greeting;
