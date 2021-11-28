import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ContentState, EditorState } from "draft-js";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Box, Button, Heading, useColorModeValue, Stack, Center } from '@chakra-ui/react';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import { NltOpenSea } from './NltOpenSea';
import { CocData } from './CocData';

export const NltEditor = () => {
  
  const content = ContentState.createFromText
  (` Right of Pledge and Covenant to Pledge

  2.1	The Pledgors hereby agree to create in favour of the Pledgee the right of pledge referred to 
  in this Article 2. The Pledgee hereby agrees to accept such right of pledge. 

  2.2	In order to secure to the Pledgee the prompt fulfilment of the Secured Obligations, the Pledgors 
  hereby pledge the Assets, now, or as the case may be, in advance (bij voorbaat) to the Pledgee, which 
  right of pledge the Pledgee hereby accepts.

  2.3	The creation of the right of pledge in respect of the Assets shall be completed by the Registration 
  of this Deed of Pledge.

  2.4	The Pledgors undertake at their expense to cause the Registration of this Deed of Pledge to be effected 
  as soon as possible after its execution by the Parties. The Pledgors shall provide the Pledgee without 
  delay with a copy of the registered Deed of Pledge. The Pledgee is also authorised at any time to effect 
  the Registration of this Deed of Pledge.

  2.5	The Assets at any time pledged by this Deed of Pledge shall include the Assets specified in Schedule 1 or 
  in any Asset List and shall otherwise be determined by the terms of this Deed of Pledge, the intentions of the 
  Pledgors and the Pledgee, the books and records of the Pledgee and such other factors as the law permits.
  
  Signed by Chainlink and NewLawTech on 28 November 2021`);
  
  const [editorState, setEditorState] = useState(() =>
    // EditorState.createEmpty()
    EditorState.createWithContent(content)
  );

  // const editorPrefill = (content) => {
  //   setEditorState(content)
  // }

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
				<Button>Chamber of Commerce Data</Button>
       

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
    <br/>
    <Button>
      <Link to="/mint">Sign & Mint</Link>   
    </Button>
  </Box>
  );
}


