import { Home, Investment, Support, Settings, Modal, Profile } from './pages';
import styled from 'styled-components';
import { Sidebar, Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
// import { GlobalStyle } from './styles/globalStyles';
// import { useGlobalContext } from './context';
// import { lightTheme, darkTheme } from './styles/theme';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import NewCampaign from './pages/Campaign/NewCampaign';
import BulkUploads from './pages/Bulk Uploads/BulkUploads';
import Campaign from './pages/Campaign/Campaign';
import { AccountBox } from './pages/LoginPage';

const Container = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;

const LoginCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  // const {theme} = useGlobalContext();
  // const themeStyle = theme === "light" ? lightTheme : darkTheme;

  const { modalOpen } = useSelector((state) => state.dash);

  const [success, setSuccess] = useState(true);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    }
    if (!modalOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [modalOpen]);

  return (
    <Router>
      {/* <ThemeProvider theme={themeStyle}> */}
      {/* <GlobalStyle /> */}
      {modalOpen && <Modal />}
      {!success ? (
        <LoginCont>
          <AccountBox />
        </LoginCont>
      ) : (
        <Container>
          <Sidebar />
          <div style={{ flex: '4', display: 'flex', flexDirection: 'column' }}>
            {' '}
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/create-campaign" element={<NewCampaign />} />
              <Route exact path="/campaign" element={<Campaign />} />
              <Route exact path="/investment" element={<Investment />} />
              <Route exact path="/support" element={<Support />} />
              <Route exact path="/settings" element={<Settings />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/uploads" element={<BulkUploads />} />
            </Routes>
          </div>
        </Container>
      )}
      {/* </ThemeProvider> */}
    </Router>
  );
}

export default App;
