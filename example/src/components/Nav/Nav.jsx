/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const history = useHistory();
  return (
    <nav className="Nav__nav">
      <a href="https://github.com/ElijahBurke/react-horizontal-scroll" rel="noopener noreferrer" target="_blank">
        GITHUB
      </a>
      <a href="https://www.npmjs.com/package/react-auto-glide" rel="noopener noreferrer" target="_blank">
        NPM
      </a>
      <a href="#" onClick={() => history.push('/docs/getting-started')}>
        DOCS
      </a>
    </nav>
  );
};

export default Nav;
