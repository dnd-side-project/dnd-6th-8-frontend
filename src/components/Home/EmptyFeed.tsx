import React from 'react';

function EmptyFeed() {
  return (
    <div className="emptyfeed-wrapper">
      <img src="imgs/Home/illust_none_archiving.png" alt="none" />
      <div>{`키워드에 해당하는\n피드가 아직 없어요.`}</div>
    </div>
  );
}

export default EmptyFeed;
