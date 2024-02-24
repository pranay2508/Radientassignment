import React from "react";
import styled from "styled-components";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const Container = styled.div``;

const Header = styled.div`
  /* text-align: center; */
  padding-left: 275px;
  font-size: 50px;
  padding-top: 22px;
  color: #2c384a;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const HorizontalLine = styled.hr`
  border: 0;
  border-top: 1px solid #e1e4e6; /* Adjust color and thickness as needed */
  width: 65%; /* Ensures the line spans the full width of its container */
  margin: 15px 0; /* Adjust margin as needed */
  margin-left: 275px;
`;

const Headercontainer = styled.div`
  display: flex;
`;

const Heading = styled.p`
  color: #4b5665;
  padding-top: 4px;
  font-size: 15px;
  font-weight: lighter;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
const Check = styled(CheckCircleOutlinedIcon)`
  color: #626e79;
  padding-left: 275px;
  margin-right: 10px;
`;
const Info = styled(InfoOutlinedIcon)`
  color: #626e79;
  margin-right: 10px;
`;

const Main = () => {
  return (
    <Container>
      <Header>Best website builders in the US</Header>
      <HorizontalLine />
      <Headercontainer>
        <Check />
        <Heading>
          <div>
            <p style={{ marginRight: "20px" }}>
              Last Updated - February 22 , 2020
            </p>
          </div>
        </Heading>
        <Info />
        <Heading>
          <div>
            <p>Advertising Disclosure </p>
          </div>
        </Heading>
      </Headercontainer>
      <HorizontalLine />
    </Container>
  );
};

export default Main;
