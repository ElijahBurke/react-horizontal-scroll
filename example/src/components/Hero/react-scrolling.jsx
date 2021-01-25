import React, { useEffect, useState, useLayoutEffect, useRef } from 'react'
import './component.css';


// export const ReactScrolling = ({ mapper, list, time }) => {
//   const containerRef = useRef();
//   const scrollRef = useRef();
//   const componentRef = useRef();
//   const [componentWidth, setComponentWidth] = useState(null);
//   const [containerWidth, setContainerWidth] = useState(null);
//   const [components, setComponents] = useState([]);

//   const doAnimation = () => {
//     scrollRef.current.style.transition = `${time} linear`;
//     scrollRef.current.style.left = `-${componentWidth}px`;
//     scrollRef.current.addEventListener('transitionend', callRecursive)
//   }

//   function setContainerWidthToRef () {
//     setContainerWidth(containerRef.current.offsetWidth)
//   }

//   function callRecursive (e) {
//     if (e.propertyName === 'left') {
//       this.style.transition = 'none';
//       this.style.left = '';
//       setTimeout(doAnimation, 1);
//       this.removeEventListener('transitionend', callRecursive);
//     }
//   }

//   useLayoutEffect(() => {
//     if (!componentWidth && componentRef.current) setComponentWidth(componentRef.current.offsetWidth);
//     if (!containerWidth && containerRef.current) setContainerWidthToRef();
//     if (componentWidth && containerWidth && (componentWidth < containerWidth)) {
//       setComponents(Array(Math.ceil((containerWidth * 2 - (componentWidth * 2)) / componentWidth)).fill(list))
//     }
//     if (containerWidth && componentWidth && scrollRef.current) doAnimation();
//     return () => { scrollRef.current.removeEventListener('transitionend', callRecursive); }
//   }, [componentWidth, containerWidth, componentRef, containerRef])

//   useEffect(() => {
//     window.addEventListener('resize', setContainerWidthToRef);
//     return () => { window.removeEventListener('resize', setContainerWidthToRef); }
//   }, [])

//   return (
//     <div className="styles-scrolling" ref={containerRef}>
//       <div className="styles-scroll" ref={scrollRef}>
//         <div className="styles-component" ref={componentRef}>
//           {list.map(mapper)}
//         </div>
//         <div className="styles-component">
//           {list.map(mapper)}
//         </div>
//         {components.map((lists) => (
//           <div key={Math.random()} className="styles-component">
//             {lists.map(mapper)}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

const ScrollEl = ({ item, width, mapper, margin, i }) => {
  return (
    <div className="ScrollEl-container" id={`screlc${i}`} style={{ width, margin }}>
      {mapper(item)}
    </div>
  )
}

export const ReactScrolling = ({ mapper, list, time, width, maxContainerWidth = 2000, margin = '0px' }) => {
  const containerRef = useRef();
  const innerRef = useRef();
  const [containerWidth, setContainerWidth] = useState(null);
  const [numCanFit] = useState(Math.ceil(maxContainerWidth / width.replace('px', '')));
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
    <div className="styles-container" ref={containerRef}>
      <div className="styles-inner-container" ref={innerRef}>
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