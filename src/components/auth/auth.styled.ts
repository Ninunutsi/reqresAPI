import styled from "styled-components";

import { motion } from "framer-motion";

export const StyledFormContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 2.3rem;

  width: 50%;
`;

export const StyledRegistered = styled.p`
  font-size: var(--fs-xs);
  color: red;
  margin-top: 0.3rem;
`;

export const StyledHeader = styled(motion.h1)`
  font-size: var(--fs-h3);
  text-align: center;
  margin-bottom: 2rem;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledInput = styled(motion.input)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 0.6rem 1rem;
  font-size: 0.95rem;
  border-radius: 0.5rem;
  width: 100%;
  margin: 0.1rem 0;
  color: var(--clr-gray);
  &:focus {
    outline-color: var(--clr-gray);
  }
`;

export const StyledGroupInput = styled(motion.div)`
  position: relative;
  padding: 0.7rem 0;
`;

export const StyledBtn = styled(motion.button)`
  background-color: var(--clr-indigo-500);
  border-radius: 0.7rem;
  cursor: pointer;
  color: var(--clr-titan-white);
  padding: 0.8rem 1.5rem;
  margin-top: 1rem;
`;

export const StyledErrorMsg = styled(motion.span)`
  color: var(--clr-red-400);
  font-size: var(--fs-xs);
  position: absolute;
  left: 0;
  bottom: -0.2rem;
`;
