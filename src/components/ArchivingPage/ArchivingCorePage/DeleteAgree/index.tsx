import React from 'react';
import { ReactComponent as DeleteAlert } from '../../../../assets/icons/ArchivingPage/ArchivingCorePage/delete_alert.svg';
import './style.scss';

function DeleteAgree() {
  return (
    <div className="deleteAgree-wrapper">
      <DeleteAlert />
    </div>
  );
}

export default DeleteAgree;
