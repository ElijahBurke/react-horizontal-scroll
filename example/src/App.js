import React from 'react'

import { ReactScrolling } from 'react-horizontal-scroll'
import 'react-horizontal-scroll/dist/index.css'

const imgs = [
  'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
  'https://cdn.worldvectorlogo.com/logos/redux.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png',
  // 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/943/full/ramda.png',
  // 'https://iconape.com/wp-content/files/fh/110909/png/typescript.png',
  // 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
  // 'https://www.nextontop.com/assets/img/services/web/expressjs.svg',
  // 'https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png',
  // 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
  // 'https://cdn.worldvectorlogo.com/logos/sequelize.svg',
  // 'https://img.icons8.com/color/452/mongodb.png',
  // 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png',
];

const ShowImg = ({ img }) => <img src={img} alt="" />

const MapImg = ({ list }) => list.map(item => (
<div className="img-container" key={item}>
  <ShowImg img={item} />
</div>
))

const ScrollableDiv = ReactScrolling(MapImg);

const App = () => {
  return (
  <div className="whole-page">
    <div className="scrolling-container">
      <ScrollableDiv list={imgs} time="10s" />
    </div>
  </div>
  )
}

export default App
