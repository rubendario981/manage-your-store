import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { TfiDashboard } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import Button from '../../components/atoms/Button';
import { MdOutlineMenu, MdMenuOpen  } from "react-icons/md";
import { useUIStore } from '../../store/usStore';

const Nav = styled.nav<{ collapsed: 'true' | 'false' }>`
  display: flex;
  flex-direction: column;
  width: ${({ collapsed }) => (collapsed === 'true' ? '60px' : '200px')};
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 1rem;
  gap: 1rem;
  border-right: 1px solid ${({ theme }) => theme.colors.dark};

  .sidebar-toggle {
    width: fit-content;
    margin-left: ${({ collapsed }) => (collapsed === 'true' ? '-12px' : '0')};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
  }

  .sidebar-actions {
    margin-top: auto;
    padding: ${({ collapsed }) => (collapsed === 'true' ? '0.5rem' : '1rem')};
    text-align: center;
  }
`;

const StyledLink = styled(Link)<{ active: 'true' | 'false', collapsed: 'true' | 'false' }>`
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
  
  .sidebar-icon {
    font-size: ${({ collapsed }) => (collapsed === 'false' ? '1.75rem' : '2.25rem')};
  }

  .sidebar-title {
    display: ${({ collapsed }) => (collapsed === 'true' ? 'none' : 'block')};
  }
`;

const Sidebar = () => {
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);
  const collapsed = useUIStore((state) => state.isSidebarOpen);

  const location = useLocation();

  return (
    <Nav collapsed={collapsed}>
      <Button variant="primary" onClick={toggleSidebar} accessibilityText={collapsed ? 'Abrir menú' : 'Cerrar menú'} className='sidebar-toggle'>
        {!collapsed ? <MdMenuOpen  /> : <MdOutlineMenu  />}
      </Button>
      <StyledLink to="/" active={location.pathname === '/' ? 'true' : 'false'} collapsed={collapsed}>
        <TfiDashboard className='sidebar-icon' />
        <p className='sidebar-title'>Dashboard</p>
      </StyledLink>
      <StyledLink to="/users" active={location.pathname === '/users' ? 'true' : 'false'} collapsed={collapsed}>
        <IoSettingsOutline className='sidebar-icon' />
        <p className='sidebar-title'>Usuarios</p>
      </StyledLink>
    </Nav>
  )
}

export default Sidebar;