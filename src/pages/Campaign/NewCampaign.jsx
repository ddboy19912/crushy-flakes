import React from 'react';
import styled from 'styled-components';
import campaignBanner from '../../images/campaign-banner.png';
import CampaignForm from './CampaignForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #eef0f8;
  margin-bottom: 2rem;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 95%;
  height: 100%;
`;

const Image = styled.img`
  overflow: hidden;
  transition: all 0.8s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const NewCampaign = () => {
  return (
    <Container>
      <Wrapper>
        <div
          style={{
            width: '100',
            marginTop: '1rem',
            overflow: 'hidden',
            borderRadius: '8px',
          }}
        >
          <Image
            src={campaignBanner}
            alt=""
            width="100%"
            style={{ borderRadius: '8px' }}
          />
        </div>
        <CampaignForm />
      </Wrapper>
    </Container>
  );
};

export default NewCampaign;
