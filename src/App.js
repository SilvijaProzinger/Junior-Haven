import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation.js';
import About from './components/About.js';
import Articles from './components/Articles.js';
import mainimage from './images/mainimage.png';
import articleone from './images/articleone.jpg';
import articletwo from './images/articletwo.jpg';
import articlethree from './images/articlethree.jpg';
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
    <div className="new-articles">
      <div className="article-entry">
        <h3>Why React is the best thing a new developer can learn?</h3>
        {/*credit to Kevin Ku on Pexels*/}
        <img src={articleone} alt="coding"/> 
      </div>
      <div className="article-entry">  
        <h3>Angular Basics - Part II</h3>
        {/*credit to Christina Morillo on Pexels*/}
        <img src={articletwo} alt="coding"/>
      </div>
      <div className="article-entry">
        <h3>10 SASS tips for a perfect portfolio</h3>
        {/*credit to Tranmautritam on Pexels*/}
        <img src={articlethree} alt="coding"/>
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
