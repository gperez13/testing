import React, { Component } from 'react'
import './Skills.css';
import Contact from '../Contact/Contact.js';
import AnimatedWrapper from "../AnimatedWrapper";




class SkillsComponent extends Component{

	render(){



		return(
			<div>
				<div id="skills">


					<div class="container">
						<div class="row">
							<ul class="col-2"></ul>
							<ul class="col-6">
								<h3 class="header">Main</h3>
								<br/>
								<li>PostgreSQL</li>
								<li>Express</li>
								<li>React.js</li>
								<li>Node.js</li>
								<li>Docker</li>
								<li>Jest.js</li>
			
								
							</ul>

							<ul class="col-4">
								<h3 class="header">Secondary</h3>
								<br/>
								<li>Javascript/CSS/HTML</li>
								<li>jQuery</li>
								<li>Bootstrap</li>
								<li>SQL</li>
								<li>Ruby/Rails</li>
								<li>Sinatra</li>
								<li>D3.js</li>
								<li>MongoDB</li>
								<li>Python</li>
								<li>Hyperledger</li>
								<li>Geth</li>
								<li>Solidity/Remix</li>
								<li>Github</li>
								<li>Salesforce</li>
								<li>Gulp</li>
								<li>Mocha/Chai</li>
								<li>Postman/JSON</li>
							</ul>
						</div>



						<div class="row">
							<ul class="col-2"></ul>
							<ul class="col-6">
								<h3 class="header">Exposed to</h3>
								<br/>
								<li>Tableau</li>
								<li>CartoDB</li>
								<li>JIRA</li>
								<li>Agile</li>
								
							</ul>


						</div>


					</div>
					
				




				</div>
				<Contact/>
			</div>

			)
	}
}






const Skills = AnimatedWrapper(SkillsComponent);
export default Skills;