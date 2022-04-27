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
} from "../styles/UpdateProfile.styles";
import { updateProfileValidation } from "../utilities/validations/updateProfile";
import { getAdmin, updateProfile } from "../actions/admin";

const INITIAL_PROFILE = {
  name: "",
  email: "",
  phone: "",
  presentAddress: "",
  permanentAddress: "",
  city: "",
  country: "",
  avatar: "",
};

const UpdateProfile = () => {
  const [errors, setErrors] = useState(INITIAL_PROFILE);
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const localStorageData = JSON.parse(localStorage.getItem("profile"));
  const { style } = useSelector((state) => state.style);
  const { admin } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAdmin(localStorageData?.user?.id));
  }, [dispatch, localStorageData?.user?.id]);

  useEffect(() => {
    setProfile(admin);
  }, [admin]);

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setProfile({ ...profile, avatar: e.target.files[0] });
    } else {
      setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone } = updateProfileValidation(profile);

    if (name || email || phone) {
      setErrors({ ...errors, name, email, phone });
    } else {
      const formData = new FormData();
      formData.append("name", profile.name);
      formData.append("email", profile.email);
      formData.append("phone", profile.phone);
      formData.append("presentAddress", profile.presentAddress);
      formData.append("permanentAddress", profile.permanentAddress);
      formData.append("city", profile.city);
      formData.append("country", profile.country);
      formData.append("avatar", profile.avatar);

      await dispatch(updateProfile(formData, localStorageData?.user?.id));

      navigate("/view-profile");
    }
  };

  return (
    <Container>
      {localStorageData.user && (
        <>
          <LeftBar />
          <MainContent toggle={style.sidebar}>
            <UpdateProfileContainer>
              <Title>Update profile</Title>
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
                  <Label>Present Address</Label>
                  <Input
                    type="text"
                    name="presentAddress"
                    value={profile.presentAddress}
                    onChange={handleChange}
                  />
                </InputWrapper>

                <InputWrapper>
                  <Label>Permanent Address</Label>
                  <Input
                    type="text"
                    name="permanentAddress"
                    value={profile.permanentAddress}
                    onChange={handleChange}
                  />
                </InputWrapper>

                <InputWrapper>
                  <Label>City</Label>
                  <Input
                    type="text"
                    name="city"
                    value={profile.city}
                    onChange={handleChange}
                  />
                </InputWrapper>

                <InputWrapper>
                  <Label>Country</Label>
                  <Input
                    type="text"
                    name="country"
                    value={profile.country}
                    onChange={handleChange}
                  />
                </InputWrapper>

                <InputWrapper>
                  <Label>Profile</Label>
                  <Input
                    type="file"
                    name="avatar"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleChange}
                    style={{ cursor: "pointer" }}
                  />
                </InputWrapper>

                <Button type="submit">Update Profile</Button>
              </Form>
            </UpdateProfileContainer>
          </MainContent>
        </>
      )}
    </Container>
  );
};

export default UpdateProfile;
