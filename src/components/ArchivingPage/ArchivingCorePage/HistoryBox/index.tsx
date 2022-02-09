import React, { useEffect, useState } from 'react';
import './style.scss';

type HistoryBoxProps = {
  sharedInfo: Array<{
    archivingStyle : string,
    region : string,
    period: string; 
    completeArchive : string, 
    title : string, 
  }>;
  personalInfo: Array<{
    archivingStyle : string,
    region : string, 
    period: string;
    completeArchive : string, 
    title : string, 
  }>;
};

interface IconArray {
    archivingStyle: string;
    region: string;
    period: string;
    completeArchive: string;
    title : string;
}

function HistoryBox({ sharedInfo, personalInfo }: HistoryBoxProps) {
  const [historyIcon, setHistoryIcon] = useState<boolean>(false);
  const [iconArray, setIconArray] = useState<IconArray[]>([]);
  useEffect(() => {
    if (sharedInfo !== undefined || personalInfo !== undefined) {
      setHistoryIcon(true);
      setIconArray([...sharedInfo, ...personalInfo]);
    }
  }, [sharedInfo, personalInfo]);
  return (
    <div className="historybox-wrapper">
      <div className="history-inner-box">
        <img className="pencil" src="/imgs/ArchivingPage/ArchivingCorePage/emoji_pencil.png" alt="연필" />
        <div className="history-box-number">
          <span>지금까지 기록한 여행</span> <span className="count">{iconArray.length}</span>
        </div>
      </div>
      <div className="history-icon">
        {historyIcon ? (
          <>
            {iconArray.map((value: IconArray) => {
              return (
                <div className="icon-box" key={value.title}>
                  <div className="icon">🚄</div>
                  <div className="region">
                    {value.region}
                    {`(${1})`}
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
