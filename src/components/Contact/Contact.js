import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
border: 1px solid #F2F0F0;
border-radius: 10px;
height: 332px;
margin-top: 3.5rem;
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

const Contact = () => {
  return (
    <Container>
    <TopBar><Padding>Contact Info</Padding></TopBar>
    
    </Container>
  )
}

export default Contact