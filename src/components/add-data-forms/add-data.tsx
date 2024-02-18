import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Loader } from "../SVG-loader";
import {
  StyledError,
  StyledForm,
  StyledFormGroup,
  StyledItemContainer,
  StyledSubmit,
  StyledSuccessMSG,
} from "./add-data-form.styled";
import useRequest from "../../hooks/useRequest";

interface IAdditionData {
  endPoint: string;
  fields: { [key: string]: string };
}

export const AddData: React.FC<IAdditionData> = ({ endPoint, fields }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>();
  const { loading, makeRequest } = useRequest("post", endPoint);

  const onSubmit: SubmitHandler<any> = (data) => {
    makeRequest(data);
    reset();
  };

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const showSuccessMessage = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  if (loading) return <Loader />;

  return (
    <StyledItemContainer>
      <h1>Fill the form to add</h1>
      <StyledForm
        onSubmit={handleSubmit(async (data) => {
          await onSubmit(data);
          showSuccessMessage();
        })}
      >
        {Object.entries(fields).map(([fieldName, fieldType]) => (
          <StyledFormGroup key={fieldName}>
            <label>{fieldName}</label>
            {fieldType === "color" ? (
              <input
                type="color"
                {...register(fieldName, {
                  required: true,
                })}
              />
            ) : fieldType === "file" ? (
              <input
                type="file"
                {...register(fieldName, {
                  required: true,
                })}
              />
            ) : (
              <input
                {...register(fieldName, {
                  required: true,
                })}
              />
            )}
            {errors[fieldName] && (
              <StyledError>This field is required</StyledError>
            )}
          </StyledFormGroup>
        ))}
        <StyledSubmit type="submit">Submit</StyledSubmit>
        {showSuccess && (
          <StyledSuccessMSG>Item added successfully</StyledSuccessMSG>
        )}
      </StyledForm>
    </StyledItemContainer>
  );
};
