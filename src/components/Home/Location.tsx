import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LocationNav from './LocationNav';
import LocFeed from './LocFeed';
import EmptyFeed from './EmptyFeed';
import { locationNames } from '../../constants/index';
import './Location.scss';
import { RootState } from '../../modules';

function Location() {
  // 지역별 추천 피드 데이터
  const locationData = useSelector((state: RootState) => state.home.data.location);

  const [clickLoc, setClickLoc] = useState<string>('부산'); // 선택된 지역 버튼

  return (
    <section className="locationFeed-wrapper">
      <h2>어느 지역의 여행 기록을 보고싶나요?</h2>
      <nav>
        {locationNames.map((location) => (
          <LocationNav
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
              coverImage={feed.coverImage}
              places={feed.places}
              id={feed.id}
              key={feed.id}
            />
          ))
        )}
      </article>
    </section>
  );
}

export default Location;
