import React from 'react'
import styled from 'styled-components'
import {Search} from '@material-ui/icons'

const Container = styled.div`
display: block;
${'' /* width: 100%; */}
height: 60px;
background: #FFFFFF;
border: 0.5px solid #E1E5E4;
box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
border-radius: 4px;
margin-top: 24px;
`
const Wrapper = styled.div`
display: flex;
padding: 0px 40px;
${'' /* flex-direction: column; */}
align-items: center;
flex: start;
height: 100%;
max-width: 100%;
${'' /* background: blue; */}
${'' /* justify-content: center; */}
`

const Input = styled.input`
border: none;
height: 40px;
background: transparent;
${'' /* background-color: red; */}
width: 100%;
${'' /* padding: 0.5rem; */}
font-size: 18px;
padding-left: 10px !important;


&:focus{
    border: none;
    outline: none;
    padding-left: 10px !important;
}

&::placeholder{
font-style: normal;
font-weight: 400;
font-size: 18px;
${'' /* padding-left: 10px; */}
${'' /* line-height: 166%; */}
}
`


const SearchSup = () => {
  return (
    <Container>
        <Wrapper>
        <Search style={{fontSize: '16px', color: '#7A807E'}} />
        <Input placeholder="Search"/>
        </Wrapper>
    </Container>
  )
}

export default SearchSup