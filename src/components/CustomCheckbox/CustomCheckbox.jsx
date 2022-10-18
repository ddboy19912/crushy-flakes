import { useField } from 'formik';
import styled from 'styled-components';

const Error = styled.p`
  font-size: 12px;
  color: red;
  margin-top: -0.2rem;
`;

const Checkbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Checkbox>
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? 'input-error' : ''}
        />
        <span>Set offer as Active</span>
      </Checkbox>

      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </>
  );
};
export default CustomCheckbox;
