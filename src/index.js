import React, { useEffect, useLayoutEffect, useRef, useState }  from 'react'
import styles from './styles.module.css'

const ScrollEl = ({ item, width, mapper, margin, i }) => {
  return (
    <div className="ScrollEl-container" id={`screlc${i}`} style={{ width, margin }}>
      {mapper(item)}
    </div>
  )
}

// DO WE NEED TO CHANGE IT SO ITS THE DEFAULT BOX-SIZING?

export const ReactScrolling = ({ mapper, list, time = "30s", width = "100px", maxContainerWidth = "2000px", margin = '0px' }) => {
  const containerRef = useRef();
  const innerRef = useRef();
  const [containerWidth, setContainerWidth] = useState(null);
  const [numCanFit] = useState(Math.ceil(maxContainerWidth.replace('px', '') / width.replace('px', '')));
  const [canFitInContainer, setCanFitInContainer] = useState(null);
  const [displayList, setDisplayList] = useState(null);
  const [children, setChildren] = useState(null);
  const [totalWidth] = useState(`${+width.replace('px', '') + (margin.replace('px', '') * 2)}px`)

  function setContainerWidthToRef () {
    setContainerWidth(containerRef.current.offsetWidth)
    setCanFitInContainer(Math.ceil(containerRef.current.offsetWidth / totalWidth))
  }

  useEffect(() => {
    if (numCanFit && list.length < numCanFit) {
      setDisplayList(Array(Math.ceil(numCanFit / list.length)).fill(list).flat())
    }
  }, [numCanFit])

  useLayoutEffect(() => {
    if (!containerWidth && containerRef.current) {
      setContainerWidthToRef();
    }
  }, [containerWidth, containerRef])

  useLayoutEffect(() => {
    if (innerRef.current) {
      setChildren(innerRef.current.children);
    }
  }, [innerRef])

  function doParentAnim () {
    innerRef.current.style.transition = `${time.replace('s', '') / numCanFit}s linear`;
    innerRef.current.style.left = `-${totalWidth}`;
    innerRef.current.addEventListener('transitionend', resetTransition);
  };

  function resetTransition (e) {
    if (e.target === innerRef.current) {
      innerRef.current.style.transition = 'none';
      innerRef.current.style.left = 0;
      this.removeEventListener('transitionend', resetTransition);
      children[children.length - 1].after(children[0]);
      setTimeout(doParentAnim, 1);
    }
  }

  useEffect(() => {
    if (children && numCanFit && innerRef.current) {
      doParentAnim();
    }
  }, [children, numCanFit, innerRef])

  useEffect(() => {
    if (containerRef.current) window.addEventListener('resize', setContainerWidthToRef)
    return () => { window.removeEventListener('resize', setContainerWidthToRef); }
  }, [containerRef])

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.innercontainer} ref={innerRef}>
        {displayList && displayList.map((item, i) => <ScrollEl
          key={Math.random()}
          item={item}
          width={width}
          mapper={mapper}
          time={time}
          margin={margin}
          i={i}
        />)}
      </div>
    </div>
  )
}