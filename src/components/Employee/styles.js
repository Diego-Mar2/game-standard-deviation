import styled from 'styled-components'

export const Container = styled.div`
  .modal{
    width: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
  }
  .gameOver{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    font-size: 40px;
    opacity: 0;
    }

  .start{
    display: flex;
    justify-content: center;
    font-size: 35px;
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