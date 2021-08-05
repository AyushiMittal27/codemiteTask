import React from 'react';
import {Link} from "react-router-dom";

const Header= ()=>{
  

  return (
    <div>
      <Link to='/login'>Login</Link>
      <Link to ='/register'>Register</Link>
      <Link to='/'>User Info</Link>
    </div>
  )
}

export default Header;