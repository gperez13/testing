import React, { Component } from 'react'
import './About.css';
import AnimatedWrapper from "../AnimatedWrapper";
import Contact from '../Contact/Contact.js';




class AboutComponent extends Component{

	render(){



		return(
			<div>
				<div id="about">
						  <h3 class="header">Most people call me Gio</h3>
	

						  <br/><br/>

						  <p class="content">
					 I am a software developer with a knack for fostering 
					 relationships between people and data. I prefer relational
					 databases to MongoDB and use PostgreSQL, Express.js, React.js 
					 & Node as my stack. However, I try to have a language agnostic
					 approach to development in order to use the best tool for the job.


					 		</p>


						  

					<p class="content">

					Creating community has always come easy to me. 
					As an extrovert, I look to break down walls and 
					introduce people to each other. Operating with a 
					positive-sum mentality, I build up my peers and share 
					opportunities for the benefit of the organization as 
					a whole. Through these soft skills I can simplify 
					complex ideas and deliver them to the end user as 
					understandable information. </p>

					<p class="content">

					Recently, I volunteered at the International Blockchain Congress,
					built a distributed ledger using IBM Hyperledger, visualized a data 
					set usingCartoDB, and became part of the Blockchain for Social Good 
					community in Chicago. I am looking for the opportunity to join a Front End Development
					team and have interests in Dev Ops & crypto platforms.</p>
					
							<h6 class="content">Resume</h6>
						  	<a href="./GiovanniPerez-Resume.pdf" rel="noopener noreferrer" target="_blank"><img id="resume" src="/pages-1-32.png"/></a>
				</div>

				<div class="buffer"/>

				 <Contact/>


			</div>

			)
	}
}






const About = AnimatedWrapper(AboutComponent);
export default About;