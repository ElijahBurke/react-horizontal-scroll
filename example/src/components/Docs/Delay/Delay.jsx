/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ReactScrolling } from 'react-auto-glide';
import DisplayCodeAndRender from '../DisplayCodeAndRender/DisplayCodeAndRender';
import '../Width/Width.scss';

function Delay() {
  const [time, setTime] = useState('1');
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
    <ReactScrolling mapper={mapper} list={imgs} delayBetweenScroll="${time}" />
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

  const onChange = (e) => {
    setTime(e.target.value);
  };
  return (
    <div className="Width__width">
      <div className="width__container">
        <div className="container__title">
          Delay Scroll
        </div>
        <div className="container__subtitle">
          Use the delayBetweenScroll to control the time (in ms) between scrolls
        </div>
        <div className="container__subsubtitle">
          Play around with the slider below and see how it effects the prop in the code snippet!
        </div>
        <div className="container__code">
          <DisplayCodeAndRender jsx={jsx} css={css} />
        </div>
        <input
          type="range"
          id="width"
          name="width"
          min="1"
          max="5001"
          step="500"
          value={time}
          onChange={onChange}
        />
        <div className="glide-container">
          <ReactScrolling mapper={mapper} list={imgs} delayBetweenScroll={time} width="150px" />
        </div>
      </div>
    </div>
  );
}

export default Delay;
