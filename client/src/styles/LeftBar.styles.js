import styled from "styled-components";

import {
  laptop,
  mobile,
  mobileLg,
  mobileSm,
  tablet,
} from "../utilities/responsive";

export const LeftBarContainer = styled.div`
  width: 18vw;
  position: relative;
  top: 0px;
  left: 0px;
  height: calc(100vh - 70px);
  background-color: #fff;
  z-index: 900;
  margin-right: 15px;

  ${laptop({ width: "25vw" })}
  ${tablet({ width: "35vw" })}
  ${mobileLg({ width: "100vw" })}
  
  @media only screen and (max-width: 600px) {
    display: ${(props) => (props.toggle ? "block" : "none")};
  }
`;

export const LeftBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid var(--main-color);
  border-radius: 10px;
  margin-bottom: 20px;
  cursor: pointer;

  ${mobileLg({ width: "50%", margin: "20px auto" })}
  ${mobile({ width: "70%", margin: "20px auto" })}
  ${mobileSm({ width: "100%", margin: "20px auto" })}
`;

export const ProfilePricture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  border: 1px solid var(--main-color);
`;

export const Name = styled.span``;

export const LeftBarItem = styled.span``;
