/* eslint-disable react/prop-types */
import React from 'react';
import { ReactScrolling } from 'react-auto-glide';
import 'react-auto-glide/dist/index.css';
import './BasicSetup.scss';
import DisplayCodeAndRender from '../DisplayCodeAndRender/DisplayCodeAndRender';

function BasicSetup() {
  const imgs = [
    'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
    'https://cdn.worldvectorlogo.com/logos/redux.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png',
    'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/943/full/ramda.png',
  ];

  const mapper = (source) => <img src={source} alt="" />;
  const jsx = `import { ReactScrolling } from 'react-auto-glide';
import 'react-auto-glide/dist/index.css';
import { React, Redux, GraphQL, Ramda } from './images';
// This is an array of locally saved images.
const imgs = [React, Redux, GraphQL, Ramda];
const mapper = (source) => <img src={source} alt="" />;
function App() {
  return (
  <div className="glide-container">
    <ReactScrolling mapper={mapper} list={imgs} />
  </div>
  )
}`;
  const css = `body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: centre;
  align-items: centre;
  padding: 3%
}
.glide-container {
  width: 100%
  height: 20%;
}
.glide-container img {
  width: 80%
}`;
  return (
    <div className="BasicSetup__basic-setup">
      <div className="basic-setup__containers">
        <div className="containers__left">
          <div className="left__title">
            Quick Setup
          </div>
          <div className="left__subtitle">
            This is an out the box example with minimal customization.
            Check out how you can use other props to customise further!
          </div>
        </div>
        <div className="containers__right">
          <DisplayCodeAndRender jsx={jsx} css={css} />
        </div>
        <div className="glide-container">
          <ReactScrolling mapper={mapper} list={imgs} />
        </div>
      </div>
    </div>
  );
}

export default BasicSetup;
