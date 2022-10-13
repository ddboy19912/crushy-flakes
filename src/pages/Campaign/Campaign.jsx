import React from 'react';
import styled from 'styled-components';
import campaignBanner from '../../images/1st stat.png';
import { AreaGraph, PlotGraph, Statistics, Table1 } from '../../components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  /* width: 100%; */
  height: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 24px 34px;
`;

const FirstGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const CampaignImg = styled.img`
  object-fit: cover;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const GraphCard = styled.div`
  background: white;
  border: 0.5px solid #e1e5e4;
  box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
  width: 100%;
  /* height: 250px; */
  padding: 0rem 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const ThirdCard = styled.div`
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
  /* padding: 2rem; */
`;

const TableCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: -1rem;
  height: 588px;
  background: #ffffff;
  border: 0.5px solid #e1e5e4;
  box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
  border-radius: 8px;
  padding: 0px 40px;
`;

const Heading = styled.h2`
  font-size: 22px;
`;

const Campaign = () => {
  return (
    <Container>
      <Wrapper>
        <Statistics />
        <FirstGrid>
          <div
            style={{
              width: '100%',
              height: '250px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <Link to="/create-campaign">
              <CampaignImg
                src={campaignBanner}
                alt=""
                width="100%"
                height="300px"
              />
            </Link>
          </div>
          <GraphCard>
            <AreaGraph />
          </GraphCard>
        </FirstGrid>
        <ThirdCard>
          <div>
            <PlotGraph />
          </div>
        </ThirdCard>
        <TableCard>
          <Heading>Campaigns</Heading>
          <Table1 />
        </TableCard>
      </Wrapper>
    </Container>
  );
};

export default Campaign;
