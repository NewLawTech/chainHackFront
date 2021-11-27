import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ContentState, EditorState, Modifier } from "draft-js";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Box, Button, Heading, useColorModeValue, Stack } from '@chakra-ui/react';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import { NltOpenSea } from './NltOpenSea';

export const NltEditor = () => {
  
  const content = ContentState.createFromText("hello world");
  
  const [editorState, setEditorState] = useState(() =>
    // EditorState.createEmpty();
    EditorState.createWithContent(content)
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

  // const onEmojiClick = (e) => {
  //   let emoji = e.currentTarget.getAttribute('data-emoji');
  //   this.setState({editorState: insertCharacter(emoji, this.state.editorState)});
  // }

 
  return (
    <Box>
    <div
    className="NltEditor"
      // </Box>style={{ border: "1px solid black", minHeight: "16em", cursor: "text" }}
      >
      <Heading className="Nlt-header"
      as="h3" size="lg"
      bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        NewLawTech Editor
      </Heading>
      <NltOpenSea />
      <Editor
        defaultEditorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      	<Stack direction="row" spacing={4} sx={{ margin: 3 }}>
				<Button>Prefill</Button>

        {/* <div className="emoji-picker">
        <h2 className="toolbar-title">Insert Emoji:</h2>
        <button
            className="emoji"
            onMouseDown={(e) => e.preventDefault()}
            onClick={onEmojiClick()}
            data-emoji="🎊">
              <span role="img" aria-label="confetti">🎊</span>
        </button>
        <button
            className="emoji"
            onMouseDown={(e) => e.preventDefault()}
            onClick={onEmojiClick()}
            data-emoji="💖">
              <span role="img" aria-label="sparkle heart">💖</span>
        </button>
        </div> */}

				
			</Stack>
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


