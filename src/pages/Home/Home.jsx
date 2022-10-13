import React from 'react';
import styled from 'styled-components';
import { KeyboardArrowDown } from '@material-ui/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import {
  AreaGraph,
  InvestmentStat,
  PieChart,
  SliderColumn,
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
  /* height: 250px; */
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
  gap: 1rem;
  padding: 0rem 1rem;
  border-radius: 8px;
`;

const Scroll = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: inherit;
  width: 100%;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
`;

const InvestorTitle = styled.h2`
  font-size: 20px;
`;

const Home = () => {
  const InvestorData = [
    {
      name: 'Oga Sabinus',
      img: 'https://topnaija.ng/wp-content/uploads/2022/01/image_editor_output_image366043119-1643647460799.jpg',
    },
    {
      name: 'Bosco Mosco',
      img: 'https://images.pexels.com/photos/936117/pexels-photo-936117.jpeg?cs=srgb&dl=pexels-nappy-936117.jpg&fm=jpg',
    },
    {
      name: 'Richard West',
      img: 'https://images.pexels.com/photos/2024901/pexels-photo-2024901.jpeg?cs=srgb&dl=pexels-zack-jarosz-2024901.jpg&fm=jpg',
    },
    {
      name: 'John Bolt',
      img: 'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?cs=srgb&dl=pexels-christina-morillo-1181391.jpg&fm=jpg',
    },
    {
      name: 'Richard West',
      img: 'https://images.pexels.com/photos/2024901/pexels-photo-2024901.jpeg?cs=srgb&dl=pexels-zack-jarosz-2024901.jpg&fm=jpg',
    },
    {
      name: 'John Bolt',
      img: 'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?cs=srgb&dl=pexels-christina-morillo-1181391.jpg&fm=jpg',
    },
    {
      name: 'Richard West',
      img: 'https://images.pexels.com/photos/2024901/pexels-photo-2024901.jpeg?cs=srgb&dl=pexels-zack-jarosz-2024901.jpg&fm=jpg',
    },
    {
      name: 'John Bolt',
      img: 'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?cs=srgb&dl=pexels-christina-morillo-1181391.jpg&fm=jpg',
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
          <Card
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '250px',
              padding: '0rem 1rem',
            }}
          >
            <p style={{ marginTop: '-0.5rem' }}>Daily Stats</p>
            <div style={{ marginTop: '-1rem' }}>
              <AreaGraph />
            </div>
          </Card>
          <Card style={{ height: '250px' }}>
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
                  <Image src={item.img} alt="" />
                  <h3>{item.name}</h3>
                </ListCard>
              ))}
            </Scroll>
          </Card>
        </Grid>
        <Grid>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <Card
              style={{ height: '300px', display: 'flex', alignItems: 'center' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '2rem',
                }}
              >
                <SliderColumn />
              </div>
            </Card>
            <Card style={{ height: '100%' }}>
              <div>
                <h1>Tasks</h1>
                <h1>Campaigns Data</h1>
              </div>
            </Card>
          </div>
          <Card>
            <Flex>
              <InvestorTitle>Usage Statistics</InvestorTitle>
              <Flex2>
                July 2022
                <KeyboardArrowDown />
              </Flex2>
            </Flex>
            <PieChart title="50.7k Web Visits" />
            <PieChart title="50.7k App Visits" />
          </Card>
        </Grid>
        <Transactions />
      </Wrapper>
    </Container>
  );
};

export default Home;
