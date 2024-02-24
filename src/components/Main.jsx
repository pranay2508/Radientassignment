import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`
const Header = styled.div`
/* text-align: center; */
padding-left: 275px;
font-size: 44px;
padding-top: 22px;
color: #2C384A;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

const HorizontalLine = styled.hr`
  border: 0;
  border-top: 1px solid #E1E4E6; /* Adjust color and thickness as needed */
  width: 65%; /* Ensures the line spans the full width of its container */
  margin: 15px 0; /* Adjust margin as needed */
  margin-left:275px;
`;

const Main = () => {
  return (
    <Container>
    <Header>
    Best website builders in the US
    </Header>
    <HorizontalLine/>



    </Container>

  )
}

export default Main