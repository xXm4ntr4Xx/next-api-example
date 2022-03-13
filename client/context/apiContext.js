import  {createContext }from 'react';
import { useState } from 'react';



export function apiSearch(){
     const [element,setElement] = useState('')
     setElement('tommy')
     return element
}

export const ApiContext = createContext();


export default ApiContext;