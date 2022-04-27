import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  ContainerWrapper,
  NavbarBrand,
  AuthContainer,
  BrandText,
  AuthText,
  ProfileContainer,
  ProfileRight,
  AuthWrapper,
  Menubar,
  MenubarContainer,
} from "../styles/Navbar.styles";
import { logout } from "../actions/auth";
import { sideBar } from "../reducers/style";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Navbar = () => {
  const { _, width } = useWindowDimensions();
  const [localStorageData, setLocalStorageData] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  const { isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      window.location.reload(false);
      setLocalStorageData(JSON.parse(localStorage.getItem("profile")));
    }
  }, [isSuccess]);

  useEffect(() => {
    function handleResize() {
      if (width > 600) {
        dispatch(sideBar({ width }));
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  const handleSidebarToggle = () => {
    dispatch(sideBar({ width }));
  };

  return (
    <Container>
      <ContainerWrapper>
        {!localStorageData?.user ? (
          <AuthWrapper>
            <NavbarBrand>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <BrandText>F</BrandText>
                <BrandText style={{ color: "#0A66C2" }}>||</BrandText>
                <BrandText>S</BrandText>
              </NavLink>
            </NavbarBrand>

            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <AuthContainer>
                <AuthText>Join</AuthText>
              </AuthContainer>
            </NavLink>
          </AuthWrapper>
        ) : (
          <ProfileContainer>
            <MenubarContainer onClick={handleSidebarToggle}>
              <Menubar></Menubar>
              <Menubar></Menubar>
              <Menubar></Menubar>
            </MenubarContainer>

            <NavbarBrand>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <BrandText>F</BrandText>
                <BrandText style={{ color: "#0A66C2" }}>||</BrandText>
                <BrandText>S</BrandText>
              </NavLink>
            </NavbarBrand>
            <ProfileRight>
              <AuthText onClick={handleLogoutClick}>Logout</AuthText>
            </ProfileRight>
          </ProfileContainer>
        )}
      </ContainerWrapper>
    </Container>
  );
};

export default Navbar;
