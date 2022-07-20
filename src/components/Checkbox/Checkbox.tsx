import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { SquareRounded } from '@mui/icons-material';
import { styled } from "@mui/material/styles";


export default function CheckboxLabels({label}) {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked  
      checkedIcon={<SquareRounded style={{padding: '1px', border: '2px solid #2050F5', borderRadius: '3px'}}   />}  />} label={label} />
    </FormGroup>
  );
}
    