import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Timezone" />}
    />
  );
}


const top100Films = [
  { label: 'Africa/Lagos'},
  { label: 'Africa/Cotonou'},
  { label: 'Africa/Mozambique'},
  { label: 'Africa/Cairo'},
  { label: 'Europe/Brussels' },
  { label: "Europe/Paris" },
  { label: 'Asia/Hong Kong'},
  {
    label: 'North-America/Ontario'},
];
