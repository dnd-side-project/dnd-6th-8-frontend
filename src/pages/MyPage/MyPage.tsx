import React from 'react';
import Header from '../../components/common/Header';
import NavigationBar from '../../components/common/NavigationBar';
import UserInfo from '../../components/MyPage/UserInfo';
import './MyPage.scss';

function MyPage() {
  return (
    <div className="mypage-wrapper">
      <header>
        <Header title="마이페이지" />
      </header>
      <main>
        <UserInfo />
      </main>
      <footer>
        <NavigationBar />
      </footer>
    </div>
  );
}

export default MyPage;
