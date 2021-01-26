import React from 'react';
import './GettingStarted.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ReactScrolling } from 'react-auto-glide';
import 'react-auto-glide/dist/index.css';

function GettingStarted() {
  const install = `# install the latest version
$ npm i react-auto-slide`;

  const importString = `import { ReactScrolling } from 'react-auto-glide';
import 'react-auto-glide/dist/index.css';`;

  const preReqs = `const imgs = [React, Redux, GraphQL, Ramda];
const mapper = (source) => <img src={source} alt="" />;`;

  const render = `<div className="glide-container">
  <ReactScrolling mapper={mapper} list={imgs} />
</div>`;

  const imgs = [
    'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
    'https://cdn.worldvectorlogo.com/logos/redux.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png',
    'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/943/full/ramda.png',
  ];

  const mapper = (source) => <img src={source} alt="" />;

  return (
    <div className="GettingStarted__install">
      <div className="install__inner">
        <div className="install__title">
          Getting Started
        </div>
        <div className="install__subsubtitle">
          To add this to your project run the following in your terminal:
        </div>
        <div className="install__install__npm code__area">
          <SyntaxHighlighter language="bash" style={styles.atomOneDark}>
            {install}
          </SyntaxHighlighter>
        </div>
        <div className="install__import">
          Import the package in to the component you wish to use it in.
        </div>
        <div className="install__import-code code__area">
          <SyntaxHighlighter language="javascript" style={styles.atomOneDark}>
            {importString}
          </SyntaxHighlighter>
        </div>
        <div className="install__pre-reqs">
          Create a list and a function for converting items of that
          lists in to the elements you wish to render.
        </div>
        <div className="install__pre-reqs-code code__area">
          <SyntaxHighlighter language="javascript" style={styles.atomOneDark}>
            {preReqs}
          </SyntaxHighlighter>
        </div>
        <div className="install__pre-reqs">
          Now you can render the Auto Glide component inside of a container which
          controls where the div will be positioned.
        </div>
        <div className="install__pre-reqs-code code__area">
          <SyntaxHighlighter language="jsx" style={styles.atomOneDark}>
            {render}
          </SyntaxHighlighter>
        </div>
        <div className="install__pre-reqs">
          And That
          {'\''}
          s it! Below is what this would render. See further down for this example put
          into one block!
        </div>
        <div className="glide-container">
          <ReactScrolling mapper={mapper} list={imgs} />
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;
