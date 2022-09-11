import { createGlobalStyle } from 'styled-components';

import  ARCADECLASSIC  from '../fonts/ARCADECLASSIC.TTF'

export default createGlobalStyle`
@font-face {
  font-family: ArcadeClassic;
  src: url(${ARCADECLASSIC}) format('truetype');
}
  *{
    margin: 0;
    padding: 0;
    font-family: 'ArcadeClassic';
    font-size: 20px;
  }
`