import React, { useState } from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactionGood from '../../../assets/icons/WallPaper/ReactionBar/ic_thumbs_purple 1.png';
import ReactionHeart from '../../../assets/icons/WallPaper/ReactionBar/emoji_heart.png';
import ReactionBag from '../../../assets/icons/WallPaper/ReactionBar/emoji_bag.png';
import ReactionSpark from '../../../assets/icons/WallPaper/ReactionBar/emoji_sparkles_mypage.png';
import ReactionEyes from '../../../assets/icons/WallPaper/ReactionBar/emoji_eye.png';

function ReactionBar() {
  const [reactionClick, setReactionClick] = useState<boolean>(false);
  const reactionHandler = (): void => setReactionClick((prev) => !prev);
  return (
    <div className="reactionbar-wrapper">
      {reactionClick && (
        <div className="reaction-click">
          <Swiper spaceBetween={2} slidesPerView={3.1}>
            <SwiperSlide>
              <div className="icon-introduce heart" style={{width : '7rem', marginLeft : '-20px !important'}}>
                <img src={ReactionHeart} alt="하트" />
                <p>좋아요</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon-introduce bag">
                <img src={ReactionBag} alt="가방" />
                <p>저도 가고 싶어요!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon-introduce spark">
                <img src={ReactionSpark} alt="빛" />
                <p>아름다운 추억이에요</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon-introduce eyes">
              <img src={ReactionEyes} alt="눈" />
                <p>도움이 많이 됐어요</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
      <div className="reactionbar-inner-wrapper">
        <div className="reaction-left" role="button" tabIndex={0} onClick={reactionHandler} onKeyDown={reactionHandler}>
          <img src={ReactionGood} alt="엄지" />
          <span>반응 남기기</span>
        </div>
        <div className="reaction-right">
          <div className="icon-box">
            <img src={ReactionHeart} alt="하트" />
            <p>32</p>
          </div>
          <div className="icon-box">
            <img src={ReactionBag} alt="가방" />
            <p>0</p>
          </div>
          <div className="icon-box">
            <img src={ReactionSpark} alt="빛" />
            <p>0</p>
          </div>
          <div className="icon-box">
            <img src={ReactionEyes} alt="눈" />
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactionBar;
