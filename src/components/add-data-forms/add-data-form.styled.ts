import styled from "styled-components";

export const StyledItemContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  background-color: var(--clr-titan-white);
  height: auto;
  padding: 2rem;
  width: 47vw;
`;

export const StyledSuccessMSG = styled.span`
  color: green;
  margin-left: 2rem;
  font-size: var(--fs-s);
`;

export const StyledError = styled.span`
  font-size: var(--fs-xs);
  color: #ef4040;
  position: absolute;
  bottom: 0;
`;

export const StyledSubmit = styled.button`
  cursor: pointer;
  background-color: var(--clr-indigo-500);
  color: aliceblue;
  padding: 0.5rem 1.5rem;
  font-size: var(--fs-s);
  margin-top: 1rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: var(--clr-indigo-600);
  }
`;

export const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    font-size: var(--fs-s);
    color: gray;
    margin-bottom: 0.5rem;
  }

  input {
    border: 1px solid purple;
    padding: 0.5rem 1rem;
    color: gray;
    margin-bottom: 1rem;
  }

  input[type="color"] {
    padding: unset;
    height: 3rem;
    width: 6rem;
    cursor: pointer;
  }
`;
