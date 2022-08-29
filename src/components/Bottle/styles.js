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
    width: 0 auto;
    display: flex;
    flex-direction: column;
    bottom: 15px;
    left: 470px;
    
    animation: ${animationCoca} 4s infinite linear;

    h1{
      color: ${({danger}) => (
        danger ? '#f00' : '#000'
      )};
    }

      .coca{
        width:20px;
        margin: 0 auto;
      }

`
