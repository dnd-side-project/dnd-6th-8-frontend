import React from 'react';
import './Home.scss';
import Header from '../../components/common/Header';
import NavigationBar from '../../components/common/NavigationBar';
import Greeting from '../../components/Home/Greeting';
import LocationFeed from '../../components/Home/LocationFeed';

function Home() {
  return (
    <div className="home-wrapper">
      <Header />
      <main>
        <Greeting />
        <LocationFeed />
      </main>
      <NavigationBar />
    </div>
  );
}

export default Home;
