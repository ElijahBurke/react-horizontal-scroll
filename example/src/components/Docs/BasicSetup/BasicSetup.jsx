/* eslint-disable react/prop-types */
import React from 'react';
import { ReactScrolling } from 'react-auto-glide';
import 'react-auto-glide/dist/index.css';
import '../Mappers/Mappers.scss';
import DisplayCodeAndRender from '../DisplayCodeAndRender/DisplayCodeAndRender';
import images from '../../Assetts/skills';

function BasicSetup () {
  const imgs = images.slice(4);

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
    <div className="Mappers__mappers">
      <div className="mappers__container">
        <div className="container__title">
          Quick Start
          </div>
        <div className="container__subtitle">
          This is an out the box example with minimal customization.
          Check out how you can use other props to customise further!
        </div>
        <div className="container__component-code">
          <DisplayCodeAndRender jsx={jsx} css={css} />
        </div>
        <div className="glide-container">
          <ReactScrolling mapper={mapper} list={imgs} width="200px" />
        </div>
      </div>
    </div>
  );
}

export default BasicSetup;
