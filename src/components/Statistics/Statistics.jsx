import React from 'react';
import styled from 'styled-components';
import { KeyboardArrowDown, Timeline } from '@material-ui/icons';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import icon1 from '../../../src/images/ICON1.png';
import icon2 from '../../../src/images/ICON2.png';
import icon3 from '../../../src/images/ICON3.png';
import icon4 from '../../../src/images/icon4.png';
import CampaignOutlined from '@mui/icons-material/CampaignOutlined';

const Container = styled.div`
  display: block;
  height: 209px;
  background: #ffffff;
  border: 0.5px solid #e1e5e4;
  box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
  border-radius: 4px;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 15px 40px;
  flex-direction: column;
  /* grid-template-rows: 10% 90%; */
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 15px;
`;
const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 16px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
const ValueTitle = styled(Title)`
  font-size: 25px;
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
const PercentVal = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #4bde97;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Items = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const Values = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Bold = styled.span`
  font-weight: 700;
  font-size: 26px;
`;

const Statistics = () => {
  return (
    <>
      {/* <Title>Campaign Summary</Title> */}
      <Container>
        <Wrapper>
          <Top>
            <Title>
              <CampaignOutlined />
              <Bold>10 </Bold>
              Total Campaigns
            </Title>
            <Date>
              July 2021
              <KeyboardArrowDown />
            </Date>
          </Top>
          <Content>
            <Items>
              <img
                src={icon1}
                alt="alt"
                style={{ width: '80px', height: '80px' }}
              />
              <Values>
                <ValueTitle>230k</ValueTitle>
                <TextVal style={{ marginTop: '-17px' }}>Sales</TextVal>
                <PercentVal style={{ marginTop: '-10px' }}>
                  <Timeline style={{ transform: 'scale(0.8)' }} />
                  4.07%
                </PercentVal>
              </Values>
            </Items>

            <Items>
              <img
                src={icon2}
                alt="alt"
                style={{ width: '80px', height: '80px' }}
              />
              <Values>
                <ValueTitle>8.549k</ValueTitle>
                <TextVal style={{ marginTop: '-17px' }}>Customers</TextVal>
                <PercentVal style={{ marginTop: '-10px' }}>
                  <Timeline style={{ transform: 'scale(0.8)' }} />
                  4.07%
                </PercentVal>
              </Values>
            </Items>

            <Items>
              <img
                src={icon3}
                alt="alt"
                style={{ width: '80px', height: '80px' }}
              />
              <Values>
                <ValueTitle>1.423k</ValueTitle>
                <TextVal style={{ marginTop: '-17px' }}>Products</TextVal>
                <PercentVal style={{ marginTop: '-10px' }}>
                  <Timeline style={{ transform: 'scale(0.8)' }} />
                  4.07%
                </PercentVal>
              </Values>
            </Items>

            <Items>
              <img
                src={icon4}
                alt="alt"
                style={{ width: '80px', height: '80px' }}
              />
              <Values>
                <ValueTitle>$9745</ValueTitle>
                <TextVal style={{ marginTop: '-17px' }}>Revenue</TextVal>
                <PercentVal style={{ marginTop: '-10px' }}>
                  <Timeline style={{ transform: 'scale(0.8)' }} />
                  4.07%
                </PercentVal>
              </Values>
            </Items>
          </Content>
        </Wrapper>
      </Container>
    </>
  );
};

export default Statistics;
