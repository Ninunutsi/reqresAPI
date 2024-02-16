import React, { useEffect, useState } from "react";
import { IFormInputs } from "../../../interfaces/formInputs.interface";
import { SubmitHandler, useForm } from "react-hook-form";
import useRequest from "../../../hooks/useRequest";
import {
  StyledErrorMsg,
  StyledFormContainer,
  StyledGroupInput,
  StyledHeader,
  StyledInput,
} from "../auth.styled";
import { Eye } from "../../password-input-eye";
import { useFormContext } from "../../../context/formContext";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../SVG-loader";
import { Error } from "../../SVG-error";
import { Button } from "../../button";

const visible = { opacity: 1, y: 0, transition: { duration: 0.4 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

export const Login: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const { loading, error, makeRequest, response } = useRequest(
    "POST",
    "https://reqres.in/api/login"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();
  const { authenticated, login, status } = useFormContext();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    makeRequest(data);
  };

  useEffect(() => {
    if (status) {
      if (response?.token) {
        console.log(response);
        const { token } = response;
        localStorage.setItem("log", token);
        if (localStorage.getItem("signup") === localStorage.getItem("log")) {
          localStorage.removeItem("log", token);

          login(localStorage.getItem("signup"));
          navigate("/main");
        }
      }
    }
  }, [status, response, navigate, login]);

  // tu migebuli responsi gvaqvs dadebiti chavamatot lokal storijshi auth value-true
  useEffect(() => {
    if (authenticated) {
      navigate("/main");
    }
  }, [navigate, response]);

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
        Log In
      </StyledHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <Button text="Log In" />
      </form>
      {error && <Error msg={error.message} />}
    </StyledFormContainer>
  );
};
