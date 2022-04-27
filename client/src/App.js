import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Landing from "./pages/Landing";
import GlobalStyle from "./styles/Global.styles";
import Join from "./pages/Join";
import Navbar from "./components/Navbar";
import PrivateOutlet from "./components/PrivateOutlet";
import ViewProfile from "../src/components/ViewProfile";
import UpdateProfile from "../src/components/UpdateProfile";
import ChangePassword from "../src/components/ChangePassword";
import ActivityLog from "../src/components/ActivityLog";
import Home from "../src/pages/Home";
import AddUser from "../src/components/AddUser";
import User from "../src/components/User";
import UpdateUser from "../src/components/UpdateUser";

// root component
function App() {
  const { isSuccess } = useSelector((state) => state.auth);
  const [localStorageData, setLocalStorageData] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  useEffect(() => {
    if (isSuccess) {
      setLocalStorageData(JSON.parse(localStorage.getItem("profile")));
    }
  }, [isSuccess]);

  return (
    <>
      <GlobalStyle />

      <Navbar />
      <Routes>
        <Route
          path="/"
          element={localStorageData ? <Navigate to="/home" /> : <Landing />}
        />

        <Route
          path="/login"
          element={localStorageData ? <Navigate to="/home" /> : <Join />}
        />

        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="home" element={<Home />} />
          <Route path="users" element={<User />} />
          <Route path="update-user" element={<UpdateUser />} />
          <Route path="activity-log" element={<ActivityLog />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          <Route path="view-profile" element={<ViewProfile />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="add-user" element={<AddUser />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
