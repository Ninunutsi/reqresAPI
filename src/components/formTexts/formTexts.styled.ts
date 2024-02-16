import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledTextContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  min-height: 30rem;
  gap: 6.5px;
  color: var(--clr-titan-white);
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
`;

export const StyledHeader = styled(motion.h1)`
  font-size: 2.5rem;
  line-height: 3rem;
`;

export const StyledParagraph = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.5rem;
`;

export const StyledButton = styled(motion.button)`
  cursor: pointer;
  color: var(--clr-indigo-500);
  border: 2px solid var(--clr-indigo-500);
  border-radius: 0.7rem;
  margin-top: 1rem;
  padding: 0.7rem 2rem;

  &:hover {
    background-color: var(--clr-indigo-500);
    color: var(--clr-titan-white);
    transition: 0.5s ease-out;
  }
`;
