import * as React from "react";
import { DataGrid, GridColDef, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import SecurityIcon from "@mui/icons-material/Security";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const columns = [
  {
    field: "id",
    headerName: "ID Number",
    width: 114,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "product",
    headerName: "Products",
    width: 114,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "name",
    headerName: "Customer Name",
    width: 114,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "price",
    headerName: "Price",
    width: 114,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "plan",
    headerName: "Payment Plan",
    width: 114,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "start",
    headerName: "Start Date",
    width: 114,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "end",
    headerName: "End date",
    width: 114,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "actions",
    type: "actions",
    headerName: "",
    width: 50,
    headerAlign: "center",
    align: "center",
    // renderCell: (params) => {
    //   return (
    //     <>
    //       <MoreHorizIcon style={{ cursor: "pointer" }} />
    //     </>
    //   );
    // },
    getActions: (params) => [
      <GridActionsCellItem
        icon={<ArrowCircleDownIcon />}
        label="See More"
        // onClick={toggleAdmin(params.id)}
        showInMenu
      />,
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        // onClick={duplicateUser(params.id)}
        showInMenu
      />,
    ],
  },
];

const rows = [
  {
    id: "#6389992",
    product: "Iphone 12",
    name: "Joel Amos Smithson",
    price: "N300,000",
    plan: "12 Months",
    start: "12/08/2021",
    end: "12/08/2021",
  },
  {
    id: "#6389992",
    product: "Iphone 12",
    name: "Joel Amos Smithson",
    price: "N300,000",
    plan: "12 Months",
    start: "12/08/2021",
    end: "12/08/2021",
  },
  {
    id: "#6389992",
    product: "Iphone 12",
    name: "Joel Amos Smithson",
    price: "N300,000",
    plan: "12 Months",
    start: "12/08/2021",
    end: "12/08/2021",
  },
  {
    id: "#6389992",
    product: "Iphone 12",
    name: "Joel Amos Smithson",
    price: "N300,000",
    plan: "12 Months",
    start: "12/08/2021",
    end: "12/08/2021",
  },
  {
    id: "#6389992",
    product: "Iphone 12",
    name: "Joel Amos Smithson",
    price: "N300,000",
    plan: "12 Months",
    start: "12/08/2021",
    end: "12/08/2021",
  },
  {
    id: "#6389992",
    product: "Iphone 12",
    name: "Joel Amos Smithson",
    price: "N300,000",
    plan: "12 Months",
    start: "12/08/2021",
    end: "12/08/2021",
  },
  {
    id: "#6389992",
    product: "Iphone 12",
    name: "Joel Amos Smithson",
    price: "N300,000",
    plan: "12 Months",
    start: "12/08/2021",
    end: "12/08/2021",
  },
  {
    id: "#6389992",
    product: "Iphone 12",
    name: "Joel Amos Smithson",
    price: "N300,000",
    plan: "12 Months",
    start: "12/08/2021",
    end: "12/08/2021",
  },
  {
    id: "#6389992",
    product: "Iphone 12",
    name: "Joel Amos Smithson",
    price: "N300,000",
    plan: "12 Months",
    start: "12/08/2021",
    end: "12/08/2021",
  },
  {
    id: "#6389992",
    product: "Iphone 12",
    name: "Joel Amos Smithson",
    price: "N300,000",
    plan: "12 Months",
    start: "12/08/2021",
    end: "12/08/2021",
  },
];

export default function Table1() {
  return (
    <div style={{ height: 480, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        sx={{ fontSize: "13px" }}
        // checkboxSelection
      />
    </div>
  );
}
