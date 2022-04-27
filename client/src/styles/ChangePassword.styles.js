import styled from "styled-components";
import {
  mobileSm,
  mobile,
  mobileLg,
  tablet,
  laptop,
} from "../utilities/responsive";

export const Container = styled.div`
  width: 100vw;
  position: relative;
  top: 70px;
  height: calc(100vh - 70px);
  background-color: #f3f2ef;
  display: flex;
  color: #000;
  margin: 0 auto;

  ${mobileLg({ width: "95vw" })}
  ${mobileSm({ width: "100vw" })}
`;
export const MainContent = styled.div`
  padding: 20px;
  width: 79.5vw;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.toggle ? "none" : "block")};

  ${mobileLg({ width: "95vw" })}
  @media only screen and (max-width: 601px) {
    display: "block";
  }
`;

export const Title = styled.span`
  font-size: 30px;
  color: var(--main-color);
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;
  display: block;
`;

export const ChangePasswordWrapper = styled.div`
  border: 1px solid var(--main-color);
  height: 50vh;
  width: 50vw;
  margin: 0 auto;
  border-radius: 20px;
  background-color: #f3f2ef;
  display: flex;
  align-items: center;
  justify-content: center;

  ${laptop({ width: "60%" })}
  ${tablet({ width: "70%" })}
  ${mobileLg({ width: "95%" })}
  ${mobile({ width: "98%", height: "60vh" })}
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  width: 60%;
  margin: 0 auto;
  margin-top: 30px;
`;

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
  width: 50%;
  border-radius: 12px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #004182;
  }

  ${laptop({ width: "80%" })}
  ${tablet({ width: "95%" })}
  ${mobileLg({ width: "80%" })}
  ${mobile({ width: "90%" })}
  ${mobileSm({ width: "100%" })}
`;

export const Error = styled.span`
  color: red;
  font-size: 16px;
  margin-top: 5px;
`;
