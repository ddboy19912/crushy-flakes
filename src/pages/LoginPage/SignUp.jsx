import React, { useContext, useState } from 'react';
import { Field, useFormik } from 'formik';
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormSuccess,
  Input,
  MutedLink,
  SubmitButton,
  FormError,
} from './common';
import { Marginer } from './marginer';
import { AccountContext } from './context';
import * as yup from 'yup';
import axios from 'axios';

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  firstname: yup
    .string()
    .min(3, 'Please enter you real name')
    .required('*Required'),
  lastname: yup
    .string()
    .min(3, 'Please enter you real name')
    .required('*Required'),
  phone_number: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  email: yup.string().email('Please enter a valid email address').required(),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, 'Please enter a strong password')
    .required(),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .when('password', {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'Password does not match'),
    }),
  job_title: yup.string().optional(true),
});

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const { confirmPassword, ...data } = values;

    const response = await axios
      .post('https://ganbaru.xyz/admin-api/v1/register', data)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
        setSuccess(null);
      });

    if (response && response.data) {
      setError(null);
      setSuccess(response.data.message);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      phone_number: '',
      email: '',
      password: '',
      password_confirmation: '',
      job_title: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  console.log('Error', error);

  return (
    <BoxContainer>
      {!error && <FormSuccess>{success ? success : ''}</FormSuccess>}
      {!success && <FormError>{error ? error : ''}</FormError>}
      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
          <Input
            name="firstname"
            placeholder="First Name"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.fullName && formik.errors.fullName
              ? formik.errors.fullName
              : ''}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="lastname"
            placeholder="Last Name"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.lastname && formik.errors.lastname
              ? formik.errors.lastname
              : ''}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ''}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="country"
            placeholder="Country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.country && formik.errors.country
              ? formik.errors.country
              : ''}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="phoneNumber"
            placeholder="Phone Number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.phoneNumber && formik.errors.phoneNumber
              ? formik.errors.phoneNumber
              : ''}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ''}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : ''}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="address"
            placeholder="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.address && formik.errors.address
              ? formik.errors.address
              : ''}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="incomeRange"
            placeholder="Income Range"
            value={formik.values.incomeRange}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.incomeRange && formik.errors.incomeRange
              ? formik.errors.incomeRange
              : ''}
          </FieldError>
        </FieldContainer>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit" disabled={!formik.isValid}>
          Signup
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
