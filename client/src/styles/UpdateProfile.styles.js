import styled from "styled-components";
import {
  laptop,
  tablet,
  mobileLg,
  mobile,
  mobileSm,
} from "../utilities/responsive";

export const UpdateProfileContainer = styled.div`
  border: 1px solid var(--main-color);
  background-color: #f3f2ef;
  width: 50%;
  padding: 10px 20px;
  margin: 0 auto;
  border-radius: 20px;

  ${laptop({ width: "60%" })}
  ${tablet({ width: "70%" })}
  ${mobileLg({ width: "95%" })}
  ${mobile({ width: "98%" })}
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const Form = styled.form``;

export const Label = styled.label`
  color: rgb(0, 0, 0, 0.6);
  font-size: 16px;
  margin-bottom: 6px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 6px 0px;
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

export const Button = styled.button`
  border: none;
  padding: 6px 15px;
  background-color: var(--main-color);
  color: #fff;
  width: 40%;
  border-radius: 12px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #004182;
  }

  ${laptop({ width: "50%" })}
  ${tablet({ width: "60%" })}
  ${mobileSm({ width: "95%" })}
`;

export const Error = styled.span`
  color: red;
  font-size: 16px;
  margin-top: 5px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const Radio = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

export const Gender = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

export const Select = styled.select`
  width: 80%;
  padding: 10px;
  cursor: pointer;
`;

export const Option = styled.option``;
