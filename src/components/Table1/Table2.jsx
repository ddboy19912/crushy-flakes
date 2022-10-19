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

export default function Table2({ data }) {
  const columns = [
    {
      field: 'id',
      headerName: 'id',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'digi-type',
      headerName: 'digi-type',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'digi-id',
      headerName: 'digi-id',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'title',
      headerName: 'title',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'f-name',
      headerName: 'f-name',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'l-name',
      headerName: 'l-name',
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
      field: 'dob',
      headerName: 'dob',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'sex',
      headerName: 'sex',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'm-num',
      headerName: 'm-num',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'email',
      headerName: 'email',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'p-loc',
      headerName: 'p-loc',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'photo',
      headerName: 'photo',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'm-status',
      headerName: 'm-status',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'nok',
      headerName: 'nok',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'mum-sq',
      headerName: 'mum-sq',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'edu',
      headerName: 'edu',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'job',
      headerName: 'job',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'is_staff',
      headerName: 'is_staff',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'sor',
      headerName: 'sor',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'country',
      headerName: 'country',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'd-sign',
      headerName: 'd-sign',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'act-num',
      headerName: 'act-num',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'act-nam',
      headerName: 'act-nam',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'bnk-nam',
      headerName: 'bnk-nam',
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
      field: 'investor-typ',
      headerName: 'investor-typ',
      width: 114,
      headerAlign: 'center',
      align: 'center',
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
