import { NavLink } from "react-router-dom";
import { FetchData } from "../../components/fetchData";
import {
  StyledHeader,
  StyledUsers,
  StyledDataPage,
  StyledDataContainer,
} from "./data.styled";

export const Data = () => {
  return (
    <StyledDataContainer>
      <StyledDataPage>
        <NavLink to="/main">
          <StyledHeader>Go back to main menu</StyledHeader>
        </NavLink>
        <StyledUsers>
          <FetchData />
        </StyledUsers>
      </StyledDataPage>
    </StyledDataContainer>
  );
};
