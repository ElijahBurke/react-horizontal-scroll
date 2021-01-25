import React from 'react'
import './Docs.css';
import ShowWidth from './ShowWidth/ShowWidth';

// has to go in a container (show customisable width) also show customize width of the scroll el
// delay from when it reaches the end of page.

const Docs = () => {
  return (
    <div className="Docs__docs">
      <ShowWidth />
    </div>
  )
}

export default Docs;
