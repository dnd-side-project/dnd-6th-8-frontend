import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Percentage from '../../components/Survey/Percentage';
import Question from '../../components/Survey/Question';
import Option from '../../components/Survey/Option';
import './Survey.scss';

type SurveySaveRequestType = {
  archivingStyle: string;
  budget: string;
  haveCompanion: boolean | null;
};

function Survey() {
  const [select, setSelect] = useState<number>(-1); // 선택된 옵션

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const number: string | null = searchParams.get('number');

  // 사용자 Survey 데이터
  const [userSurvey, setUserSurvey] = useState<SurveySaveRequestType>({
    archivingStyle: '',
    budget: '',
    haveCompanion: null,
  });

  // 사용자 Survey 데이터 변경
  const onSelectSurvey = useCallback(
    (type: string, option: string | boolean) => {
      setUserSurvey({ ...userSurvey, [type]: option });
      onNextSurvey();
    },
    [userSurvey, number],
  );

  // 다음 survey 이동 (url parameter 변경)
  const onNextSurvey = useCallback(() => {
    let next = '';
    if (number !== null) {
      next = parseInt(number, 10) < 3 ? (parseInt(number, 10) + 1).toString() : '3';
    }
    setTimeout(() => {
      setSearchParams({ number: next });
    }, 1000);
  }, [number]);

  // 페이지 쿼리 변경될때마다 선택된 효과 초기화
  useEffect(() => {
    setSelect(-1);
  }, [number]);

  // 홈 페이지로 이동
  const onSubmitHandler = useCallback(() => {
    navigate('/home');
  }, []);

  const postSurvey = async () => {
    try {
      await axios.post('/api/v1/user/survey', userSurvey);
      // console.log(response);
    } catch (e) {
      // console.log(e);
    }
    onSubmitHandler();
  };

  return (
    <div className="survey-wrapper">
      <div className="survey">
        <Percentage number={number} />
        <Question number={number} />
        <Option number={number} select={select} setSelect={setSelect} onSelectSurvey={onSelectSurvey} />
      </div>
      {number === '3' && (
        <button
          type="button"
          className={`button${
            userSurvey.archivingStyle !== '' && userSurvey.budget !== '' && userSurvey.haveCompanion !== null
              ? ' finish'
              : ''
          }`}
          onClick={postSurvey}
        >
          트레셔스 시작하기
        </button>
      )}
    </div>
  );
}

export default Survey;
