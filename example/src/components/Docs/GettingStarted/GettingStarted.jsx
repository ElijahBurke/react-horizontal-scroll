import React from 'react';
import './GettingStarted.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ReactScrolling } from 'react-auto-glide';
import 'react-auto-glide/dist/index.css';
import images from '../../Assetts/skills';

function GettingStarted () {
  const install = `# install the latest version
$ npm i react-auto-slide`;

  const importString = `import { ReactScrolling } from 'react-auto-glide';
import 'react-auto-glide/dist/index.css';`;

  const preReqs = `const imgs = [React, Redux, GraphQL, Ramda];
const mapper = (source) => <img src={source} alt="" />;`;

  const render = `<div className="glide-container">
  <ReactScrolling mapper={mapper} list={imgs} />
</div>`;

  const imgs = images.slice(4);

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
          s it! Below is what this would render. See the quick start page
          for all this code in one block.
        </div>
        <div className="glide-container">
          <ReactScrolling mapper={mapper} list={imgs} />
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;
