import React from 'react';
import './Option.scss';

type OptionProps = {
  number: string | null;
  select: number;
  setSelect: React.Dispatch<React.SetStateAction<number>>;
  onSelectSurvey: (type: string, options: string | boolean) => void;
};

function Option({ number, onSelectSurvey, select, setSelect }: OptionProps) {
  let text: string[] = [];
  let src: string[] = [];
  let option: string[] | boolean[] = [];
  let type = '';
  switch (number) {
    case '1':
      type = 'haveCompanion';
      text = ['혼자 여행', '동행과의 여행'];
      src = ['emoji_person_survey.png', 'emoji_group_survey.png'];
      option = [false, true];
      break;
    case '2':
      type = 'budget';
      text = ['최소한으로 준비', '넉넉하게 준비'];
      src = ['emoji_moneydown_survey.png', 'emoji_moneyup_survey.png'];
      option = ['최소한', '넉넉'];
      break;
    case '3':
      type = 'archivingStyle';
      text = ['여행에 대한 실용적인 정보', '여행에서 느낀 감정 위주의 글'];
      src = ['emoji_info_survey.png', 'emoji_feeling_survey.png'];
      option = ['정보', '감성'];
      break;
    default:
  }
  return (
    <div className="option-wrapper">
      <button
        type="button"
        className={`option-container${select === 0 ? ' select' : ''}`}
        onClick={() => {
          onSelectSurvey(type, option[0]);
          setSelect(0);
        }}
      >
        <img src={`/imgs/Survey/${src[0]}`} alt="icon" className="icon" />
        <div className="text">{text[0]}</div>
      </button>
      <button
        type="button"
        className={`option-container ${select === 1 && 'select'}`}
        onClick={() => {
          setSelect(1);
          onSelectSurvey(type, option[1]);
        }}
      >
        <img src={`/imgs/Survey/${src[1]}`} alt="icon" className="icon" />
        <div className="text">{text[1]}</div>
      </button>
    </div>
  );
}

export default Option;
