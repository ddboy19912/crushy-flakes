import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const advancedSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, 'title must be at least 3 characters long')
    .required('*Required'),
  img: yup.string().required('*Required'),
  name: yup
    .string()
    .min(3, 'title must be at least 3 characters long')
    .required('*Required'),
  owner: yup
    .string()
    .min(3, 'title must be at least 3 characters long')
    .required('*Required'),
  term: yup
    .string()
    .oneOf(['designer', 'developer', 'manager', 'other'], 'Invalid Job Type')
    .required('*Required'),
  goal: yup
    .string()
    .oneOf(['designer', 'developer', 'manager', 'other'], 'Invalid Job Type')
    .required('*Required'),
  days: yup
    .string()
    .oneOf(['designer', 'developer', 'manager', 'other'], 'Invalid Job Type')
    .required('*Required'),
  acceptedTos: yup
    .boolean()
    .oneOf([true], 'Please accept the terms of service'),
});
