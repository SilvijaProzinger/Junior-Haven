import React from 'react';
import about from '../images/about.png';
import email from '../images/email.png';
import facebook from '../images/facebook.png';

function About(){
	return (
		<div>
		<h3 className="title">ABOUT</h3>
		<div className="about">
			<h4 className="about-text">
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mauris ac mi ullamcorper scelerisque. 
			Fusce cursus nibh in tortor maximus fringilla. Nulla congue neque metus, sed ultricies lacus congue eu. 
			Aenean non nunc at quam tempor accumsan. Suspendisse eleifend non dui ac ornare. 
			Phasellus vitae ex fermentum orci imperdiet facilisis eget id tellus. Phasellus at nunc ligula. 
			Aenean congue dictum mauris, a malesuada magna viverra a. Mauris elementum suscipit lorem, ut maximus nisi volutpat sed. 
			Etiam non risus tortor. Sed viverra porttitor mi, sit amet tempus lorem finibus a. Sed vel volutpat dolor. 
			Maecenas sem massa, vestibulum nec lobortis vel, volutpat vel nibh. Donec pellentesque facilisis mauris pulvinar 
			consectetur. Ut bibendum, erat sit amet dignissim posuere, nisi mi efficitur ante, consectetur suscipit eros elit id 
			diam. 
			</p><br/>
			<p> Etiam tristique in leo sit amet fermentum. Nam quis quam eget lorem condimentum dictum. Vestibulum at vehicula 
			felis, ac finibus mauris. Duis mi augue, euismod ut egestas sit amet, mollis ac purus. 
			Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam dignissim lorem sem, quis egestas nunc bibendum non. Duis suscipit libero at lacus sagittis, id sodales metus lacinia. In auctor sed ante porttitor molestie. 
			Praesent lacinia sapien vel tincidunt consectetur. Nunc id semper nunc, sit amet pretium quam. Cras eu felis justo.</p>
			</h4>
			{/*credit to UnDraw illustrations by Katerina Limpitsuoni*/}
			<img src={about} alt="person with laptop illustration" className="about-image"/>
		</div>
		<div className="icons-and-contact">
		<img src={facebook} alt="facebook icon" className="contact-icons"/>
		<h4>facebook.com/Junior.Haven</h4>
		<img src={email} alt="email icon" className="contact-icons"/>
		<h4>info@juniorhaven.com</h4>
		</div>
		</div>
	)
}

export default About;