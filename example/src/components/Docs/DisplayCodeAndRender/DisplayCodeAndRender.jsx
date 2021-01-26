/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './DisplayCodeAndRender.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/hljs';

function DisplayCodeAndRender({ css, jsx, buttonsRight }) {
  const [currActive, setCurrActive] = useState('jsx');
  return (
    <>
      <div className="display__tabs" style={{ justifyContent: buttonsRight ? 'flex-end' : '' }}>
        <button className={currActive === 'jsx' ? 'active' : ''} type="button" onClick={() => setCurrActive('jsx')}>
          JSX
        </button>
        <button className={currActive === 'css' ? 'active' : ''} type="button" onClick={() => setCurrActive('css')}>
          CSS
        </button>
      </div>
      <div className="display__css-jsx">
        <SyntaxHighlighter language={currActive} style={styles.atomOneDark} wrapLongLines>
          {currActive === 'jsx' ? jsx : css}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export default DisplayCodeAndRender;
