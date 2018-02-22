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
								<h3 class="header">Primary Skills</h3>
								<br/>
								<li>Javascript/CSS/HTML</li>
								<li>Bootstrap</li>
								<li>SQL</li>
								<li>Ruby/Rails</li>
								<li>React.js</li>
								<li>Sinatra</li>
								<li>Express</li>
								<li>jQuery</li>
								<li>D3</li>
								<li>Node.js</li>
								<li>MongoDB</li>
								<li>Docker</li>
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

							<ul class="col-4">
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