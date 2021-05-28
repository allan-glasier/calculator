import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


* {
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
}

p, span {
  color: #fff;  
  margin: 0;  
}

body {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3a4563;

}  

  /* ----------HEAD STYLES---------- */

  .calc-container {
    width: 540px;
    height: 708px;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border: 1px solid red;
    .title {
      font-size: 2rem;
      letter-spacing: -0.533333px;
    }

    .theme {
      display: flex;
      align-items: flex-end;
    }

    .theme-title,
    span {
      text-transform: uppercase;
      font-size: 0.75rem;
      line-height: 0.813rem;
      letter-spacing: 1px;
      padding-bottom: 5px;
    }

    .theme-controls {
      display: flex;
      flex-direction: column;
      margin-left: 21px;
      .theme-options {
        display: flex;
        justify-content: space-around;
        padding: 0 7px;
      }
      .theme-slider {
        width: 71px;
        height: 26px;
        background: #242d44;
        border-radius: 13px;
        display: flex;
        justify-content: flex-start;
        .slider-toggle {
          height: 16px;
          width: 16px;
          background: #d03f2f;
          border-radius: 50%;
          margin: 5px;
        }
      }
    }
  }

  /* ----------SCREEN STYLES---------- */
  .screen {
    height: 128px;
    width: 540px;
    margin-top: 32px;
    background: #181f33;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 10px;
    .display {
      color: #fff;
      font-size: 3rem;
      line-height: 3.375rem;
      letter-spacing: -0.8px;
      margin-right: 32px;
    }
  }
  /* ----------KEY STYLES---------- */


`;

export default GlobalStyles;
