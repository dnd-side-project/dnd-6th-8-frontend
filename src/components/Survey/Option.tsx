import React from 'react';
import './Option.scss';

type OptionProps = {
  number: string | null;
  onNextSurvey: () => void;
  select: number;
  setSelect: React.Dispatch<React.SetStateAction<number>>;
};

function Option({ number, onNextSurvey, select, setSelect }: OptionProps) {
  let text1 = '';
  let text2 = '';
  let src1 = '';
  let src2 = '';
  switch (number) {
    case '1':
      text1 = '혼자 여행';
      text2 = '동행과의 여행';
      src1 = 'emoji_person_survey.png';
      src2 = 'emoji_group_survey.png';
      break;
    case '2':
      text1 = '최소한으로 준비';
      text2 = '넉넉하게 준비';
      src1 = 'emoji_moneydown_survey.png';
      src2 = 'emoji_moneyup_survey.png';
      break;
    case '3':
      text1 = '여행에 대한 실용적인 정보';
      text2 = '여행에서 느낀 감정 위주의 글';
      src1 = 'emoji_info_survey.png';
      src2 = 'emoji_feeling_survey.png';
      break;
    default:
  }
  return (
    <div className="option-wrapper">
      <button
        type="button"
        className={`option-container ${select === 1 && 'select'}`}
        onClick={() => {
          onNextSurvey();
          setSelect(1);
        }}
      >
        <img src={`/imgs/Survey/${src1}`} alt="icon" className="icon" />
        <div className="text">{text1}</div>
      </button>
      <button
        type="button"
        className={`option-container ${select === 2 && 'select'}`}
        onClick={() => {
          onNextSurvey();
          setSelect(2);
        }}
      >
        <img src={`/imgs/Survey/${src2}`} alt="icon" className="icon" />
        <div className="text">{text2}</div>
      </button>
    </div>
  );
}

export default Option;
