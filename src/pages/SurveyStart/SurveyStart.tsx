import React from 'react';
import './SurveyStart.scss';
import SurveyIllust from '../../assets/icons/Survey/illust_survey.png';

function SurveyStart() {
  return (
    <div className="surveyStart-wrapper">
      <div className="middle">
        <img alt="survey illust" src={SurveyIllust} className="illust" />
        <div className="description">
          <span className="bold">1분도 안 걸리는 간단한 질문</span>
          <span>으로</span>
          <div>취향에 맞는 피드를 제공해드릴게요!</div>
        </div>
        <button type="button" className="skip-button">
          다음에 할래요!
        </button>
      </div>
      <button type="button" className="start-button">
        간단한 응답 시작하기
      </button>
    </div>
  );
}

export default SurveyStart;
