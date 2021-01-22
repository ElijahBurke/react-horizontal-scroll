import React, { useEffect, useLayoutEffect, useRef, useState }  from 'react'
import styles from './styles.module.css'


// const ScrollingElements = (props) => {
//   const ref = useRef();
  
//   useEffect(() => {
//     if (ref.current) {
//       props.setRefs(refs => [...refs, ref.current]);
//     }
//   }, [ref])
  
//   return (
//       {props.children}
//     </div>
//   )
// }

export const ReactScrolling = (Component) => 
  function Scrolling ({time, ...props}) {
    const containerRef = useRef();
    const scrollRef = useRef();
    const componentRef = useRef();
    const [componentWidth, setComponentWidth] = useState(null);
    const [containerWidth, setContainerWidth] = useState(null);
    const [components, setComponents] = useState([]);

    const doAnimation = () => {
      scrollRef.current.style.transition = `${time} linear`;
      scrollRef.current.style.left = `-${componentWidth}px`;
      scrollRef.current.addEventListener('transitionend', callRecursive)
    }

    function setContainerWidthToRef() {
      setContainerWidth(containerRef.current.offsetWidth)
    }

    function callRecursive() {
      this.style.transition = 'none';
      this.style.left = '';
      setTimeout(doAnimation, 1);
      this.removeEventListener('transitionend', callRecursive);
    }

    useLayoutEffect(() => {
      if (!componentWidth && componentRef.current) setComponentWidth(componentRef.current.offsetWidth);
      if (!containerWidth && containerRef.current) setContainerWidthToRef();
      if (componentWidth && containerWidth && (componentWidth < containerWidth)) {
        setComponents(Array(Math.ceil((containerWidth * 2 - (componentWidth * 2)) / componentWidth)).fill(Component))
      }
      if (containerWidth && componentWidth && scrollRef.current) doAnimation();
      return () => { scrollRef.current.removeEventListener('transitionend', callRecursive); }
    }, [componentWidth, containerWidth, componentRef, containerRef])

    useEffect(() => {
      window.addEventListener('resize', setContainerWidthToRef);
      return () => { window.removeEventListener('resize', setContainerWidthToRef); }  
    }, [])

    return (
      <div className={styles.scrolling} ref={containerRef}>
        <div className={styles.scroll} ref={scrollRef}>
          <div className={styles.component} ref={componentRef}>
            <Component {...props} />
          </div>
          <div className={styles.component}>
            <Component {...props} />
          </div>
         {components.map((Comp) => (
           <div key={Math.random()} className={styles.component}>
            <Comp {...props} />
           </div>
          ))}
        </div>
      </div>
    )
  }


