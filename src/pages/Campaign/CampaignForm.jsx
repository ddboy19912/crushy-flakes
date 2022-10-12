import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { DragnDrop, Button } from '../../components';

const Container = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  height: 800px;
  background: #ffffff;
  border: 0.5px solid #e1e5e4;
  box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
  border-radius: 4px;
`;

const Wrapper = styled.div`
  padding: 20px 34px;
  width: 100%;
`;

const Input = styled.input`
  border-width: 2px;
  border-color: #cccccc;
  padding: 17px;
  font-size: 16px;
  border-radius: 8px;
  border-style: solid;
  width: 70%;
  /* background-color: red; */
  &:focus {
    outline: none;
  }
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

const Grids = styled.div`
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

const CampaignForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      title: '',
      age: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onFileChange = (files) => {
    console.log(files);
  };

  return (
    <Container>
      <Wrapper>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <label htmlFor="title">Title of the Campaign</label>
            <Input
              value={values.email}
              onChange={handleChange}
              id="title"
              type="text"
              placeholder="Title of the Campaign"
              onBlur={handleBlur}
              className={errors.email && touched.email ? 'input-error' : ''}
            />
          </div>
          <Grids>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <label htmlFor="title">Day Term</label>
              <Select
                value={values.email}
                onChange={handleChange}
                id="title"
                type="text"
                placeholder="Day Term"
                onBlur={handleBlur}
                className={errors.email && touched.email ? 'input-error' : ''}
              ></Select>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <label htmlFor="title">Funding Goal</label>
              <Select
                value={values.email}
                onChange={handleChange}
                id="title"
                type="text"
                placeholder="Day Term"
                onBlur={handleBlur}
                className={errors.email && touched.email ? 'input-error' : ''}
              ></Select>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <label htmlFor="title">Number of Days</label>
              <Select
                value={values.email}
                onChange={handleChange}
                id="title"
                type="text"
                placeholder="Day Term"
                onBlur={handleBlur}
                className={errors.email && touched.email ? 'input-error' : ''}
              ></Select>
            </div>
          </Grids>
          <Grids>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <label htmlFor="title">Interest Rate</label>
              <div style={{ position: 'relative' }}>
                <Input
                  value={values.email}
                  onChange={handleChange}
                  id="title"
                  type="text"
                  placeholder=""
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? 'input-error' : ''}
                />
                <Dollarbg>$</Dollarbg>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <label htmlFor="title">Minimum Investment Amount</label>
              <Select
                value={values.email}
                onChange={handleChange}
                id="title"
                type="text"
                placeholder="Day Term"
                onBlur={handleBlur}
                className={errors.email && touched.email ? 'input-error' : ''}
              ></Select>
            </div>
          </Grids>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <label htmlFor="docs">Upload Documents</label>
            <DragnDrop
              id="docs"
              onFileChange={(files) => onFileChange(files)}
            />
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Button value="Save" />
            <Button value="Launch" />
          </div>
        </form>
      </Wrapper>
    </Container>
  );
};

export default CampaignForm;
