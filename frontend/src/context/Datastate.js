import React from "react";
import { useState } from "react";
import Datacontext from "./Datacontext";

const Datastate=(props)=>{

    const[user,setUser]=useState({});
    const[products,setProducts]=useState([]);
    const[loggedin,setloggedin]=useState(false);
    const productsset=(productsdata)=>{
        setProducts([...productsdata]);
    }
    const userset=(userdata)=>{
        setUser(userdata);
    }
    const setlog=(val)=>{
       setloggedin(val);
    }
    return(
        <Datacontext.Provider value={{user,products,productsset,userset,loggedin,setlog}}>
            {props.children}
        </Datacontext.Provider>
    )
}

export default Datastate;