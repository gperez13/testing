import React, { Component } from 'react'
import './Origin.css';
import AnimatedWrapper from "../AnimatedWrapper";
import Contact from '../Contact/Contact.js';




class OriginComponent extends Component{

	render(){



		return(
			<div>
				<div id="origin">
						  <h3 class="header">My Journey into Coding</h3>
	

						  <br/><br/>

						  <p class="content">
							I come from a traditional, conservative, Latino 
							family. My brother came home to visit after his 
							first term in grad school and asked me what the 
							reason was for me to have chosen a business degree 
							in undergrad. I told him that I had a fascination 
							for Business Intelligence- in particular, how 
							people derive decisions from data. He suggested 
							that I look into Tableau, and I attended Do Good 
							Data 2015 because of it. Throughout undergrad, I 
							worked as a real estate closer and interviewed 
							more than 40 consultants about their profession. 
							Everything from goals & aspirations to interests 
							and hobbies seemed to point towards technology. 
							However, at the time I had come to know Chicago as a 
							city of Financial and Industrial Operations.

							</p>


						  

						<p class="content">

							One afternoon, my mom and I sat down for dinner. I 
							told her that I was offered a Higher Ed role in Austin, 
							Texas. “Ay mijo,” she said, “I would hate to see you 
							leave, but I understand if you have to follow an 
							opportunity that’s best for you.” After dinner, I 
							went upstairs to my room and called my best friend. 
							I told him “Phil, can I crash in your apartment for a 
							bit? I just told my parents I had a job lined up in Austin.” 
							 I traded the coupe I was driving for a sedan, packed 
							 all of my belongings, and drove 17 hours straight to 
							 Austin only making a stop in Munster, Indiana to visit 
							 Three Floyds on my way there. 

						</p>

						
						<div class="signs">
							<img class="sign" src="/sign1.jpg"/>
							<img class="sign" src="/sign2.jpg"/>
						</div>
						


						<p class="content">
							Before departing for my trip, I had printed 400 copies of 
							my resume and laminated a sign to introduce myself. The 
							first week I arrived in Austin was spent walking up and 
							down Congress avenue holding the sign above in a 2-piece suit 
							and tie. That is the equivalent of walking down Michigan 
							Avenue or State St. in downtown Chicago. The following week 
							I was offered a job as a Member Service Analyst at 
							The Advisory Board Company. This role was unique in the 
							sense that it gave me an eagle’s eye view of the organization. 
							The majority of the work was customer service ticketing, 
							and we had a great deal of projects around metrics, 
							implementations, and analytics. I was also exposed to Physician 
							Care Variation Reduction, ICD9/10 coding, Physician wRVU 
							management, HIPAA/CMS compliance, and other Healthcare 
							specific topics.


						</p>



						<p class="content">
							The people of Austin treated me exceptionally well over a year 
							and a half. My family and I flew to Boston for my brother’s 
							commencement ceremony. After the event, he gave us a tour of 
							the MIT campus, his space at the Media Lab, the brutalist 
							structures around town, and the Boston pier. I was inspired 
							once again to progress my career and moved back to Chicago in 
							order to enroll full time at a coding bootcamp. Over the past 6 
							months, I have learned the fundamentals of Web Development, 
							explored Docker to implement development environments, deployed 
							relational databases, created a distributed ledger using IBM 
							Hyperledger, and deepened my understanding of crypto technology. 


						</p>

						<p class="content">
							That’s the story of how I started coding. There also has been 
							additional experiences, work assignments, and relationships along 
							the way that are instrumental to my career path. I am happy to 
							have found something I can spend 9 hours doing without getting bored 
							or tired and am currently putting in my 10,000 hours in just like 
							everyone else. In summary, if you really want something you have to 
							make it happen.


						</p>


					
				</div>

				<div class="buffer"/>

				 <Contact/>


			</div>

			)
	}
}






const Origin = AnimatedWrapper(OriginComponent);
export default Origin;