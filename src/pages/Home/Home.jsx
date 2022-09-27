import React from "react";
import styled from "styled-components";

import { Statistics, Transactions } from "../../components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #eef0f8;
`;
const Wrapper = styled.div`
  padding: 24px 34px;
`;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Statistics />
        <Transactions />
      </Wrapper>
    </Container>
  );
};

export default Home;
