/* eslint-disable no-restricted-globals */
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import instance from '../../../../lib/axios';
import { myArchivesIsShared, myArchivesPrivate } from '../../../../modules/post/archives';
import './style.scss';

type DeleteDialog = {
  deleteClick: boolean;
  setDeleteClick: (click: boolean) => void;
  agreeClick: boolean;
  setAgreeClick: (click: boolean) => void;
  deleteId: number | undefined;
  setDeleteId: (number: number) => void;
};

function DeleteDialog({ deleteClick, setDeleteClick, agreeClick, setAgreeClick, deleteId, setDeleteId }: DeleteDialog) {
  const dispatch = useDispatch();
  const onCancelClick = useCallback(() => {
    setDeleteClick(false);
  }, []);

  const onAgreeClick = useCallback(() => {
    setDeleteClick(false);
    setAgreeClick(true);
    console.log(deleteId);
    instance.delete(`/api/v1/archives/${deleteId}`).then((res) => {
      setDeleteId(-1);
      dispatch(myArchivesIsShared());
      dispatch(myArchivesPrivate());
    });
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
