import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./Button.css"

const Button = (props)=>{

  const {style, className , onClick, loading , children} = props;
   
   return(
     <button 
      style={{...style}} 
      className={className}
      onClick={onClick ? onClick :()=>{console.log("Button clicked")}
     }>
       {loading ? <CircularProgress /> : children}
      
     </button>
   )

}

Button.defaultProps = {
  loading: false,
  className:"primary"
}

export default Button;