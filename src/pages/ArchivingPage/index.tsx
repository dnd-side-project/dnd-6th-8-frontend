import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArchivingLoadingPage from '../../components/ArchivingPage/ArchivingLoadingPage';
import ArchivingCorePage from '../../components/ArchivingPage/ArchivingCorePage';
import './style.scss';
import Header from '../../components/common/Header';
import DeleteDialog from '../../components/ArchivingPage/ArchivingCorePage/DeleteDialog';
import DeleteAgree from '../../components/ArchivingPage/ArchivingCorePage/DeleteAgree';
import NavigationBar from '../../components/common/NavigationBar';
import { RootState } from '../../modules';
import { myArchivesIsShared, myArchivesPrivate } from '../../modules/post/archives';

function ArchivingPage() {
  const dispatch = useDispatch(); 
  const loading = useSelector((state: RootState) => state.myArchivesReducer.loading);
  const [deleteClick, setDeleteClick] = useState<boolean>(false);
  const [agreeClick, setAgreeClick] = useState<boolean>(false);

  useEffect(() => {
    dispatch(myArchivesIsShared());
    dispatch(myArchivesPrivate());
  }, []);


  return (
    <div className="archivingpage-wrapper">
      {deleteClick && (
        <DeleteDialog
          deleteClick={deleteClick}
          setDeleteClick={setDeleteClick}
          agreeClick={agreeClick}
          setAgreeClick={setAgreeClick}
        />
      )}
      {agreeClick && <DeleteAgree />}
      <Header title="기록하기" />
      <div className="archivingpage-main-area">
        {loading ? <ArchivingLoadingPage /> : <ArchivingCorePage setDeleteClick={setDeleteClick} />}
      </div>
      <NavigationBar />
    </div>
  );
}

export default ArchivingPage;
