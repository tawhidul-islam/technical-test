import styled from "styled-components";

import { mobileLg } from "../utilities/responsive";

export const Container = styled.div`
  width: 100vw;
  height: 55px;
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: var(--navbar-color);
`;

export const ContainerWrapper = styled.div`
  height: 100%;
  margin: 0px;
  color: #df678c;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  margin: 0px 10%;
`;

export const NavbarBrand = styled.div`
  border: 1px solid var(--main-color);
  width: 55px;
  height: 55px;
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
  ${mobileLg({ display: "none" })}
`;

export const MenubarContainer = styled.div`
  display: none;
  cursor: pointer;
  ${mobileLg({ display: "block" })}
`;

export const Menubar = styled.div`
  width: 30px;
  height: 3px;
  background-color: var(--main-color);
  margin: 6px 0;
`;

export const BrandText = styled.span`
  font-size: 30px;
  color: #000;
  text-decoration: none;
`;
export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
`;

export const ProfileContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  margin: 0px 10%;
`;

export const ProfileRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthText = styled.span`
  font-size: 17px;
  border: 2px solid var(--main-color);
  padding: 6px 15px;
  border-radius: 10px;
  cursor: pointer;
  color: var(--main-color);
`;
