import React from 'react';

type LocationProps = {
  location: string;
  locationKR: string;
  onClickLoc: (location: string) => void;
  clickLoc: string;
};

function Location({ location, locationKR, onClickLoc, clickLoc }: LocationProps) {
  return (
    <button
      type="button"
      onClick={() => onClickLoc(location)}
      className={`location-wrapper${clickLoc === location ? ' click' : ''}`}
    >
      <img src={`imgs/Home/emoji_${location}.png`} alt={`${location} 지역 여행기록 추천`} />
      {locationKR}
    </button>
  );
}

export default Location;
