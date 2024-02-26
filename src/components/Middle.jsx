import React from "react";
import styled from "styled-components";
import download1 from "../Photos/download1.png";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Container = styled.div`
  display: flex;
  /* justify-content: left; */
  padding-left: 275px;
  margin-left: 10px; /* Adjust the margin as needed */
`;
const Data = styled.div`
  display: grid;
  grid-template-columns: 20% 50% 20%;
  align-items: center;
  gap: 20px;
`;
const LeftSide = styled.div`
  /* background-color: black; */
  grid-column: 1;
`;
const MiddleSide = styled.div`
  /* background-color: blue; */
  grid-column: 2;
  font-size: "16px";
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  /* margin-left: 20px; */
`;
const RightSide = styled.div`
  width: 135px;
  height: 118px;
  grid-column: 3;
  background-color: #f3f9ff;
  margin-bottom: 100px;
  margin-left: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center; /* Horizontally center the content */
  align-items: center; /* Vertically center the content */
`;

const Ratingdiv = styled.div`
  font-size: 32px;
  color: #074786;
  align-items: center;
  margin-top: 22px;
  /* margin-bottom: 55px; */
`;
const Img = styled.img`
  padding-top: 25px;
`;
const TextBelowImage = styled.div`
  display: block;
  text-align: center;
  /* padding-left: 28px; */
  padding-top: 6px;
  color: #626e79;
  margin-right: 50px;
`;

const InfoIcon = styled(InfoOutlinedIcon)`
  color: #babec3;
  margin-left: -10px;
  cursor: pointer;
  /* padding-left: px; */
  padding-bottom: 95px;
  /* margin-right: 10px; */
  /* height: 10px;
  width: 10px; */
`;

const Keydown = styled(KeyboardArrowDownOutlinedIcon)`
  height: 16px;
  width: 16px;
  cursor: pointer;
`;
const Show = styled.div`
  padding-top: 20px;
  color: blue;
  display: flex;
`;

const Ratingword = styled.div`
  display: block;
  text-align: center;
  font-size: 14px;
  /* padding-bottom: 40px; */
  /* position: fixed; */
  margin-bottom: 52px;
  color: #074786;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Middle = () => {
  return (
    <Container>
      <p
        style={{
          color: "#626e79",
          fontSize: "20px",
          paddingBottom: "40px",
        }}
      >
        1
      </p>
      <Data>
        <LeftSide>
          <Img src={download1} alt="Description" />
          <TextBelowImage>Builder1</TextBelowImage>
        </LeftSide>

        {/* from here  */}

        <MiddleSide>
          <span style={{}}>WixPro 72-Inch Responsive Website Builder</span>
          <span style={{ color: "#626e79" }}>
            - Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </span>
          <p style={{ paddingTop: "13px" }}>Main Highlight</p>
          <p style={{ paddingTop: "13px", paddingLeft: "15px" }}>
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
          <Show>
            <div>Show more</div>
            <Keydown />
          </Show>
          {/* Add content for middle side */}
        </MiddleSide>
        <RightSide>
          <RatingContainer>
            <Ratingdiv>9.8</Ratingdiv>
            <Ratingword>Exceptional</Ratingword>
          </RatingContainer>
          <InfoIcon style={{ fontSize: "12px" }} />
        </RightSide>
      </Data>
    </Container>
  );
};

export default Middle;
