import { useField } from 'formik';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Select = styled.select`
  height: 100%;
  border-width: 2px;
  border-color: #cccccc;
  padding: 17px;
  font-size: 16px;
  border-radius: 8px;
  border-style: solid;
  /* background: blue; */
`;

const Error = styled.p`
  font-size: 12px;
  color: red;
  margin-top: -0.2rem;
`;

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Container>
      <label>{label}</label>
      <Select
        {...field}
        {...props}
        className={meta.touched && meta.error ? 'input-error' : ''}
      />
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </Container>
  );
};
export default CustomSelect;
