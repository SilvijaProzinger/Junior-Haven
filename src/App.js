import React from 'react';
import './App.css';
import mainimage from './images/mainimage.png';
import blogone from './images/blogone.jpg';
import blogtwo from './images/blogtwo.jpg';
import blogthree from './images/blogthree.jpg';

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
          <div className="blog-entry">
            <h3>Why React is the best thing a new developer can learn?</h3>
          {/*credit to Kevin Ku on Pexels*/}
            <img src={blogone} alt="coding"/> 
          </div>
          <div className="blog-entry">  
            <h3>Angular Basics - Part II</h3>
          {/*credit to Christina Morillo on Pexels*/}
            <img src={blogtwo} alt="coding"/>
          </div>
          <div className="blog-entry">
            <h3>10 SASS tips for a perfect portfolio</h3>
          {/*credit to Tranmautritam on Pexels*/}
            <img src={blogthree} alt="coding"/>
          </div>
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
