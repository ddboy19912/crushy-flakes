import React from 'react';
import styled from 'styled-components';
import ImageUploader from 'react-images-upload';
import { useFormik } from 'formik';
import { advancedSchema } from '../../schemas';
import axios from 'axios';
import * as yup from 'yup';

const key = '1984|gBj53IM483eU0rNgIcdcSpUoBgCoB3fd34Z8uR6O';

const onSubmit = async (values, actions) => {
  console.log(values);

  let formData = new FormData();

  formData.append('title', values.title);
  formData.append('interest_rate', values.interest_rate);
  formData.append('tenure', values.tenure);
  formData.append('max_amount', values.max_amount);
  formData.append('issuer', values.issuer);
  formData.append('issuer_website', values.issuer_website);
  formData.append('closing_date', values.closing_date);
  formData.append('active', values.active);
  formData.append('overview', values.overview);
  formData.append('product_paper', values.product_paper);
  formData.append('issuer_logo', values.issuer_logo);

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'multipart/form-data',
      // Accept: 'application/json',
      env: 'monieworx',
    },
  };

  await axios
    .post('https://ganbaru.xyz/admin-api/v1/offers', formData, axiosConfig)
    .then((response) => {
      alert('Offer Successfully created');
    })
    .catch((err) => {
      console.log('baddddd');
    });

  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
  window.location.reload();
};

const validationSchema = yup.object({
  title: yup
    .string()
    .min(3, 'title must be at least 3 characters long')
    .required('*Required'),
  interest_rate: yup.number().integer().required('*Required'),
  tenure: yup.number().required('*Required'),
  max_amount: yup
    .number()
    .min(10000, 'Figure should be more than 100000')
    .required('*Required'),
  issuer: yup
    .string()
    .min(3, 'title must be at least 3 characters long')
    .required('*Required'),
  closing_date: yup.string().required('*Required'),
  active: yup.boolean().required('*Required'),
  overview: yup
    .string()
    .min(3, 'title must be at least 3 characters long')
    .required('*Required'),
  issuer_website: yup
    .string()
    .min(3, 'title must be at least 3 characters long')
    .required('*Required'),
  issuer_logo: yup.mixed().required('*Required'),
  product_paper: yup.mixed().required('*Required'),
});

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

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 0.5rem;
`;
const Error = styled.p`
  font-size: 12px;
  color: red;
  margin-top: -0.2rem;
`;

const TextArea = styled.textarea`
  width: 700px;
  height: 200px;
`;

const CampaignForm = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      interest_rate: 0,
      tenure: 0,
      max_amount: 0,
      issuer: '',
      issuer_logo: '',
      closing_date: '',
      active: false,
      overview: '',
      issuer_website: '',
      product_paper: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  return (
    <div style={{ marginTop: '1rem' }}>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <FlexCol>
          <label>Title of the campaign</label>
          <Input
            name="title"
            placeholder="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title ? (
            <Error>{formik.errors.title}</Error>
          ) : (
            ''
          )}
        </FlexCol>

        <FlexCol>
          <label>Interest Rate</label>
          <Input
            name="interest_rate"
            type="number"
            placeholder="Interest Rate"
            value={formik.values.interest_rate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.interest_rate && formik.errors.interest_rate
            ? formik.errors.interest_rate
            : ''}
        </FlexCol>

        <FlexCol>
          <label>Tenure</label>
          <Input
            name="tenure"
            type="number"
            placeholder="Tenure"
            value={formik.values.tenure}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.tenure && formik.errors.tenure
            ? formik.errors.tenure
            : ''}
        </FlexCol>
        <FlexCol>
          <label>Maximum Amount</label>
          <Input
            name="max_amount"
            type="number"
            placeholder="Max amaount"
            value={formik.values.max_amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.max_amount && formik.errors.max_amount ? (
            <Error>{formik.errors.max_amount}</Error>
          ) : (
            ''
          )}
        </FlexCol>
        <FlexCol>
          <label>Campaign Issuer</label>
          <Input
            name="issuer"
            type="text"
            placeholder="Issuer"
            value={formik.values.issuer}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FlexCol>
        <FlexCol>
          <label>Closing Date</label>
          <Input
            name="closing_date"
            type="date"
            placeholder="Closing Date"
            value={formik.values.closing_date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FlexCol>
        <FlexCol>
          <label>Overview</label>
          <TextArea
            name="overview"
            value={formik.values.overview}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextArea>
        </FlexCol>
        <FlexCol>
          <label>Issuer Website</label>
          <Input
            name="issuer_website"
            type="text"
            placeholder="https://"
            value={formik.values.issuer_website}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FlexCol>
        <FlexCol>
          <label>Issuer Logo</label>
          <Input
            name="issuer_logo"
            type="file"
            accept="image/*"
            onChange={(e) =>
              formik.setFieldValue('issuer_logo', e.target.files[0])
            }
          />
        </FlexCol>
        <FlexCol>
          <label>Product Paper</label>
          <Input
            name="product_paper"
            type="file"
            onChange={(e) =>
              formik.setFieldValue('product_paper', e.target.files[0])
            }
          />
        </FlexCol>
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
};
export default CampaignForm;
