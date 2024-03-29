import React from 'react';
import styled from 'styled-components';
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const FooterContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 450px;
  background-color: #212731;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const FooterColumn = styled.div`
  font-size: 18px;
  margin-top: 50px;
  margin-left: 20px;
  flex: 1;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 50px;
  }
`;

const FooterItem = styled.div`
  cursor: pointer;
  font-size: 13px;
  color: gray;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const Keydown = styled(KeyboardArrowDownOutlinedIcon)`
  height: 16px;
  width: 16px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterColumn>
        <div>Categories </div>
        <FooterItem>Web Builder</FooterItem>
        <FooterItem>Hosting</FooterItem>
        <FooterItem>Data Center</FooterItem>
        <FooterItem>Robotic-Automation</FooterItem>
      </FooterColumn>
      <FooterColumn>
        <div>Contact</div>
        <FooterItem>Contact</FooterItem>
        <FooterItem>Privacy Policy</FooterItem>
        <FooterItem>Terms Of Service</FooterItem>
        <FooterItem>Categories</FooterItem>
        <FooterItem>About</FooterItem>
      </FooterColumn>
      <FooterColumn>
        <div style={{ marginTop: '120px', display: 'flex', cursor: 'pointer' }}>United States <Keydown /></div>
      </FooterColumn>
    </FooterContainer>
  );
};

export default Footer;
