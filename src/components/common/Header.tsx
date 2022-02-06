import React from 'react';
import './Header.scss';

type HeaderProps = {
  title?: string;
};

Header.defaultProps = {
  title: null,
};

function Header({ title }: HeaderProps) {
  return (
    <header className="header-wrapper">
      {title ? (
        <div className="title">{title}</div>
      ) : (
        <img src="imgs/common/text_logo.png" alt="logo" className="logo" />
      )}
      <img src="imgs/common/ic_scrap.png" alt="scrap" className="scrap" />
    </header>
  );
}

export default Header;
