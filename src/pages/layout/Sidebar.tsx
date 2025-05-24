import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { TfiDashboard } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 1rem;
  gap: 1rem;
  border-right: 1px solid ${({ theme }) => theme.colors.dark};
`;

const StyledLink = styled(Link)<{ active: 'true' | 'false' }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  color: ${(props) => (props.active === 'true' ? '#fff' : '#bbb')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

const Sidebar = () => {
  const location = useLocation();
  // const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Nav>
      <StyledLink to="/" active={location.pathname === '/' ? 'true' : 'false'}>
        <TfiDashboard />
        Dashboard
      </StyledLink>
      <StyledLink to="/users" active={location.pathname === '/users' ? 'true' : 'false'}>
        <IoSettingsOutline />
        Parametrización
      </StyledLink>
    </Nav>
  )
}

export default Sidebar;