import { useState, useEffect } from 'react';
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { useGetOffersQuery } from '../../redux/services/data';
import moment from 'moment';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import { SingleCampaign } from '..';
import styled from 'styled-components';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
};

const StyledModal = styled(Modal)`
  height: 100%;
  width: 100%;
  background: blueviolet;
`;

export default function Table2({data}) {
 

  const columns = [
    {
      field: 'act-nam',
      headerName: 'Account Name',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'act-num',
      headerName: 'Account Number',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'act-typ',
      headerName: 'Account Type',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'country',
      headerName: 'Country',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'f-name',
      headerName: 'First Name',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'm-name',
      headerName: 'Last Name',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
   
    {
      field: 'actions',
      type: 'actions',
      headerName: '',
      width: 50,
      headerAlign: 'center',
      align: 'center',

      getActions: (params) => [
        <GridActionsCellItem
          icon={<ArrowCircleDownIcon />}
          label="View Offer"
          // onClick={toggleModal}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<ArrowCircleDownIcon />}
          label="Set as Active"
          // onClick={toggleAdmin(params.id)}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete Offer"
          // onClick={duplicateUser(params.id)}
          showInMenu
        />,
      ],
    },
  ];





 console.log(data);


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        sx={{ fontSize: '13px', width: '100%' }}
    
      />
    </div>
  );
}
