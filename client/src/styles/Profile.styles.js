import styled from "styled-components";

import {
  mobileSm,
  mobile,
  mobileLg,
  laptop,
  tablet,
} from "../utilities/responsive";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;

export const FormWrapper = styled.div`
  border: 1px solid #bbb;
  padding: 40px;
  width: 40%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;

  ${laptop({ width: "50%" })}
  ${tablet({ width: "60%" })}
  ${mobileLg({ width: "70%" })}
  ${mobileSm({ width: "80%" })}
  ${mobile({ width: "90%" })}
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  border: 1px solid #aaa;
  padding: 7px;
  border-radius: 5px;
`;

export const Button = styled.button`
  border: none;
  padding: 10px 15px;
  background-color: var(--main-color);
  color: #fff;
  width: 47%;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #004182;
  }

  ${laptop({ width: "60%" })}
  ${tablet({ width: "70%" })}
  ${mobileLg({ width: "80%" })}
  ${mobile({ width: "90%" })}
  ${mobileSm({ width: "95%" })}
`;

export const Error = styled.span`
  color: red;
  font-size: 16px;
  margin-top: 5px;
`;

export const ProfileTitle = styled.span`
  font-size: 30px;
  color: var(--main-color);
  margin-bottom: 30px;
  display: block;
  text-align: center;
`;
