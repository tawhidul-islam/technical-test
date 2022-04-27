import styled from "styled-components";
import { mobileLg } from "../utilities/responsive";

export const Container = styled.div`
  width: 100vw;
  height: calc(60vh - 55px);
  background-color: var(--footer-color);
  display: flex;
  padding: 50px;

  ${mobileLg({ flexDirection: "column", height: "100%" })}
`;

export const NavbarBrand = styled.div`
  color: #000;
  border: 1px solid var(--main-color);
  width: 100px;
  height: 100px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    color: var(--main-color);
  }

  ${mobileLg({ marginBottom: "30px" })}
`;
export const BrandText = styled.span`
  font-size: 50px;
`;

export const ContainerItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  flex-direction: column;

  ${mobileLg({ alignItems: "center", justifyContent: "center" })}
`;

export const ContainerItemTitle = styled.span`
  font-size: 20px;
  color: #555;
`;

export const ContainerItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  ${mobileLg({
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
  })}
`;

export const ContainerItemLink = styled.span`
  margin-top: 10px;
  font-weight: 600;
  font-size: 14px;
  color: #777;
  cursor: pointer;
`;
