import React from 'react';
import './style.scss';

function DeleteDialog() {
  return (
    <div className="deleteDialog-wrapper">
      <div className="delete-alert">
        <div className="main-text">삭제하시겠어요?</div>
        <div className="sub-text">
          소중한 여행 기록이 삭제되면
          <br /> 복구하실 수 없어요 ㅠㅠ
        </div>
        <div className='box-btn'>
            <div className='btn-left'><span>취소</span></div>
            <div className='btn-right'><span>확인</span></div>
        </div>
      </div>
    </div>
  );
}

export default DeleteDialog;
