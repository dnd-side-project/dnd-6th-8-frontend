import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../../assets/icons/UserProfile/Header/ic_back 1.png';

function UserProfileHeader() {
  const navigate = useNavigate(); 
  const gotoMyPage = () => {
    navigate('/mypage');
  } 
  return (
    <div className="userProfileHeader-wrapper">
      <img src={BackIcon} alt="back-Icon" onClick={gotoMyPage} aria-hidden='true'/>
    </div>
  );
}

export default UserProfileHeader;
