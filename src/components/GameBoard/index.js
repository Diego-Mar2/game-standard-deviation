import React, { useCallback, useState } from 'react';

import { Container } from './styles'

import Employee from '../Employee';
import Bottle from '../Bottle'

export default function GameBoard() {

  const [bottleInfo, setBottleInfo] = useState({
    stateColors: undefined
  });

  const handleChangeColorState = useCallback((isBlackColor) => {
    setBottleInfo((prevState) => {
      return {
        ...prevState, 
        stateColors: isBlackColor
      }
    })
  }, [])
  
  return (
    <Container>
      <Employee stateColors={bottleInfo.stateColors}/>
      <div className='table'/>
      <Bottle bottleInfo={bottleInfo} handleChangeColorState={handleChangeColorState}/>
    </Container>
  )
}