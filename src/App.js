// import Navbar from './components/Navbar'
import { ThemeProvider } from "styled-components";
import { Home, Investment, Support, Settings, Modal, Profile } from "./pages";
import styled from "styled-components";
import { Sidebar, Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import { useGlobalContext } from "./context";
import { lightTheme, darkTheme } from "./styles/theme";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;
const Main = styled.div`
  width: 100%;
`;
const Side = styled.div`
  max-width: 100%;
`;

function App() {
  // const {theme} = useGlobalContext();
  // const themeStyle = theme === "light" ? lightTheme : darkTheme;

  const { modalOpen } = useSelector((state) => state.dash);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!modalOpen) {
      document.body.style.overflow = "unset";
    }
  }, [modalOpen]);

  return (
    <Router>
      {/* <ThemeProvider theme={themeStyle}> */}
      {/* <GlobalStyle /> */}
      {modalOpen && <Modal />}
      <Container>
        <Side>
          <Sidebar />
        </Side>
        <Main>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/investment" element={<Investment />} />
            <Route exact path="/support" element={<Support />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </Main>
      </Container>
      {/* </ThemeProvider> */}
    </Router>
  );
}

export default App;
