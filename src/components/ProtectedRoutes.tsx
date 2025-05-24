import type { JSX } from "react";
import { useAuthStore } from "../store/authStore";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return !isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;