import { NavLink, useNavigate } from "react-router-dom";
import { StyledMenu } from "./menu.styled";
import { Button } from "../button";
import { useFormContext } from "../../context/formContext";

export const Menu = () => {
  const { logout } = useFormContext();
  const logOut = () => {
    logout();
  };
  return (
    <StyledMenu>
      <NavLink to="/users">
        <Button
          text="Users"
          bgColor="#F266AB"
          fontSize={"2rem"}
          width={"20vw"}
        />
      </NavLink>
      <NavLink to="/resources">
        <Button
          text="Resources"
          bgColor="#A459D1"
          fontSize={"2rem"}
          width={"20vw"}
        />
      </NavLink>
      {/* popup */}
      <div onClick={logOut}>
        <Button
          text="Log Out"
          bgColor="#2CD3E1"
          fontSize={"2rem"}
          width={"20vw"}
        />
      </div>
    </StyledMenu>
  );
};
