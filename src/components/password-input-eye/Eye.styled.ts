import styled from "styled-components";
import { motion } from "framer-motion";

export const SButton = styled(motion.button)`
  background-color: transparent;
  display: flex;
  position: absolute;
  border: none;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
`;
