import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

var styles = {"container":"_1Lxpd","innercontainer":"_19cNY","Scrollel":"_I-TbL"};

var ScrollEl = function ScrollEl(_ref) {
  var item = _ref.item,
      width = _ref.width,
      mapper = _ref.mapper,
      i = _ref.i;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.scrollel,
    id: "screlc" + i,
    style: {
      width: width
    }
  }, mapper(item));
};

var ReactScrolling = function ReactScrolling(_ref2) {
  var mapper = _ref2.mapper,
      list = _ref2.list,
      _ref2$time = _ref2.time,
      time = _ref2$time === void 0 ? "30s" : _ref2$time,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? "100px" : _ref2$width,
      _ref2$delayBetweenScr = _ref2.delayBetweenScroll,
      delayBetweenScroll = _ref2$delayBetweenScr === void 0 ? 1 : _ref2$delayBetweenScr;
  var containerRef = useRef();
  var innerRef = useRef();

  var _useState = useState(null),
      containerWidth = _useState[0],
      setContainerWidth = _useState[1];

  var _useState2 = useState(null);

  var _useState3 = useState(null),
      canFitInContainer = _useState3[0],
      setCanFitInContainer = _useState3[1];

  var _useState4 = useState(null),
      displayList = _useState4[0],
      setDisplayList = _useState4[1];

  var _useState5 = useState(null),
      children = _useState5[0],
      setChildren = _useState5[1];

  function setContainerWidthToRef() {
    setContainerWidth(containerRef.current.offsetWidth);
    setCanFitInContainer(Math.ceil(containerRef.current.offsetWidth / width.replace('px', '')));
  }

  useEffect(function () {
    if (canFitInContainer && list.length < canFitInContainer) {
      setDisplayList(Array(Math.ceil(canFitInContainer / list.length)).fill(list).flat());
    } else if (canFitInContainer) {
      setDisplayList(list);
    }
  }, [canFitInContainer]);
  useLayoutEffect(function () {
    if (!containerWidth && containerRef.current) {
      setContainerWidthToRef();
    }
  }, [containerWidth, containerRef]);
  useLayoutEffect(function () {
    if (innerRef.current) {
      setChildren(innerRef.current.children);
    }
  }, [innerRef]);

  function doParentAnim(width) {
    innerRef.current.style.transition = time.replace('s', '') / canFitInContainer + "s linear";
    innerRef.current.style.left = "-" + width;
    innerRef.current.addEventListener('transitionend', resetTransition);
  }

  function resetTransition(e) {
    if (e.target === innerRef.current) {
      innerRef.current.style.transition = 'none';
      innerRef.current.style.left = 0;
      this.removeEventListener('transitionend', resetTransition);
      children[children.length - 1].after(children[0]);
      setTimeout(function () {
        return doParentAnim(width);
      }, delayBetweenScroll);
    }
  }

  useEffect(function () {
    if (children && canFitInContainer && innerRef.current) {
      innerRef.current.style.transition = 'none';
      innerRef.current.style.left = 0;
      setTimeout(function () {
        return doParentAnim(width);
      }, delayBetweenScroll);
    }

    return function () {
      innerRef.current && innerRef.current.removeEventListener('transitionend', resetTransition);
    };
  }, [children, innerRef, width, canFitInContainer, time, delayBetweenScroll]);
  useEffect(function () {
    if (containerRef.current) window.addEventListener('resize', setContainerWidthToRef);
    return function () {
      window.removeEventListener('resize', setContainerWidthToRef);
    };
  }, [containerRef]);
  return /*#__PURE__*/React.createElement("div", {
    className: styles.container,
    ref: containerRef
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.innercontainer,
    ref: innerRef
  }, displayList && displayList.map(function (item, i) {
    return /*#__PURE__*/React.createElement(ScrollEl, {
      key: Math.random(),
      item: item,
      width: width,
      mapper: mapper,
      time: time,
      i: i
    });
  })));
};

export { ReactScrolling };
//# sourceMappingURL=index.modern.js.map
