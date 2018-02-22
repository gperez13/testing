import React, { Component } from 'react'
import './About.css';
import AnimatedWrapper from "../AnimatedWrapper";
import Contact from '../Contact/Contact.js';




class AboutComponent extends Component{

	render(){



		return(
			<div>
				<div id="about">
						  <h3 class="header">From Chicago to Austin and Back</h3>
	

						  <br/><br/>

						  <p class="content">
					 I am a software developer with a knack for fostering 
					 relationships between people and data. Two years ago I 
					 moved to Austin, Texas and began working in the tech 
					 industry. The Advisory Board Company introduced me to 
					 what it's like to work in an enterprise setting and 
					 gave me a behind the scenes understanding of both 
					 software product as well as healthcare operations.  
					 Because of my background in informatics, I can focus on 
					 immediate needs while keeping track of the big picture. 
					 		</p>


						  

					<p class="content">

					Creating community has always come easy to me. 
					As an extrovert, I look to break down walls and 
					introduce people to each other. Operating with a 
					positive-sum mentality, I build up my peers and share 
					opportunities for the benefit of the organization as 
					a whole. Through these soft skills I can simplify 
					complex ideas and deliver them to the end user as 
					readable data. </p>

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