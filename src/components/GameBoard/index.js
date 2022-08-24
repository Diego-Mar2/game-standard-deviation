import { render } from "@testing-library/react";
import React from "react";

import { Container, Scroll } from './styled'

import coca from '../../assets/images/coca.png'
import normal from '../../assets/images/normal.png'

export default function GameBoard() {
  return (
    <Container>
          <img src={normal} class='normal'/>
          <table class='table'/>
          <Scroll>
            <p>500ml</p>
            <img src={coca} class='coca'/>
          </Scroll>
    </Container>
  )
}