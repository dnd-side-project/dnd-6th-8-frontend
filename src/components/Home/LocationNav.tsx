import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getHome } from '../../modules/post/home';

type LocationProps = {
  title: string;
  en: string;
  param: string;
  click: string;
  setClick: React.Dispatch<React.SetStateAction<string>>;
};

function LocationNav({ title, en, param, click, setClick }: LocationProps) {
  const dispatch = useDispatch();
  // 지역 버튼 클릭
  const onClickLoc = useCallback(
    (loc: string) => {
      setClick(loc);
      dispatch(getHome(loc, true));
    },
    [dispatch, click],
  );

  return (
    <button
      type="button"
      onClick={() => onClickLoc(param)}
      className={`location-wrapper${click === param ? ' click' : ''}`}
      key={en}
    >
      <img src={`imgs/Home/emoji_${en}.png`} alt={`${title} 지역 여행기록 추천`} />
      {title}
    </button>
  );
}

export default LocationNav;
