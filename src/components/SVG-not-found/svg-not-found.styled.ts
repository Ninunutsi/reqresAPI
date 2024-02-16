import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Styled404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9rem;
  gap: 2rem;
`;

export const StyledMainBox = styled.div`
  background-color: var(--clr-indigo-500);
  margin: auto;
  color: var(--clr-titan-white);
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1200' height='560' preserveAspectRatio='none' viewBox='0 0 1200 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1010%26quot%3b)' fill='none'%3e%3cpath d='M459.58 648.51C565.63 619.31 502.06 340.67 756.93 324.19 1011.79 307.71 1196.75 152.35 1351.62 150.59' stroke='rgba(227%2c 225%2c 229%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M482.96 603.7C576.16 569.27 540.14 290.12 726.19 289.4 912.24 288.68 1084 455.06 1212.64 457.4' stroke='rgba(227%2c 225%2c 229%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M722.36 580.69C818.65 570.09 843.54 384.01 1040.12 358.91 1236.69 333.81 1257.55 121.58 1357.87 106.91' stroke='rgba(227%2c 225%2c 229%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M663.66 568.89C763.67 555.7 785.03 352.23 985.44 325.44 1185.85 298.65 1206.82 92.64 1307.22 79.04' stroke='rgba(227%2c 225%2c 229%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M521.56 589.18C636.67 585.42 705.66 421.51 945.07 407.82 1184.47 394.13 1243.65 150.05 1368.57 139.02' stroke='rgba(227%2c 225%2c 229%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1010'%3e%3crect width='1200' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  height: 100vh;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
`;

export const StyledErr = styled.div``;

export const Styledmsg = styled.div`
  width: 27rem;
  text-align: center;
  font-size: var(--fs-s);
  line-height: 1.6rem;
  border: 1ps solid red;

  p {
    margin-top: 1rem;
    font-size: 1.3rem;
  }

  p span {
    cursor: pointer;
    padding: 0.3rem 0.7rem;
    border-radius: 0.5rem;
    color: var(--clr-indigo-500);
    background-color: var(--clr-titan-white);
  }
  p span:hover {
    color: var(--clr-indigo-600);
  }
`;

export const StyledQusetion = styled.div`
  animation: ${spinAnimation} 8s linear infinite;
`;
