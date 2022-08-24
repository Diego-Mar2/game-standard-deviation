import styled, {keyframes} from 'styled-components'

const animationCoca = keyframes`
  from {
    left: -10%;
  }
  to{
    left: 100%;
  }
`

export const Container = styled.div`
      .normal{
      transform: scaleX(-1);
      width: 40px;
      position: absolute;
      display: block;
      bottom: 0px;
      left: 60%;
      
    }
    .table{
      position: absolute;
      display: block;
      bottom: 10px;
      width:100%;
      height: 15px;
      background: linear-gradient(to left top, #808080, #C0C0C0);
      border: 1px solid #666666;
    }

`

export const Scroll = styled.div`
    position: absolute;
    width: 0 auto;
    display: flex;
    flex-direction: column;
    bottom: 15px;
    left: 0;
    border: 1px solid black;
    animation: ${animationCoca} 2s infinite linear;

      .coca{
        width:20px;
        margin: 0 auto;
      }

`