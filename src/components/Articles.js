import React from 'react';
import articleone from '../images/articleone.jpg';
import articletwo from '../images/articletwo.jpg';
import articlethree from '../images/articlethree.jpg';
import chaticon from '../images/chat.png';

function Articles(){
	const articles = [
		{ id: "0", title: "Why React is the best thing a new developer can learn?", image:"articleone", tag:"react" },
		{ id: "1", title: "Angular Basics - Part II", image:"articletwo", tag:"angular"},
		{ id: "2", title: "10 SASS tips for a perfect portfolio", image:"articlethree", tag:"sass" }, 
		{ id: "3", title: "Why juniors should postpone learning React", image:"articlefour", tag:"react" },
		{ id: "4", title: "React and MobX: A powerful combination", image:"articlefive", tag:"react" },
		{ id: "5", title: "10 things to memorize about state", image:"articlesix", tag:"react" },
		{ id: "6", title: "My Vue learning path", image:"articleseven", tag:"vue" },
		{ id: "7", title: "Why I consider Angular the best framework", image:"articleeight", tag:"angular" },
		{ id: "8", title: "This is why you should consider using vanilla Javascript", image:"articlenine", tag:"javascript" }
	]
	return (
		<div>
			<h2 className="title">ARTICLES</h2>
			<div className="tags">
				<h4 className="tag">#react</h4>
				<h4 className="tag">#javascript</h4>
				<h4 className="tag">#sass</h4>
				<h4 className="tag">#vue</h4>
				<h4 className="tag">#angular</h4>
			</div>
			<div className="chat-icon">
      			<img src={chaticon} alt="chat icon"/>
    		</div>
			<div className="articles">
				{articles.slice(0,6).map((article, index)=> ( 
					<div key={index} className="article-entry">
		        		<h3>{article.title}</h3>
				        <img src={require(`../images/${article.image}.jpg`)} /> 
      				</div>
				))}
    		</div>
    		<div className="signup-login">
          		<button className="button more-button">MORE</button>
        	</div>
			<div className="footer-other">
   	 			<h4>Copyright by Junior.Haven 2020</h4>
    			<h4>facebook.com/Junior.Haven</h4>
    			<h4>info@juniorhaven.com</h4>
    		</div>
		</div>
	)
}

export default Articles;