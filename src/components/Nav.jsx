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
  background-color: #212731;
  height: 55px;
  display: flex;
`;
const SearchBar = styled.div`
  background-color: white;
  height: 18px;
  padding-left: 225px;
  margin-left: 416px;
  padding-top: 19px;
  margin-top: 6px;
  border-radius: 7px;
  position: relative;
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
`;

const Header = styled.h1`
  padding-top: 16px;
  padding-left: 80px;
  display: flex;
  font-size: 7px;
  color: #d1d6da;
  cursor: pointer;
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
            <h1 style={{ marginRight: "50px" }}> Categories</h1>
          </div>
          <div>
            <h1 style={{ marginRight: "50px" }}> Website Builders</h1>
          </div>
          <div>
            <h1 style={{ marginRight: "50px" }}> Today's deals</h1>
          </div>
        </Header>
      </Navbar>
    </>
  );
};

export default Nav;
