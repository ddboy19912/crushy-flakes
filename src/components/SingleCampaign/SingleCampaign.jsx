import React from 'react';
import image from '../../images/image-svgrepo-com.svg';
import styled from 'styled-components';
import Table1 from '../Table1/Table1';
import { Tablee } from '..';

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const FlexRow = styled.div`
  display: flex;
`;

const SingleCampaign = (item) => {
  return (
    <div>
      <FlexRow>
        <Image src={image} alt="" />
        <h3>Asset Backed</h3>
      </FlexRow>
      <FlexRow>
        <div>
          <h3>Campaign Owner</h3>
          <p>Alatiron</p>
        </div>
        <div>
          <h3>Start Date</h3>
          <p>26/10/2021</p>
        </div>
        <div>
          <h3>Closing Date</h3>
          <p>03/09/2022</p>
        </div>
      </FlexRow>
      <div>
        <Table1 />
      </div>
    </div>
  );
};

export default SingleCampaign;
