/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { daysObjectiveResponseDtoList, daysSubjectiveResponseDtoList } from '../../../constants';
import { RootState } from '../../../modules';
import { readDayFeed } from '../../../modules/post/dayfeed';
import ReactionBar from '../ReactionBar';
import './style.scss';
import TabBody from './TabBody';
import TabHeader from './TabHeader';

function WallPaperDetailView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [index, setIndex] = useState<number>(0);
  const dayFeedData = useSelector((state: RootState) => state.dayFeed.data);
  useEffect(() => {
    console.log('여기서 아카이빙 id', id);
    if (id !== undefined) dispatch(readDayFeed(id));
  }, [dispatch]);
  return (
    <div className="wallpaperdetailview-wrapper">
      <div className="detail-title-box">
        <p className="detail-title">{dayFeedData && dayFeedData?.daysInArchiveDto.archiveTitle}</p>
        <p className="detail-date">
          {dayFeedData && dayFeedData?.daysInArchiveDto.firstDay} ~ {dayFeedData && dayFeedData?.daysInArchiveDto.lastDay}
        </p>
      </div>
      <Tabs
        selectedIndex={index}
        onSelect={(index) => {
          setIndex(index);
        }}
      >
        <TabList className="tab-header">
          {dayFeedData &&
            dayFeedData.daysSubjectiveResponseDtoList.map((value: daysSubjectiveResponseDtoList, i: number) => {
              return (
                <Tab key={value.dayNumber}>
                  <TabHeader day={value.dayNumber} index={index} />
                </Tab>
              );
            })}
        </TabList>
        {dayFeedData &&
          dayFeedData.daysObjectiveResponseDtoList.map((value: daysObjectiveResponseDtoList, i: number) => {
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
