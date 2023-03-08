import {createGlobalStyle} from 'styled-components';
import HeaderFont from '../assets/fonts/Audiowide-Regular.ttf';

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Audiowide';
    src: url(${HeaderFont}) format('ttf');
  }`;
