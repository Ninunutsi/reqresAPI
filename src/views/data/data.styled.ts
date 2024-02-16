import styled from "styled-components";

export const StyledDataContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1200' height='560' preserveAspectRatio='none' viewBox='0 0 1200 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3cpath d='M1296.27 351.22C1160.02 352.14 988.11 490.65 766.68 480.02 545.24 469.39 622.47 40.38 501.88-42.85' stroke='rgba(105%2c 16%2c 184%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1331.35 240.72C1249.07 240.32 1170.56 170.72 1009.76 170.72 848.97 170.72 857.1 243.26 688.18 240.72 519.25 238.18 471.18-18.42 366.59-36.67' stroke='rgba(105%2c 16%2c 184%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1214.96 118.14C1124.41 117.81 1037.28 48.14 859.6 48.14 681.92 48.14 682.98 118.26 504.25 118.14 325.51 118.02 245.06-26.7 148.89-29.6' stroke='rgba(105%2c 16%2c 184%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1330.6 259.94C1178.38 264.28 1056.55 491.44 766.42 489.54 476.29 487.64 387.72 22.88 202.24-11.48' stroke='rgba(105%2c 16%2c 184%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1300.73 268.22C1158.17 269.44 1034 416.08 749.36 413.82 464.72 411.56 370.97 8.96 197.99-15.32' stroke='rgba(105%2c 16%2c 184%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1200' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  padding: 0 5rem;
`;

export const StyledDataPage = styled.section`
  margin: auto;
  padding: 1rem 0;
`;

export const StyledHeader = styled.h2`
  font-size: var(--fs-h4);
  margin-top: 1rem;
  display: inline-block;
  cursor: pointer;

  &:hover {
    color: var(--clr-indigo-500);
  }
`;

export const StyledUsers = styled.section`
  margin-top: 1rem;
`;
