import styled from "styled-components";

export const StyledAddDataMainContainer = styled.main`
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1200' height='560' preserveAspectRatio='none' viewBox='0 0 1200 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1010%26quot%3b)' fill='none'%3e%3cpath d='M-88.11 241.25C62.28 245.06 176.21 454.32 472.63 459.65 769.04 464.98 887.1 624.87 1033.36 626.63' stroke='rgba(105%2c 16%2c 184%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-2.62 153.01C89.98 153.33 179.25 223.01 361.12 223.01 542.99 223.01 521.71 143.02 724.86 153.01 928.01 163 953.85 543.71 1088.6 587.27' stroke='rgba(105%2c 16%2c 184%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-127.69 492.16C10.01 489.43 129.69 307.09 391.31 307.36 652.92 307.63 758.67 612.75 910.3 625.03' stroke='rgba(105%2c 16%2c 184%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-137.46 260.58C8.37 259.67 129.29 120.38 430.17 126.18 731.05 131.98 806.96 621.01 997.8 660.79' stroke='rgba(105%2c 16%2c 184%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M-102.32 107.34C18.55 109.5 145.14 239.28 355.12 264.14 565.1 289 491.09 559.49 583.84 601.86' stroke='rgba(105%2c 16%2c 184%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1010'%3e%3crect width='1200' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  height: 100vh;
`;

export const StyledAddItemHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 6rem;
  padding: 5vh 10vw;
`;

export const StyledLink = styled.h4`
  cursor: pointer;
  &:hover {
    color: var(--clr-indigo-500);
  }
`;

export const StyledRedirectMessage = styled.div`
  font-size: 3rem;
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  color: var(--clr-indigo-600);
`;
