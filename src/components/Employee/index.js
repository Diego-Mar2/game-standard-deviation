import React from 'react';

import normal from '../../assets/images/normal.png'
import arm from '../../assets/images/arm.png'
import { Container } from './styles';

export default function Employee(){

  let imagens = {
    normal,
    arm
  }

  function handleEmployeeA(event){
    if(event.key === ' '){
      setImage('arm')
    } 
  }
  
  function handleEmployeeN(event){
    if(event){
      setImage('normal')
    }
  }
  document.addEventListener('keypress', handleEmployeeA, true); 
  document.addEventListener('keyup', handleEmployeeN, true)

  const [ imagem, setImage ] = React.useState('normal')  

  return(
    <Container>
      <img src={imagens[imagem]} className='employee' alt='employee'/>
    </Container>
  )
}