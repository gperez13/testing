import React, { Component } from 'react'
import './State.css';
import Contact from '../Contact/Contact.js';
import AnimatedWrapper from "../AnimatedWrapper";





class StateComponent extends Component{

	render(){



		return(
			<div>
				<div id="state">
						  <h3 class="header">State of the Gio: Thoughts on the Current Technology Landscape</h3>
	

						  <br/><br/>



					 		<h5 class="header">Blockchain</h5>
						 		<p class="content">
								Blockchain and other crypto technologies are at the brink of changing the 
								world as we currently know it. There has been a good amount of press and missconceptions
								that have tarnished my view on crypto currencies and although the models or technologies behind 
								some of these coins are still interesting, I am not investing in any of them. Currently, I am learning 
								about the use-cases of blockchain, when to recommend a blockchain vs. a traditional data structure, and 
								the implementation of distributed technologies including Hyperledger and smart contracts.
						 		</p>
						 		<br/>

					 		<h5 class="header">Data</h5>
						 		<p class="content">
								The concept of "Big Data" should simply be called data analysis. The collection of data 
								continues to grow at exponential rates and the tools available over the past 3 years have made it easier
								for us to process large amounts of it. As such, any person deriving insight from data should be able to 
								synthesize using data science methods. Additionally, the intersection of blockchain and data can ensure 
								truthiness within data collected. The aspect of crypto I find most exciting is the idea of Self-Sovereign Identity 
								because of the implications it has on controlling your own agency.
						 		</p>
						 		<br/>

							<h5 class="header">Healthcare</h5>
								 <p class="content">
								Advances in these two areas are going to vastly improve Healthcare operations and information systems
								to benefit patients and practitioners. Records within hospital systems will communicate with eachother securely
								and a shift in the current paradigm is to be expected. Public policy can better decimate systematic issues ranging from 
								economic disparities or pathogen concentrations through Data Science methods and in turn improving overall health quality. 
						 		</p>
						 		<br/>
	

						
					
				</div>

				<Contact/>
			</div>

			)
	}
}






const State = AnimatedWrapper(StateComponent);
export default State;