/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { HomeFeedsType, DayFeedDataType, ReadWallPaperDataType } from '../../../constants';
import { RootState } from '../../../modules';
import { readDayFeed } from '../../../modules/post/dayfeed';
import ReactionBar from '../ReactionBar';
import './style.scss';
import TabBody from './TabBody';
import TabHeader from './TabHeader';

function WallPaperDetailView() {
  const dispatch = useDispatch();
  const [index, setIndex] = useState<number>(0);
  const readWallPaperData = useSelector((state: RootState) => state.readWallPaperReducer.data);
  useEffect(() => {
    dispatch(readDayFeed('64', '1'));
  }, []);
  return (
    <div className="wallpaperdetailview-wrapper">
      <div className="detail-title-box">
        <p className="detail-title">{readWallPaperData.title}</p>
        <p className="detail-date">
          {readWallPaperData.firstDay} ~ {readWallPaperData.lastDay}
        </p>
      </div>
      {/* <Tabs
        selectedIndex={index}
        onSelect={(index) => {
          setIndex(index);
        }}
      >
        <TabList className="tab-header">
          {dayFeedData.map((value: DayFeedDataType) => {
            return (
              <Tab key={value.day}>
                <TabHeader day={value.day} index={index} />
              </Tab>
            );
          })}
        </TabList>
        {dayFeedData.map((value: DayFeedDataType) => {
          return (
            <TabPanel key={value.day}>
              <TabBody value={value} />
            </TabPanel>
          );
        })}
      </Tabs>
      <ReactionBar /> */}
    </div>
  );
}

export default WallPaperDetailView;
