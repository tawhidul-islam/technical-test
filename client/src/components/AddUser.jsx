import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import LeftBar from "./LeftBar";
import { Container, MainContent, Title } from "../styles/Home.styles";
import {
  UpdateProfileContainer,
  InputWrapper,
  Label,
  Input,
  Button,
  Form,
  Error,
  RadioWrapper,
  Radio,
  Gender,
} from "../styles/UpdateProfile.styles";
import { addUserValidation } from "../utilities/validations/addUser";
import { addUser } from "../actions/user";

const INITIAL_PROFILE = {
  name: "",
  cardId: "",
  phone: "",
  dob: "",
  email: "",
  address: "",
  gender: "",
};

const AddNewUser = () => {
  const [errors, setErrors] = useState(INITIAL_PROFILE);
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const localStorageData = JSON.parse(localStorage.getItem("profile"));
  const { style } = useSelector((state) => state.style);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, cardId, dob, gender } =
      addUserValidation(profile);

    if (name || email || phone || cardId || dob || gender) {
      setErrors({ ...errors, name, email, phone, cardId, dob, gender });
    } else {
      await dispatch(addUser(profile, localStorageData?.user?.id));

      navigate("/home");
    }
  };

  return (
    <Container>
      {localStorageData.user && (
        <>
          <LeftBar />
          <MainContent toggle={style.sidebar}>
            <UpdateProfileContainer>
              <Title>Add new user</Title>
              <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <InputWrapper>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                  />
                  {errors?.name && <Error>{errors?.name}</Error>}
                </InputWrapper>

                <InputWrapper>
                  <Label>Card ID</Label>
                  <Input
                    type="text"
                    name="cardId"
                    value={profile.cardId}
                    onChange={handleChange}
                  />
                  {errors?.cardId && <Error>{errors?.cardId}</Error>}
                </InputWrapper>

                <InputWrapper>
                  <Label>Phone</Label>
                  <Input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                  />
                  {errors?.phone && <Error>{errors?.phone}</Error>}
                </InputWrapper>

                <InputWrapper>
                  <Label>Date of Birth</Label>
                  <Input
                    type="date"
                    name="dob"
                    value={profile.dob}
                    onChange={handleChange}
                  />
                  {errors?.dob && <Error>{errors?.dob}</Error>}
                </InputWrapper>

                <InputWrapper>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                  />
                  {errors?.email && <Error>{errors?.email}</Error>}
                </InputWrapper>

                <InputWrapper>
                  <Label>Address</Label>
                  <Input
                    type="text"
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                  />
                </InputWrapper>

                <Label>Select gender</Label>
                <RadioWrapper>
                  <Radio
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                  />
                  <Gender>Male</Gender>
                  <Radio
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                  />
                  <Gender>Female</Gender>
                  <Radio
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={handleChange}
                  />
                  <Gender>Other</Gender>
                </RadioWrapper>
                {errors?.gender && <Error>{errors?.gender}</Error>}
                {/* {user.errors?.accountType && (
                    <Error>{user.errors?.accountType}</Error>
                  )} */}

                <Button type="submit">Add user</Button>
              </Form>
            </UpdateProfileContainer>
          </MainContent>
        </>
      )}
    </Container>
  );
};

export default AddNewUser;
