import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { useParams } from 'react-router-dom';
import ReactionGood from '../../../assets/icons/WallPaper/ReactionBar/ic_thumbs_purple 1.png';
import ReactionHeart from '../../../assets/icons/WallPaper/ReactionBar/emoji_heart.png';
import ReactionBag from '../../../assets/icons/WallPaper/ReactionBar/emoji_bag.png';
import ReactionSpark from '../../../assets/icons/WallPaper/ReactionBar/emoji_sparkles_mypage.png';
import ReactionEyes from '../../../assets/icons/WallPaper/ReactionBar/emoji_eye.png';
import { readEmojiInfo } from '../../../modules/post/emojiCount';
import { RootState } from '../../../modules';
import instance from '../../../lib/axios';

function ReactionBar() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.emojiCounts.data);
  useEffect(() => {
    if (id !== undefined) dispatch(readEmojiInfo(id));
  }, [dispatch]);
  const [reactionClick, setReactionClick] = useState<boolean>(false);
  const reactionHandler = (): void => setReactionClick((prev) => !prev);

  const onEmojiClick = async (emojiId: number, checkedId: number) => {
    if (data[emojiId - 1].emojisChecked) {
      await instance.delete(`/api/v1/archive/${checkedId}/emojiUnCheck`).then((res) => {
        if (id !== undefined) dispatch(readEmojiInfo(id));
      });
    } else {
      await instance.post(`/api/v1/archive/${id}/${emojiId}/emojiCheck`).then((res) => {
        if (id !== undefined) dispatch(readEmojiInfo(id));
      });
    }
  };

  return (
    <div className="reactionbar-wrapper">
      {reactionClick && (
        <div className="reaction-click">
              <div
                className={data[0]?.emojisChecked ? 'active-introduce heart' : 'icon-introduce heart'}
                onClick={() => onEmojiClick(1, data[0]?.emojisCheckedId)}
                aria-hidden
              >
                <img src={ReactionHeart} alt="하트" />
                <p>좋아요</p>
              </div>
              <div
                className={data[1]?.emojisChecked ? 'active-introduce bag' : 'icon-introduce bag'}
                onClick={() => onEmojiClick(2, data[1]?.emojisCheckedId)}
                aria-hidden
              >
                <img src={ReactionBag} alt="가방" />
                <p>저도 가고 싶어요!</p>
              </div>
              <div
                className={data[2]?.emojisChecked ? 'active-introduce spark' : 'icon-introduce spark'}
                onClick={() => onEmojiClick(3, data[2]?.emojisCheckedId)}
                aria-hidden
              >
                <img src={ReactionSpark} alt="빛" />
                <p>아름다운 추억이에요</p>
              </div>
              <div
                className={data[3]?.emojisChecked ? 'active-introduce eyes' : 'icon-introduce eyes'}
                onClick={() => onEmojiClick(4, data[3]?.emojisCheckedId)}
                aria-hidden
              >
                <img src={ReactionEyes} alt="눈" />
                <p>도움이 많이 됐어요</p>
              </div>
        </div>
      )}
      <div className="reactionbar-inner-wrapper">
        <div className="reaction-left" role="button" tabIndex={0} onClick={reactionHandler} onKeyDown={reactionHandler}>
          <img src={ReactionGood} alt="엄지" />
          <span>반응 남기기</span>
        </div>
        <div className="reaction-right">
          <div
            className={data[0]?.emojisChecked ? 'active-icon' : 'icon-box'}
            onClick={() => onEmojiClick(1, data[0]?.emojisCheckedId)}
            aria-hidden
          >
            <img src={ReactionHeart} alt="하트" />
            <p>{data && data[0]?.emojiCount}</p>
          </div>
          <div
            className={data[1]?.emojisChecked ? 'active-icon' : 'icon-box'}
            onClick={() => onEmojiClick(2, data[1]?.emojisCheckedId)}
            aria-hidden
          >
            <img src={ReactionBag} alt="가방" />
            <p>{data && data[1]?.emojiCount}</p>
          </div>
          <div
            className={data[2]?.emojisChecked ? 'active-icon' : 'icon-box'}
            onClick={() => onEmojiClick(3, data[2]?.emojisCheckedId)}
            aria-hidden
          >
            <img src={ReactionSpark} alt="빛" />
            <p>{data && data[2]?.emojiCount}</p>
          </div>
          <div
            className={data[3]?.emojisChecked ? 'active-icon' : 'icon-box'}
            onClick={() => onEmojiClick(4, data[3]?.emojisCheckedId)}
            aria-hidden
          >
            <img src={ReactionEyes} alt="눈" />
            <p>{data && data[3]?.emojiCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactionBar;
