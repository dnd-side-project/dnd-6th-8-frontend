import React from 'react';

type LocationProps = {
  location: string;
  locationKR: string;
  onClickLoc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  click: boolean;
};

function Location({ location, locationKR, onClickLoc, click }: LocationProps) {
  return (
    <button type="button" onClick={onClickLoc} className={`${click ? 'click' : ''}`}>
      <img src={`imgs/Home/emoji_${location}.png`} alt={location} />
      {locationKR}
    </button>
  );
}

export default Location;
