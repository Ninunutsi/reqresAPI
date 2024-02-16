import React, { useState } from "react";
import { IResourcesData } from "../../../interfaces/data/resources.interface";
import {
  StyledBtn,
  StyledColor,
  StyledData,
  StyledEditInput,
  StyledEditP,
  StyledMdificationButtons,
  StyledSingleDataContainer,
  StyledSuccessMSG,
} from "../single-data.styled";
import useRequest from "../../../hooks/useRequest";
import { Loader } from "../../SVG-loader";
import { useParams } from "react-router-dom";

export const SingleResource: React.FC<IResourcesData> = ({
  id,
  name,
  color,
  year,
  pantone_value,
}) => {
  const [updatedName, setUpdatedName] = useState<string>(name);
  const [updatedColor, setUpdatedColor] = useState<string>(color);
  const [updatedYear, setUpdatedYear] = useState<string>(year);
  const [updatedPantoneValue, setUpdatedPantoneValue] =
    useState<string>(pantone_value);
  const { id: param } = useParams();
  const [update, setUpdate] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const { loading, makeRequest } = useRequest(
    "PUT",
    `https://reqres.in/api/resouces/update/${param}`
  );

  const handleUpdate = () => {
    setUpdate(!update);
  };

  const handleUpdateRequest = async () => {
    if (update) {
      if (
        updatedName === name &&
        updatedColor === color &&
        updatedYear === year &&
        updatedPantoneValue === pantone_value
      ) {
        setUpdate(false);
        return;
      }
      await makeRequest({
        name: updatedName,
        color: updatedColor,
        year: updatedYear,
        pantValue: updatedPantoneValue,
      });
      setUpdate(false);
      setUpdate(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      setUpdatedName(name);
      setUpdatedColor(color);
      setUpdatedYear(year);
      setUpdatedPantoneValue(pantone_value);
    } else {
      setUpdate(!update);
    }
  };

  if (loading) return <Loader />;
  return (
    <>
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
          </StyledMdificationButtons>
          {!update ? (
            <>
              <p>ID: {id}</p>
              <p>Name: {name}</p>
              <p>
                Color: <span style={{ color: color }}>{color}</span>
              </p>
              <p>Year: {year}</p>
              <p>Pantone Value: {pantone_value}</p>
            </>
          ) : (
            <>
              <p>ID: {id}</p>
              <StyledEditP>
                Name:{" "}
                <StyledEditInput
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                />
              </StyledEditP>
              <StyledEditP>
                Color:{" "}
                <StyledColor>
                  <input
                    type="color"
                    value={updatedColor}
                    onChange={(e) => setUpdatedColor(e.target.value)}
                  />
                </StyledColor>
              </StyledEditP>
              <StyledEditP>
                Year:{" "}
                <StyledEditInput
                  type="number"
                  value={updatedYear}
                  onChange={(e) => setUpdatedYear(e.target.value)}
                />
              </StyledEditP>
              <StyledEditP>
                Pantone Value:{" "}
                <StyledEditInput
                  type="text"
                  value={updatedPantoneValue}
                  onChange={(e) => setUpdatedPantoneValue(e.target.value)}
                />
              </StyledEditP>
            </>
          )}
        </StyledData>
      </StyledSingleDataContainer>
    </>
  );
};
