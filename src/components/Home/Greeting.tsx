import React from 'react';
import './Greeting.scss';

function Greeting() {
  return (
    <div className="greeting-wrapper">
      <div className="greeting">
        <div>경서 님, 트레셔스를 통해</div>
        <div>
          <span>여행의 설렘</span>을 간직해보세요.
        </div>
      </div>
      <div className="image-container">
        <div className="image" />
        <div className="image" />
        <div className="image" />
        {/* <img src="imgs/Greeting/img_cricle1_home.png" alt="scrap" /> */}
      </div>
    </div>
  );
}

export default Greeting;
