import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
border: 1px solid #F2F0F0;
border-radius: 10px;
height: 412px;
`
const TopBar = styled.div`
background: #ECEEF2;
border-radius: 10px 10px 0px 0px;
width: 100%;
height: 50px;
font-weight: 800;
font-size: 16px;
line-height: 30px;
color: #000D09;
display: flex;
align-items: center;
`

const Padding = styled.div`
padding-left: 2rem;
`
const Form = styled.input`
border: 1px solid #C4C4C4;
border-radius: 5px;
width: 542px;
height: 50px;
`
const Inputs = styled.div`
display: flex;
flex-direction: column;
`
const Label = styled.label`
`

const Basics = () => {
  return (
    <Container>
    <TopBar><Padding>Basics</Padding></TopBar>
<Inputs>
<Label>Full Name
    <Form placeholder="Basics" />
    </Label>
    <Label>
    Date of Birth
     <Form placeholder="Basics" />
     </Label>
     <Label>
     Gender
     <Form placeholder="Basics" />
     </Label>
      <Label>
     Password
     <Form placeholder="Basics" />
     </Label>
     </Inputs>
    </Container>
  )
}

export default Basics