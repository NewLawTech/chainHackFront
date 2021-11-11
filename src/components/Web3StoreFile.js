import { Web3Storage } from 'web3.storage';
import { Button, Input } from "@chakra-ui/react";

export const Web3StoreFile = () => {
  function getAccessToken() {
    return process.env.WEB3STORAGE_TOKEN
  }

  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
  }

  // In the browser, you can use a file input element to allow the user to select files for upload:
  function getFiles() {
    const fileInput = document.querySelector('input[type="file"]')
    return fileInput.files
  }

  function makeFileObjects() {
    // You can create File objects from a Blob of binary data
    // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
    // Here we're just storing a JSON object, but you can store images,
    // audio, or whatever you want!
    const obj = { hello: 'Legal world' }
    const blob = new Blob([JSON.stringify(obj)], {type : 'application/json'})
  
    const files = [
      new File(['contents-of-file-1'], 'plain-utf8.txt'),
      new File([blob], 'hello.json')
    ]
    return files
  }

  async function storeFiles(files) {
    const client = makeStorageClient()
    const cid = await client.put(files)
    console.log('stored files with cid:', cid)
    return cid
  }

  async function storeWithProgress(files) {  
    // show the root cid as soon as it's ready
    const onRootCidReady = cid => {
      console.log('uploading files with cid:', cid)
    }
  
    // when each chunk is stored, update the percentage complete and display
    const totalSize = files.map(f => f.size).reduce((a, b) => a + b, 0)
    let uploaded = 0
  
    const onStoredChunk = size => {
      uploaded += size
      const pct = totalSize / uploaded
      console.log(`Uploading... ${pct.toFixed(2)}% complete`)
    }
  
    // makeStorageClient returns an authorized Web3.Storage client instance
    const client = makeStorageClient()
  
    // client.put will invoke our callbacks during the upload
    // and return the root cid when the upload completes
    return client.put(files, { onRootCidReady, onStoredChunk })
  }

  return (
    <>
      <header>
        <h1>⁂
          <span>web3.storage</span>
        </h1>
      </header>

      <form method="post" enctype="multipart/form-data">
      <div>
        <label for="file">Choose file to upload</label>
        <input type="file" id="file" name="file" multiple />
      </div>
      <div>
        <button>Submit</button>
      </div>
      </form>
      
      <Button
        colorScheme="blue"
        size="lg"
        onClick={() => storeFiles}>
        Store on IPFS
      </Button>
    </>
  )
}