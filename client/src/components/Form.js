import React from 'react';
import Button from "./Button";
import Input from "./Input";


const Form = (props)=>{

  const {inputs, buttons, error} = props;

  return(
   <div style={{padding:"40px"}}>
   {error && <p>Please enter the valid inputs</p>}  
   {inputs.map((i , key)=>
     <Input key={key} {...i} />
   )}
   {
     buttons.map((b , key)=>
       <Button {...b} style={{color:"white"}}> {b.name}</Button>
     )
   }
   </div>

  )

}

export default Form;