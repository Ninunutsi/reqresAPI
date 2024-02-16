import styled from "styled-components";

export const StyledSVG = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  z-index: -10;
`;

export const StyledLine = styled.path`
  stroke-dasharray: 2300;
  stroke-dashoffset: 2300;
  animation: dash 5s linear forwards;

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
