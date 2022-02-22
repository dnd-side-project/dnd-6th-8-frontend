import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SurveyStart.scss';

function SurveyStart() {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate('/home');
  };
  return (
    <div className="surveyStart-wrapper">
      <div className="middle">
        <img alt="survey illust" src="/imgs/SurveyStart/illust_survey.png" className="illust" />
        <div className="description">
          <span className="bold">1분도 안 걸리는 간단한 질문</span>
          <span>으로</span>
          <div>취향에 맞는 피드를 제공해드릴게요!</div>
        </div>
        <button type="button" className="skip-button" onClick={gotoHome} aria-hidden="true">
          다음에 할래요!
        </button>
      </div>
      <button type="button" className="start-button" onClick={() => navigate('/survey?number=1')}>
        간단한 응답 시작하기
      </button>
    </div>
  );
}

export default SurveyStart;
