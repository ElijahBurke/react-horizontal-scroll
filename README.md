# React Auto Glide

> Customizable component which lets you have your own content glide smoothly accross the screen.

[![NPM](https://img.shields.io/npm/v/react-auto-scroll.svg)](https://www.npmjs.com/package/react-auto-scroll) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-auto-glide
```

## Usage

[See the docs for more in depth demos and examples!](https://autoglide.netlify.app/)

```jsx
import { ReactScrolling } from 'react-auto-glide';
import 'react-auto-glide/dist/index.css'

const imgs = [
  React, Redux, GraphQL, Ramda,
];

const mapper = item => (
  <div className="img-container" key={item}>
    <Img src={item} alt="" />
  </div>
)

const App = () => {
  return (
  <section className="hero">
    <div className="scrolling-container">
      <ReactScrolling
        mapper={mapper}
        list={imgs} 
        time="30s"
        width="100px"
        delayBetweenScroll="1000"
      />
    </div>
  </section>
  )
}
```

## Props

[See the docs for more information about each prop and examples of how it effects the container](https://autoglide.netlify.app/)

| Prop | Description | Required | Default |
| ---- | ----------- | -------- | ------- |
| mapper | A function for rendering each element in your list exactly as required. | Required | n/a |
| list | An array of items for the mapper function to be applied too | Required | n/a |
| time | The amount of time you want it to take for the elements to glide from the right of the container to the left of the container | Not Required | 30s |
| width | String that defines the width for each element inside the div which is scrolling | Not Required | "100px" |
| delayBetweenScroll | Number that defines ms between element reaching the end of the container and scroll restarting, if no number is entered defaults to no delay | Not Required | No Delay |

## License

MIT © [ElijahBurke](https://github.com/ElijahBurke)
