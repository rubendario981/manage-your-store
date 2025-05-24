import styled from 'styled-components';
import Button from '../../components/atoms/Button';
import { FiSun, FiMoon } from 'react-icons/fi';
import logo from '../../assets/store-worker.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
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
  return (
    <HeaderContainer>
      <Brand>
        <img src={logo} alt="Logo" style={{ filter: !isDarkMode ? 'none' : 'brightness(0) invert(0.85)' }} />
        <p>Atiende tu tienda</p>
      </Brand>

      <Button variant="primary" size="md" onClick={toggleDarkMode}>
        {
          isDarkMode ? <FiSun /> : <FiMoon />
        }
      </Button>
    </HeaderContainer>
  )
}

export default Header;