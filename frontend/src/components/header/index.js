import React, { useState, useEffect } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import './styles.css';

export default function Header({ children, ...restProps }) {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);

    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`header ${show && 'header__transparent'}`} {...restProps} data-testid="header">
      {children}
    </div>
  );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return (
    <div {...restProps} className="frame">
      {children}
    </div>
  );
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <img alt="" {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return (
    <ReactRouterLink {...restProps} className="buttonLink">
      {children}
    </ReactRouterLink>
  );
};
