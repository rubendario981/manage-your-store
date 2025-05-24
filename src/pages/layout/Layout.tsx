import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

// const LayoutContainer = styled.div`
//   display: flex;
//   background-color: ${({ theme }) => theme.colors.background};
// `;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Layout = () => {
  return (
    <MainContent>
      <Sidebar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </MainContent>
  )
}

export default Layout