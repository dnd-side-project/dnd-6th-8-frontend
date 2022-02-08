import React, { useState, useCallback } from 'react';
import Location from './Location';
import LocFeed from './LocFeed';
import './LocationFeed.scss';

const locationArr = [
  ['busan', '부산'],
  ['jeju', '제주도'],
  ['gangneung', '강릉/속초'],
  ['yeosu', '여수'],
  ['europe', '유럽'],
  ['vacation', '휴양지'],
  ['usa', '미국'],
];

const feedArr = [
  { category: '감정', date: '2박3일', title: '나의 두번째 부산' },
  { category: '정보', date: '1박2일', title: '나만 알고 싶은 색다른 부산' },
  { category: '감정', date: '3박4일', title: '가족여행으로 부산을 가다' },
];

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
          <img src="imgs/LocationFeed/img_refreshbutton_home.png" alt="refresh" />
        </div>
      </div>
      <nav>
        {locationArr.map((location) => {
          let click = false;
          if (location[0] === clickLoc) {
            click = true;
          }
          return (
            <Location
              location={location[0]}
              locationKR={location[1]}
              key={location[0]}
              onClickLoc={onClickLoc}
              click={click}
            />
          );
        })}
      </nav>
      <article>
        {feedArr.map((feed) => (
          <LocFeed category={feed.category} title={feed.title} date={feed.date} key={feed.title} />
        ))}
      </article>
    </section>
  );
}

export default LocationFeed;
