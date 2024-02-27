import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const GlobalStyle = createGlobalStyle`
  body, p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;

const Navbar = styled.div`
  padding-left: 20px; 
  background-color: #212731;
  height: 55px;
  display: flex;
  justify-content: center; 
  align-items: center; 
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center; 
    height: auto;
    padding-left: 0; 
  }
`;

const SearchBar = styled.div`
  background-color: white;
  width: 200px; 
  height: 36px;
  padding: 6px 10px; 
  margin: 6px 0;
  margin-right: 20px;
  border-radius: 7px;
  position: relative;
  @media only screen and (max-width: 768px) {
    width: 80%; 
    padding: 10px;
    margin: 10px 0;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
`;

const Header = styled.h1`
  padding-top: 16px;
  display: flex;
  font-size: 7px;
  color: #d1d6da;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center; 
    padding: 10px;
  }
`;

const Nav = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar>
        <SearchBar>
          <StyledSearchIcon />
        </SearchBar>
        <Header>
          <div>
            <h1 style={{ marginRight: "20px" }}> Categories</h1>
          </div>
          <div>
            <h1 style={{ marginRight: "20px" }}> Website Builders</h1>
          </div>
          <div>
            <h1 style={{ marginRight: "20px" }}> Today's deals</h1>
          </div>
        </Header>
      </Navbar>
    </>
  );
};

export default Nav;
