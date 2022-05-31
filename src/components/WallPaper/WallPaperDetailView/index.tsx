/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { DayFeedDataType } from '../../../constants';
import { RootState } from '../../../modules';
import { readDayFeed } from '../../../modules/post/dayfeed';
import ReactionBar from '../ReactionBar';
import './style.scss';
import TabBody from './TabBody';
import TabHeader from './TabHeader';

function WallPaperDetailView() {
  const dispatch = useDispatch();
  const [day, setDay] = useState<number[]>([]);
  const [index, setIndex] = useState<number>(0);
  const readWallPaperData = useSelector((state: RootState) => state.readWallPaperReducer.data);
  const dayFeedData = useSelector((state: RootState) => state.dayFeed.data);
  useEffect(() => {
    for (let i = 1; i <= dayFeedData.length; i++) {
      setDay((day) => [...day, i]);
    }
  }, [dayFeedData]);

  return (
    <div className="wallpaperdetailview-wrapper">
      <div className="detail-title-box">
        <p className="detail-title">{readWallPaperData.title}</p>
        <p className="detail-date">
          {readWallPaperData.firstDay} ~ {readWallPaperData.lastDay}
        </p>
      </div>
      <Tabs
        selectedIndex={index}
        onSelect={(index) => {
          setIndex(index);
        }}
      >
        <TabList className="tab-header">
          {dayFeedData.map((value: DayFeedDataType, i) => {
            return (
              <Tab key={value.archiveId}>
                <TabHeader day={day[i]} index={index} />
              </Tab>
            );
          })}
        </TabList>
        {dayFeedData.map((value: DayFeedDataType) => {
          return (
            <TabPanel key={value.archiveId}>
              <TabBody value={value} />
            </TabPanel>
          );
        })}
      </Tabs>
      <ReactionBar />
    </div>
  );
}

export default WallPaperDetailView;
