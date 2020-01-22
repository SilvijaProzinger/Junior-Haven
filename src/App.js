import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation.js';
import About from './components/About.js';
import Articles from './components/Articles.js';
import mainimage from './images/mainimage.png';
import blogone from './images/blogone.jpg';
import blogtwo from './images/blogtwo.jpg';
import blogthree from './images/blogthree.jpg';
import chaticon from './images/chat.png';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/articles" component={Articles} />
      </Switch>
    </div>
    </Router>
  )
}

const Home = () => {
  return (
  <div>
    <div className="central-content">
    <div className="home-image">
      {/*credit to UnDraw illustrations by Katerina Limpitsuoni*/}
      <img src={mainimage} alt="central illustration"/>
    </div>
    <div className="chat-icon">
      <img src={chaticon} alt="chat icon"/>
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
    <h4>Copyright by Junior.Haven 2020</h4>
    <h4>facebook.com/Junior.Haven</h4>
    <h4>info@juniorhaven.com</h4>
  </div>
  </div>
)
}

export default App;
