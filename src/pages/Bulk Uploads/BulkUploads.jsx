import React from 'react';
import styled from 'styled-components';
import { DragnDrop } from '../../components';
import { Link } from 'react-router-dom';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';

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
  margin-top: 2rem;
  width: 90%;
  height: 50px;
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
const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: red;
`;

const BulkUploads = () => {
  function StepComplete() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="#ED7D31" />
      </svg>
    );
  }

  return (
    <Container>
      <Wrapper>
        <Top>
          <ProgressBar
            percent={100}
            filledBackground="linear-gradient(to right, #1488cc, #2b32b2)"
          >
            <Step transition="scale">
              {({ accomplished }) => (
                <div
                  style={{
                    display: 'flex',
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ marginTop: 0, position: 'absolute' }}>
                    <Circle
                      style={{
                        background: `${accomplished ? '#1488cc' : 'red'}`,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: 120,
                      marginTop: 60,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    Upload File
                  </div>
                </div>
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <div
                  style={{
                    display: 'flex',
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ marginTop: 0, position: 'absolute' }}>
                    <Circle
                      style={{
                        background: `${accomplished ? '#2b32b2' : '#d8d8d8'}`,
                      }}
                    />
                  </div>
                  <div
                    className="steps-text"
                    style={{
                      width: 120,
                      marginTop: 60,
                      marginLeft: 0,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    Review Transfer
                  </div>
                </div>
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <div
                  style={{
                    display: 'flex',
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ marginTop: 0, position: 'absolute' }}>
                    <Circle
                      style={{
                        background: `${accomplished ? '#2b32b2' : '#d8d8d8'}`,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: 120,
                      marginTop: 60,
                      marginLeft: 0,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    Upload
                  </div>
                </div>
              )}
            </Step>
          </ProgressBar>
        </Top>
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
