import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import './Sticker.scss';
import { RootState } from '../../modules';
import { patchColor } from '../../modules/user/mypage';

function matchColor(color: string): string {
  switch (color) {
    case 'red':
      return '01';
    case 'blue':
      return '02';
    case 'purple':
      return '03';
    case 'white':
      return '04';
    default:
      return '01';
  }
}

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
  const dispatch = useDispatch();
  const { diaryColor, badgesList } = useSelector((state: RootState) => state.mypage.data);

  // 선택된 배경 스타일 번호
  const [selectedBg, setSelectedBg] = useState<number>(1);

  // 배경 스타일 변경
  const onClickBg = (newBg: string) => {
    dispatch(patchColor(newBg));
  };

  SwiperCore.use([Pagination]);

  return (
    <div className="sticker-wrapper">
      <h2>나의 여행 다꾸 공간</h2>
      <div className="bgstyle-container">
        <h4>배경 스타일 바꾸기</h4>
        <div className="images">
          {['red', 'blue', 'white', 'purple'].map((bg) => (
            <button
              type="button"
              key={bg}
              onClick={() => onClickBg(bg)}
              className={diaryColor === bg ? 'selected' : ''}
            >
              <img src={`imgs/MyPage/illust_bg_${bg}_sample.png`} alt={`배경스타일 ${bg}번`} />
            </button>
          ))}
        </div>
      </div>
      <Swiper spaceBetween={50} slidesPerView={1} pagination={{ type: 'fraction' }}>
        {stickers.map((page, index) => (
          <SwiperSlide key={page[0]}>
            <div
              className="sticker-container"
              style={{ backgroundImage: `url(imgs/MyPage/illust_bg_${diaryColor}_roundx.png` }}
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
