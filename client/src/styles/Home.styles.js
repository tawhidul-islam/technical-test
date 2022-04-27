import styled from "styled-components";
import { mobileSm, mobileLg } from "../utilities/responsive";

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

  display: ${(props) => (props.toggle ? "none" : "block")};

  ${mobileLg({ width: "95vw" })}
  @media only screen and (max-width: 601px) {
    display: "block";
  }
`;

export const Title = styled.span`
  font-size: 20px;
  color: var(--main-color);
  text-align: center;
  margin-bottom: 10px;
  display: block;
`;

export const ViewProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  margin: 0 auto;
`;

export const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  margin-bottom: 10px;
`;
