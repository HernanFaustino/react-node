import React from 'react';
import './styles.css';

export default function Footer({ children, ...restProps }) {
  return (
    <div className="container" {...restProps}>
      {children}
    </div>
  );
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return (
    <div className="row" {...restProps}>
      {children}
    </div>
  );
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return (
    <div className="column" {...restProps}>
      {children}
    </div>
  );
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return (
    <a className="link" {...restProps}>
      {children}
    </a>
  );
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return (
    <p className="title" {...restProps}>
      {children}
    </p>
  );
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return (
    <p className="text" {...restProps}>
      {children}
    </p>
  );
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return (
    <p className="break" {...restProps}>
      {children}
    </p>
  );
};
