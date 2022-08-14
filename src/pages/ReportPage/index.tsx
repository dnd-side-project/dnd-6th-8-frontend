import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './style.scss';
import { useDispatch } from 'react-redux';
import cancel from '../../assets/icons/ReportPage/cancel.png';
import instance from '../../lib/axios';
import { postReport } from '../../modules/report/report';

function ReportPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [reportContent, setReportContent] = useState<string | null>(null);
  const goBack = () => {
    navigate(-1);
  };
  const reportSubmit = async () => {
    if (reportContent === null || undefined) return;
    // dispatch(postReport(String(id), reportContent));
    const data = {
      reportType: reportContent,
    };
    await instance
      .post(`/api/v1/report/archives/${id}`, data)
      .then((res) => {
        alert('신고가 완료되었습니다.');
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onListClick = (content: string) => {
    console.log(content);
    setReportContent(content);
  };
  return (
    <div className="reportpage-wrapper">
      <header className="report-header">
        <div>
          <img src={cancel} alt="cancel" onClick={goBack} aria-hidden />
        </div>
        <p>신고하기</p>
        <div />
      </header>
      <main>
        <p className="top-content">
          타당한 근거 없이 신고된 내용은
          <br />
          관리자 확인 후 반영되지 않을 수 있습니다.
        </p>
        <ul className="report-list">
          <li className={reportContent === '홍보' ? 'bold' : ''} onClick={() => onListClick('홍보')} aria-hidden>
            <div className={reportContent === '홍보' ? 'active' : 'non-active'} />
            홍보,영리목적
          </li>
          <li className={reportContent === '음란물' ? 'bold' : ''} onClick={() => onListClick('음란물')} aria-hidden>
            <div className={reportContent === '음란물' ? 'active' : 'non-active'} />
            음란물 및 성적 불쾌감
          </li>
          <li className={reportContent === '욕설' ? 'bold' : ''} onClick={() => onListClick('욕설')} aria-hidden>
            <div className={reportContent === '욕설' ? 'active' : 'non-active'} />
            욕설 및 비하
          </li>
          <li className={reportContent === '도배' ? 'bold' : ''} onClick={() => onListClick('도배')} aria-hidden>
            <div className={reportContent === '도배' ? 'active' : 'non-active'} />
            도배,스팸
          </li>
          <li className={reportContent === '사기' ? 'bold' : ''} onClick={() => onListClick('사기')} aria-hidden>
            <div className={reportContent === '사기' ? 'active' : 'non-active'} />
            사기 및 거짓정보
          </li>
          <li
            className={reportContent === '지적재산권' ? 'bold' : ''}
            onClick={() => onListClick('지적재산권')}
            aria-hidden
          >
            <div className={reportContent === '지적재산권' ? 'active' : 'non-active'} />
            지적재산권 및 저작권 침해
          </li>
        </ul>
      </main>
      <button className={reportContent === null ? 'btn-submit' : 'btn-active'} type="submit" onClick={reportSubmit}>
        신고하기
      </button>
    </div>
  );
}

export default ReportPage;
