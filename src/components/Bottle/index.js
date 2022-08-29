import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import coca from '../../assets/images/coca.png'
import { Container } from '../Bottle/styles';

export default function Bottle({danger}){

  const [ random, setRandom ] = useState();
  const [ correct, setCorrect ] = useState();

  useEffect(() => {
    document.addEventListener('animationiteration', randomNumber)

    function randomNumber(){
      let min = 490;
      let max = 510;
      setRandom(Math.floor(Math.random() * (max - min)) + min);
    }


  }, [setRandom, setCorrect])

  console.log(danger)
  
  return (
    <Container>
      <h1 danger={correct}>{random}</h1>
      <img src={coca} className='coca' alt='bottle'/>
    </Container>
  )
}

Bottle.propTypes = {
  danger: PropTypes.bool,
}