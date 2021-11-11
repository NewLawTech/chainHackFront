import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { EditorState } from "draft-js";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Box, Button, Heading, useColorModeValue } from '@chakra-ui/react';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';

export const NltEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const  [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  }
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }
  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }

  return (
    <Box>
    <div
    className="NltEditor"
      //</Box>style={{ border: "1px solid black", minHeight: "16em", cursor: "text" }}
      >
      <Heading className="Nlt-header"
      as="h3" size="lg"
      bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        NewLawTech Editor
      </Heading>
      <Editor
        defaultEditorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <Heading className="Nlt-header"
      as="h3" size="lg"
      bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        NewLawTech Contract
      </Heading>
      <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
    </div>
    <Button>
      <Link to="/mint">Sign & Mint</Link>   
    </Button>
  </Box>
  );
}


