import React from "react";
import styled from "styled-components";
import download1 from "../Photos/download1.png";

const DealBox = styled.div`
  margin-top: 40px; /* Use margin-top instead of padding-top */
  overflow-y: auto; /* Add overflow-y to enable vertical scrolling */
  max-height: calc(100vh - 40px);
`;

const Title = styled.div`
  padding-left: 275px;
  font-size: 32px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px; /* Adjust the left and right padding for blank space */
`;

const CardContainer = styled.div`
  padding-top: 30px;
  display: flex;
  gap: 20px; /* Adjust the gap between cards */
  padding-left: 230px;
`;

const Card = styled.div`
  width: 280px;
  height:400px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 40px; */
`;

const Img = styled.img`
margin-top: 50px;
  /* margin-bottom: 120px; */
  /* margin-bottom: 60px; */
`;

const Discount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 80px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 40px;
`;

const Percentageoff = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  width: 53px;
  height: 20px;
  margin-right: 20px;
  font-size: 12px;
  border-radius: 5px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
const Offname = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 91px;
  height: 20px;
  background-color: green;
  border-radius: 5px;
  font-size: 12px;
  margin-right: 30px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const Discountname = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Itemname = styled.div``;
const Description = styled.div`
  margin-right: 50px;
`;
const Pricesection = styled.div`
  display: flex;
  /* margin-right: 80px; */
  margin-top: 20px;
  align-items: flex-start;
`;
const Price = styled.div`

`;
const Actualprice = styled.div`
/* padding-left:20px; */

`;
const Offper = styled.div`
`;

const Button = styled.button`
width: 292px;
height: 48px;
background-color: blue;
margin-top: 30px;
cursor: pointer;
`

const DealSection = () => {
  return (
    <DealBox>
      <Title>
        <div>Related deals you might like for</div>
      </Title>
      <Container>
        <CardContainer>
          <Card>
            <Img src={download1} alt="Description" />
            <Discount>
              <Percentageoff>20%</Percentageoff>
              <Offname>Limited Time</Offname>
            </Discount>
            <Discountname>
              <Itemname>Web Builder1</Itemname>
              <Description>
                Computer Modern clasic with wix <p>support</p>
              </Description>
              <Pricesection>
                <Price>$39.96</Price>
                <Actualprice>$49.96</Actualprice>
                <Offper>(20% off)</Offper>
              </Pricesection>
            </Discountname>
            <Button>View Deal</Button>
          </Card>
          <Card>Card 2</Card>
          <Card>Card 3</Card>
        </CardContainer>
      </Container>
    </DealBox>
  );
};

export default DealSection;
