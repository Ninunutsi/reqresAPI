import styled from "styled-components";

export const StyledMenu = styled.header`
  display: flex;
  height: 100vh;
  margin: auto;
  width: 30rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 5rem;
  gap: 4rem;
  color: var(--clr-indigo-500);
  background-color: var(--clr-titan-white);
`;

export const StyledCategory = styled.h3`
  font-size: var(--fs-h3);
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--clr-indigo-500);
    transition: 0.4;
    color: var(--clr-titan-white);
  }
`;
