import * as React from 'react';
import { DataGrid, GridColDef} from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Sender', width: 150,   headerAlign: 'center', align: 'center' },
  { field: 'product', headerName: 'Message', width: 700,  headerAlign: 'center', align: 'center' },
  { field: 'name', headerName: 'Time', width: 150,  headerAlign: 'center', align: 'center' },
  
];

const rows = [
  { id: 'Cameron Williamson', product: 'Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ', name: '8:26 AM' },
  { id: 'Cameron Williamson', product: 'Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ', name: '8:26 AM' },
  { id: 'Cameron Williamson', product: 'Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ', name: '8:26 AM' },
  { id: 'Cameron Williamson', product: 'Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ', name: '8:26 AM' },
  { id: 'Cameron Williamson', product: 'Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ', name: '8:26 AM' },
  { id: 'Cameron Williamson', product: 'Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ', name: '8:26 AM' },
  { id: 'Cameron Williamson', product: 'Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ', name: '8:26 AM' },
  { id: 'Cameron Williamson', product: 'Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ', name: '8:26 AM' },
  { id: 'Cameron Williamson', product: 'Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ', name: '8:26 AM' },
  { id: 'Cameron Williamson', product: 'Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ', name: '8:26 AM' },
  { id: 'Cameron Williamson', product: 'Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ', name: '8:26 AM' },
  { id: 'Cameron Williamson', product: 'Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ', name: '8:26 AM' },
  { id: 'Cameron Williamson', product: 'Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ', name: '8:26 AM' },
  
];

export default function SearchTable() {
  return (
    <div style={{ height: 580, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
