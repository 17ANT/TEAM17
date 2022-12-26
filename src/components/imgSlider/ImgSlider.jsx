import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const Slider = styled.div`
  position: relative;
  width: 304px;
  height: 228px;
  overflow: hidden;
`;

const ImgContainer = styled.ul`
  display: flex;
  width: 304px;
  height: 228px;
  transition: 0.3s;
  ${(props) =>
    props.position &&
    css`
      transform: translate(${props.position * -100}%);
    `}
`;

const ImgItem = styled.li`
  img {
    width: 304px;
    height: 228px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 12px;

  display: flex;
  flex: 0 0 6px;
  gap: 6px;
  z-index: 10;
`;

const Dots = styled.button`
  background-color: #fff;
  height: 6px;
  padding: 0px;
  flex: 0 0 6px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--error-color);
    `}
`;

export default function ImgSlider({ images }) {
  const [showIndex, setShowIndex] = useState(0);
  const dotsRef = useRef(null);

  useEffect(() => {
    const dotsRefList = dotsRef.current.childNodes;
    dotsRefList.forEach((el) => {
      el.active = false;
    });
    dotsRefList[showIndex]['active'] = true;
  }, [showIndex]);

  const handleDots = (e) => {
    const dotsList = Array.from(dotsRef.current.childNodes);
    setShowIndex(dotsList.indexOf(e.target));
  };

  return (
    <>
      {images && (
        <Slider>
          <ImgContainer position={showIndex}>
            {images.map((el, idx) => (
              <ImgItem key={idx}>
                <img src={el} alt="" />
              </ImgItem>
            ))}
          </ImgContainer>
          {images.length > 1 && (
            <DotsContainer ref={dotsRef}>
              {images.map((el, idx) => (
                <Dots key={idx} active={showIndex === idx} onClick={handleDots}></Dots>
              ))}
            </DotsContainer>
          )}
        </Slider>
      )}
    </>
  );
}