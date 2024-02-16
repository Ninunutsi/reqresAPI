import React, { useState } from "react";
import {
  IResourcesData,
  IResourcesDetails,
} from "../../../interfaces/data/resources.interface";
import {
  StyledAdd,
  StyledCheckboxGroup,
  StyledClassContainer,
  StyledInput,
  StyledLabel,
  StyledTD,
  StyledTH,
  StyledTR,
  StyledTable,
} from "../dataDetails.styled";
import { useNavigate } from "react-router-dom";

export const ResourcesDetails: React.FC<IResourcesDetails> = ({
  onClick,
  resources,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  const handleClick = () => {
    navigate("/add-item", { state: { parameterName: "resources" } });
  };

  return (
    <StyledClassContainer>
      <StyledCheckboxGroup>
        <StyledAdd onClick={handleClick}>Add New Resource</StyledAdd>
        <StyledInput
          type="checkbox"
          name=""
          id="toggleView"
          onClick={handleCheck}
        />
        <StyledLabel htmlFor="toggleView">
          {" "}
          Change to {isChecked ? "Table" : "Card"} View{" "}
        </StyledLabel>
      </StyledCheckboxGroup>
      <StyledTable isGridView={isChecked}>
        <thead>
          <tr>
            <StyledTH>ID</StyledTH>
            <StyledTH>Name</StyledTH>
            <StyledTH>Pantone Value</StyledTH>
            <StyledTH>Year</StyledTH>
            <StyledTH>color</StyledTH>
          </tr>
        </thead>
        <tbody>
          {resources?.map(
            ({ color, id, name, pantone_value, year }: IResourcesData) => (
              <StyledTR onClick={() => onClick(id)} key={id}>
                <StyledTD>{id}</StyledTD>
                <StyledTD>{name}</StyledTD>
                <StyledTD>{pantone_value}</StyledTD>
                <StyledTD>{year}</StyledTD>
                <StyledTD style={{ color: color }}>{color}</StyledTD>
              </StyledTR>
            )
          )}
        </tbody>
      </StyledTable>
    </StyledClassContainer>
  );
};
