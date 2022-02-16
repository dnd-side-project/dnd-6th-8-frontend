/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HomeFeedsType, DayFeedDataType, dayFeedFetchData } from '../../../constants';
import ReactionBar from '../ReactionBar';
import './style.scss';
import TabBody from './TabBody';
import TabHeader from './TabHeader';

type WallPaperDetailViewProps = {
  fetchData: HomeFeedsType | undefined;
};

function WallPaperDetailView({ fetchData }: WallPaperDetailViewProps) {
  const [dayFeedData, setDayFeedData] = useState<DayFeedDataType[]>(dayFeedFetchData);
  const [index, setIndex] = useState<number>(0);
  return (
    <div className="wallpaperdetailview-wrapper">
      <div className="detail-title-box">
        <p className="detail-title">{fetchData && fetchData.title}</p>
        <p className="detail-date">2022.01.10 - 01.14</p>
      </div>
      <Tabs selectedIndex={index} onSelect={(index) => {setIndex(index)}}>
        <TabList className='tab-header'>
          {dayFeedData.map((value: DayFeedDataType) => {
            return (
              <Tab key={value.day}>
                <TabHeader day={value.day} index={index}/>
              </Tab>
            );
          })}
        </TabList>
        {dayFeedData.map((value: DayFeedDataType) => {
          return (
            <TabPanel key={value.day}>
              <TabBody value={value}/> 
            </TabPanel>
          );
        })}
      </Tabs>
      <ReactionBar />
    </div>
  );
}

export default WallPaperDetailView;
