import React from "react";
import styled from "styled-components";
import download1 from "../Photos/download1.png";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const Container = styled.div`
  padding-left: 10px;
  margin-left: 10px;
  @media only screen and (min-width: 768px) {
    padding-left: 275px;
    margin-left: 10px;
  }
`;

const Data = styled.div`
  display: grid;
  grid-template-columns: 20% 50% 20%;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftSide = styled.div`
  grid-column: 1;
`;

const MiddleSide = styled.div`
  grid-column: 2;
  font-size: 16px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const RightSide = styled.div`
  width: 135px;
  height: 118px;
  grid-column: 3;
  background-color: #f3f9ff;
  margin-bottom: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    grid-column: 1;
    width: auto;
    height: auto;
  }
`;

const Ratingdiv = styled.div`
  font-size: 32px;
  color: #074786;
  align-items: center;
  margin-top: 22px;
`;

const Img = styled.img`
  padding-top: 25px;
`;

const TextBelowImage = styled.div`
  display: block;
  text-align: center;
  padding-top: 6px;
  color: #626e79;
`;

const InfoIcon = styled(InfoOutlinedIcon)`
  color: #babec3;
  margin-left: -10px;
  cursor: pointer;
  margin-bottom: 90px;
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
  margin-bottom: 52px;
  color: #074786;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff7724;
  color: white;
  width: 136px;
  height: 34px;
  margin-top: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Diamond = styled(DiamondOutlinedIcon)`
  color: white;
`;

const Ticked = styled(CheckCircleOutlineOutlinedIcon)`
  color: blue;
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
        </MiddleSide>

        <RightSide>
          <RatingContainer>
            <Ratingdiv>9.8</Ratingdiv>
            <Ratingword>Exceptional</Ratingword>
          </RatingContainer>
          <InfoIcon style={{ fontSize: "12px" }} />
        </RightSide>
      </Data>

      <Box>
        <Diamond />
        <div>
          <p>Best Choice</p>
        </div>
      </Box>
      {/* Repeat the above structure for other sections */}

      <p
        style={{
          color: "#626e79",
          fontSize: "20px",
          paddingBottom: "40px",
        }}
      >
        2
      </p>
      <Data>
        <LeftSide>
          <Img src={download1} alt="Description" />
          <TextBelowImage>Builder1</TextBelowImage>
        </LeftSide>

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
        </MiddleSide>

        <RightSide>
          <RatingContainer>
            <Ratingdiv>9.8</Ratingdiv>
            <Ratingword>Exceptional</Ratingword>
          </RatingContainer>
          <InfoIcon style={{ fontSize: "12px" }} />
        </RightSide>
      </Data>

      <p
        style={{
          color: "#626e79",
          fontSize: "20px",
          paddingBottom: "40px",
        }}
      >
        3
      </p>
      <Data>
        <LeftSide>
          <Img src={download1} alt="Description" />
          <TextBelowImage>Builder1</TextBelowImage>
        </LeftSide>

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
        </MiddleSide>

        <RightSide>
          <RatingContainer>
            <Ratingdiv>9.8</Ratingdiv>
            <Ratingword>Exceptional</Ratingword>
          </RatingContainer>
          <InfoIcon style={{ fontSize: "12px" }} />
        </RightSide>
      </Data>

      <p
        style={{
          color: "#626e79",
          fontSize: "20px",
          paddingBottom: "40px",
        }}
      >
        4
      </p>
      <Data>
        <LeftSide>
          <Img src={download1} alt="Description" />
          <TextBelowImage>Builder1</TextBelowImage>
        </LeftSide>

        <MiddleSide>
          <span style={{}}>WixPro 72-Inch Responsive Website Builder</span>
          <span style={{ color: "#626e79" }}>
            - Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </span>
          <p style={{ paddingTop: "13px" }}>Main Highlight</p>
          <p
            style={{
              paddingTop: "15px",
              paddingLeft: "15px",
              backgroundColor: "#FFF4ED",
            }}
          >
            <p style={{ marginBottom: "5px", marginLeft: "20px" }}>
              Building Responsive
            </p>
            <p style={{ marginBottom: "5px", marginLeft: "20px" }}>Cool</p>
            <p style={{ marginLeft: "20px" }}>Docs</p>
          </p>
          <p>Why We love it</p>
          <p style={{ display: "flex", marginTop: "5px" }}>
            <Ticked /> Documentation{" "}
          </p>
          <p style={{ display: "flex", marginTop: "5px" }}>
            <Ticked />
            Easy use{" "}
          </p>
          <p style={{ display: "flex", marginTop: "5px" }}>
            <Ticked />
            Outof Box{" "}
          </p>
          <Show>
            <div>Show more</div>
            <Keydown />
          </Show>
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
