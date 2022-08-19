import React from 'react';
import './ReportCompleteModal.scss';
import Alert from '../../../assets/icons/ReportPage/Report-alert.png';

function ReportCompleteModal() {
  return (
    <div className="reportcompletemodal-wrapper">
      <img src={Alert} alt="알림" />
    </div>
  );
}

export default ReportCompleteModal;
