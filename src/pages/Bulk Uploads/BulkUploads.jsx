import React from 'react';
import styled from 'styled-components';
import { DragnDrop } from '../../components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #eef0f8;
  height: 100vh;
  border: 0.5px solid #e1e5e4;
  box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
  border-radius: 4px;
`;

const Wrapper = styled.div`
  padding: 20px 34px;
  width: 95%;
  height: 100%;
  display: flex;
  background: #fff;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  justify-content: center;
`;

const BulkContainer = styled.div`
  width: 80%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dotted black;
  height: 100%;
  border-radius: 10px;
  position: relative;
  /* background-color: red; */
`;

const Top = styled.div`
  /* display: flex; */
`;
const Info = styled.div`
  width: 100%;
  height: 30px;
  background-color: #061031;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const InfoPara = styled.p`
  color: white;
`;

const StyledLink = styled(Link)`
  color: orange;
`;

const BulkUploads = () => {
  return (
    <Container>
      <Wrapper>
        <Top>Progress Bar</Top>
        <BulkContainer>
          <Info>
            <InfoPara>
              Bulk upload your transfers in CSV format.{' '}
              <span>
                <StyledLink to="#">Read guidelines here</StyledLink>
              </span>
            </InfoPara>
          </Info>
          <form>
            <DragnDrop title="Drop files here to upload" />
          </form>
        </BulkContainer>
      </Wrapper>
    </Container>
  );
};

export default BulkUploads;
