import styled from "styled-components";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import FlatsPage from "./pages/FlatsPage";
import Search from "./components/Search";
import { StyledNavItems, StyledNavItem, StyledNavbar, StyledBrand, StyledLogo } from "./components/_styled";
import logo from "./assets/logo.png";


const StyledApp = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
background-color: #a6b89a;
box-sizing: border-box;
min-height: 100vh;
`

function App() {
  const navigate = useNavigate();

  const onFlatSearch = (value) => {
    console.log('flat ?? ', value)
    navigate(`flats?search=${value}`)
  }

  return (
    <StyledApp>
      <StyledNavbar>
        <StyledBrand>
          <Link to="/">
            <StyledLogo src={logo} />
          </Link>
          Welcome to PinWorld
        </StyledBrand>

        <Search onSearch={onFlatSearch} />

        <Link to="/flats">
          <StyledNavItems>
            <StyledNavItem>View all flats</StyledNavItem>
          </StyledNavItems>
        </Link>
      </StyledNavbar>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/flats" element={<FlatsPage />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
