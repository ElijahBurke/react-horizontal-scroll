import React, { useEffect, useLayoutEffect, useRef, useState }  from 'react'
import styles from './styles.module.css'

const ScrollEl = ({ item, width, mapper, i }) => {
  return (
    <div className={styles.scrollel} id={`screlc${i}`} style={{ width }}>
      {mapper(item)}
    </div>
  )
}

// add box-sizing border box && add padding option

export const ReactScrolling = ({ mapper, list, time = "30s", width = "100px", maxContainerWidth = "2000px", delayBetweenScroll = 1}) => {
  const containerRef = useRef();
  const innerRef = useRef();
  const [containerWidth, setContainerWidth] = useState(null);
  const [numCanFit] = useState(Math.ceil(maxContainerWidth.replace('px', '') / width.replace('px', '')));
  const [canFitInContainer, setCanFitInContainer] = useState(null);
  const [displayList, setDisplayList] = useState(null);
  const [children, setChildren] = useState(null);

  function setContainerWidthToRef () {
    setContainerWidth(containerRef.current.offsetWidth)
    setCanFitInContainer(Math.ceil(containerRef.current.offsetWidth / width.replace('px', '')))
  }

  useEffect(() => {
    if (numCanFit && list.length < numCanFit) {
      setDisplayList(Array(Math.ceil(numCanFit / list.length)).fill(list).flat())
    } else if (numCanFit) {
      setDisplayList(list);
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
    innerRef.current.style.left = `-${width}`;
    innerRef.current.addEventListener('transitionend', resetTransition);
  };

  function resetTransition (e) {
    if (e.target === innerRef.current) {
      innerRef.current.style.transition = 'none';
      innerRef.current.style.left = 0;
      this.removeEventListener('transitionend', resetTransition);
      children[children.length - 1].after(children[0]);
      setTimeout(() => doParentAnim(width), delayBetweenScroll);
    }
  }

  useEffect(() => {
    if (children && numCanFit && innerRef.current) {
      innerRef.current.style.transition = 'none';
      innerRef.current.style.left = 0;
      doParentAnim(width);
    }
    return () => { innerRef.current && innerRef.current.removeEventListener('transitionend', resetTransition)};
  }, [children, numCanFit, innerRef, width])

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
          i={i}
        />)}
      </div>
    </div>
  )
}