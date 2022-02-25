import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import './Sticker.scss';

// 스티커 데이터
const stickers = [
  ['01', '02', '03', '04', '05', '06', '01', '02'],
  ['04', '03'],
];

// 빈 스티커 데이터
const none: JSX.Element[] = [];
for (let i = 0; i < 8 - stickers[stickers.length - 1].length; i += 1) {
  none.push(<img src="imgs/MyPage/illust_sticker_none.png" alt="스티커 없음" className="none" key={i} />);
}

function Sticker() {
  // 선택된 배경 스타일 번호
  const [selectedBg, setSelectedBg] = useState<number>(1);

  // 배경 스타일 변경
  const onClickBg = (newBg: number) => {
    setSelectedBg(newBg);
  };

  SwiperCore.use([Pagination]);

  return (
    <div className="sticker-wrapper">
      <h2>나의 여행 다꾸 공간</h2>
      <div className="bgstyle-container">
        <h4>배경 스타일 바꾸기</h4>
        <div className="images">
          {[1, 2, 3, 4].map((bg) => (
            <button
              type="button"
              key={bg}
              onClick={() => onClickBg(bg)}
              className={selectedBg === bg ? 'selected' : ''}
            >
              <img src={`imgs/MyPage/illust_bg0${bg}_sample.png`} alt={`배경스타일 ${bg}번`} />
            </button>
          ))}
        </div>
      </div>
      <Swiper spaceBetween={50} slidesPerView={1} pagination={{ type: 'fraction' }}>
        {stickers.map((page, index) => (
          <SwiperSlide key={page[0]}>
            <div
              className="sticker-container"
              style={{ backgroundImage: `url(imgs/MyPage/illust_bg0${selectedBg}_roundx.png` }}
            >
              {page.map((sticker, idx) => (
                <img
                  src={`imgs/MyPage/illust_sticker${sticker}.png`}
                  alt={`스티커 ${sticker}번`}
                  // eslint-disable-next-line react/no-array-index-key
                  key={sticker + idx}
                />
              ))}
              {index === stickers.length - 1 && none.map((sticker) => sticker)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Sticker;
