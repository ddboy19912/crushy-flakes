import React from 'react';
import styled from 'styled-components';
import ImageUploader from 'react-images-upload';
import { Form, Formik, ErrorMessage, useFormik } from 'formik';
import {
  DragnDrop,
  Button,
  CustomInput,
  CustomSelect,
  CustomCheckbox,
} from '../../components';
import { advancedSchema, validationSchema } from '../../schemas';
import Axios from 'axios';
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

const key = '1951|EVZiyvLtHDps5hkevHhgwusF3j7gpF0qSN2aHftH';

const onSubmit = async (values, actions) => {
  console.log(values);

  // let formData = new FormData();

  // formData.append('title', values.title);
  // formData.append('interest_rate', values.interest_rate);
  // formData.append('tenure', values.tenure);
  // formData.append('max_amount', values.max_amount);
  // formData.append('issuer', values.issuer);
  // formData.append('issuer_website', values.issuer_website);
  // formData.append('closing_date', values.closing_date);
  // formData.append('active', values.active);
  // formData.append('overview', values.overview);
  // formData.append('product_paper', values.product_paper);
  // formData.append('issuer_logo', values.issuer_logo);

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      env: 'monieworx',
    },
  };

  await Axios.post(
    'https://ganbaru.xyz/admin-api/v1/offers',
    values,
    axiosConfig
  )
    .then((response) => {
      console.log('success');
    })
    .catch((err) => {
      console.log('baddddd');
    });

  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const CampaignForm = () => {
  return (
    <Formik
      initialValues={{
        title: '',
        interest_rate: 0,
        tenure: 0,
        max_amount: 0,
        issuer: '',
        overview: '',
        issuer_website: '',
        closing_date: '',
        active: false,
        product_paper: '',
        issuer_logo: '',
      }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="title"
            name="title"
            type="text"
            placeholder="title"
          />
          <input id="logo" name="issuer_logo" type="file" />
          <CustomInput
            label="paper"
            name="product_paper"
            type="file"
            placeholder="paper"
          />
          <CustomInput
            label="rate"
            name="interest_rate"
            type="number"
            placeholder="rate"
          />
          <CustomInput
            label="tenure"
            name="tenure"
            type="number"
            placeholder="tenure"
          />
          <CustomInput
            label="amount"
            name="max_amount"
            type="number"
            placeholder="amount"
          />
          <CustomInput
            label="issuer"
            name="issuer"
            type="text"
            placeholder="issuer"
          />
          <CustomInput
            label="overview"
            name="overview"
            type="text"
            placeholder="overview"
          />
          <CustomInput
            label="issuer website"
            name="issuer_website"
            type="text"
            placeholder="issuer website"
          />
          <CustomInput
            label="closing date"
            name="closing_date"
            type="date"
            placeholder="Closing date"
          />
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default CampaignForm;
