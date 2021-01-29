import React from 'react';
import './Hero.scss';
import { ReactScrolling } from 'react-auto-glide';
import 'react-auto-glide/dist/index.css';
import { useHistory } from 'react-router-dom';
import imgs from '../Assetts/skills';

const mapper = (item) => (
  <div className="scrolling__container">
    <div className="container__card">
      <img src={item} alt="" />
    </div>
  </div>
);

function Hero () {
  const history = useHistory();
  return (
    <div className="Hero__hero">
      <div className="hero__title">
        React Auto Carousel
      </div>
      <div className="hero__subtitle">
        Customisable Carousel That Displays Your Content In A
        Gliding React Component
      </div>
      <div className="hero__glide-container">
        <ReactScrolling mapper={mapper} list={imgs} time="30s" width="200px" />
      </div>
      <div className="hero__buttons">
        <button type="button">
          <a href="https://github.com/ElijahBurke/react-horizontal-scroll" rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
        </button>
        <button type="button" onClick={() => history.push('/docs/getting-started')}>
          Docs
        </button>
      </div>
    </div>
  );
}

export default Hero;
