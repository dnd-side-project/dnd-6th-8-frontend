import React from 'react';
import './Recommend.scss';
import RecFeed from './RecFeed';
import { HomeRecFeedData } from '../../constants/index';

function Recommend() {
  return (
    <section className="recommend-wrapper">
      <h2 className="h2">나의 취향 저격, 기록 피드를 추천드려요</h2>
      <article>
        {HomeRecFeedData.map((feed) => (
          <RecFeed
            id={feed.id}
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
