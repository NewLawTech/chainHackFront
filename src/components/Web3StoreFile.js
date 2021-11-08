
import { Button, Input } from "@chakra-ui/react";

export const Web3StoreFile = () => {
  function getAccessToken() {
    return process.env.WEB3STORAGE_TOKEN
  }

  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
  }

  // function getFiles() {
  //   const fileInput = document.querySelector('input[type="file"]')
  //   return fileInput.files
  // }

  async function storeFiles(files) {
    const client = makeStorageClient()
    const cid = await client.put(files)
    console.log('stored files with cid:', cid)
    return cid
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