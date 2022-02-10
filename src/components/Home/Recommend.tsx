import React from 'react';
import './Recommend.scss';
import RecFeed from './RecFeed';
import { HomeRecFeedData } from '../../constants/index';

function Recommend() {
  return (
    <section className="recommend-wrapper">
      <h2 className="h2">어느 지역의 여행 기록을 보고싶나요?</h2>
      <article>
        {HomeRecFeedData.map((feed) => (
          <RecFeed
            id = {feed.id}
            category={feed.category}
            date={feed.date}
            title={feed.title}
            text={feed.text}
            image={feed.image}
            location={feed.location}
            locationKR={feed.locationKR}
            heart={feed.heart}
            scrap={feed.scrap}
            key={feed.heart}
          />
        ))}
      </article>
    </section>
  );
}

export default Recommend;
