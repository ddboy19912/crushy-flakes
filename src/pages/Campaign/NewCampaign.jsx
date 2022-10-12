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
  align-items: center;
`;
const Wrapper = styled.div`
  width: 95%;
  height: 100%;
`;

const NewCampaign = () => {
  return (
    <Container>
      <Wrapper>
        <div style={{ width: '100', marginTop: '1rem' }}>
          <img
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
