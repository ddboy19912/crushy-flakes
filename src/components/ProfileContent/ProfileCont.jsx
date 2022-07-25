import React from 'react'
import styled from 'styled-components'
import {Button} from '../../components'
import {Contact, Basics} from '../'


const Container = styled.div`
width: 100%;
${'' /* height: 80%; */}
border: 0.5px solid #E1E5E4;
box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
border-radius: 4px;
display: flex;
flex-direction: column;
gap: 1rem;
`
const Upper = styled.div`
background: #FFFFFF;
border: 0.5px solid #E1E5E4;
box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
border-radius: 4px;
width: 100%;
height: 180px;
`
const Lower = styled.div`
background: #FFFFFF;
border: 0.5px solid #E1E5E4;
box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
border-radius: 4px;
width: 100%;
height: 989px;
padding-bottom: 10px;
`
const Title = styled.h2`
`
const Padding = styled.div`
padding: 0.3rem 2rem
`

const Image = styled.div`
background-image: url("https://i.ibb.co/dL236w1/loan-app-image.png");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 60px;
height: 60px;
border-radius: 50%;
`

const UserWrapper = styled.div`
display: flex;
align-items: center;
gap: 1rem;
position: relative;
${'' /* background: red; */}
`
const TextWrapper = styled.div`
`

const Name = styled.h3`
${'' /* font-weight: 500; */}
font-size: 18px;
line-height: 30px;
color: #000D09;
`
const Mail = styled.p`
margin-top: -1.2rem;
font-weight: 400;
font-size: 14px;
line-height: 30px;
color: #5A5A5A;
`

const Info = styled.p`
margin-top: -1.2rem;
font-weight: 400;
font-size: 16px;
line-height: 30px;
color: #5A5A5A;
`
const Scale = styled.div`
transform: scale(0.9)
`

const ProfileCont = () => {
  return (
    <Container>
    <Upper>
    <Padding>
<Title>Profile</Title>
<UserWrapper>
<Image />
<TextWrapper>
    <Name>Tomi Olatunji</Name>
    <Mail>tomisinolatunji2@gmail.com</Mail>
</TextWrapper>
<Scale>
<Button value="Update Photo" />
</Scale>
</UserWrapper>
</Padding>
    </Upper>
    <Lower>
    <Padding>
<Title>Personal Information</Title>
<Info>Basic information, like your name and photo.</Info>
<Basics />
<Contact />
</Padding>
    </Lower>
    </Container>
  )
}

export default ProfileCont