import styled from "styled-components";
import {
  mobileSm,
  mobile,
  mobileLg,
  laptop,
  tablet,
} from "../utilities/responsive";

export const Label = styled.label`
  color: rgb(0, 0, 0, 0.6);
  font-size: 16px;
  margin-bottom: 8px;
  display: block;
`;

export const Image = styled.img`
  margin-right: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0px;
  border-radius: 5px;
  border: 1px solid rgb(0, 0, 0, 0.6);
  padding-left: 10px;

  &::placeholder {
    color: rgb(0, 0, 0, 0.6);
  }

  &:focus {
    outline: none !important;
  }
`;

export const PasswordInput = styled.input`
  border: none;
  width: 100%;
  padding: 10px 0px;
  padding-left: 10px;
  border-radius: 5px;

  &:focus {
    outline: none !important;
  }
`;

export const GoogleText = styled.span`
  color: #555;
  ${mobile({ fontSize: "80%" })}
`;

export const Button = styled.button`
  border: none;
  padding: 10px 15px;
  background-color: var(--main-color);
  color: #fff;
  width: 80%;
  border-radius: 20px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #004182;
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 16px;
  margin-top: 5px;
`;

export const Container = styled.div`
  position: relative;
  top: 55px;
  width: 100vw;
  height: calc(100vh - 55px);
  background-color: #f3f2ef;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JoinWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 95%;
  border-radius: 10px;
  background-color: #fff;

  ${laptop({ width: "40%" })}
  ${tablet({ width: "50%" })}
  ${mobileLg({ width: "65%" })}
  ${mobile({ width: "80%" })}
  ${mobileSm({ width: "100%" })}
`;

export const JoinTitle = styled.span`
  font-size: 30px;
  color: var(--main-color);
  margin: 10px 0px;
`;

export const FormWrapper = styled.div`
  width: 80%;
`;

export const Form = styled.form`
  font-size: 30px;
  color: var(--main-color);
  margin: 10px 0px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const PasswordWrapper = styled.div`
  border: 1px solid rgb(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
`;

export const Devider = styled.div`
  border-bottom: 1px solid black;
  width: 80%;
  margin: 20px auto;
`;

export const SignupWithGoogle = styled.div`
  border: 1px solid rgb(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 3px 0px;
  margin: 20px auto;
  cursor: pointer;
  border-radius: 20px;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f3f2ef;
  }
`;

export const AuthState = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;
