import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.scss';
import { getHome } from '../../modules/post/home';
import Greeting from '../../components/Home/Greeting';
import Location from '../../components/Home/Location';
import Recommend from '../../components/Home/Recommend';
import HomeLoading from '../../components/Home/HomeLoading';
import { RootState } from '../../modules';

function Home() {
  const dispatch = useDispatch();
  const home = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(getHome('부산', false));
  }, []);

  return (
    <div className="home-wrapper">
      <main>
        {home.loading ? (
          <HomeLoading />
        ) : (
          <>
            <Greeting />
            <Location />
            <Recommend />
          </>
        )}
      </main>
    </div>
  );
}

export default Home;
