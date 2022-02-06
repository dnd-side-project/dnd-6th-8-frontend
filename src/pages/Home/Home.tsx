import React from 'react';
import './Home.scss';
import Header from '../../components/common/Header';
import NavigationBar from '../../components/common/NavigationBar';
import Greeting from '../../components/Home/Greeting';

function Home() {
  return (
    <div className="home-wrapper">
      <Header />
      <main>
        <Greeting />
      </main>
      <NavigationBar />
    </div>
  );
}

export default Home;
