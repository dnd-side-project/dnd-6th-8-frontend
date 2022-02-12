import React, { useState, useCallback } from 'react';
import Location from './Location';
import LocFeed from './LocFeed';
import EmptyFeed from './EmptyFeed';
import './LocationFeed.scss';
import { HomeLocFeedData, locationArr } from '../../constants';

function LocationFeed() {
  const [clickLoc, setClickLoc] = useState<string | null>('busan');

  const onClickLoc = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setClickLoc(e.currentTarget.children[0].getAttribute('alt'));
  }, []);
  return (
    <section className="locationFeed-wrapper">
      <div className="header">
        <h2>어느 지역의 여행 기록을 보고싶나요?</h2>
        <div className="refresh">
          <span>새로고침</span>
          <img src="imgs/Home/img_refreshbutton_home.png" alt="refresh" />
        </div>
      </div>
      <nav>
        {locationArr.map((location) => {
          let click = false;
          if (location.location === clickLoc) {
            click = true;
          }
          return (
            <Location
              location={location.location}
              locationKR={location.locationKR}
              key={location.location}
              onClickLoc={onClickLoc}
              click={click}
            />
          );
        })}
      </nav>
      <article>
        {HomeLocFeedData.length === 0 ? (
          <EmptyFeed />
        ) : (
          HomeLocFeedData.map((feed) => (
            <LocFeed
              id = {feed.id}
              category={feed.category}
              title={feed.title}
              date={feed.date}
              image={feed.image}
              location={feed.location}
              key={feed.heart}
            />
          ))
        )}
      </article>
    </section>
  );
}

export default LocationFeed;
