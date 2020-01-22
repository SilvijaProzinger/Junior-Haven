import React from 'react';
import { Link } from 'react-router-dom';


function Navigation(){
	return (
	<div className="header">
        <div className="logo">
          <h2>Junior.Haven</h2>
        </div>
        <div className="menu">
          <Link to="/"><h3>HOME</h3></Link>
          <Link to="/about"><h3>ABOUT</h3></Link>
          <Link to="/articles"><h3>ARTICLES</h3></Link>
        </div>
        <div className="signup-login">
          <button className="button signup-button">SIGN UP</button>
          <button className="button login-button">LOGIN</button>
        </div>
    </div>			
	)
}

export default Navigation;