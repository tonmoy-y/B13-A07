'use client'
import React, { createContext, useState } from 'react';


export const userContext = createContext();

const UserProvider = ({children, friendsPromise }) => {
    const [history, setHistory] = useState([]);
    const [count, setCount] = useState({
        call: 0,
        text: 0,
        video: 0,
    });
    
    return (
       <userContext.Provider value={{friendsPromise, history,setHistory ,count, setCount}}>{children}</userContext.Provider>
    );
};

export default UserProvider;