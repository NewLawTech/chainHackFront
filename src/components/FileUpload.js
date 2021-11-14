import React, { Fragment, useState } from 'react';
import { useMoralisFile } from "react-moralis";
import { Input } from "@chakra-ui/react";


export const FileUpload = () => {
  const [file, setFile] = useState();
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});

  const {
    error,
    isUploading,
    moralisFile,
    saveFile,
  } = useMoralisFile();

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  }

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    saveFile('NLTEST3', file, { saveIPFS: true });
  }
  

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className='custom-file'>
          <Input type='file' className='custom-file-input' id='customFile' onChange=
          {onChange} />
          <label className='custom-file-label' htmlFor='CustomFile'>
            {filename}
          </label>
        </div>
        <Input 
          type="submit" 
          value="Upload" 
          />
      </form>
    </Fragment>
  )
}
