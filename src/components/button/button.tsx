import React from "react";
import { StyledBtn } from "./button.styled";

const visible = { opacity: 1, y: 0, transition: { duration: 0.4 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

interface IBtnText {
  text: string;
  bgColor?: string;
  fontSize?: string;
  width?: string;
}

export const Button: React.FC<IBtnText> = ({
  text,
  bgColor,
  fontSize,
  width,
}) => {
  return (
    <StyledBtn
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      variants={itemVariants}
      bgColor={bgColor}
      fontSize={fontSize}
      width={width}
    >
      {text}
    </StyledBtn>
  );
};
