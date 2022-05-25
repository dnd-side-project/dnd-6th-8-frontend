import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import { archivingType } from '../../../../constants/index';
import { RootState } from '../../../../modules';

function HistoryBox() {
  const sharedData = useSelector((state: RootState) => state.myArchivesReducer.sharedData);
  const privateData = useSelector((state: RootState) => state.myArchivesReducer.privateData);
  const [tempData, setTempData] = useState<archivingType[]>();
  const [myArchivingData, setMyArchivingData] = useState([] as any);

  const filterPlaces = ()=>{
    if (tempData !== undefined && sharedData.length !== 0 && privateData.length !== 0) {
      const placeCount = tempData.reduce((acc: any, cur: any) => {
        const temp = acc[cur.places];
        const count = temp || 0;
        return {
          ...acc,
          [cur.places]: count + 1,
        };
      }, {});
      setMyArchivingData(Object.entries(placeCount));
    }
  };

  useEffect(() => {
    setTempData([...sharedData, ...privateData]);
    filterPlaces();
  }, [sharedData, privateData]);

  return (
    <div className="historybox-wrapper">
      <div className="history-inner-box">
        <img className="pencil" src="/imgs/ArchivingPage/ArchivingCorePage/emoji_pencil.png" alt="연필" />
        <div className="history-box-number">
          <span>지금까지 기록한 여행</span> <span className="count">{tempData && tempData.length}</span>
        </div>
      </div>
      <div className="history-icon">
        {myArchivingData.length !== 0 ? (
          <>
            {myArchivingData.map((value: any) => {
              return (
                <div className="icon-box" key={value[0]}>
                  <div className="icon">🚄</div>
                  <div className="region">
                    {value[0]}
                    {`(${value[1]})`}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>기록한 여행이 없습니다.</>
        )}
      </div>
    </div>
  );
}

export default HistoryBox;
