import React from 'react'
import styled from 'styled-components'
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { MenuItem } from "@mui/material";

const Container = styled.div`
border: 1px solid #F2F0F0;
border-radius: 10px;
height: 332px;
width: 778px;
margin-top: 3.5rem;
box-shadow: 0px 0px 4px rgba(122, 128, 126, 0.2);
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
const Inputs = styled.div`
display: flex;
flex-direction: column;
`

const Contact = () => {

const FormLabelStyled = styled(FormControlLabel)`
    /* background: red; */
    display: flex;
    align-items: center;
    justify-content: space-between ;
    text-align: left;
    margin-top: 2rem;
    width: 90%;
    /* background: blue; */
  `;

  const StyledField = styled(TextField)`
  margin-left: 2rem;
  width: 542px;
  `


  return (
    <Container>
    <TopBar><Padding>Contact Info</Padding></TopBar>
    <Inputs>
    <FormControl component="fieldset">
      <FormGroup aria-label="position">
        <FormLabelStyled
          control={<StyledField id='Email' label='Email' />}
          label="Email"
          labelPlacement="start"
        />
        <FormLabelStyled
          control={<StyledField id='Phone Number' label='Phone Number' />}
          label="Phone Number"
          labelPlacement="start"
        />
       <FormLabelStyled
          control={<StyledField id='Address' label='Address' />}
          label="Address"
          labelPlacement="start"
        />


      </FormGroup>
    </FormControl>
    </Inputs>
    </Container>
  )
}

export default Contact