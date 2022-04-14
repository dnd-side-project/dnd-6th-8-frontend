import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Location from './Location';
import LocFeed from './LocFeed';
import EmptyFeed from './EmptyFeed';
import { locationNames } from '../../constants/index';
import './LocationFeed.scss';
import { RootState } from '../../modules';

function LocationFeed() {
  const locationData = useSelector((state: RootState) => state.home.location.data);

  const [clickLoc, setClickLoc] = useState<string>('부산'); // 선택된 지역 버튼

  return (
    <section className="locationFeed-wrapper">
      <div className="header">
        <h2>어느 지역의 여행 기록을 보고싶나요?</h2>
        <button className="refresh" type="button">
          <span>새로고침</span>
          <img src="imgs/Home/img_refreshbutton_home.png" alt="새로고침 버튼" />
        </button>
      </div>
      <nav>
        {locationNames.map((location) => (
          <Location
            title={location.title}
            en={location.en}
            param={location.param}
            key={location.en}
            click={clickLoc}
            setClick={setClickLoc}
          />
        ))}
      </nav>
      <article>
        {locationData.length === 0 ? (
          <EmptyFeed />
        ) : (
          locationData.map((feed) => (
            <LocFeed
              archivingStyle={feed.archivingStyle}
              title={feed.title}
              coverPicture={feed.coverPicture}
              places={feed.places}
              key={feed.id}
            />
          ))
        )}
      </article>
    </section>
  );
}

export default LocationFeed;
