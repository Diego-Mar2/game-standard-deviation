import React from 'react';

import { Container } from './styles'

import Employee from '../Employee';
import Bottle from '../Bottle'

import machine from '../../assets/images/machine3.gif'

export default function GameBoard() {
    
  return (
    <Container> 
      <img src={machine} className='machine' alt='background'/>
      <Employee/>
      <div className='table'/>
      <Bottle/>
    </Container>
  )
}