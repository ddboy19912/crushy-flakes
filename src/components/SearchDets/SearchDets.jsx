import React from "react";
import styled from "styled-components";
// import Tables from './Tables'
// import Table from './Table'
import { SearchTable } from "../";
// import Table1 from './Table1.tsx'

const Container = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  height: 588px;
  background: #ffffff;
  border: 0.5px solid #e1e5e4;
  box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
  border-radius: 4px;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 0px 40px;
  flex-direction: column;
  width: 100%;
  ${"" /* background: red; */}
  max-height: 500px !important;
`;
// const Top = styled.div`
// display: flex;
// align-items: center;
// justify-content: space-between;
// width: 100%;
// ${'' /* background-color: red; */}
// `
const Bottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchDets = () => {
  return (
    <Container>
      <Wrapper>
        <Bottom>
          <SearchTable />
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default SearchDets;
