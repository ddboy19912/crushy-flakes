import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID Number', width: 150,   headerAlign: 'center', align: 'center' },
  { field: 'product', headerName: 'Products', width: 150, headerAlign: 'center', align: 'center' },
  { field: 'name', headerName: 'Customer Name', width: 150, headerAlign: 'center', align: 'center' },
  {
    field: 'price',
    headerName:'Price',
    width: 150,   headerAlign: 'center', align: 'center'
  },
  {
    field: 'plan',
    headerName: 'Payment Plan', width: 150,   headerAlign: 'center',align: 'center'
  },
   {
    field: 'start',
    headerName: 'Start Date', width: 150,   headerAlign: 'center', align: 'center'
  },
   {
    field: 'end',
    headerName: 'End date', width: 150,   headerAlign: 'center', align: 'center'
  }
];

const rows = [
  { id: '#6389992', product: 'Iphone 12', name: 'Joel Amos Smithson', price: 'N300,000', plan: '12 Months', start: '12/08/2021', end: '12/08/2021' },
  { id: '#6389992', product: 'Iphone 12', name: 'Joel Amos Smithson', price: 'N300,000', plan: '12 Months', start: '12/08/2021', end: '12/08/2021' },
 { id: '#6389992', product: 'Iphone 12', name: 'Joel Amos Smithson', price: 'N300,000', plan: '12 Months', start: '12/08/2021', end: '12/08/2021' },
 { id: '#6389992', product: 'Iphone 12', name: 'Joel Amos Smithson', price: 'N300,000', plan: '12 Months', start: '12/08/2021', end: '12/08/2021' },
 { id: '#6389992', product: 'Iphone 12', name: 'Joel Amos Smithson', price: 'N300,000', plan: '12 Months', start: '12/08/2021', end: '12/08/2021' },
 { id: '#6389992', product: 'Iphone 12', name: 'Joel Amos Smithson', price: 'N300,000', plan: '12 Months', start: '12/08/2021', end: '12/08/2021' },
 { id: '#6389992', product: 'Iphone 12', name: 'Joel Amos Smithson', price: 'N300,000', plan: '12 Months', start: '12/08/2021', end: '12/08/2021' },
 { id: '#6389992', product: 'Iphone 12', name: 'Joel Amos Smithson', price: 'N300,000', plan: '12 Months', start: '12/08/2021', end: '12/08/2021' },
 { id: '#6389992', product: 'Iphone 12', name: 'Joel Amos Smithson', price: 'N300,000', plan: '12 Months', start: '12/08/2021', end: '12/08/2021' },
 { id: '#6389992', product: 'Iphone 12', name: 'Joel Amos Smithson', price: 'N300,000', plan: '12 Months', start: '12/08/2021', end: '12/08/2021' },
];

export default function Table1() {
  return (
    <div style={{ height: 480, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
}
