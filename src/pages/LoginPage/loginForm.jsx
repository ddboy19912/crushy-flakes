import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Marginer } from './marginer';
import { useSelector, useDispatch } from 'react-redux';
import {
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormError,
  Input,
  MutedLink,
  SubmitButton,
} from './common';
import * as yup from 'yup';
import axios from 'axios';
import { setAuth } from '../../redux/features/dash/dashSlice';
import PropTypes from 'prop-types';

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export function LoginForm(props) {
  const [error, setError] = useState(null);

  const { auth } = useSelector((state) => state.dash);

  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    setError(null);

    const response = await axios
      .post('https://ganbaru.xyz/admin-api/v1/login', values, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          env: 'monieworx',
        },
        withCredentials: true,
      })
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
      });

    if (response) {
      alert('Welcome back in. Authenticating...');
    }
  };

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <BoxContainer>
      <FormError>{error ? error : ''}</FormError>
      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
          <Input
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            <FieldError>
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ''}
            </FieldError>
          }
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
          {
            <FieldError>
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ''}
            </FieldError>
          }
        </FieldContainer>
        <MutedLink href="#">Forgot Password?</MutedLink>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit" disablewd={!formik.isValid}>
          Login
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={5} />
    </BoxContainer>
  );
}

LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};
