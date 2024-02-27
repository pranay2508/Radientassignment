import React from "react";
import styled from "styled-components";
import download1 from "../Photos/download1.png";

const DealBox = styled.div`
  margin-top: 40px;
  overflow-y: auto;
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
  padding: 0 20px;
`;

const CardContainer = styled.div`
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap; 
  gap: 20px;
  padding-left: 230px;
  justify-content: center; 
  @media only screen and (max-width: 768px) {
    padding-left: 20px; 
  }
`;

const Card = styled.div`
  width: 280px;
  height: 400px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  margin-top: 50px;
`;

const Discount = styled.div`
  color: #074786;
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
  background-color: gray;
  width: 53px;
  height: 20px;
  margin-right: 20px;
  font-size: 12px;
  border-radius: 5px;
`;

const Offname = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 91px;
  height: 20px;
  background-color: gray;
  border-radius: 5px;
  font-size: 12px;
  margin-right: 30px;
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
  color: gray;
`;

const Pricesection = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
`;

const Price = styled.div`
  margin-right: 10px;
`;

const Actualprice = styled.div`
  margin-right: 10px;
  font-size: 13px;
  margin-top: 4px;
  color: gray;
`;

const Offper = styled.div`
  color: red;
  font-size: 8px;
  margin-right: 130px;
  margin-top: 9px;
`;

const Button = styled.button`
  font-size: 15px;
  color: white;
  width: 280px;
  border-radius: 6px;
  height: 48px;
  background-color: blue;
  margin-top: 30px;
  cursor: pointer;
`;

const Special = styled.div`
  display: flex;
`;

const Buttonend = styled.button`
  background-color: blue;
  color: white;
  margin-left: 250px;
  height: 42px;
  width: 97px;
  border-radius: 6px;
  margin-top: 16px;
  @media only screen and (max-width: 768px) {
    margin-left: auto; /* Move the button to the right on smaller screens */
    margin-right: 20px; /* Add some margin to separate from other elements */
  }
`;

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
        </CardContainer>
      </Container>
      <Special>
        <p
          style={{
            paddingLeft: "275px",
            color: "gray",
            fontSize: "30px",
            marginTop: "20px",
            marginBottom: "12px",
          }}
        >
          Sign up and get exclusive special deals
        </p>
        <Buttonend>Signup</Buttonend>
      </Special>
    </DealBox>
  );
};

export default DealSection;
