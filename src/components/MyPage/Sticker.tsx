import React from 'react';
import './Sticker.scss';

function Sticker() {
  return (
    <div className="sticker-wrapper">
      <h2>나의 여행 다꾸 공간</h2>
      <div className="bgstyle-container">
        <h4>배경 스타일 바꾸기</h4>
        <div className="images">
          <img src="imgs/MyPage/illust_bg01_sample.png" alt="bg01 sample" />
          <img src="imgs/MyPage/illust_bg02_sample.png" alt="bg02 sample" />
          <img src="imgs/MyPage/illust_bg03_sample.png" alt="bg03 sample" />
          <img src="imgs/MyPage/illust_bg04_sample.png" alt="bg04 sample" />
        </div>
      </div>
      <div className="sticker-container">
        <img src="imgs/MyPage/illust_bg01.png" alt="bg01" />
        <div className="stickers">
          <img src="imgs/MyPage/illust_sticker01.png" alt="sticker01" />
          <img src="imgs/MyPage/illust_sticker02.png" alt="sticker02" />
          <img src="imgs/MyPage/illust_sticker03.png" alt="sticker03" />
          <img src="imgs/MyPage/illust_sticker04.png" alt="sticker04" />
          <img src="imgs/MyPage/illust_sticker05.png" alt="sticker05" />
          <img src="imgs/MyPage/illust_sticker06.png" alt="sticker06" />
          <img src="imgs/MyPage/illust_sticker_none.png" alt="none sticker" className="none" />
          <img src="imgs/MyPage/illust_sticker_none.png" alt="none sticker" className="none" />
        </div>
      </div>
      <div className="pages-container">
        <span>1/1</span>
      </div>
    </div>
  );
}

export default Sticker;
