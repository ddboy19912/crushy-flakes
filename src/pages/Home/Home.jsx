import React from 'react';
import styled from 'styled-components';
import { KeyboardArrowDown } from '@material-ui/icons';

import {
  InvestmentStat,
  StackedArea,
  Statistics,
  Transactions,
} from '../../components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #eef0f8;
`;
const Wrapper = styled.div`
  padding: 24px 34px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const GraphCard = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  padding: 0rem 30px;
  border-radius: 8px;
  justify-content: center;
  background-color: white;
  border: 0.5px solid #e1e5e4;
  box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  border-radius: 8px;
`;

const Card = styled.div`
  background: white;
  height: 250px;
  width: 100%;
  border-radius: 8px;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Flex2 = styled.div`
  display: flex;
  align-items: center;
`;

const ListCard = styled.div`
  height: 50px;
  background: white;
  width: 100%;
  border: 0.5px solid #e1e5e4;
  box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
  display: flex;
  align-items: center;
`;

const Scroll = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: inherit;
  width: 100%;
`;

const InvestorTitle = styled.h2`
  font-size: 20px;
`;

const Home = () => {
  const InvestorData = [
    {
      name: 'Oga Sabinus',
    },
    {
      name: 'Bosco Mosco',
    },
    {
      name: 'Richard West',
    },
    {
      name: 'John Bolt',
    },
  ];

  return (
    <Container>
      <Wrapper>
        <InvestmentStat />
        <GraphCard>
          <div>
            <StackedArea />
          </div>
        </GraphCard>
        <Grid>
          <Card></Card>
          <Card>
            <Flex>
              <InvestorTitle>Top Investors</InvestorTitle>
              <Flex2>
                July 2022
                <KeyboardArrowDown />
              </Flex2>
            </Flex>
            <Scroll>
              {InvestorData.map((item, i) => (
                <ListCard key={i}>
                  <h3>{item.name}</h3>
                </ListCard>
              ))}
            </Scroll>
          </Card>
        </Grid>
        <Transactions />
      </Wrapper>
    </Container>
  );
};

export default Home;
