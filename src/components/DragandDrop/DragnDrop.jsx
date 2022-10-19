import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ImageConfig } from './config/ImageConfig';
import uploadImg from '../../images/cloud-upload-regular-240.png';
import styled from 'styled-components';
import './drop-file-input.css';
import { parse } from 'papaparse';
import Table2 from '../Table1/Table2';

const DragnDrop = (props) => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add('dragover');

  const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

  // const onDrop = (event) => {
  //   wrapperRef.current.classList.remove('dragover');
  //   console.log('dropped');
  //   Array.from(event.dataTransfer.files).map((file) => {
  //     let text = file.text();
  //     console.log(text);
  //   });
  // };

  const [data, setData] = useState([]);
  const [upload, setUpload] = useState(false);
  const onDragOver = (event) => {
    event.preventDefault();
    console.log('dragging over');
  };

  const onDrop = (event) => {
    wrapperRef.current.classList.remove('dragover');
    event.preventDefault();
    console.log(event.dataTransfer.files);
    Array.from(event.dataTransfer.files).map(async (file) => {
      let text = await file.text();
      let result = parse(text, { header: true });
      console.log(result.data);
      setData(result.data);
      setUpload(true);
    });
  };

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
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
            <img src={uploadImg} alt="" />
            <p>{props.title}</p>
          </div>
          <input type="file" value="" onChange={onFileDrop} />
        </div>
      )}
      {upload && (
        <div style={{ width: '800px', height: '300px' }}>
          <Table2 data={data} />
        </div>
      )}
    </>
  );
};

DragnDrop.propTypes = {
  onFileChange: PropTypes.func,
};

export default DragnDrop;
