import styled, { css } from "styled-components";

export const StyledClassContainer = styled.section`
  position: relative;
  width: 100%;
  padding-bottom: 2rem;
  margin-top: 2rem;

  &::before {
    content: "";
    position: absolute;
    height: 2rem;
    width: 100%;
    bottom: 0;
    left: 0;
    background: linear-gradient(-45deg, transparent 1rem, white 0),
      linear-gradient(45deg, transparent 1rem, white 0);
    background-size: 1.375rem 2rem;
  }
`;

interface StyledTableProps {
  isGridView: boolean;
}

export const StyledTable = styled.table<StyledTableProps>`
  width: 100%;
  border-spacing: 0;
  background-color: #ffffff;
  font-size: var(--clr-fs);

  ${({ isGridView }) =>
    isGridView &&
    css`
      tbody {
        display: flex;
        flex-wrap: wrap;
        padding: 0.25rem;
      }

      th {
        display: none;
      }

      tbody td {
        padding: 0.375rem;
        font-weight: bold;
      }

      tbody td:first-child {
        display: none;
      }

      tbody td:before {
        content: attr(data-name);
        display: inline-block;
        text-transform: capitalize;
        font-weight: normal;
      }

      tbody tr {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        width: calc(50% - 8px);
        border: 0.063rem solid #e7e7e7;
        padding: 0.5rem;
        margin: 0.25rem;
      }
    `}
`;

export const StyledTH = styled.th`
  color: #7a7a7a;
  text-align: left;
  background-color: #f9fafc;
  padding: 0.875rem;
  border: 0;
  border-bottom: 1px solid #e7e7e7;
`;

export const StyledTD = styled.td`
  padding: 0.875rem;
  border: 0;
  border-bottom: 1px solid #e7e7e7;

  &:first-child {
    border-left: 4px solid transparent;
    transition: all ease 0.3s;
  }

  img {
    width: 3vw;
    border-radius: 0.5rem;
  }
`;

export const StyledTR = styled.tr`
  &:hover {
    background-color: #f7f9fc;
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
`;

export const StyledLabel = styled.label`
  position: relative;
  cursor: pointer;
  margin-left: 2.5rem;
  padding: 0.2rem 0.5rem;
  font-size: 1rem;

  &:hover {
    color: var(--clr-titan-white);
    background-color: var(--clr-indigo-500);
  }

  :before {
    content: "";
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid #0079bf;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 0.625rem;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 1rem;
  }
`;

export const StyledAdd = styled.button`
  color: aliceblue;
  background-color: var(--clr-indigo-500);
  padding: 0.3rem 1rem;
  cursor: pointer;
  border: 1px solid var(--clr-indigo-500);

  &:hover {
    color: var(--clr-indigo-500);
    transition: 0.5s ease-out;
    background-color: transparent;
  }
`;

export const StyledCheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
