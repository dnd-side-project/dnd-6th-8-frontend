import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../../assets/icons/UserProfile/Header/ic_back 1.png';

type UserProfileHeaderProps = {
  title?: string;
};

UserProfileHeader.defaultProps = {
  title: null,
};

function UserProfileHeader({title} : UserProfileHeaderProps) {
  const navigate = useNavigate(); 
  const gotoMyPage = () => {
    navigate(-1);
  } 
  return (
    <div className="userProfileHeader-wrapper">
      <img src={BackIcon} alt="back-Icon" onClick={gotoMyPage} aria-hidden='true'/>
      {
        title && <div className='title'>{title}</div>
      }
    </div>
  );
}

export default UserProfileHeader;
