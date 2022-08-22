import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import './Sticker.scss';
import { RootState } from '../../modules';
import { patchColor } from '../../modules/user/mypage';

function Sticker() {
  const dispatch = useDispatch();
  const { diaryColor, stickers, none } = useSelector((state: RootState) => state.mypage.data);

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
        {stickers.length === 0 && (
          <SwiperSlide>
            <div
              className="sticker-container"
              style={{
                backgroundImage: `url(imgs/MyPage/illust_bg_${diaryColor}_roundx.png`,
              }}
            >
              {none.map((_, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <img src="imgs/MyPage/illust_sticker_none.png" alt="스티커 없음" className="none" key={idx} />
              ))}
            </div>
          </SwiperSlide>
        )}
        {stickers.map((page, index) => (
          <SwiperSlide key={`${page.join(index.toString())}`}>
            <div
              className="sticker-container"
              style={{
                backgroundImage: `url(imgs/MyPage/illust_bg_${diaryColor}_roundx.png`,
              }}
            >
              {page.map((sticker, idx) => (
                <img
                  src={`imgs/MyPage/illust_sticker_${sticker}.png`}
                  alt={`${sticker} 스티커`}
                  key={sticker + idx.toString()}
                />
              ))}
              {index === stickers.length - 1 &&
                none.map((_, idx) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <img src="imgs/MyPage/illust_sticker_none.png" alt="스티커 없음" className="none" key={idx} />
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Sticker;
