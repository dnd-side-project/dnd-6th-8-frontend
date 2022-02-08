import React from 'react';
import './Home.scss';
import Header from '../../components/common/Header';
import NavigationBar from '../../components/common/NavigationBar';
import Greeting from '../../components/Home/Greeting';
import LocationFeed from '../../components/Home/LocationFeed';
import Recommend from '../../components/Home/Recommend';

function Home() {
  return (
    <div className="home-wrapper">
      <Header />
      <main>
        <Greeting />
        <LocationFeed />
        <Recommend />
      </main>
      <NavigationBar />
    </div>
  );
}

export default Home;
