/* eslint-disable react/prop-types */
import React from 'react';
import './Docs.scss';
import GettingStarted from './GettingStarted/GettingStarted';
import BasicSetup from './BasicSetup/BasicSetup';
import DocsSideNav from './DocsSideNav/DocsSideNav';
import Mappers from './Mappers/Mappers';
import Width from './Width/Width';
import Time from './Time/Time';
import Delay from './Delay/Delay';

function Docs({ name }) {
  return (
    <div>
      <DocsSideNav name={name} />
      {name === 'getting-started'
      && (
        <>
          <GettingStarted />
          <BasicSetup />
        </>
      )}
      {name === 'mappers' && <Mappers />}
      {name === 'width' && <Width />}
      {name === 'time' && <Time />}
      {name === 'delay' && <Delay />}
    </div>
  );
}

export default Docs;
