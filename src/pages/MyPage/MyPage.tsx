import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '../../components/MyPage/Menu';
import Sticker from '../../components/MyPage/Sticker';
import UserInfo from '../../components/MyPage/UserInfo';
import Loading from '../../components/MyPage/Loading';
import './MyPage.scss';
import Logout from '../../components/MyPage/Logout';
import { myArchivesIsShared, myArchivesPrivate } from '../../modules/post/archives';
import { getMyPage } from '../../modules/user/mypage';
import { RootState } from '../../modules';

function MyPage() {
  const dispatch = useDispatch();
  const mypage = useSelector((state: RootState) => state.mypage);

  const [loading, setLoading] = useState<boolean>(mypage.loading);
  const [logOut, setLogOut] = useState<boolean>(false);
  const logOutHandler = (): void => setLogOut((prev) => !prev);

  useEffect(() => {
    dispatch(myArchivesIsShared());
    dispatch(myArchivesPrivate());
    dispatch(getMyPage());
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
