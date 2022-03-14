import  {createContext, useEffect }from 'react';
import { useState } from 'react';



export const ApiContext = createContext();

export  function ApiContextprovider(props){
    const [element,setElement] = useState({});

useEffect(async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    setElement(data)

},[])

return(
    <ApiContext.Provider value={{element, setElement}}>
        {props.children}
    </ApiContext.Provider>
)
    
}