import React from 'react';
import { useSelector } from 'react-redux';
import './Recommend.scss';
import RecFeed from './RecFeed';
import { RootState } from '../../modules';

function Recommend() {
  const recommendData = useSelector((state: RootState) => state.home.data.recommend);
  return (
    <section className="recommend-wrapper">
      <h2 className="h2">나의 취향 저격, 기록 피드를 추천드려요</h2>
      <article>
        {recommendData.map((recommend) => (
          <RecFeed
            key={recommend.id}
            id={recommend.id}
            archivingStyle={recommend.archivingStyle}
            coverImage={recommend.coverImage}
            emojiNum={recommend.emojiNum}
            scrapNum={recommend.scrapNum}
            places={recommend.places}
            title={recommend.title}
            travelDuration={recommend.travelDuration}
            shortContent={recommend.shortContent}
          />
        ))}
      </article>
    </section>
  );
}

export default Recommend;
