import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const advancedSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, 'title must be at least 3 characters long')
    .required('*Required'),
  interest_rate: yup.number().integer().required('*Required'),
  tenure: yup.number().required('*Required'),
  max_amount: yup.number().required('*Required'),
  issuer: yup
    .string()
    .min(3, 'title must be at least 3 characters long')
    .required('*Required'),
  issuer_logo: yup.mixed().required('*Required'),
  product_paper: yup.mixed(),
  closing: yup.string().required('*Required'),
  active: yup.bool(),
  overview: yup.string().min(50, 'title must be at least 50 characters long'),
});

export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Required'),
  jobType: yup
    .string()
    .oneOf(['designer', 'developer', 'manager', 'other'], 'Invalid Job Type')
    .required('Required'),
  acceptedTos: yup
    .boolean()
    .oneOf([true], 'Please accept the terms of service'),
});
