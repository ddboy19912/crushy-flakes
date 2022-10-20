import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ImageConfig } from './config/ImageConfig';
import uploadImg from '../../images/cloud-upload-regular-240.png';
import styled from 'styled-components';
import './drop-file-input.css';
import Papa, { parse } from 'papaparse';
import Table2 from '../Table1/Table2';
import csvImg from '../../images/csv-svgrepo-com.svg';

const DragnDrop = (props) => {
  const wrapperRef = useRef(null);

  const onDragEnter = () => wrapperRef.current.classList.add('dragover');

  const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

  const [data, setData] = useState([]);
  const [upload, setUpload] = useState(false);

  const onDragOver = (event) => {
    event.preventDefault();
    console.log('dragging over');
  };

  const onDrop = (event) => {
    event.preventDefault();
    console.log(event.dataTransfer.files);
    Array.from(event.dataTransfer.files).map(async (file) => {
      let text = await file.text();
      let result = parse(text, { header: true });
      // console.log(result);
      setData(result.data);
      setUpload(true);
    });
  };

  const handleFileChange = (e) => {
    const inputFile = e.target.files;
    console.log(inputFile);
    Array.from(inputFile).map(async (file) => {
      let text = await file.text();
      let result = parse(text, { header: true });
      console.log(result);
      setData(result.data);
      setUpload(true);
    });
  };

  return (
    <>
      {!upload && (
        <div
          ref={wrapperRef}
          className="drop-file-input"
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <div className="drop-file-input__label">
            <img src={csvImg} alt="" />
            <p>{props.title}</p>
          </div>
          <input type="file" value="" onChange={handleFileChange} />
        </div>
      )}
      {upload && (
        <Data>
          <Table2 data={data} />
          <FlexRow>
            <Button>Upload</Button>
            <Button onClick={() => setUpload(false)}>Cancel</Button>
          </FlexRow>
        </Data>
      )}
    </>
  );
};

DragnDrop.propTypes = {
  onFileChange: PropTypes.func,
};

export default DragnDrop;

const Button = styled.button`
  background: #2050f5;
  border-radius: 4px;
  width: 166px;
  height: 50px;
  border: none;
  color: #ffffff;
  margin-top: 0rem;
  cursor: pointer;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 2rem;
`;

const Data = styled.div`
  display: grid;
  grid-template-rows: 90% 10%;
  width: 100%;
`;
