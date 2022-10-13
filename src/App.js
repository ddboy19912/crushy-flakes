// import Navbar from './components/Navbar'
// import { ThemeProvider } from 'styled-components';
import { Home, Investment, Support, Settings, Modal, Profile } from './pages';
import styled from 'styled-components';
import { Sidebar, Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { GlobalStyle } from './styles/globalStyles';
// import { useGlobalContext } from './context';
// import { lightTheme, darkTheme } from './styles/theme';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import NewCampaign from './pages/Campaign/NewCampaign';
import BulkUploads from './pages/Bulk Uploads/BulkUploads';
import Campaign from './pages/Campaign/Campaign';

const Container = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;
const Main = styled.div`
  width: 100%;
`;
const Side = styled.div`
  display: flex;
  width: 18rem;
  /* position: fixed; */
`;

const Test = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
`;

function App() {
  // const {theme} = useGlobalContext();
  // const themeStyle = theme === "light" ? lightTheme : darkTheme;

  const { modalOpen } = useSelector((state) => state.dash);

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
      <Container>
        {/* <Side> */}
        <Sidebar />
        {/* </Side> */}
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
      {/* </ThemeProvider> */}
    </Router>
  );
}

export default App;
