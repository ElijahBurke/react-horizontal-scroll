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

const ScrollEl = ({ item, width, mapper, left, time, numCanFit, maxleft }) => {
  const ref = useRef();
  const doAnim = (ref) => {
    console.log(ref);
    ref.style.transition = `${time.replace('s', '') / numCanFit}s linear`;
    ref.style.left = `${ref.style.left.replace('px', '') - width.replace('px', '')}px`;
    if (ref.style.left === `-${width}`) ref.addEventListener('transitionend', resetOnTransition)
    else ref.addEventListener('transitionend', transition)
  }
  function transition (e) {
    if (e.target === ref.current) {
      setTimeout(() => doAnim(this), 1);
      this.removeEventListener('transitionend', transition)
    }
  }
  function resetOnTransition (e) {
    if (e.target === ref.current) {
      this.style.transition = 'none';
      this.style.left = maxleft;
      setTimeout(() => doAnim(this), 1);
      this.removeEventListener('transitionend', resetOnTransition)
    }
  }
  useLayoutEffect(() => {
    if (ref.current) {
      setTimeout(() => doAnim(ref.current), 1)
    }
    return () => {
      ref.current.removeEventListener('transitionend', transition);
      ref.current.removeEventListener('transitionend', resetOnTransition);
    }
  }, [ref])
  return (
    <div className="ScrollEl-container" id={`screlc${left} `} style={{ width, left }} ref={ref}>
      {mapper(item)}
    </div>
  )
}

export const ReactScrolling = ({ mapper, list, time, width, maxContainerWidth = 2000 }) => {
  const containerRef = useRef();
  const innerRef = useRef();
  const [containerWidth, setContainerWidth] = useState(null);
  const [numCanFit] = useState(Math.ceil(maxContainerWidth / width.replace('px', '')));
  const [displayList, setDisplayList] = useState(null);

  function setContainerWidthToRef () {
    setContainerWidth(containerRef.current.offsetWidth)
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
          left={`${width.replace('px', '') * i}px`}
          time={time}
          numCanFit={numCanFit}
          maxleft={(displayList.length - 1) * width.replace('px', '') + 'px'}
        />)}
      </div>
    </div>
  )
}