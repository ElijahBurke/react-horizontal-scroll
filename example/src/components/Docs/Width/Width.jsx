/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ReactScrolling } from 'react-auto-glide';
import DisplayCodeAndRender from '../DisplayCodeAndRender/DisplayCodeAndRender';
import './Width.scss';
import images from '../../Assetts/skills';

function Width () {
  const [width, setWidth] = useState('30px');
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
    <ReactScrolling mapper={mapper} list={imgs} width="${width}" />
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
    <div className="Width__width">
      <div className="width__container">
        <div className="container__title">
          Element Width
        </div>
        <div className="container__subtitle">
          Pass in the element width prop to define the width of each scrolling element.
        </div>
        <div className="container__subsubtitle">
          We need the width as a prop so that we can
          calculate whether the list needs to be repeated.
          As you can see below the images repeat to fill the container.
        </div>
        <div className="container__code">
          <DisplayCodeAndRender jsx={jsx} css={css} />
        </div>
        <input
          type="range"
          id="width"
          name="width"
          min="30"
          max="200"
          value={width.replace('px', '')}
          onChange={(e) => setWidth(`${e.target.value}px`)}
        />
        <div className="glide-container">
          <ReactScrolling mapper={mapper} list={imgs} width={width} />
        </div>
      </div>
    </div>
  );
}

export default Width;
