import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";





export default function RadioButtonsGroup({label1, label2}) {
  // Style the form control


  
  const StyledFormControlLabel = styled((props) => (
    
    <FormControlLabel {...props} />
  ))(({ theme, checked }) => ({
    color: "#5A5A5A",
    ".MuiFormControlLabel-label": checked && {
      // Change color here
      color: "#2050F5"
    }
  }));

  function MyFormControlLabel(props) {
    // MUI UseRadio Group
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
  }
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        disableRipple = 'true'
        style={{display: 'flex', gap: '2rem'}}
        row
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 28
          },
          "& .Mui-checked": {
            color: "blue"
          }
        }}
      >
        <MyFormControlLabel value="female" control={<Radio />} label={label1} />
        <MyFormControlLabel value="male" control={<Radio />} label={label2} />
      </RadioGroup>
    </FormControl>
  );
}