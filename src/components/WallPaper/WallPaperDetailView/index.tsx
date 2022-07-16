/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { DayFeedDataType, daysObjectiveResponseDtoList, daysSubjectiveResponseDtoList } from '../../../constants';
import { RootState } from '../../../modules';
import { readDayFeed } from '../../../modules/post/dayfeed';
import ReactionBar from '../ReactionBar';
import './style.scss';
import TabBody from './TabBody';
import TabHeader from './TabHeader';

function WallPaperDetailView() {
  const dispatch = useDispatch();
  const [index, setIndex] = useState<number>(0);
  const dayFeedData = useSelector((state: RootState) => state.dayFeed.data);

  return (
    <div className="wallpaperdetailview-wrapper">
      <div className="detail-title-box">
        <p className="detail-title">{dayFeedData.daysInArchiveDto.archiveTitle}</p>
        <p className="detail-date">
          {dayFeedData.daysInArchiveDto.firstDay} ~ {dayFeedData.daysInArchiveDto.lastDay}
        </p>
      </div>
      <Tabs
        selectedIndex={index}
        onSelect={(index) => {
          setIndex(index);
        }}
      >
        <TabList className="tab-header">
          {dayFeedData.daysSubjectiveResponseDtoList.map((value: daysSubjectiveResponseDtoList, i: number) => {
            return (
              <Tab key={value.dayNumber}>
                <TabHeader day={value.dayNumber} index={index} />
              </Tab>
            );
          })}
        </TabList>
        {dayFeedData.daysObjectiveResponseDtoList.map((value: daysObjectiveResponseDtoList, i: number) => {
          return (
            <TabPanel key={value.travelTime}>
              <TabBody index={index} />
            </TabPanel>
          );
        })}
      </Tabs>
      <ReactionBar />
    </div>
  );
}

export default WallPaperDetailView;
