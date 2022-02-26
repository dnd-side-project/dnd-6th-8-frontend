import React, { useEffect, useState } from 'react';
import ArchivingLoadingPage from '../../components/ArchivingPage/ArchivingLoadingPage';
import ArchivingCorePage from '../../components/ArchivingPage/ArchivingCorePage';
import './style.scss';
import Header from '../../components/common/Header';
import DeleteDialog from '../../components/ArchivingPage/ArchivingCorePage/DeleteDialog';
import DeleteAgree from '../../components/ArchivingPage/ArchivingCorePage/DeleteAgree';
import NavigationBar from '../../components/common/NavigationBar';

function ArchivingPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [deleteClick, setDeleteClick] = useState<boolean>(false);
  const [agreeClick, setAgreeClick] = useState<boolean>(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 150000);
  //   return () => {
  //     setLoading(true);
  //   };
  // }, []);

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
