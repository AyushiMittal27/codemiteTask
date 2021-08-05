import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useCookies} from "react-cookie";


const UserInfo =()=>{

  const [user , setUser] = useState({});
  const [error , setError] = useState('');
  const [cookies, setCookie] = useCookies(['user']);

  useEffect(()=>{
      getUserInfo(); 
  },[])

  const getUserInfo = async()=>{
    try{
      const Authorization= await `Bearer ${cookies.Token}`
      const res=await axios.get("http://localhost:5000/api/user/info", {
            'headers':{ Authorization}
       })
       setError(false);
       setUser(res.data.user);
      
    }catch(err){
      setError(true);
       console.log(err);
    }
  }

  return (
    <div style={{padding:"40px"}}>
    {error? <p>something is wrong</p> :
      <>
    <h1> Good Eve, {user?.name}</h1>
    <h2>Your registered Email Id is :{user?.email}</h2>
    </>
    }
    </div>
  )

}

export default UserInfo;