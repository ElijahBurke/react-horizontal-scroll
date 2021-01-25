import React from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const history = useHistory();
  return (
    <nav className="Nav__nav">
      <a href="">
        GITHUB
      </a>
      <a href="">
        NPM
      </a>
      <a onClick={() => history.push('/docs')}>
        DOCS
      </a>
    </nav>
  )
}

export default Nav;
