import React from 'react';

const Input = (props)=>{

 const {type , value , onInputChange, label, name} = props;

  return (
    <>
     <label>{label}</label>
     <input
     name={name}
     type={type}
     value={value}
     onChange={onInputChange}   
      />
    </>
  )

}

Input.defaultProps = {
  label:"inputBox",
  type: "text",
  value: "",
  name:"",
  onInputChange:(e)=>{
    console.log(e.target.value);
  }
}

export default Input;