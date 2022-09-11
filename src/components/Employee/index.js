import React, { useEffect, useRef, useState } from 'react';

import normal from '../../assets/images/normal.png'
import arm from '../../assets/images/arm.png'
import Header from '../Header'

import { Container } from './styles';

export default function Employee({ stateColors }) {

  const myRef = useRef();

  const [points, setPoints] = useState(0)
  const [lostPoints, setLostPoints] = useState(3) 


  useEffect(() => {
    document.addEventListener('keypress', handleEmployeeActive, true);
    document.addEventListener('keyup', handleEmployeeDisable, true);
    document.addEventListener('touchstart', handleEmployeeActive, true);
    document.addEventListener('touchend', handleEmployeeDisable, true);
    document.addEventListener('animationiteration', checkLostPoints, true);

    let fired = false;

    const cocaContainer = document.querySelector('.cocaContainer');
    const gameOver = document.querySelector('.gameOver');
    const start = document.querySelector('.start');

    if (lostPoints === 0) {
      cocaContainer.style.animation = 'none';
      gameOver.style.opacity = 1;
    }

    function handleEmployeeActive() {
      myRef.current.setAttribute('src', arm);

      cocaContainer.style.animationPlayState = 'running'
      start.style.opacity = 0;

      if (fired === false) {
        fired = true;
        const employeePosition = myRef.current.offsetLeft;
        const bottlePosition = cocaContainer.offsetLeft;
        const rangePickUp = bottlePosition > employeePosition - 50 && bottlePosition < employeePosition + 50

        if (rangePickUp) {
          if (stateColors === false) {
            setPoints(points + 10)
          } else {
            setLostPoints(lostPoints - 1)
          }
          cocaContainer.style.opacity = 0;
        }
      }
    }

    function handleEmployeeDisable() {
      myRef.current.setAttribute('src', normal);
      fired = false;
    }

    function checkLostPoints() {
      if (stateColors === false && cocaContainer.style.opacity === '1') {
        setLostPoints(lostPoints - 1)
      }
    }

    return () => {
      document.removeEventListener('keypress', handleEmployeeActive, true);
      document.removeEventListener('keyup', handleEmployeeDisable, true);
      document.removeEventListener('touchstart', handleEmployeeActive, true);
      document.removeEventListener('touchend', handleEmployeeDisable, true);
      document.removeEventListener('animationiteration', checkLostPoints, true);
    }
  }, [points, lostPoints, stateColors])

  return (
    <Container>
      <Header points={points} lostPoints={lostPoints} />
      <div className='modal'>
        <h1 className='gameOver' >GAME OVER</h1>
        <h1 className='start' >CLICK TO START</h1>
      </div>
      <img src={normal} ref={myRef} className='employee' alt='employee' />
    </Container>
  )
}