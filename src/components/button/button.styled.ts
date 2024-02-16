import styled from "styled-components";

import { motion, HTMLMotionProps } from "framer-motion";

interface StyledBtnProps extends HTMLMotionProps<"button"> {
  bgColor?: string;
  fontSize?: string;
  width?: string;
}
export const StyledBtn = styled(motion.button)<StyledBtnProps>`
  background-color: ${(props) => props.bgColor || "var(--clr-indigo-500)"};
  border-radius: 0.7rem;
  cursor: pointer;
  color: var(--clr-titan-white);
  padding: 0.8rem 1.5rem;
  margin-top: 1rem;
  text-align: center;
  width: ${(props) => props.width || "auto"};
  font-size: ${(props) => props.fontSize || "1rem"};
`;
