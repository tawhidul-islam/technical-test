import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  LeftBarContainer,
  LeftBarWrapper,
  LeftBarItem,
  Profile,
  ProfilePricture,
  Name,
} from "../styles/LeftBar.styles";
import classes from "../styles/Leftbar.module.css";
import defaultProfile from "../img/default-profile.png";
import { sideBar } from "../reducers/style";
import useWindowDimensions from "../hooks/useWindowDimensions";

const LeftBar = () => {
  const locaStorageData = JSON.parse(localStorage.getItem("profile"));
  const { style } = useSelector((state) => state.style);
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  const handleContent = () => {
    dispatch(sideBar({ width }));
  };

  return (
    <LeftBarContainer toggle={style.sidebar}>
      <LeftBarWrapper className={classes.LeftBar}>
        <Profile>
          <ProfilePricture
            src={
              locaStorageData?.user?.url
                ? locaStorageData?.user?.url
                : defaultProfile
            }
            alt="profile"
          />
          <Name>{locaStorageData.user.name}</Name>
        </Profile>
        <NavLink
          to="/home"
          className={classes.leftBarLink}
          onClick={handleContent}
        >
          <LeftBarItem>Home</LeftBarItem>
        </NavLink>
        {locaStorageData?.user?.role === "admin" && (
          <>
            <NavLink
              to="/add-user"
              className={classes.leftBarLink}
              onClick={handleContent}
            >
              <LeftBarItem>Add user</LeftBarItem>
            </NavLink>

            <NavLink
              to="/users"
              className={classes.leftBarLink}
              onClick={handleContent}
            >
              <LeftBarItem>All user</LeftBarItem>
            </NavLink>

            <NavLink
              to="/update-user"
              className={classes.leftBarLink}
              onClick={handleContent}
            >
              <LeftBarItem>Update user</LeftBarItem>
            </NavLink>
          </>
        )}

        <NavLink
          to="/activity-log"
          className={classes.leftBarLink}
          onClick={handleContent}
        >
          <LeftBarItem>Activity Log</LeftBarItem>
        </NavLink>

        <NavLink
          to="/update-profile"
          className={classes.leftBarLink}
          onClick={handleContent}
        >
          <LeftBarItem>Update Profile</LeftBarItem>
        </NavLink>
        <NavLink
          to="/view-profile"
          className={classes.leftBarLink}
          onClick={handleContent}
        >
          <LeftBarItem>View Profile</LeftBarItem>
        </NavLink>
        <NavLink
          to="/change-password"
          className={classes.leftBarLink}
          onClick={handleContent}
        >
          <LeftBarItem>Change Password</LeftBarItem>
        </NavLink>
      </LeftBarWrapper>
    </LeftBarContainer>
  );
};

export default LeftBar;
