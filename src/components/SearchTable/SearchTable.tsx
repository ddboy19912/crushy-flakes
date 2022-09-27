import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styled from "styled-components";

const Actions = styled.div`
  position: relative;
`;

export default function SearchTable() {
  const rows = [
    {
      id: "Cameron Williamson",
      product:
        "Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ",
      name: "8:26 AM",
    },
    {
      id: "Cameron Williamson",
      product:
        "Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ",
      name: "8:26 AM",
    },
    {
      id: "Cameron Williamson",
      product:
        "Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ",
      name: "8:26 AM",
    },
    {
      id: "Cameron Williamson",
      product:
        "Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ",
      name: "8:26 AM",
    },
    {
      id: "Cameron Williamson",
      product:
        "Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ",
      name: "8:26 AM",
    },
    {
      id: "Cameron Williamson",
      product:
        "Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ",
      name: "8:26 AM",
    },
    {
      id: "Cameron Williamson",
      product:
        "Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ",
      name: "8:26 AM",
    },
    {
      id: "Cameron Williamson",
      product:
        "Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ",
      name: "8:26 AM",
    },
    {
      id: "Cameron Williamson",
      product:
        "Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ",
      name: "8:26 AM",
    },
    {
      id: "Cameron Williamson",
      product:
        "Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ",
      name: "8:26 AM",
    },
    {
      id: "Cameron Williamson",
      product:
        "Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ",
      name: "8:26 AM",
    },
    {
      id: "Cameron Williamson",
      product:
        "Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ",
      name: "8:26 AM",
    },
    {
      id: "Cameron Williamson",
      product:
        "Amet minim mollit non: deserunt ullamco est sit aliqua dolor do amet sint... ",
      name: "8:26 AM",
    },
  ];

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Sender",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "product",
      headerName: "Message",
      width: 450,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Time",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "action",
      headerName: "",
      width: 50,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <Actions>
            <MoreHorizIcon style={{ cursor: "pointer" }} />
          </Actions>
        );
      },
    },
  ];

  return (
    <div style={{ height: 580, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={{ fontSize: "13px" }}
      />
    </div>
  );
}
