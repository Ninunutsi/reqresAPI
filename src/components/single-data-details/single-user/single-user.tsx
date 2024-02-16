import React, { useState } from "react";
import { IUserData } from "../../../interfaces/data/users.interface";
import {
  StyledBtn,
  StyledData,
  StyledEditInput,
  StyledEditP,
  StyledMdificationButtons,
  StyledSingleDataContainer,
  StyledSuccessMSG,
} from "../single-data.styled";
import { Modal } from "../../modal";
import useRequest from "../../../hooks/useRequest";
import { useParams } from "react-router-dom";
import { Loader } from "../../SVG-loader";

export const SingleUser: React.FC<IUserData> = ({
  id,
  avatar,
  first_name,
  last_name,
  email,
}) => {
  const [modal, setModal] = useState<boolean>(false);
  const [updatedAvatar, setUpdatedAvatar] = useState<string>(avatar);
  const [updatedFirstName, setUpdatedFirstName] = useState<string>(first_name);
  const [updatedLastName, setUpdatedLastName] = useState<string>(last_name);
  const [updatedEmail, setUpdatedEmail] = useState<string>(email);
  const { id: param } = useParams();
  const [update, setUpdate] = useState<boolean>(false);
  const { loading, makeRequest } = useRequest(
    "PUT",
    `https://reqres.in/api/users/update/${param}`
  );

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setUpdatedAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleUpdate = () => {
    setUpdate(!update);
  };

  const handleUpdateRequest = async () => {
    if (update) {
      if (
        updatedAvatar === avatar &&
        updatedFirstName === first_name &&
        updatedLastName === last_name &&
        updatedEmail === email
      ) {
        setUpdate(false);
        return;
      }
      await makeRequest({
        fist_name: updatedFirstName,
        last_name: updatedLastName,
        email: updatedEmail,
        avatar: updatedAvatar,
      });
      setUpdate(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      setUpdatedAvatar(avatar);
      setUpdatedFirstName(first_name);
      setUpdatedLastName(last_name);
      setUpdatedEmail(email);
    } else {
      setUpdate(!update);
    }
  };

  if (loading) return <Loader />;
  return (
    <>
      {modal && <Modal onClick={handleCloseModal} />}
      <StyledSingleDataContainer>
        <StyledData>
          <StyledMdificationButtons>
            {showSuccess && (
              <StyledSuccessMSG>Updated successfully</StyledSuccessMSG>
            )}
            {update && (
              <StyledBtn color="green" onClick={handleUpdateRequest}>
                Save Changes
              </StyledBtn>
            )}
            <StyledBtn color={update ? "gray" : "blue"} onClick={handleUpdate}>
              {update ? "Cancel Changes" : "Update"}
            </StyledBtn>
            <StyledBtn onClick={handleDelete}>Delete</StyledBtn>
          </StyledMdificationButtons>
          {!update ? (
            <>
              <img src={avatar} alt="" />
              <p>ID: {id}</p>
              <p>Name: {first_name}</p>
              <p>Lastname: {last_name}</p>
              <p>Email: {email}</p>
            </>
          ) : (
            <>
              <p>ID: {id}</p>
              <StyledEditP>
                <img src={updatedAvatar} alt="" />
                <label htmlFor="avatar-upload">Upload New Avatar</label>
                <StyledEditInput
                  type="file"
                  name="avatar-upload"
                  id="avatar-upload"
                  onChange={handleFileChange}
                />
              </StyledEditP>
              <StyledEditP>
                Name:{" "}
                <StyledEditInput
                  value={updatedFirstName}
                  onChange={(e) => setUpdatedFirstName(e.target.value)}
                />
              </StyledEditP>
              <StyledEditP>
                LastName:{" "}
                <StyledEditInput
                  value={updatedLastName}
                  onChange={(e) => setUpdatedLastName(e.target.value)}
                />
              </StyledEditP>
              <StyledEditP>
                Email:{" "}
                <StyledEditInput
                  type="text"
                  value={updatedEmail}
                  onChange={(e) => setUpdatedEmail(e.target.value)}
                />
              </StyledEditP>
            </>
          )}
        </StyledData>
      </StyledSingleDataContainer>
    </>
  );
};
