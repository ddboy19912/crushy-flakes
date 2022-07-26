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
height: 439px;
width: 778px;
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

  const [gender, setGender] = React.useState("");

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const Genders = [
    {
      label: "Male",
      value: "Male"
    },
    {
      label: "Female",
      value: "Female"
    }
  ];


  return (
    <Container>
    <TopBar><Padding>Basics</Padding></TopBar>
<Inputs>
 <FormControl component="fieldset">
      <FormGroup aria-label="position">
        <FormLabelStyled
          control={<StyledField id='Full Name' label='Full Name' />}
          label="Full Name"
          labelPlacement="start"
        />
        <FormLabelStyled
          control={<StyledField id='DOB' label='Date of Birth' />}
          label="Date of Birth"
          labelPlacement="start"
        />
        <FormLabelStyled
          control={
            <StyledField
              id="outlined-select-currency"
              select
              label="Gender"
              value={gender}
              onChange={handleChange}
            >
              {Genders.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledField>
          }
          label="Gender"
          labelPlacement="start"
        />
        <FormLabelStyled
          control={
            <StyledField
              autoComplete="current-password"
              type="password"
              label='Password'
              helperText="Password must be more than 8 characters long"
            />
          }
          id="outlined-password-input"
          label="Password"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
     </Inputs>
    </Container>
  )
}

export default Basics