import React from 'react';
import styled from 'styled-components';
import ImageUploader from 'react-images-upload';
import { Form, Formik } from 'formik';
import { DragnDrop, Button, CustomInput, CustomSelect } from '../../components';
import { advancedSchema } from '../../schemas';
import Axios from 'axios';

const Container = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  /* height: 800px; */
  background: #ffffff;
  border: 0.5px solid #e1e5e4;
  box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
  border-radius: 4px;
`;

const Wrapper = styled.div`
  padding: 20px 34px;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  gap: 1rem;
`;

const Input = styled.input`
  border-width: 2px;
  border-color: #cccccc;
  padding: 17px;
  font-size: 16px;
  border-radius: 8px;
  border-style: solid;
  width: 70%;
  &:focus {
    outline: none;
  }
`;

const FirstGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: 120px;
`;

const Grids2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

const Dollarbg = styled.div`
  background: linear-gradient(
    180deg,
    #f5f1f1 0%,
    rgba(235, 232, 232, 0.2) 97.92%
  );

  width: 60px;
  height: 93%;
  position: absolute;
  top: 2px;
  right: 87px;
  border-radius: 8px;
  font-size: 22px;
  align-items: center;
  justify-content: center;
  display: flex;
  color: black;
`;

const onSubmit = async (values, actions) => {
  // const axiosConfig = {
  //   headers: {
  //     Authorization: `Bearer ${YOUR_AUTH_KEY}`,
  //     'Content-Type': 'application/json',
  //   },
  // }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const CampaignForm = () => {
  const onFileChange = (files) => {
    console.log(files);
  };

  return (
    <Container>
      <Wrapper>
        <Formik
          initialValues={{ title: '', term: '', acceptedTos: false }}
          validationSchema={advancedSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Column>
                <FirstGrid>
                  <CustomInput
                    label="Title of the Campaign"
                    name="title"
                    type="text"
                    placeholder="Title of the Campaign"
                  />
                  <ImageUploader
                    withIcon={false}
                    withPreview={true}
                    label=""
                    name="img"
                    buttonText="Upload Logo"
                    // onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif', '.svg']}
                    maxFileSize={1048576}
                    fileSizeError=" file size is too big"
                  />
                </FirstGrid>
                <Grids>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                  >
                    <CustomInput
                      label="Offering Name"
                      name="name"
                      type="text"
                      placeholder="Offering Name"
                    />
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                  >
                    <CustomInput
                      label="Offering Owner"
                      name="owner"
                      type="text"
                      placeholder="Offering Owner"
                    />
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                  ></div>
                </Grids>
                <Grids2>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                  >
                    <CustomSelect
                      label="Day Term"
                      name="term"
                      placeholder="Day Term"
                    ></CustomSelect>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                  >
                    <CustomSelect
                      label="Funding Goal"
                      name="goal"
                      placeholder="Funding Goal"
                    ></CustomSelect>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                  >
                    <CustomSelect
                      label="Number of Days"
                      name="days"
                      placeholder="Number of Days"
                    ></CustomSelect>
                  </div>
                </Grids2>
                <Grids2>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                  >
                    <CustomInput
                      label="Interest Rate"
                      name="rate"
                      type="text"
                      placeholder="Interest Rate"
                    />
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                  >
                    <CustomInput
                      label="Start Date"
                      name="start"
                      type="date"
                      placeholder="Start Date"
                    />
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                  >
                    <CustomInput
                      label="End Date"
                      name="end"
                      type="date"
                      placeholder="End Date"
                    />
                  </div>
                </Grids2>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <label htmlFor="docs">Upload Documents</label>
                  <DragnDrop
                    id="docs"
                    onFileChange={(files) => onFileChange(files)}
                  />
                </div>
                <div
                  style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}
                >
                  <Button value="Save" />
                  <Button value="Launch" type="submit" />
                </div>
              </Column>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default CampaignForm;
