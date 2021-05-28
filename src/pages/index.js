import React from "react";
import styled from "styled-components";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";

const CalculatorStyles = styled.div``;

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
