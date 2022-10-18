import React from 'react';
import styled from 'styled-components';
import ImageUploader from 'react-images-upload';
import { Form, Formik, ErrorMessage } from 'formik';
import {
  DragnDrop,
  Button,
  CustomInput,
  CustomSelect,
  CustomCheckbox,
} from '../../components';
import { advancedSchema } from '../../schemas';
import axios from 'axios';

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

const key = '1922|EeDdf3uI1ze4hM8EfSjZmKWnBQGKHoskOVBd5rfz';

const onSubmit = async (values, actions) => {
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
  };

  await axios
    .post('https://ganbaru.xyz/admin-api/v1/offers', values, axiosConfig)
    .then((response) => {
      console.log('success');
    })
    .catch((err) => {
      console.log('baddddd');
    });

  console.log('OK');

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
          initialValues={{
            title: '',
            interest_rate: '',
            tenure: 0,
            max_amount: 9999999999,
            issuer: '',
            product_paper: '',
            issuer_logo: '',
            name: '',
            start_date: '',
            closing: '',
            active: false,
            overview: '',
            days: '',
          }}
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
                    name="issuer_logo"
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
                      name="issuer"
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
                    <CustomInput
                      label="Tenure"
                      name="tenure"
                      placeholder="Tenure"
                    ></CustomInput>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                  >
                    <CustomInput
                      label="Maximum Amount"
                      name="max_amount"
                      placeholder="Funding Goal"
                    ></CustomInput>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                  >
                    <CustomInput
                      label="Number of Days"
                      name="days"
                      placeholder="Number of Days"
                    ></CustomInput>
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
                      name="interest_rate"
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
                      name="start_date"
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
                      label="Closing Date"
                      name="closing"
                      type="date"
                      placeholder="End Date"
                    />
                  </div>
                </Grids2>
                <FirstGrid>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                  >
                    <label htmlFor="docs">Product Paper</label>
                    <DragnDrop
                      id="docs"
                      onFileChange={(files) => onFileChange(files)}
                    />
                  </div>
                  <CustomCheckbox type="checkbox" name="active" />
                </FirstGrid>
                <div
                  style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}
                >
                  {/* <Button on value="Save" /> */}
                  <button
                    onClick={onSubmit}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Launch
                  </button>
                  {/* <Button value="Launch" type="submit" /> */}
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
