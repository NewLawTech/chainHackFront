import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { Box } from '@chakra-ui/react'; 

export const NltEditor = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);
  function focusEditor() {
    editor.current.focus();
  }

  return (
    <Box>
    <div
      style={{ border: "1px solid black", minHeight: "16em", cursor: "text" }}
      onClick={focusEditor}
    >
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Write something!"
      />
    </div>
  </Box>
  );
}


