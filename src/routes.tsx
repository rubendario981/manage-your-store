import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Layout from "./pages/layout/Layout";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={
      <ProtectedRoutes>
        <Layout />
      </ProtectedRoutes>
    } />
    <Route path="/login" element={<p>Login</p>} />
  </Routes>
)

export default AppRoutes