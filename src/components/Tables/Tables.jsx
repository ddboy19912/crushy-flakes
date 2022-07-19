import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import styled from 'styled-components'


const Div = styled.div`
 margin: auto;
  width: inherit !important;
  border: 3px solid green;
  min-height: 500px;
`


const columns = [
  {
    title: 'ID Number',
    dataIndex: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Product',
    dataIndex: 'product',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Customer Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Payment Plan',
    dataIndex: 'plan',
  },
  {
    title: 'Start Date',
    dataIndex: 'start',
  },
  {
    title: 'End Date',
    dataIndex: 'end',
  },
];
const data = [
  {
    key: '1',
    id: '#6389992',
    product: 'Iphone 12',
    name: 'Joel Amos Smithson',
    price: 'N300,000',
    plan: '12 Months',
    start: '12/08/2021',
    end: '12/08/2021',
  },
  {
    key: '2',
    id: '#6389992',
    product: 'Iphone 12',
    name: 'Joel Amos Smithson',
    price: 'N300,000',
    plan: '12 Months',
    start: '12/08/2021',
    end: '12/08/2021',
  },
  {
    key: '3',
    id: '#6389992',
    product: 'Iphone 12',
    name: 'Joel Amos Smithson',
    price: 'N300,000',
    plan: '12 Months',
    start: '12/08/2021',
    end: '12/08/2021',
  },
  {
    key: '4',
    id: '#6389992',
    product: 'Iphone 12',
    name: 'Joel Amos Smithson',
    price: 'N300,000',
    plan: '12 Months',
    start: '12/08/2021',
    end: '12/08/2021',
  },
  {
    key: '5',
    id: '#6389992',
    product: 'Iphone 12',
    name: 'Joel Amos Smithson',
    price: 'N300,000',
    plan: '12 Months',
    start: '12/08/2021',
    end: '12/08/2021',
  },
  {
    key: '6',
    id: '#6389992',
    product: 'Iphone 12',
    name: 'Joel Amos Smithson',
    price: 'N300,000',
    plan: '12 Months',
    start: '12/08/2021',
    end: '12/08/2021',
  },
  {
    key: '7',
    id: '#6389992',
    product: 'Iphone 12',
    name: 'Joel Amos Smithson',
    price: 'N300,000',
    plan: '12 Months',
    start: '12/08/2021',
    end: '12/08/2021',
  },
  {
    key: '8',
    id: '#6389992',
    product: 'Iphone 12',
    name: 'Joel Amos Smithson',
    price: 'N300,000',
    plan: '12 Months',
    start: '12/08/2021',
    end: '12/08/2021',
  },
  {
    key: '9',
    id: '#6389992',
    product: 'Iphone 12',
    name: 'Joel Amos Smithson',
    price: 'N300,000',
    plan: '12 Months',
    start: '12/08/2021',
    end: '12/08/2021',
  },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

const Tables = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Divider />
<Div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
       
      />
      </Div>
    </div>
  );
};

export default Tables