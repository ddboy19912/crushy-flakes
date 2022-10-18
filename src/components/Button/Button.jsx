import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #2050f5;
  border-radius: 4px;
  width: 166px;
  height: 50px;
  border: none;
  color: #ffffff;
  ${'' /* margin-top: 2rem; */}
  cursor: pointer;
`;

const ButtonFunc = ({ value, type }) => {
  return <Button type={type}>{value}</Button>;
};

export default ButtonFunc;
