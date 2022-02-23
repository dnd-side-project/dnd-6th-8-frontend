import React, { useCallback, useState } from 'react';
import './style.scss';

type DeleteDialog = {
  deleteClick: boolean;
  setDeleteClick: (click: boolean) => void;
  agreeClick: boolean;
  setAgreeClick: (click: boolean) => void;
};

function DeleteDialog({ deleteClick, setDeleteClick, agreeClick, setAgreeClick }: DeleteDialog) {
  const onCancelClick = useCallback(() => {
    setDeleteClick(false);
  }, []);

  const onAgreeClick = useCallback(() => {
    setDeleteClick(false);
    setAgreeClick(true);
    setTimeout(() => {
      setAgreeClick(false);
    }, 2000);
  }, []);

  return (
    <div className="deleteDialog-wrapper">
      <div className="delete-alert">
        <div className="main-text">삭제하시겠어요?</div>
        <div className="sub-text">
          소중한 여행 기록이 삭제되면
          <br /> 복구하실 수 없어요 ㅠㅠ
        </div>
        <div className="box-btn">
          <div role="button" tabIndex={0} className="btn-left" onClick={onCancelClick} onKeyDown={onCancelClick}>
            <span>취소</span>
          </div>
          <div role="button" tabIndex={0} className="btn-right" onClick={onAgreeClick} onKeyDown={onAgreeClick}>
            <span>확인</span>
          </div>
        </div>
      </div>
      )
    </div>
  );
}

export default DeleteDialog;
