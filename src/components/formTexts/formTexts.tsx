import React, { useState } from "react";
import {
  StyledButton,
  StyledHeader,
  StyledParagraph,
  StyledTextContainer,
} from "./formTexts.styled";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

interface FormTextsProps {
  onClick: () => void;
  btnValue: string;
}

export const FormTexts: React.FC<FormTextsProps> = ({ onClick, btnValue }) => {
  return (
    <StyledTextContainer
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <StyledHeader
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      >
        Welcome!
      </StyledHeader>
      <StyledParagraph variants={itemVariants}>
        It is very nice to meet you{" "}
      </StyledParagraph>
      <StyledButton
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variants={itemVariants}
      >
        {btnValue}
      </StyledButton>
    </StyledTextContainer>
  );
};
