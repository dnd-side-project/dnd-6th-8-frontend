import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

type HeaderProps = {
  title?: string;
};

Header.defaultProps = {
  title: null,
};

function Header({ title }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <header className="header-wrapper">
      {title ? (
        <div className="title">{title}</div>
      ) : (
        <img src="imgs/common/text_logo.png" alt="logo" className="logo" />
      )}
      <button type="button" onClick={() => navigate('/scrap')}>
        <img src="imgs/common/ic_scrap.png" alt="scrap" className="scrap" />
      </button>
    </header>
  );
}

export default Header;
