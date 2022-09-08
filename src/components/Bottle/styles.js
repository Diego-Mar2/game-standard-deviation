import styled, { keyframes } from 'styled-components'

const animationCoca = keyframes`
  from {
    left: -10%;
  }
  to{
    left: 100%;
  }
`

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 15px;
    animation: ${animationCoca} 1.5s infinite linear;   
    animation-play-state: paused;

    h1{
      color: ${({stateColors}) => stateColors ? 'black' : 'red'};
    }
    
      .coca{
        width:20px;
        margin: 0 auto;
      }

`
