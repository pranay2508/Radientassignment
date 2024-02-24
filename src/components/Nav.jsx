import React from "react";
import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body, p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;

const Navbar = styled.div`
background-color: #212731;
height:55px;
display: flex;
`;
const SearchBar= styled.div`
    background-color: white;
    height: 18px;
    padding-left: 202px;
    margin-left: 416px;
    padding-top: 19px;
    margin-top: 6px;
    border-radius: 7px;

`;

const Nav = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar>
    <SearchBar>
    
    </SearchBar>
      </Navbar>
    </>
  );
};

export default Nav;