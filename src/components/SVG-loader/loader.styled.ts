import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLoader = styled.svg`
  width: 150px;
  height: 150px;
  circle {
    fill: none;
    stroke-width: 5;
    stroke-linecap: round;
    animation-name: loader;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    transform-origin: center center;

    &:nth-child(1) {
      stroke: #ffc114;
      stroke-dasharray: 50;
      animation-delay: -0.2s;
    }
    &:nth-child(2) {
      stroke: #ff5248;
      stroke-dasharray: 100;
      animation-delay: -0.4s;
    }
    &:nth-child(3) {
      stroke: #19cdca;
      stroke-dasharray: 180;
      animation-delay: -0.6s;
    }
    &:nth-child(4) {
      stroke: #4e88e1;
      stroke-dasharray: 350;
      stroke-dashoffset: -100;
      animation-delay: -0.8s;
    }
    @keyframes loader {
      50% {
        transform: rotate(360deg);
      }
    }
  }
`;
