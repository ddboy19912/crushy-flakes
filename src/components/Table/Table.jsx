import React from 'react'
import MUIDataTable from "mui-datatables";
import styled from 'styled-components'
// import 'bootstrap/dist/css/bootstrap.css';

const columns = ["ID Number", "Product", "Customer Name", "Price", "Payment Plan", "Start Date", "End Date"];

const data = [
 ["#6389992", "Iphone 12", "Joel Amos Smithson", "N300,000", "12 Months", "12/08/2021", "12/08/2021"],
  ["#6389992", "Iphone 12", "Joel Amos Smithson", "N300,000", "12 Months", "12/08/2021", "12/08/2021"],
   ["#6389992", "Iphone 12", "Joel Amos Smithson", "N300,000", "12 Months", "12/08/2021", "12/08/2021"],
    ["#6389992", "Iphone 12", "Joel Amos Smithson", "N300,000", "12 Months", "12/08/2021", "12/08/2021"],
     ["#6389992", "Iphone 12", "Joel Amos Smithson", "N300,000", "12 Months", "12/08/2021", "12/08/2021"],
];

const options = {
  filterType: 'checkbox',
};

const Container = styled.div`
 width: 100%;
  padding-right: 1.5rem, 0.75rem;
  padding-left: 1.5rem, 0.75rem;
  margin-right: auto;
  margin-left: auto;
`


const Table = () => {
  return (
    <Container>
    <MUIDataTable
  data={data}
  columns={columns}
  options={options}
/>
    </Container>
  )
}

export default Table