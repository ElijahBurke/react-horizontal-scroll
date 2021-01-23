import React, { useEffect, useState, useLayoutEffect, useRef } from 'react'
import './Hero.css';
import Nav from '../Nav/Nav';

// import { ReactScrolling } from 'react-horizontal-scroll'
// import 'react-horizontal-scroll/dist/index.css'
import { ReactScrolling } from './react-scrolling';
import { mapper } from './mapper';
// const ScrollableDiv = ReactScrolling(MapImg);

const imgs = [
  {img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png', title: 'React'},
  {img: 'https://cdn.worldvectorlogo.com/logos/redux.svg', title: 'Redux'},
  {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png', title: 'GraphQL'},
  {img: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/943/full/ramda.png', title: 'Ramda'},
  {img: 'https://iconape.com/wp-content/files/fh/110909/png/typescript.png', title: 'TypeScript'},
  {img: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg', title: 'NodeJS'},
  {img: 'https://www.nextontop.com/assets/img/services/web/expressjs.svg', title: 'Express'},
  {img: 'https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png', title: 'Jest'},
  {img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png', title: 'Postgres'},
  {img: 'https://cdn.worldvectorlogo.com/logos/sequelize.svg', title: 'Sequelize'},
  {img: 'https://img.icons8.com/color/452/mongodb.png', title: 'MongoDB'},
  {img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png', title: 'Mongoose'},
];


const Hero = () => {
  return (
  <section className="home__hero">
    <div className="hero__title">
      Auto Carousel
    </div>
    <div className="hero__subtitle">
      Customisable Carousel That Automatically Displays Your Content In An Automatically Scrolling React Component
    </div>
    <div className="scrolling-container">
      <ReactScrolling mapper={mapper} list={imgs} time="20s" width="150px" />
    </div>
    <div className="hero__buttons">
      <button type="submit">
        GitHub
      </button>
      <button type="submit">
        Docs 
      </button>
    </div>
  </section>
  )
}

export default Hero;
