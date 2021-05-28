import React from "react";
import styled from "styled-components";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";

// - Mobile: 375px
// - Desktop: 1440px

const CalculatorStyles = styled.div`
  .keyboard {
    background: #242d44;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    padding: 32px 30px;
    margin-top: 24px;
    border-radius: 10px;
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
    }

    .secondary {
      background: #647198;
      box-shadow: inset 0px -4px 0px #414e73;
      color: #fff;
      text-transform: uppercase;
      font-size: 1.25rem;
      line-height: 1.375rem;
      letter-spacing: -0.333333px;
    }

    .equals {
      background: #d03f2f;
      box-shadow: inset 0px -4px 0px #93261a;
      font-size: 1.25rem;
      letter-spacing: -0.333333px;
      line-height: 1.375rem;
      color: #fff;
    }
  }
`;

export default function Index() {
  return (
    <>
      <GlobalStyles />
      <CalculatorStyles>
        <div className="calc-container">
          <div className="head">
            <p className="title">calc</p>
            <div className="theme">
              <p className="theme-title">theme</p>
              <div className="theme-controls">
                <div className="theme-options">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
                <div className="theme-slider">
                  <div className="slider-toggle"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="screen">
            <span className="display">399,981</span>
          </div>

          <div className="keyboard">
            <button className="key">7</button>
            <button className="key">8</button>
            <button className="key">9</button>
            <button className="key secondary">del</button>
            <button className="key">4</button>
            <button className="key">5</button>
            <button className="key">6</button>
            <button className="key">+</button>
            <button className="key">1</button>
            <button className="key">2</button>
            <button className="key">3</button>
            <button className="key">-</button>
            <button className="key">.</button>
            <button className="key">0</button>
            <button className="key">/</button>
            <button className="key">x</button>
            <button className="key secondary span">reset</button>
            <button className="key equals span">=</button>
          </div>
        </div>
      </CalculatorStyles>
    </>
  );
}
