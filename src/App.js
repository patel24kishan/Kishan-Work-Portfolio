import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Profile from "./components/ProfileSection";
import Education from "./components/Education";
import { BrowserRouter as Router } from "react-router-dom";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";
import Footer from "./components/Footer";
import NavigationBar from "./components/navbarNEw/NavbarNew";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        {/* <NavigationBar/> */}
        <Body>
          <Profile />
          <Wrapper>
            <Projects />
            <Experience />
            <Skills />
            <Certificate />
            <Education />
          </Wrapper>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
