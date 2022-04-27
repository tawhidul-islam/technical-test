import styled from "styled-components";
import { laptop, desktop, tablet } from "../utilities/responsive";

export const Container = styled.div`
  position: relative;
  top: 55px;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${tablet({ flexDirection: "column" })}
`;

export const IntroLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const IntroRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const IntroTitle = styled.span`
  color: var(--main-color);
  font-size: 40px;
  margin-bottom: 10px;
  font-weight: bold;

  /* ${desktop({ fontSize: "35px" })} */
  ${laptop({ fontSize: "25px" })}
`;

export const IntroDesc = styled.span`
  font-size: 20px;
  ${laptop({ fontSize: "16px" })}
`;
