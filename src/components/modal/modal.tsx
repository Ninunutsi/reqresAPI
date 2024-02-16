import React, { useState } from "react";
import {
  StyledBTN,
  StyledCDContainer,
  StyledCDPopup,
  StyledClose,
  StyledPopuoButtons,
} from "./modal.styled";
import useRequest from "../../hooks/useRequest";
import { useLocation, useNavigate, useParams } from "react-router-dom";

interface IModal {
  onClick: () => void;
}

export const Modal: React.FC<IModal> = ({ onClick }) => {
  const [status, setStatus] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  const { id } = useParams();
  const { makeRequest } = useRequest(
    "DELETE",
    `https://reqres.in/api/delete${id}`
  );

  const sendRequest = () => {
    makeRequest();
    setStatus(true);
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };
  return (
    <StyledCDPopup onClick={onClick}>
      <StyledCDContainer onClick={handleContentClick}>
        {status ? (
          <p style={{ color: "green" }}>Successfully deleted.</p>
        ) : (
          <p>Are you sure you want to delete?</p>
        )}
        <StyledPopuoButtons>
          {status ? (
            <StyledBTN onClick={onClick}>Please Wait..</StyledBTN>
          ) : (
            <>
              <li onClick={sendRequest}>Yes</li>
              <li onClick={onClick} id="no">
                No
              </li>
            </>
          )}
        </StyledPopuoButtons>
        <StyledClose onClick={onClick} id="close">
          &times;
        </StyledClose>
      </StyledCDContainer>
    </StyledCDPopup>
  );
};
