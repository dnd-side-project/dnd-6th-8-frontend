import React, { useState, useEffect } from 'react';
import './Home.scss';
import Greeting from '../../components/Home/Greeting';
import LocationFeed from '../../components/Home/LocationFeed';
import Recommend from '../../components/Home/Recommend';
import HomeLoading from '../../components/Home/HomeLoading';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    return () => setLoading(false);
  }, []);

  return (
    <div className="home-wrapper">
      <main>
        {loading ? (
          <HomeLoading />
        ) : (
          <>
            <Greeting />
            <LocationFeed />
            <Recommend />
          </>
        )}
      </main>
    </div>
  );
}

export default Home;
