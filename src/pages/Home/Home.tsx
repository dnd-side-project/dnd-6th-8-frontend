import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.scss';
import { getLocation, getRecommend, getHome } from '../../modules/post/home';
import Greeting from '../../components/Home/Greeting';
import LocationFeed from '../../components/Home/LocationFeed';
import Recommend from '../../components/Home/Recommend';
import HomeLoading from '../../components/Home/HomeLoading';
import { RootState } from '../../modules';

function Home() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.home.location.loading);
  const recommend = useSelector((state: RootState) => state.home.recommend.loading);
  const home = useSelector((state: RootState) => state.home.home.loading);

  const getData = useCallback(() => {
    dispatch(getLocation('부산'));
    dispatch(getRecommend());
    dispatch(getHome());
  }, [dispatch, location, recommend, home]);

  useEffect(() => {
    getData();
    if (location && recommend && home) setLoading(true);
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
