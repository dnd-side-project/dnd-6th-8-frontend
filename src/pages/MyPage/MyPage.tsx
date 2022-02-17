import React from 'react';
import Header from '../../components/common/Header';
import NavigationBar from '../../components/common/NavigationBar';
import Menu from '../../components/MyPage/Menu';
import Sticker from '../../components/MyPage/Sticker';
import UserInfo from '../../components/MyPage/UserInfo';
import Loading from '../../components/MyPage/Loading';
import './MyPage.scss';

function MyPage() {
  return (
    <div className="mypage-wrapper">
      <header>
        <Header title="마이페이지" />
      </header>
      <main>
        {/* loading?<Loading/>:<UserInfo/> */}
        {/* <Loading height={9.2} />
        <Loading height={29.4} />
        <Loading height={15.9} /> */}
        <UserInfo />
        <Sticker />
        <Menu /> 
      </main>
      <footer>
        <NavigationBar />
      </footer>
    </div>
  );
}

export default MyPage;
