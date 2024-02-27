import React from "react";
import styled from "styled-components";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

const Container = styled.div`
 padding-left: 275px;
  @media only screen and (max-width: 768px) {
    padding: 0 15px;
  }
`;

const Header = styled.div`
  font-size: 47px;
  color: #2c384a;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  @media only screen and (max-width: 768px) {
    font-size: 32px;
    padding-top: 10px;
    text-align: center;
  }
`;

const HorizontalLine = styled.hr`
  border: 0;
  border-top: 1px solid #e1e4e6;
  width: 65%;
  margin: 15px 0;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Headercontainer = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Heading = styled.p`
  color: #626e79;
  font-size: 14px;
  font-weight: lighter;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const SubHeaderContainer = styled.div`
  display: flex;
  color: #626e79;
  font-weight: lighter;
  font-size: 13px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const HeaderListing = styled.div`
  display: flex;
  align-items: center;
  color: #626e79;
  font-size: 13px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff7724;
  color: white;
  width: 136px;
  height: 34px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 20px;
  & > div > p {
    text-align: center;
    font-size: 15px;
    color: white;
    padding-left: 8px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
`;

const IconBase = styled.div`
  color: #626e79;
  margin-right: 10px;
`;

const Check = styled(CheckCircleOutlinedIcon)`
  ${IconBase}
`;
const Info = styled(InfoOutlinedIcon)`
  ${IconBase}
`;
const ArrowDown = styled(KeyboardArrowDownIcon)``;
const Arrowright = styled(KeyboardArrowRightIcon)``;
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
