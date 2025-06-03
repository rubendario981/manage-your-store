import styled from 'styled-components';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import Button from '../../components/atoms/Button';
import { useUIStore } from '../../store/usStore';

const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
`;

const SidebarWrapper = styled.div<{ open: boolean }>`
  background-color: ${({ theme }) => theme.colors.card};
  height: 100%;
  width: auto;
  transition: transform 0.3s ease;
  z-index: 20;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    left: 0;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    box-shadow: 2px 0 6px rgba(0, 0, 0, 0.3);
  }
`;

const Overlay = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    content: '';
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 10;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Topbar = styled.header`
  display: none;
  padding: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${({ theme }) => theme.colors.card};
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
    z-index: 5;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  overflow-y: auto;
`;

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isSidebarOpen, toggleSidebar } = useUIStore((state) => state);

  const handleClick = () => {
    setSidebarOpen(true);
    console.log(isSidebarOpen);
    if (isSidebarOpen === 'true') {
      toggleSidebar();
    }
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <Container>
      <SidebarWrapper open={sidebarOpen}>
        <Sidebar />
      </SidebarWrapper>

      {isMobile && sidebarOpen && <Overlay onClick={() => setSidebarOpen(false)} />}

      <Content>
        <Topbar>
          <Button
            variant="secondary"
            size="sm"
            accessibilityText="Abrir menú"
            onClick={handleClick}
          >
            <MdOutlineMenu />
          </Button>
        </Topbar>

        <Main>
          <Outlet />
        </Main>
      </Content>
    </Container>
  );
};

export default Layout;
