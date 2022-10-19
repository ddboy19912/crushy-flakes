import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ImageConfig } from './config/ImageConfig';
import uploadImg from '../../images/cloud-upload-regular-240.png';
import styled from 'styled-components';
import './drop-file-input.css';
import { parse } from 'papaparse';

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
      let result = parse(text, { headers: true });
      console.log(result);
      setData(result.data);
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
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Ready to upload</p>
          {fileList.map((item, index) => (
            <div key={index} className="drop-file-preview__item">
              <img
                src={
                  ImageConfig[item.type.split('/')[1]] || ImageConfig['default']
                }
                alt=""
              />
              <div className="drop-file-preview__item__info">
                <p>{item.name}</p>
                <p> SIZE: {item.size}B</p>
              </div>
              <span
                className="drop-file-preview__item__del"
                onClick={() => fileRemove(item)}
              >
                x
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

DragnDrop.propTypes = {
  onFileChange: PropTypes.func,
};

export default DragnDrop;
