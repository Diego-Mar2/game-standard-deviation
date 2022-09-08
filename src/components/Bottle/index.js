import React, { useRef, useEffect, useState } from 'react';

import coca from '../../assets/images/coca.png'
import { Container } from '../Bottle/styles';

export default function Bottle({ bottleInfo, handleChangeColorState }) {

  const bottleRef = useRef();

  const [stateValue, setValue] = useState('500');

  useEffect(() => {
    document.addEventListener('animationiteration', randomNumber);

    function randomNumber() {
      let min = 490;
      let max = 510;
      setValue(Math.floor(Math.random() * (max - min)) + min);

      bottleRef.current.style.opacity = 1;
    }

    return () => {
      document.removeEventListener('animationiteration', randomNumber)
    }

  }, [])

  useEffect(() => {

    const isBlackColor = stateValue >= 495 && stateValue <= 505
    handleChangeColorState(isBlackColor);

  }, [stateValue, handleChangeColorState])


  return (
    <Container ref={bottleRef} stateColors={bottleInfo.stateColors} className='cocaContainer'>
      <h1>{stateValue}</h1>
      <img src={coca} className='coca' alt='bottle' />
    </Container>
  )
}