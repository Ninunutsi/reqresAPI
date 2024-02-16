import styled from "styled-components";

export const StyledDetailsPage = styled.main`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1200' height='560' preserveAspectRatio='none' viewBox='0 0 1200 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1561%26quot%3b)' fill='none'%3e%3cpath d='M962.99-34.72C858.68-28 783.4 168.25 597.77 168.8 412.13 169.35 415.15 98.8 232.54 98.8 49.93 98.8-39.71 168.49-132.68 168.8' stroke='rgba(105%2c 16%2c 184%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M782.45-7.1C668.01-0.96 607.03 189.47 375.39 203.77 143.76 218.07 85.58 430.72-31.66 438.97' stroke='rgba(105%2c 16%2c 184%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1065.85-53.31C941.08-33.93 879.85 262.99 674.53 265.98 469.2 268.97 478.87 195.98 283.2 195.98 87.54 195.98-8.74 265.71-108.12 265.98' stroke='rgba(105%2c 16%2c 184%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M677.32-32.24C530.45 7.87 483.93 411.23 264.77 415.7 45.6 420.17-37.97 266.86-147.79 264.5' stroke='rgba(105%2c 16%2c 184%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M894.14-40.67C727.74-8.93 655.17 408.88 390.71 412.86 126.26 416.84 17.2 285.08-112.71 284.06' stroke='rgba(105%2c 16%2c 184%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1561'%3e%3crect width='1200' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

export const StyledH1 = styled.h1`
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    color: var(--clr-titan-white);
    padding: 0.5rem;
    background-color: var(--clr-indigo-500);
  }
`;

export const StyledNoData = styled.div`
  text-align: center;
  padding: 10vh 0;
  span {
    cursor: pointer;
    text-decoration: underline;
    color: var(--clr-indigo-600);
  }
`;

export const StyledHeader = styled.header`
  padding: 4vh 10vw;
  display: flex;
  align-items: center;
  gap: 4rem;
`;
