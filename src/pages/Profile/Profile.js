import React from 'react'
import styled from 'styled-components'
import {SearchSup, ProfileCont} from '../../components'



const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
background: #EEF0F8;
`
const Wrapper = styled.div`
padding: 0 34px;
${'' /* height: 100%; */}
display: flex;
flex-direction: column;
gap: 1rem;
`



const Profile = () => {
  return (
    <Container>
    <Wrapper>
    <SearchSup />
  <ProfileCont />
    </Wrapper>
    </Container>
  )
}

export default Profile