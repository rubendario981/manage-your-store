import { useAuthStore } from "../store/authStore";
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;