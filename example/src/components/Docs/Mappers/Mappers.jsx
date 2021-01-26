/* eslint-disable react/prop-types */
import React from 'react';
import { ReactScrolling } from 'react-auto-glide';
import DisplayCodeAndRender from '../DisplayCodeAndRender/DisplayCodeAndRender';
import './Mappers.scss';

function FlipCard({ img, title }) {
  return (
    <div className="card">
      <div className="front">
        <img src={img} alt="" />
      </div>
      <div className="back">
        {title}
      </div>
    </div>
  );
}

const imgs = [
  { img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png', title: 'React' },
  { img: 'https://cdn.worldvectorlogo.com/logos/redux.svg', title: 'Redux' },
  { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png', title: 'GraphQL' },
  { img: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/943/full/ramda.png', title: 'Ramda' },
];

function Mappers() {
  const compJsx = `export default function FlipCard ({ img, title }) {
  return (
    <div className="card">
      <div className="front">
        <img src={img} alt="" />
      </div>
      <div className="back">
        {title}
      </div>
    </div>
  );
};`;
  const compCss = `.card{
  position: relative;
  margin: 2%;
  width: 90%;
  height: 90%;
}
.front,.back{
  width: 100%;
  height: 100%;
  overflow: hidden;
  backface-visibility: hidden;
  position: absolute;
  transition: transform .6s linear;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: 1px solid #111111;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
.front{
  transform: perspective(600px) rotateY(0deg);
}
.back{
  transform: perspective(600px) rotateY(180deg);
}

.front img {
  width: 80%;
}

.card:hover > .front{
  transform: perspective(600px) rotateY(-180deg);
}
.card:hover > .back{
  transform: perspective(600px) rotateY(0deg);
}`;

  const renderJsx = `import { ReactScrolling } from 'react-auto-glide';
import 'react-auto-glide/dist/index.css';
import FlipCard from './FlipCard';
import { React, Redux, GraphQL, Ramda } from './images';

const imgs = [
  {img: React, title: 'React' },
  {img: Redux, title: 'Redux' },
  {img: GraphQL, title: 'GraphQL' },
  {img: Ramda, title: 'Ramda' },
];

const mapper = ({ img, title }) => <FlipCard img={img} title={title} />;

function App() {
  return (
  <div className="glide-container">
    <ReactScrolling mapper={mapper} list={imgs} />
  </div>
  )
};`;

  const mapper = ({ img, title }) => <FlipCard img={img} title={title} />;

  const renderCss = `body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: centre;
  align-items: centre;
}
.glide-container {
  width: 100%
  height: 20%;
}`;
  return (
    <div className="Mappers__mappers">
      <div className="mappers__container">
        <div className="container__title">
          Advanced Mappers
        </div>
        <div className="container__subtitle">
          By allowing you to pass in a mapper function, you can make the scrolling
          elements as complex as you want, using your own components or templates. Let
          {'\'s '}
          build a component we want to use.
        </div>
        <div className="container__component-code">
          <DisplayCodeAndRender jsx={compJsx} css={compCss} />
        </div>
        <div className="container__subtitle">
          And now we can use this component to render a list of FlipCards!
        </div>
        <div className="container__component-code">
          <DisplayCodeAndRender jsx={renderJsx} css={renderCss} />
        </div>
        <div className="glide-container">
          <ReactScrolling mapper={mapper} list={imgs} width="200px" />
        </div>
      </div>
    </div>
  );
}

export default Mappers;
