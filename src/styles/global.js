import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --grass: #D6EBDC;
    --fire: #FFEBCA;
    --water: #DFECF5;
    --bug: #E6ECD7;
    --normal: #E8E8E8;
    --poison: #F6EFF9;
    --ground: #F5E4DB;
    --fairy: rgba(221, 138, 220, 0.2);
    --fighting: #C44D6167;
    --flying: #E8E8E8;
    --rock: #E7F5F2;
    --ghost: #DFE2F1;
    --steel: #DCDBD6;
    --electric: #FFF27588;
    --psychic: #EB8C8533;
    --ice: #E5F3F0;
    --dragon: #46699933;
    --dark: #3D3C3F33;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #F6F6F6;
    font-size: 1.6rem;
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
  }
`;
