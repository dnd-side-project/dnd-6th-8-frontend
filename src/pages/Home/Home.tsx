import React from 'react';
import './Home.scss';
import Header from '../../components/common/Header';
import NavigationBar from '../../components/common/NavigationBar';

function Home() {
  return (
    <div className="home-wrapper">
      <Header />
      <main>hello</main>
      <NavigationBar />
    </div>
  );
}

export default Home;
