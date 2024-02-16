import React, { useState } from "react";
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
import { IUserDetails } from "../../../interfaces/data/users.interface";
import { IUserData } from "../../../interfaces/data/users.interface";
import { useNavigate } from "react-router-dom";

export const UserDetails: React.FC<IUserDetails> = ({ onClick, users }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("users");
    navigate("/add-item", { state: { parameterName: "users" } });
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <StyledClassContainer>
      <StyledCheckboxGroup>
        <StyledAdd onClick={handleClick}>Add New User</StyledAdd>
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
            <StyledTH>Photo</StyledTH>
            <StyledTH>Name</StyledTH>
            <StyledTH>Last Name</StyledTH>
            <StyledTH>Email</StyledTH>
          </tr>
        </thead>
        <tbody>
          {users?.map(
            ({ avatar, email, first_name, id, last_name }: IUserData) => (
              <StyledTR onClick={() => onClick(id)} key={id}>
                <StyledTD>{id}</StyledTD>
                <StyledTD>
                  <img src={avatar} alt={`${first_name}'s photo`} />
                </StyledTD>
                <StyledTD>{first_name}</StyledTD>
                <StyledTD>{last_name}</StyledTD>
                <StyledTD>{email}</StyledTD>
              </StyledTR>
            )
          )}
        </tbody>
      </StyledTable>
    </StyledClassContainer>
  );
};
