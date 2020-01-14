import React from 'react';
import './App.css';
import mainimage from './images/mainimage.png';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <h2>Junior.Haven</h2>
        </div>
        <div className="menu">
          <h3>HOME</h3>
          <h3>ABOUT US</h3>
          <h3>ARTICLES</h3>
        </div>
        <div className="signup-login">
          <button className="button signup-button">SIGN UP</button>
          <button className="button login-button">LOGIN</button>
        </div>
      </div>
      <div className="central-content">
        <div className="home-image">
           {/*credit to UnDraw illustrations by Katerina Limpitsuoni*/}
          <img src={mainimage} alt="central illustration"/>
        </div>
        <div className="new-blogs">
          <div className="blog-entry"></div>
          <div className="blog-entry"></div>
          <div className="blog-entry"></div>
        </div>
      </div>
      <div className="footer">
      <h3>Copyright by Junior.Haven 2020</h3>
      <h4>facebook.com/Junior.Haven</h4>
      <h4>info@juniorhaven.com</h4>
      </div>
    </div>
  );
}

export default App;
