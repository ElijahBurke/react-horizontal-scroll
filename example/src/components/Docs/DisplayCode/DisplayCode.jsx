import React, { useEffect, useState } from 'react'
import './DisplayCode.css';
import './prism.css';
import Prism from 'prismjs';

const DisplayCode = ({ containerWidth = '400px', elWidth = '10px', margin = '10px', }) => {
  const [currDisplay, setCurrDisplay] = useState('overview');

  const jsx = `
<div className="container__scrolling" style={{ width: ${containerWidth}}}>
  <ReactScrolling
    list={imgs} 
    mapper={mapper} 
    time="30s"
    width="${elWidth}" 
    margin="${margin}"
  />
</div>
  `
  const css = `
.container__scrolling {
  height: 30%;
}

.img__card {
  width: 100%;
  height: 100%;
  background: #ccc;
  border: #222;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
}
  `
  useEffect(() => {
    Prism.highlightAll();
  }, [currDisplay])
  return (
    <div className="DisplayCode__code">
      <div className="code__buttons">
        <button className={currDisplay === 'overview' ? 'active' : ''} onClick={() => setCurrDisplay('overview')}>
          OverView
        </button>
        <button className={currDisplay === 'js' ? 'active' : ''} onClick={() => setCurrDisplay('js')}>
          JSX
        </button>
        <button className={currDisplay === 'css' ? 'active' : ''} onClick={() => setCurrDisplay('css')}>
          CSS
        </button>
      </div>
      {currDisplay === 'overview' ?
        (<div className="code__overview">
          <div>
            You can customise the width of the scrollable container by placing the component inside of your own container, and it will fit the width of it.
          </div>
          <div>
            This is displayed below by the 'example__container' div. This allows you to place the div wherever you want on the page.
          </div>
          <div>
            You must also set the width and margin of each scrolling element by passing this in as a prop.
          </div>
          <div>
            Change the widths or margins using the sliders to see this in action!
          </div>
          <div>
            To see the JSX for this example, hit the JSX button, and you can find the acompanying CSS on the CSS tab.
          </div>
        </div>) :
        <pre className="pre__code">
          <code className={`language-${currDisplay}`}>
            {currDisplay === 'js' ? jsx : css}
          </code>
        </pre>
      }
    </div>
  )
}

export default DisplayCode;
