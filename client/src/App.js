import React from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserInfo from "./pages/UserInfo";
import PrivateRoute from "./components/PrivateRoute";

const App = ()=>{
  return (
    <>
    <Router>
    <Header />
     <Switch >
       <PrivateRoute exact path='/' component={UserInfo} />
       <Route exact path='/login' component={Login} />
       <Route exact path='/register' component={Register} />
     </Switch>
    </Router>
    <Footer />
    </>
     
    )
}

export default App;