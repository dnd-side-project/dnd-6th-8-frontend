import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useParams } from 'react-router-dom';
import ReactionGood from '../../../assets/icons/WallPaper/ReactionBar/ic_thumbs_purple 1.png';
import ReactionHeart from '../../../assets/icons/WallPaper/ReactionBar/emoji_heart.png';
import ReactionBag from '../../../assets/icons/WallPaper/ReactionBar/emoji_bag.png';
import ReactionSpark from '../../../assets/icons/WallPaper/ReactionBar/emoji_sparkles_mypage.png';
import ReactionEyes from '../../../assets/icons/WallPaper/ReactionBar/emoji_eye.png';
import { readEmojiInfo } from '../../../modules/post/emojiCount';
import { RootState } from '../../../modules';

function ReactionBar() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.emojiCounts);
  useEffect(() => {
    if (id !== undefined) dispatch(readEmojiInfo(id));
  }, [dispatch]);
  const [reactionClick, setReactionClick] = useState<boolean>(false);
  const reactionHandler = (): void => setReactionClick((prev) => !prev);
  return (
    <div className="reactionbar-wrapper">
      {reactionClick && (
        <div className="reaction-click">
          <Swiper slidesPerView={3} spaceBetween={8} slidesOffsetBefore={8} slidesOffsetAfter={80}>
            <SwiperSlide>
              <div className="icon-introduce heart">
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
            <p>{data[0].emojiCount}</p>
          </div>
          <div className="icon-box">
            <img src={ReactionBag} alt="가방" />
            <p>{data[1].emojiCount}</p>
          </div>
          <div className="icon-box">
            <img src={ReactionSpark} alt="빛" />
            <p>{data[2].emojiCount}</p>
          </div>
          <div className="icon-box">
            <img src={ReactionEyes} alt="눈" />
            <p>{data[3].emojiCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactionBar;
