import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  StyledAddDataMainContainer,
  StyledAddItemHeader,
  StyledLink,
  StyledRedirectMessage,
} from "./add-item.styled";
import { AddData } from "../../components/add-data-forms";

export const AddItem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { parameterName } = location.state ?? { parameterName: null };
  useEffect(() => {
    if (parameterName !== "users" && parameterName !== "resources") {
      setTimeout(() => {
        navigate(-1);
      }, 4000);
    }
  }, [parameterName]);

  return (
    <StyledAddDataMainContainer>
      {parameterName && (
        <>
          <StyledAddItemHeader>
            <StyledLink onClick={() => navigate(-1)}>Go back</StyledLink>
            <StyledLink>
              <NavLink to={"/main"}>Main Menu</NavLink>
            </StyledLink>
            <StyledLink></StyledLink>
          </StyledAddItemHeader>
        </>
      )}
      {parameterName == "users" ? (
        <AddData
          endPoint="https://reqres.in/api/users/create"
          fields={{
            first_name: "text",
            last_name: "text",
            email: "text",
            avatar: "file",
          }}
        />
      ) : parameterName == "resources" ? (
        <AddData
          endPoint="https://reqres.in/api/resources/create"
          fields={{
            name: "text",
            year: "text",
            color: "color",
            pantValue: "text",
          }}
        />
      ) : (
        <StyledRedirectMessage>
          {" "}
          Sorry, command unknown, i dont know what you want to add yet. Please
          wait for redirect...
        </StyledRedirectMessage>
      )}
    </StyledAddDataMainContainer>
  );
};
