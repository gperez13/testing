import React, { Component } from 'react'
import './Projects.css';
import Contact from '../Contact/Contact.js';
import AnimatedWrapper from "../AnimatedWrapper";




class ProjectsComponent extends Component{

	render(){



		return(
			
			<div>
				<div id="projects">



					<h2 class="header">Work</h2>
					<hr/><br/><br/><br/>


					<div class="container">


						<div class="row">

							<div class="col-md-7">
								<a href="https://react-storefront.herokuapp.com/home" rel="noopener noreferrer" target="_blank"><img class="work" src="/ManaTee.png"/></a>
								
							</div>
									<div class="col-md-5">
									
									<h4 class="header">ManaTee</h4>
									<br/>

										<p class="content">ManaTee is a fictional online 
										store. The purpose of this application is to construct 
										an aesthetically more complex iteration of my React.js 
										based projects. It will use a separate SQL database and 
										ill work synchronously with a dashboard project utilizing 
										hopping data. Like boxed cake, it’s allowing me to put 
										together preconceived components while adding personal 
										styling & UX elements.  

										<br/><br/>
										Built Using: React. Sessions. Express. Postgres.
										</p>


									<a href="https://github.com/gperez13/my-CRUD-politician" rel="noopener noreferrer" target="_blank"><img id="kittycat" src="/GitHubKitty.png" /></a>
							</div>
						</div>



						<div class="row">

							<div class="col-md-5">
									<h4 class="header">RxChain</h4>
									<br/>

									<p class="content">RxChain is a Blockchain based Pharmaceutical 
									application aimed at bridging the gap between hospital EMR 
									systems and Pharmacy records while reducing drug abuse & operation 
									nefficiencies. It uses IBM’s Hyperledger technology to 
									eliminate PHI breaches and is displayed through a React 
									front end interphase. I am currently working on deploying the Hyperledger 
									model using Docker. Soon, the app will also contain CRUD elements and 
									have the React interphase updated to accommodate the API calls and 
									improve cosmetic features. Lastly, I am also working on a mapping tool to 
									find the location of your nearest pharmacy. This project serves as an example 
									of how blockchain applications do not need a token in order to serve as secure distributed ledgers 
									and taught me the value of modular design.


									<br/><br/>
									Built Using: Hyperledger. Docker. React.js.
									</p>
									<a href="https://github.com/gperez13/RxChain" rel="noopener noreferrer" target="_blank"><img id="kittycat" src="/GitHubKitty.png"/></a>
							</div>

								<div class="col-md-2" style={{"float": "right"}}></div>

								<div class="col-md-5" style={{"float": "right"}}>
									<a  href="https://rxchainfrontend.herokuapp.com" rel="noopener noreferrer" target="_blank"><img class="work" src="/rxchain.png"/></a>
								</div>


						</div>

					
					<div class="row">

						<div class="col-md-7">
							<a href="https://rate-your-chicago-aldermen.herokuapp.com/" rel="noopener noreferrer" target="_blank"><img class="work" src="/RateMyChicago.png"/></a>
							
						</div>
							<div class="col-md-5">
							
							<h4 class="header">Rate My Chicago Alderman</h4>
							<br/>

								<p class="content">Rate My Chicago Alderman is a politician rating project aimed at engaging Chicago citizens in 
								local politics. It has been deployed with Heroku, but I am thinking about redeploying it on a 
								larger server in case it picks up traffic. Prior to redeployment, we will fix some routing issues 
								that render the wards incorrectly and work with the Sessions so that users can only alter records they create.
								Through this application I was able to gather a deeper understanding of databases and some of the advantages of 
								relational & non-relational data models. 

								<br/><br/>
								Built Using: Javascript. D3.js. HTML5. CSS3. JSON. MongoDB. mLabm. Sessions. Express.
								</p>


							<a href="https://github.com/gperez13/my-CRUD-politician" rel="noopener noreferrer" target="_blank"><img id="kittycat" src="/GitHubKitty.png" /></a>
							</div>
							
					

	



						<div class="row">

							<div class="col-md-5">
									<h4 class="header">BulbasaurGuac</h4>
									<br/>

									<p class="content">This is a video game resembling one of many space shooter games from the 80's.  
									Using Phaser libraries, I was able to add a physics element to manipulate objects in a canvas. 
									The project allowed me to familiarize myself with Tiled,  jQuery, and DOM manipulation. In the 
									future I would like to clean up the code thoroughly  as well as add animation onto the sprites. 
									A bug also occurs when winning and losing simultaneously. The game can also benefit from additional 
									features such as power ups or making enemies less predictable.


									<br/><br/>
									Built Using: Phaser. jQuery. HTML5. Tiled.
									</p>
									<a href="https://github.com/gperez13/BulbasaurGuac" rel="noopener noreferrer" target="_blank"><img id="kittycat" src="/GitHubKitty.png"/></a>
							</div>

								<div class="col-md-2" style={{"float": "right"}}></div>

								<div class="col-md-5" style={{"float": "right"}}>
									<a  href="https://bulbasaurguacshooter.herokuapp.com/" rel="noopener noreferrer" target="_blank"><img class="work" src="/BulbasaurGuac.png"/></a>
								</div>

						</div>






						<hr/>
						<div class="row">

							<div class="col-md-7">
			
								<a rel="noopener noreferrer" target="_blank"><img class="work" src="/pier.png"/></a>
			
							</div>



							<div class="col-md-5">

								<h4 class="header">LASA</h4>
								<br/>
									<p class="content">I am working on a project that crowd sources personal healthcare practices to support mental health. The project will include a RESTful structure and a database that receives crowd sourced information. Research has been conducted with mental health professionals and lawyers to ensure the best outcome for users. We expect a launch by January 2018.

									<br/><br/>
									Built Using: React. Ruby. Sinatra. SQL.

									</p>

								<a href="https://github.com/gperez13" rel="noopener noreferrer" target="_blank"><img id="kittycat" src="/GitHubKitty.png"/></a>
							</div>

						</div>				



				</div>
			</div> 
		</div>


		<div class="buffer"/>
		<Contact/>

		</div>

		)


			
	}
}






const Projects = AnimatedWrapper(ProjectsComponent);
export default Projects;