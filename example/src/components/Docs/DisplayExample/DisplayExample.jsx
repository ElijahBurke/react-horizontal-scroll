import React from 'react'
import './DisplayExample.css';
import { ReactScrolling } from '../../Hero/react-scrolling';

const imgs = [
  'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
  'https://cdn.worldvectorlogo.com/logos/redux.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png',
  'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/943/full/ramda.png',
  'https://iconape.com/wp-content/files/fh/110909/png/typescript.png',
  'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
  'https://www.nextontop.com/assets/img/services/web/expressjs.svg',
  'https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
  'https://cdn.worldvectorlogo.com/logos/sequelize.svg',
  'https://img.icons8.com/color/452/mongodb.png',
  'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png',
];

const mapper = (img) => (
  <div className="img__card">
    <img src={img} />
  </div>
)

const DisplayExample = () => {
  return (
    <div className="DisplayExample__example">
      <div className="example__container">
        <div className="container__scrolling" style={{ width: '400px' }}>
          <ReactScrolling list={imgs} mapper={mapper} time="80s" width="50px" margin="10px" />
        </div>
      </div>
    </div>
  )
}

export default DisplayExample;
