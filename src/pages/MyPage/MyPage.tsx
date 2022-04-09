import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Menu from '../../components/MyPage/Menu';
import Sticker from '../../components/MyPage/Sticker';
import UserInfo from '../../components/MyPage/UserInfo';
import Loading from '../../components/MyPage/Loading';
import './MyPage.scss';
import Logout from '../../components/MyPage/Logout';
import { userInfo } from '../../modules/user/userinfomation';



function MyPage() {
  const dispatch = useDispatch(); 
  const [loading, setLoading] = useState(true);
  const [logOut, setLogOut] = useState<boolean>(false);
  const logOutHandler = (): void => setLogOut((prev) => !prev);

  useEffect(() => {
    dispatch(userInfo()); 
    setTimeout(() => setLoading(false), 1000);
    return () => setLoading(false);
  }, []);

  return (
    <div className="mypage-wrapper">
      {logOut && <Logout logOutHandler={logOutHandler} />}
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
          <Menu logOutHandler={logOutHandler} />
        </>
      )}
    </div>
  );
}

export default MyPage;
