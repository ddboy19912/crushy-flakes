import React from 'react';
import styled from 'styled-components';
import { Timeline } from '@material-ui/icons';
import { InvestData } from './InvestmentData';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem !important;
  width: 100%;
  height: 141.58px;
  border: 0.5px solid #e1e5e4;
  box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
  border-radius: 4px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2``;
const ValueTitle = styled(Title)`
  font-size: 32px;
  font-weight: 800;
`;
const Text = styled.p`
  display: flex;
  align-items: center;
`;
const TextVal = styled(Text)`
  font-size: 16px;
  font-weight: 400;
`;
const PercentVal = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  margin-top: -1.5rem;
  color: ${({ color }) => color};
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 1rem;
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  /* padding: 0 20px; */
  padding-left: 2rem;
  align-items: flex-start;
  align-content: space-around;
  max-width: 100%;
  height: inherit;
  background: #ffffff;
  border-radius: 8px;
  justify-content: center;
`;
const Values = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -1.5rem;
`;
const Date = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: gray;
  width: 100%;
  font-size: 12px;
  margin-left: 0.35rem;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const InvestmentStat = () => {
  const handleColors = (InvestData) => {
    if (InvestData.percent > 0) return '#4BDE97';
    if (InvestData.percent < 0) return 'red';
    return 'orange';
  };

  const exampleValues = [-1, 0, 1];

  const renderPercent = exampleValues.map((value) => {
    return <PercentVal color={handleColors(value)}>{value}</PercentVal>;
  });

  return (
    <Container>
      <Wrapper>
        <Content>
          {InvestData.map((value) => {
            return (
              <Items key={value.title}>
                <Flex>
                  <img src={value.img} alt="alt" style={{ maxWidth: '45px' }} />
                  <TextVal>{value.title}</TextVal>
                </Flex>
                <Values>
                  <ValueTitle>{value.value}</ValueTitle>
                </Values>
                <PercentVal color={handleColors(value)}>
                  <Timeline style={{ fontSize: '14px' }} />
                  {value.percent}%<Date>{value.date}</Date>
                </PercentVal>
              </Items>
            );
          })}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default InvestmentStat;
