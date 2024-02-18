import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInputs } from "../../../interfaces/formInputs.interface";
import {
  StyledErrorMsg,
  StyledFormContainer,
  StyledGroupInput,
  StyledHeader,
  StyledInput,
  StyledRegistered,
} from "../auth.styled";
import { Eye } from "../../password-input-eye";
import useRequest from "../../../hooks/useRequest";
import { useVisibilityContext } from "../../../context/visibilityContext";
import { Loader } from "../../SVG-loader";
import { Error } from "../../SVG-error";
import { Button } from "../../button";
import { useFormContext } from "../../../context/formContext";

const visible = { opacity: 1, y: 0, transition: { duration: 0.4 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

export const SignUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const { loading, error, makeRequest, response } = useRequest(
    "POST",
    "https://reqres.in/api/register"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const { setVisibility } = useVisibilityContext();
  const { signup } = useFormContext();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    makeRequest(data);
  };

  useEffect(() => {
    if (response?.token) {
      console.log(response);
      const storedToken = localStorage.getItem("token");
      console.log(storedToken);
      if (storedToken === response.token) {
        setIsRegistered(true);
        setTimeout(() => {
          setIsRegistered(false);
        }, 3000);
        return;
      }
      setVisibility();
      const { token } = response;
      localStorage.setItem("token", token);
      signup(token);
    }
  }, [response, setVisibility, signup]);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  if (loading) return <Loader />;

  return (
    <StyledFormContainer
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <StyledHeader
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      >
        Create Your Account
      </StyledHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledGroupInput variants={itemVariants}>
          <label>
            <StyledInput
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
            />
          </label>
          {errors.name && <StyledErrorMsg>Name is required</StyledErrorMsg>}
        </StyledGroupInput>

        <StyledGroupInput variants={itemVariants}>
          <label>
            <StyledInput
              placeholder="Email"
              type="text"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
          </label>

          {errors.email && (
            <StyledErrorMsg>
              Email is required and must be valid.
            </StyledErrorMsg>
          )}
        </StyledGroupInput>

        <StyledGroupInput variants={itemVariants}>
          <label>
            <StyledInput
              placeholder="Password"
              type={isVisible ? "text" : "password"}
              {...register("password", { required: true, minLength: 6 })}
            />
          </label>

          {errors.password && (
            <StyledErrorMsg>
              password is required and must be more than 6 characters.
            </StyledErrorMsg>
          )}
          <Eye isPasswordVisible={isVisible} onClick={handleClick} />
        </StyledGroupInput>

        <Button text="Sign Up" />
        {isRegistered && (
          <StyledRegistered>Email already registered</StyledRegistered>
        )}
      </form>

      {error && <Error msg={error.message} />}
    </StyledFormContainer>
  );
};
