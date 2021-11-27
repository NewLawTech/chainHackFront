import {useEffect, useState} from 'react';
import axios from 'axios';
import { Heading } from "@chakra-ui/react";
 
export const AxiosData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

 useEffect(() => {
   getData();
 }, []);

 const getData = () => {
   const endPoint = "https://api.dailysmarty.com/posts";
   axios(endPoint).then((response) => {
    setIsLoading(false);
    console.log("RES", response.data);
    
    if (response.data.posts) {


    setPosts(response.data.posts);
    } else {
      console.log("An error happened");
    }
   }).catch(error => {
    setIsLoading(false);
    console.log("An error happenen", error);
   })
 };

 const postsRenderer = posts.map((post) => (
  <div key={post.id}>{post.title}</div>
 ));

 const content = isLoading ? (
  <div>Loading...</div> 
  ) : ( 
  <div><pre>{postsRenderer}</pre></div>
  );

return <Heading>{content}</Heading> 
}