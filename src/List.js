import axios from 'axios';
import React, { useEffect, useState } from 'react';

const List = () => {
    const [person , setperson] = useState ()
   console.log(person)
    useEffect(()=>{
let res = axios.get("https://jsonplaceholder.typicode.com/users").then((rest)=> setperson(rest.data))
    },[])
return (
    <div>
    {
     person?.map((e)=>(<h1>{e.name}</h1>
    ))}
        </div>
);
}

export default List;
