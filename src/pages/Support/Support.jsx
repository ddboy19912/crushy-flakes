import React from "react";
import styled from "styled-components";
import { SearchDets, SearchSup } from "../../components";
// import SearchSup from '../components/SearchSup'

// import Table1 from '../components/Table1.tsx'
// import Transactions from '../components/Transactions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #eef0f8;
`;
const Wrapper = styled.div`
  padding: 0 34px;
`;

const Support = () => {
  return (
    <Container>
      <Wrapper>
        <SearchSup />
        <SearchDets />
      </Wrapper>
    </Container>
  );
};

export default Support;
