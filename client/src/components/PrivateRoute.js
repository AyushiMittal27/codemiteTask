import React, {Component} from 'react'
import {Route , Redirect} from 'react-router-dom'
import {useCookies} from 'react-cookie';

const PrivateRoute = ({component: Component, ...rest})=>{ 
  const [cookies, setCookies]= useCookies(['user']);
  return (
    <Route {...rest} render={props=>{      
        return cookies.Token ?(
        <Component {...props} />
    ) :(
        <Redirect to={{
            pathname:'/login' ,
             state: {from: props.location} 
        }}
        />
    ) }} />
)}

export default PrivateRoute
