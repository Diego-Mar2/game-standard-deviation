import styled from 'styled-components'

export const Container = styled.div`
  .gameOver{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    font-size: 40px;
    opacity: 0;
    }

  .employee{
      transform: scaleX(-1);
      height: 120px;
      position: absolute;
      display: block;
      bottom: 0px;
      right: 35%;
    }
`