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
import { SingleCampaign } from '../';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Table1() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const columns = [
    {
      field: 'title',
      headerName: 'Campaign Name',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'issuer',
      headerName: 'Campaign Owner',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'invested_amount',
      headerName: 'Invested Amount',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'remaining_amount',
      headerName: 'Remaining Amount',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'days_to_go',
      headerName: 'Days left',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'created_at',
      headerName: 'Start Date',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'to_be_closed_at',
      headerName: 'Closing date',
      width: 114,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'active',
      headerName: ' ',
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
          onClick={toggleModal}
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

  const { data, isFetching, error } = useGetOffersQuery();

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const values = data?.data?.data;

  useEffect(() => {
    if (!isFetching) {
      setRows(values);
      setLoading(false);
      console.log(rows);
    }
  }, [values, isFetching, rows]);

  if (error) return <h1>OOPS</h1>;

  return (
    <div style={{ height: 480, width: '100%' }}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={toggleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <div>
              {values?.slice(0, 1)?.map((item, i) => {
                return <SingleCampaign item={item} key={i} />;
              })}
            </div>
          </Box>
        </Fade>
      </Modal>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        sx={{ fontSize: '13px' }}
        loading={loading}
        // components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
}
