import {
  CreateBrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Education from './components/Education';
import Home from "./components/Home";
import styled from "styled-components";
import Employment from "./components/Employment";
import Achievements from "./components/Achievements";
import References from "./components/References";
import Calculator from "./components/Calculator";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row; /* Default layout: nav on the left, main on the right */
    min-height: 100vh;

    @media screen and (max-width: 750px) {
        flex-direction: column; /* Stack nav on top for smaller screens */
    }
`;

const Root = () => {
  return (
    <>
      <Header />
      <Wrapper>
      <Nav />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Employment" element={<Employment />} />
          <Route path="/Achievements" element={<Achievements />} />
          <Route path="/References" element={<References />} />
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </Main>
      </Wrapper>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
