import React, {useState} from 'react';
import Form from "../components/Form";
import axios from "axios";
import {useCookies} from 'react-cookie';

const Login = (props)=>{

 const [email , setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [loading , setLoading] = useState('');
 const [error , setError] = useState('');
 const [cookies, setCookie] = useCookies(['user']);

 const handleChange = (e)=>{
   e.target.name==='email'?
     setEmail(e.target.value) :
     setPassword(e.target.value);
 }

 
const handleClick = async()=>{
  if(error){
    alert("Please resolve the error");
    return;
  }
  try{
   setLoading(true); 
   const res =await axios.post("http://localhost:5000/api/auth/signin", {email , password});
   setLoading(false);
   setError(false);
  console.log(res.data.token);
  setCookie('Token', res.data.token, { path: '/' });
  props.history.push('/info');
  }catch(err){
    console.log(err);
    setError(true);
    setLoading(false);
  }
}
 
 const inputs= [
  {
    label :"Email",
    value :email,
    onInputChange: handleChange,
    name:"email",
    type:"email"
  },
  {
      label :"Password",
      value : password,
      onInputChange: handleChange,
      name:"password",
      type:"password",
  }
 ]

 const buttons =[
   {
     onClick:handleClick,
     name:"Submit" ,
     loading:loading
   }
 ]

 return(

   <Form  inputs={inputs} buttons={buttons} error={error} />
 )
}

export default Login;