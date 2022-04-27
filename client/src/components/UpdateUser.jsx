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
  Select,
  Option,
} from "../styles/UpdateProfile.styles";
import { updateProfileValidation } from "../utilities/validations/updateProfile";
import { getUser, getUsersOnly, updateUser } from "../actions/user";

const INITIAL_PROFILE = {
  name: "",
  cardId: "",
  phone: "",
  dob: "",
  email: "",
  address: "",
};

const UpdateProfile = () => {
  const [errors, setErrors] = useState(INITIAL_PROFILE);
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const localStorageData = JSON.parse(localStorage.getItem("profile"));
  const { style } = useSelector((state) => state.style);
  const { users, user, isGetUserSuccess } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUser(localStorageData?.user?.id));
  // }, [dispatch, localStorageData?.user?.id]);

  // useEffect(() => {
  //   setProfile(admin);
  // }, [admin]);

  useEffect(() => {
    if (isGetUserSuccess) {
      setProfile(user);
    }
  }, [isGetUserSuccess]);

  useEffect(() => {
    dispatch(getUsersOnly());
  }, []);

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setProfile({ ...profile, avatar: e.target.files[0] });
    } else {
      setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleLoadData = async (e) => {
    if (e.target.value !== "Select course") {
      await dispatch(getUser(e.target.value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(updateUser(user?._id, profile, localStorageData?.user?.id));
  };

  return (
    <Container>
      {localStorageData.user && (
        <>
          <LeftBar />
          <MainContent toggle={style.sidebar}>
            <UpdateProfileContainer>
              <Title>Update user</Title>
              <Select onChange={handleLoadData}>
                <Option value="Select course">Select course</Option>
                {users?.length &&
                  users.map((c) => (
                    <Option value={c._id} key={c._id}>
                      {c.name}
                    </Option>
                  ))}
              </Select>
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
                </InputWrapper>

                <InputWrapper>
                  <Label>Phone</Label>
                  <Input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                  />
                </InputWrapper>

                <InputWrapper>
                  <Label>Phone</Label>
                  <Input
                    type="date"
                    name="dob"
                    value={profile.dob}
                    onChange={handleChange}
                  />
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
                  {errors?.address && <Error>{errors?.address}</Error>}
                </InputWrapper>

                <Button type="submit">Update User</Button>
              </Form>
            </UpdateProfileContainer>
          </MainContent>
        </>
      )}
    </Container>
  );
};

export default UpdateProfile;
