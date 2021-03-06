import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { Box, Center } from '@chakra-ui/react'; 
import { FetchData } from './FetchDataTest';
import { FileUpload } from './components/FileUpload';


export const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users/")
          .then(res => res.json())
          .then(
              (data) => {
                  setIsLoaded(true);
                  setUsers(data);
              },
              (error) => {
                  setIsLoaded(true);
                  setError(error);
              }
          )
    }, [])
if (error) {
      return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
      return <div>Loading...</div>;
  } else {
      return (
          <Box>
            <header className="Nlt-header">
        UsersApiTest
        </header>
          <Center> 
          <ul>
              {users.map(user => (
              <li >
                <Link to={`user/${user.id}`}>{user.name}</Link>
              </li>
              ))}
            </ul>
          </Center>
          <br/>
        <header className="Nlt-header">
        FetchDataTest
        </header>
        <Center>
        <FetchData />
        </Center>
        <header className="Nlt-header">
        FileUploadTest
        <FileUpload />
        </header>
        </Box>
      );
  }
}
