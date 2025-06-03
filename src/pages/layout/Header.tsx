import styled from 'styled-components';
import Button from '../../components/atoms/Button';
import { FiSun, FiMoon } from 'react-icons/fi';
import logo from '../../assets/store-worker.png';
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};

  .header-actions {
    display: flex;
    gap: 1rem;
  }
`;
  
const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  background-color: #00c292;

  img {
    width: 35px;
    height: 35px;
    object-fit: contain;
  }
  p {
    font-size: 0.65rem;
    font-weight: bold;
    margin: 0.5rem 0 0;
  }
`;

const Header = ( { toggleDarkMode, isDarkMode } : { toggleDarkMode: () => void, isDarkMode: boolean } ) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  const logout = () => {
    useAuthStore.getState().logout();
    navigate('/');
  }

  return (
    <HeaderContainer>
      <Brand>
        <img src={logo} alt="Logo" style={{ filter: !isDarkMode ? 'none' : 'brightness(0) invert(0.85)' }} />
        <p>Atiende tu tienda</p>
      </Brand>

      <div className='header-actions'>
        {isAuthenticated ? (
          <Button variant='secondary' onClick={logout}>
            Cerrar sesión
          </Button>
        ) : (
          <Button variant='secondary' onClick={() => navigate('/login')}>
            Iniciar sesión
          </Button>
        )}
        <Button variant="primary" size="md" onClick={toggleDarkMode} iconLeft={isDarkMode ? <FiSun /> : <FiMoon />}>
          {
            isDarkMode ? 'Modo claro' : 'Modo oscuro'
          }
        </Button>
      </div>
    </HeaderContainer>
  )
}

export default Header;