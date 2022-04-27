import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import ClipLoader from "react-spinners/ClipLoader";

import {
  Container,
  JoinWrapper,
  JoinTitle,
  FormWrapper,
  Form,
  InputWrapper,
  Input,
  Label,
  Button,
  PasswordWrapper,
  PasswordInput,
  AuthState,
  Error,
} from "../styles/Join.styles";
import { signupValidation } from "../utilities/validations/join";
import { signup } from "../actions/admin";
import { login } from "../actions/auth";

const Join = () => {
  const initialField = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [passwordVisibility, setPsswordVisibility] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [signupData, setSignupData] = useState(initialField);
  const [errors, setErrors] = useState(initialField);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { admin } = useSelector((state) => state);
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    if (admin?.errors) {
      setErrors(admin.errors);
    } else if (auth?.errors) {
      setErrors({ ...errors, email: auth?.errors?.email });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin.errors, auth.errors]);

  const handleChange = (event) => {
    setSignupData({ ...signupData, [event.target.name]: event.target.value });
  };

  const handleBlur = () => {
    setErrors(initialField);
  };

  const handleFocus = () => {
    setErrors(initialField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } =
      signupValidation(signupData);

    if (isSignup) {
      if (name || email || password || confirmPassword) {
        setErrors({ name, email, password, confirmPassword });
      } else {
        await dispatch(signup(signupData));
        if (admin.isSuccess) {
          navigate("/dashboard");
        }
      }
    } else {
      setErrors(errors);
      await dispatch(login(signupData));
      if (auth.isSuccess) {
        navigate("/dashboard");
      }
    }

    setSignupData({
      ...signupData,
      password: "",
      confirmPassword: "",
    });
  };

  const errorInlineStyle = errors
    ? (fieldName = { email: "" }) => ({
        outline: errors[fieldName] && "red 2px solid",
      })
    : () => {};

  return (
    <Container data-testid="join">
      <ClipLoader
        loading={admin.isLoading || auth.isLoading}
        css={{ display: "block", margin: "0 auto", borderColor: "#0a66c2" }}
        size={150}
      />
      {!(admin.isLoading || auth.isLoading) ? (
        <JoinWrapper>
          <JoinTitle>{!isSignup ? "Signin" : "Create an Account"}</JoinTitle>
          <FormWrapper>
            <Form onSubmit={handleSubmit}>
              {!isSignup || (
                <InputWrapper>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={signupData?.name}
                    onChange={handleChange}
                    style={errorInlineStyle("name")}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                  />
                  {errors?.name && <Error>{errors?.name}</Error>}
                </InputWrapper>
              )}

              <InputWrapper>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={signupData?.email}
                  onChange={handleChange}
                  style={errorInlineStyle("email")}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
                {errors?.email && <Error>{errors?.email}</Error>}
              </InputWrapper>

              <InputWrapper>
                <Label>Password (8 or more characters)</Label>
                <PasswordWrapper style={errorInlineStyle("password")}>
                  <PasswordInput
                    type={passwordVisibility ? "text" : "password"}
                    name="password"
                    value={signupData?.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onCopy={(event) => {
                      event.preventDefault();
                      return false;
                    }}
                    onPaste={(event) => {
                      event.preventDefault();
                      return false;
                    }}
                  />
                  {passwordVisibility ? (
                    <VisibilityOff
                      style={{ cursor: "pointer" }}
                      onClick={() => setPsswordVisibility((prev) => !prev)}
                    />
                  ) : (
                    <Visibility
                      style={{ cursor: "pointer" }}
                      onClick={() => setPsswordVisibility((prev) => !prev)}
                    />
                  )}
                </PasswordWrapper>
                {errors?.password && <Error>{errors?.password}</Error>}
                {/* {auth?.errors?.password && (
                  <Error>{auth?.errors?.password}</Error>
                )} */}
              </InputWrapper>

              {!isSignup || (
                <InputWrapper>
                  <Label>Confirm Password</Label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    value={signupData?.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onCopy={(event) => {
                      event.preventDefault();
                      return false;
                    }}
                    onPaste={(event) => {
                      event.preventDefault();
                      return false;
                    }}
                  />
                </InputWrapper>
              )}

              <Button
                type="submit"
                disabled={(admin.isLoading || auth.isLoading) && true}
              >
                {isSignup ? "Signup & Join" : "Signin"}
              </Button>
            </Form>
          </FormWrapper>
          <AuthState
            onClick={() => {
              setIsSignup((prev) => !prev);
              setSignupData(initialField);
              setErrors(initialField);
            }}
          >
            {!isSignup
              ? "Don't have an account ? Signup"
              : "Already signup ? Signin"}
          </AuthState>
        </JoinWrapper>
      ) : null}
    </Container>
  );
};

export default Join;
