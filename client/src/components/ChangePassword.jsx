import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FlashMessage from "react-flash-message";

import LeftBar from "./LeftBar";
import {
  Container,
  MainContent,
  ChangePasswordWrapper,
  Title,
  Form,
  InputWrapper,
  Label,
  Input,
  Error,
  Button,
} from "../styles/ChangePassword.styles";
import { changePassword } from "../actions/admin";
import { changePasswordValidation } from "../utilities/validations/changePassword";

const INITIAL_DATA = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const ChangePassword = () => {
  const [state, setState] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState(INITIAL_DATA);
  const localStorageData = JSON.parse(localStorage.getItem("profile"));
  const { style } = useSelector((state) => state.style);
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { oldPassword, newPassword } = changePasswordValidation(state);

    if (oldPassword || newPassword) {
      setErrors({ ...state, oldPassword, newPassword });
    } else {
      await dispatch(changePassword(localStorageData?.user?.id, state));
      setState(INITIAL_DATA);
      setErrors(INITIAL_DATA);
    }
  };

  return (
    <Container>
      {localStorageData.user && (
        <>
          <LeftBar />
          <MainContent toggle={style.sidebar}>
            {admin?.isChangePasswordSuccess && (
              <FlashMessage duration={5000} persistOnHover={true}>
                <p style={{ color: "green", textAlign: "center" }}>
                  Password has changed successfully!
                </p>
              </FlashMessage>
            )}
            <Title>Change Password</Title>

            <ChangePasswordWrapper>
              <Form onSubmit={handleSubmit}>
                <InputWrapper>
                  <Label>Old Password</Label>
                  <Input
                    type="password"
                    name="oldPassword"
                    value={state.oldPassword}
                    onChange={handleChange}
                  />
                  {errors?.oldPassword && <Error>{errors?.oldPassword}</Error>}
                  {admin?.isChangePasswordError && (
                    <Error>{admin?.isChangePasswordError?.oldPassword}</Error>
                  )}
                </InputWrapper>

                <InputWrapper>
                  <Label>New Password</Label>
                  <Input
                    type="password"
                    name="newPassword"
                    value={state.newPassword}
                    onChange={handleChange}
                  />
                  {errors?.newPassword && <Error>{errors?.newPassword}</Error>}
                  {admin?.errors?.newPassword && (
                    <Error>{admin?.errors?.newPassword}</Error>
                  )}
                </InputWrapper>

                <InputWrapper>
                  <Label>New Password</Label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    value={state.confirmPassword}
                    onChange={handleChange}
                  />
                </InputWrapper>

                <Button type="submit">Change Password</Button>
              </Form>
            </ChangePasswordWrapper>
          </MainContent>
        </>
      )}
    </Container>
  );
};

export default ChangePassword;
