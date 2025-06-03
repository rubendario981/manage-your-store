import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Layout from "./pages/layout/Layout";
import Login from "./pages/Login";

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    
    <Route element={<ProtectedRoutes />}>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<UserList />} />
        {/* Agrega más rutas aquí */}
      </Route>
    </Route>
  </Routes>
);

export default AppRoutes;

const Dashboard = () => {
  return <h1>Bienvenido al Dashboard</h1>;
};

const UserList = () => {
  return <h1>Lista de usuarios</h1>;
};
