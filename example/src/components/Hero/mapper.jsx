import React from 'react';
import './Card.css';

const ShowImg = ({ img }) => <img src={img} alt="" />

const ShowTitle = ({ title }) => <div>{title}</div>

const FlipCard = (Component1, Component2) => function Flip ({ img, title }) {
  return (
    <div className="card">
      <div className="front">
        <Component1 img={img} />
      </div>
      <div className="back">
        <Component2 title={title} />
      </div>
    </div>
  );
};

const FlipImg = FlipCard(ShowImg, ShowTitle);


export const mapper = item => (
  <div className="img-container" key={item.title}>
    <FlipImg img={item.img} title={item.title} />
  </div>
);

