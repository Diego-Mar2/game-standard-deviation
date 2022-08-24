import React from 'react';
import GlobalStyles from '../../assets/styles/global'
import { Container } from './styles'

import GameBoard from '../GameBoard'



function App() {
  return (
    <>
      <GlobalStyles/>
      <Container>
        <GameBoard/>
      </Container>
    </>
  )
}

export default App;