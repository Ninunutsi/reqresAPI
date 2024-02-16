import styled from "styled-components";

export const StyledErrorContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.7rem;
  justify-content: flex-start;
  font-size: 0.7rem;

  color: var(--clr-red-400);
`;

export const StyledError = styled.div`
  border: 1px solid var(--clr-red-400);
  border-radius: 50%;
  padding: 0.1rem 0.4rem;
`;
