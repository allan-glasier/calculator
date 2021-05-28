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

  // - Mobile: 375px
// - Desktop: 1440px

  .calc-container {
    width: 540px;
    height: 708px;
    @media(max-width: 375px) {
      width: 327px;      
    }
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;    
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
    width: 100%;
    margin-top: 32px;
    background: #181f33;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 10px;
    
    @media(max-width: 375px) {
      height: 88px;
    }
    
    .display {
      color: #fff;
      font-size: 3rem;
      line-height: 3.375rem;
      letter-spacing: -0.8px;
      margin-right: 32px;
      
      @media(max-width: 375px) {
      font-size: 2rem;
      line-height: 2.25rem;
      letter-spacing: -0.533333px;
      margin-right: 24px;
      }
    }
  }
  /* ----------KEY STYLES---------- */
.keyboard {
    background: #242d44;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    padding: 32px 30px;
    margin-top: 24px;
    border-radius: 10px;
    
    @media(max-width: 375px) {
      gap: 13px;
      padding: 24px;
    }

    .span {
      grid-column: span 2;
    }
    .key {
      background: #eae3dc;
      box-shadow: inset 0px -4px 0px #b3a497;
      font-size: 2rem;
      line-height: 2.25rem;
      letter-spacing: -0.533333px;
      border-radius: 10px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      
      @media(max-width: 375px) {
        font-size: 1.75rem;
        line-height: 1.938rem;
        letter-spacing: -0.466667px;
      }
      &:active {
      background: #FFFFFE;      
      }
    }

    .secondary {
      background: #647198;
      box-shadow: inset 0px -4px 0px #414e73;
      color: #fff;
      text-transform: uppercase;
      font-size: 1.25rem;
      line-height: 1.375rem;
      letter-spacing: -0.333333px;
      
      @media(max-width: 375px) {
        font-size: 1rem;
        line-height: 1.125rem;
        letter-spacing: -0.266667px;
      }
      &:active {
      background: #A2B2E1;
        
      }
    }

    .equals {
      background: #d03f2f;
      box-shadow: inset 0px -4px 0px #93261a;
      font-size: 1.25rem;
      letter-spacing: -0.333333px;
      line-height: 1.375rem;
      color: #fff;
      
      @media(max-width: 375px) {
        font-size: 1rem;
        line-height: 1.125rem;
        letter-spacing: -0.266667px;
      }
      &:active {
      background: #F96B5B;
        
      }
    }
  }

`;

export default GlobalStyles;
