import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.scss';
import { getLocation, getRecommend } from '../../modules/post/home';
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

  const getData = useCallback(() => {
    dispatch(getLocation('부산'));
    dispatch(getRecommend());
  }, [dispatch, location, recommend]);

  useEffect(() => {
    getData();
    if (location && recommend) setLoading(true);
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
