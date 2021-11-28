import React, { Fragment, useState } from 'react';
import { useMoralisFile, useNewMoralisObject } from "react-moralis";
import { Button, Input, Textarea } from "@chakra-ui/react";


export const FileUpload = () => {
  const [file, setFile] = useState();
  const [filename, setFilename] = useState('Please select the file to be uploaded');
  // const [name, setName] = useState();
  const [uploadedFile, setUploadedFile] = useState({});

  const {
    error,
    isUploading,
    moralisFile,
    saveFile,
  } = useMoralisFile();

  //Upload image to IPFS
  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  }

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    
    let image = await saveFile('NLTEST3', file, { saveIPFS: true });
    console.log(image)
    return image
  }

  // Upload metadata object name, description, image
  const UploadMetaData = async ({imageURL}) => {
    
    const name = document.getElementById('metadataName').value;
    const description = document.getElementById('metadataDescription').value;

    const metadata = {
      "name": name,
      "description": description,
      "image": imageURL
    }

    const { isSaving, save } = useNewMoralisObject(metadata);
    await save({metadata});
  }

  // Function gogogo
  const gogogo = async () => {
    const image = await onSubmit();
    await UploadMetaData(image);
  }
  

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className='custom-file'>
          <Input type="Text" name="metadataName" id="metadataName" placeholder="File name" /><br/><br/>
          <Textarea name="metadataDescription" id="metadataDescription" cols="20" rows="10" placeholder="Description"></Textarea>
          <br/>
          <br/>
          <Input type='file' name='fileinput' id='customFile' onChange=
          {onChange} />
          <label className='custom-file-label' htmlFor='CustomFile'>
            {filename}
          </label>
        </div>
        <Button>
        <Input 
          type="submit" 
          value="Upload" 
          />
          </Button>
      </form>
    </Fragment>
  )
}

