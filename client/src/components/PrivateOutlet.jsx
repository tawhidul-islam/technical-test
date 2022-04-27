import { Navigate, Outlet } from "react-router-dom";

export default function PrivateOutlet() {
  const auth = JSON.parse(localStorage.getItem("profile"));

  return auth ? <Outlet /> : <Navigate to="/login" />;
}
