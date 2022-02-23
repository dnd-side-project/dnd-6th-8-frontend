import React, { useState, useEffect } from 'react';
import Menu from '../../components/MyPage/Menu';
import Sticker from '../../components/MyPage/Sticker';
import UserInfo from '../../components/MyPage/UserInfo';
import Loading from '../../components/MyPage/Loading';
import './MyPage.scss';

function MyPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    return () => setLoading(false);
  }, []);

  return (
    <div className="mypage-wrapper">
      {loading ? (
        <>
          <Loading height={9.2} />
          <Loading height={29.4} />
          <Loading height={15.9} />
        </>
      ) : (
        <>
          <UserInfo />
          <Sticker />
          <Menu />
        </>
      )}
    </div>
  );
}

export default MyPage;
