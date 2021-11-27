import { useEffect, useState } from 'react';
import { getList } from '../services/list.js';
 
export const CocData = () => { 
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div>
    <br/>
     <h1>My CoC data fields</h1>
     <ul>
       {list.map(item => 
       <li key={item.item}>{item.id} & {item.item}</li>
       )}
     </ul>
   </div>
  );
}