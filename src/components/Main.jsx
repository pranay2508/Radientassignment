import React from "react";
import styled from "styled-components";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

// all box css are here
const Container = styled.div``;

const Header = styled.div`
  /* text-align: center; */
  padding-left: 275px;
  font-size: 47px;
  padding-top: 22px;
  color: #2c384a;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const HorizontalLine = styled.hr`
  border: 0;
  border-top: 1px solid #e1e4e6;
  width: 65%;
  margin: 15px 0;
  margin-left: 275px;
`;

const Headercontainer = styled.div`
  display: flex;
`;

const Heading = styled.p`
  color: #626e79;
  padding-top: 4px;
  font-size: 14px;
  font-weight: lighter;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const SubHeaderContainer = styled.div`
  display: flex;
  padding-left: 300px;
  color: #626e79;
  padding-top: 4px;
  font-weight: lighter;
  font-size: 13px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
const HeaderListing = styled.div`
  display: flex;
  padding-left: 275px;
  align-items: center;
  color: #626e79;
  padding-top: 20px;
  font-size: 13px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
const Box = styled.div`
  display: flex; /* Use flexbox */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  background-color: #ff7724;
  color: white;
  width: 136px;
  margin-left: 275px;
  height: 34px;
  margin-top: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  /* padding-bottom: 4px; */
  margin-bottom: 20px;
  //css for the p tag inside the box
  & > div > p {
    /* margin-top:25px;  */
    text-align: center;
    font-size: 15px;
    color: white;
    padding-left: 8px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
`;

//All icons css are here
const Check = styled(CheckCircleOutlinedIcon)`
  color: #626e79;
  padding-left: 275px;
  margin-right: 10px;
`;
const Info = styled(InfoOutlinedIcon)`
  color: #626e79;
  margin-right: 10px;
`;

const ArrowDown = styled(KeyboardArrowDownIcon)`
  color: #626e79;
`;
const Arrowright = styled(KeyboardArrowRightIcon)`
  color: #626e79;
  margin-right: 8px;
  /* margin-bottom: 4px; */
`;
const Trophy = styled(EmojiEventsOutlinedIcon)`
  color: white;
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
            <p style={{ marginRight: "255px" }}>Advertising Disclosure </p>
          </div>
        </Heading>
        <Heading>
          <div>
            <p>Top relevent</p>
          </div>
        </Heading>
        <ArrowDown />
      </Headercontainer>
      <HorizontalLine />
      <SubHeaderContainer>
        <div>
          <span style={{ marginRight: "50px" }}>Tools</span>
        </div>
        <div>
          <span style={{ marginRight: "50px" }}>AWS Builder</span>
        </div>
        <div>
          <span style={{ marginRight: "50px" }}>Start Build</span>
        </div>
        <div>
          <span style={{ marginRight: "50px" }}>Build Supplies</span>
        </div>
        <div>
          <span style={{ marginRight: "50px" }}>Tooling</span>
        </div>
        <div>
          <span>BlueHosting</span>
        </div>
      </SubHeaderContainer>
      <HeaderListing>
        <div>
          <span style={{ marginRight: "10px" }}>Home</span>
        </div>
        <Arrowright />
        <div>
          <span style={{ marginRight: "10px" }}>Hosting for all </span>
        </div>
        <Arrowright />
        <div>
          <span style={{ marginRight: "10px" }}>Hosting</span>
        </div>
        <Arrowright />
        <div>
          <span style={{ marginRight: "10px" }}>Hosting6</span>
        </div>
        <Arrowright />
        <div>
          <span>Hosting5</span>
        </div>
      </HeaderListing>
      <Box>
        <Trophy />
        <div>
          <p>Best Choice</p>
        </div>
      </Box>
    </Container>
  );
};

export default Main;
