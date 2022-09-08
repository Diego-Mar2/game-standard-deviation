import React from "react";

import hearth from '../../assets/images/hearth.png'

import { Container, Health } from "./styles";

export default function Header(props){
    
  return(
    <Container>
      <h1 className='score'>SCORE:</h1>
      <h1>{props.points}</h1>
    <Health>
      <img src={hearth} className='hearth' alt='hearth' />
      <h1>x {props.lostPoints}</h1>
    </Health>
    </Container>
  )
}