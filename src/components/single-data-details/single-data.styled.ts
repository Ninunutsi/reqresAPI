import styled from "styled-components";

export const StyledSingleDataContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  margin-top: 3vh;
`;

export const StyledSuccessMSG = styled.span`
  color: green;
  margin-left: 2rem;
  font-size: var(--fs-s);
`;

export const StyledMdificationButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 1rem;
`;

export const StyledBtn = styled.button`
  color: var(--clr-titan-white);
  background-color: ${(props) => props.color || "#ff004d"};
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  border-radius: 0.3rem;
  font-size: var(--fs-xs);
`;

export const StyledData = styled.section`
  display: flex;
  min-width: 40rem;
  flex-direction: column;
  background-color: var(--clr-titan-white);
  min-height: 34rem;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding: 2rem 4rem;

  p {
    border-top: 1px solid var(--clr-indigo-500);

    border-bottom: 1px solid var(--clr-indigo-500);
    width: 100%;
    padding: 1rem 0;

    font-weight: lighter;
  }

  img {
    width: 10vw;
  }
`;

export const StyledColor = styled.div`
  display: inline-flex;
  align-items: center;
  color: gray;
  /* box-shadow: 1em 1em 1em rgba(0, 0, 0, 0.1); */
  /* display: flex; */
  /* flex-direction: column; */

  input {
    padding: 1em;
  }

  input[type="color"] {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: none;
    border: 0;
    cursor: pointer;
    height: 1rem;
    padding: 0;
    width: 3rem;
  }

  *:focus {
    border-radius: 0;
    outline: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::-webkit-color-swatch {
    border: 0;
    border-radius: 0;
  }

  ::-moz-color-swatch,
  ::-moz-focus-inner {
    border: 0;
  }

  ::-moz-focus-inner {
    padding: 0;
  }
`;

export const StyledEditInput = styled.input`
  color: gray;
`;

export const StyledEditP = styled.p`
  background-color: aliceblue;
  display: flex;
  align-items: center;

  gap: 1rem;
  img {
    width: 7rem;
  }
  label {
    cursor: pointer;
    border: 1px solid purple;
    padding: 0.3rem 0.8rem;
  }
  input[type="file"] {
    position: absolute;
    display: none;
    cursor: pointer;
  }
`;
