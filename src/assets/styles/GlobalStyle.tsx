import { createGlobalStyle } from "styled-components";
import NunitoRegular from "../fonts/Nunito-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Nunito';
    src: local('Nunito'), local('Nunito'),
    url(${NunitoRegular}) format('ttf'); 
  } 
`;

export default GlobalStyle;
