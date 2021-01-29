/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './DocsSideNav.scss';
import { useHistory } from 'react-router-dom';

function DocsSideNav ({ name }) {
  const history = useHistory();
  return (
    <>
      <div className="DocsSideNav__nav">
        <button className={name === 'getting-started' ? 'active' : undefined} type="button" onClick={() => history.push('/docs/getting-started')}>Getting Started</button>
        <button className={name === 'quick-start' ? 'active' : undefined} type="button" onClick={() => history.push('/docs/quick-start')}>Quick Start</button>
        <button className={name === 'width' ? 'active' : undefined} type="button" onClick={() => history.push('/docs/width')}>Element Width</button>
        <button className={name === 'time' ? 'active' : undefined} type="button" onClick={() => history.push('/docs/time')}>Time</button>
        <button className={name === 'delay' ? 'active' : undefined} type="button" onClick={() => history.push('/docs/delay')}>Delay Scroll</button>
        <button className={name === 'mappers' ? 'active' : undefined} type="button" onClick={() => history.push('/docs/mappers')}>More Advanced Mappers</button>
      </div>
    </>
  );
}

export default DocsSideNav;
