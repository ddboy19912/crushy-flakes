import React from 'react'
import styled from 'styled-components'


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

const ProfileCont = () => {
  return (
    <Container>
    <Upper>

    </Upper>
    <Lower>

    </Lower>
    </Container>
  )
}

export default ProfileCont