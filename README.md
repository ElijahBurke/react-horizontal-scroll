# react-horizontal-scroll

> Customizable component which lets you have your own content scroll accross a div automatically.

[![NPM](https://img.shields.io/npm/v/react-horizontal-scroll.svg)](https://www.npmjs.com/package/react-horizontal-scroll) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-horizontal-scroll
```

## Usage

```jsx
import { ReactScrolling } from 'react-horizontal-scroll';
import 'react-horizontal-scroll/dist/index.css'

const imgs = [
  React,
  Redux,
  GraphQL,
  Ramda,
  TypeScript,
  NodeJS,
  Express,
  Jest,
  PostgreSQL,
  Sequelize,
  MongoDB,
  Mongoose,
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
```

## License

MIT © [ElijahBurke](https://github.com/ElijahBurke)
