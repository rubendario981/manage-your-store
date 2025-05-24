import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/theme';
import AppRoutes from './routes';
import './App.css'
import { useState } from 'react';
import Header from './pages/layout/Header';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  overflow: hidden;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <LayoutContainer>
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <AppRoutes />
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default App
