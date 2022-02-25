import React, { useState, useCallback } from 'react';
import Location from './Location';
import LocFeed from './LocFeed';
import EmptyFeed from './EmptyFeed';
import './LocationFeed.scss';
import { HomeLocFeedData, locationArr } from '../../constants';

function LocationFeed() {
  // 선택된 지역 버튼
  const [clickLoc, setClickLoc] = useState<string>('busan');

  // 지역 버튼 클릭
  const onClickLoc = useCallback((location: string) => {
    setClickLoc(location);
  }, []);

  // API 연동 후 삭제할 임시배열
  const tempArr = HomeLocFeedData.filter((feed) => feed.location === clickLoc);

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
        {locationArr.map((location) => {
          return (
            <Location
              location={location.location}
              locationKR={location.locationKR}
              key={location.location}
              onClickLoc={onClickLoc}
              clickLoc={clickLoc}
            />
          );
        })}
      </nav>
      <article>
        {tempArr.length === 0 ? (
          <EmptyFeed />
        ) : (
          tempArr.map((feed) => (
            <LocFeed
              id={feed.id}
              category={feed.category}
              title={feed.title}
              date={feed.date}
              image={feed.image}
              location={feed.location}
              key={feed.id}
            />
          ))
        )}
      </article>
    </section>
  );
}

export default LocationFeed;
