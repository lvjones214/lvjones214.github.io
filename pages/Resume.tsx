import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

function Resume() {
	return(
		<>
		<main>
			<div>
				<Header/>
				<NavBar currentPage='RESUME' bg-color='bg-gray-500'/>
			</div>
			<div>
				<h1 className='font-headline text-center text-3xl p-6'> Resume </h1>
			</div>
			<div className='m-8 p-4'>
				<h1 className='font-headline ml-8 text-2xl font-bold'>Professional Summary</h1>
				<p className='font-main ml-8'>I am an experienced full-stack scientist and software engineer 
				with project management expertise, leadership, management and problem-solving skills. I am 
				looking for an opportunity to continue to grow and develop in the field of software development.			
				</p>
			</div>
			<div className='m-8 p-4 bg-slate-200'>
				<h1 className='font-headline text-2xl ml-8 font-bold'>Core Competencies</h1>
				<p className='font-main ml-8'>
					<b>Testing</b> – I know how to write unit tests, integration tests and end-to-end tests.<br/>
					<b>Research</b> – I know how to research and can apply new skills as I learn them.<br/>
					<b>Clarity</b> – I communicate and write code in a clear and direct way.<br/>
					<b>Creativity</b> – I know how to develop creative solutions that are simple and straightforward.<br/>
				</p>
			</div>
			<div className='flex flex-col m-8 p-4'>
			<h1 className='font-headline text-2xl ml-8 font-bold'>Skills</h1>
				<table className='font-main ml-8 text-center table-auto'>
					<thead className='border-2'>
						<tr>
							<th className='border-2'>Backend <br/>Languages</th>
							<th className='border-2'>Frontend <br/>Languages</th>
							<th className='border-2'>Development <br/>Tools</th>
							<th className='border-2'>Programming <br/>Concepts</th>
							<th className='border-2'>Databases</th>
							<th className='border-2'>Other</th>
						</tr>
					</thead>
					<tbody className='border-2'>
						<tr>
							<td>Ruby</td>
							<td>HTML</td>
							<td>Rails</td>
							<td>OOP</td>
							<td>Hibernate</td>
							<td>Fortran</td>
						</tr>
						<tr>
							<td>Kotlin</td>
							<td>CSS</td>
							<td>SpringBoot</td>
							<td>MVC</td>
							<td>AWS/Cloud</td>
							<td>IDL</td>
						</tr>
						<tr>
							<td>Java</td>
							<td>JavaScript</td>
							<td>Kubernetes</td>
							<td>RESTful APIs</td>
							<td>Athena</td>
							<td>IRAF</td>
						</tr>
						<tr>
							<td></td>
							<td>TypeScript</td>
							<td>Docker</td>
							<td>AJAX</td>
							<td>Relational Databases</td>
							<td>LaTex</td>
						</tr>
						<tr>
							<td></td>
							<td>HTMLSlim</td>
							<td>Jenkins</td>
							<td>Responsive Design</td>
							<td>Postman</td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td>ERB</td>
							<td>Kafka</td>
							<td>TDD</td>
							<td>SQL</td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td>Tailwind</td>
							<td>DataDog</td>
							<td>JSON</td>
							<td>PostgreSQL</td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td>React</td>
							<td>LaunchDarkly</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td>Angular</td>
							<td>JPA</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td>Next</td>
							<td>Jira</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td>Shortcut</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td>Git/GitHub</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>	
			</div>
			<div className='flex flex-col m-8 bg-slate-100 p-4'>
				<h1 className='font-headline ml-8 text-2xl'><b>Experience</b></h1>
				<h3 className='font-headline ml-12 text-xl pt-2'>Upstart</h3>
				<ul className='font-main flex flex-col ml-8 text-lg'>
					<li className='flex px-4 text-sm'>March 2022 - Feb 2023</li>
					<li className='flex px-4'>Software Engineer</li>
					<li className='flex px-4 text-base'>
						Worked on a team that launched a new product in July 2022. Developed
						software with fornt-end (JS React, HTML Slim, JS Angular and TypeScript) 
						back-end (Ruby on Rails and Kotlin with SpringBoot) code bases. Worked on
						features related to loan approval processes. Some work was in greenfield
						space (Kotlin), but much was in a pre-existing monolith (Ruby). To be
						successful in this role, I had to learn Kotlin. My work was split across 
						three repositories of code: a ruby monolith, the kotlin microservice, and
						the TypeScript user-facing front-end.
					</li>
				</ul>
				<h3 className='font-headline ml-12 text-xl pt-2'>Root Insurance Company</h3>
				<ul className='font-main flex flex-col ml-8 text-lg'>
					<li className='flex px-4 text-sm'>Feb 2021 - Jan 2022</li>
					<li className='flex px-4'>Software Engineer I</li>
					<li className='flex px-4 text-base'>
						Worked both with front-end (JavaScript React) and back-end (Ruby on Rails)
						code bases. Developed and shipped a feature that took in a prior address 
						from a user (added scenes to the mobile storybook and application as well as
						columns to a database to store the new data). Developed and shipped a feature
						that took in and used a secondary report when the primary report did not 
						contain enough information for pricing. Developed (not completed) a feature 
						with the ability for location information to be included for each vehicle on
						record (added column to database, added accessibility to edit on admin pages).
					</li>
				</ul>
			</div>
			
			<div className='flex flex-col m-8 p-6'>
				<h1 className='font-headline text-2xl'><b>Education</b></h1>
				<h3 className='font-headline text-xl'>We Can Code It Boot Camp</h3>
				<ul className='font-main flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Sep 2020 - Dec 2020</li>
					<li className='flex px-4 text-sm'>Certificate</li>
				</ul>
				<h3 className='font-headline text-xl'>University of Florida</h3>
				<ul className='font-main flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Sep 1997 - Aug 2000</li>
					<li className='flex px-4 text-sm'>PhD in Astronomy</li>
				</ul>
				<h3 className='font-headline text-xl'>University of Florida</h3>
				<ul className='font-main flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Sep 1995 - May 1997</li>
					<li className='flex px-4 text-sm'>MS in Astronomy</li>
				</ul>
				<h3 className='font-headline text-xl'>University of Alabama</h3>
				<ul className='font-main flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Sep 1993 - Dec 1995</li>
					<li className='flex px-4 text-sm'>MS in Physics</li>
				</ul>
				<h3 className='font-headline text-xl'>Moscow State University</h3>
				<ul className='font-main flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Sep 1991 - May 1993</li>
					<li className='flex px-4 text-sm'>MS in Physics</li>
				</ul>
				<h3 className='font-headline text-xl'>Vassar College</h3>
				<ul className='font-main flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Sep 1987 - May 1991</li>
					<li className='flex px-4 text-sm'>AB in Physics and Astronomy</li>
				</ul>
			</div>

			<div className='flex flex-col bg-slate-100 m-8 p-4'>
				<h1 className='font-headline text-2xl'><b>Other Experience</b></h1>
				<h3 className='font-headline text-xl pt-2'>Columbus State Community College</h3>
				<ul className='font-main flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>2009-2012; Jan 2020 - present</li>
					<li className='flex px-4'>Adjunct Faculty</li>
					<li className='flex px-4 text-base'>
						Independently teaching introductory Astronomy and Physics courses.
					</li>
				</ul>
				<h3 className='font-headline text-xl pt-2'>Management Council</h3>
				<ul className='font-main flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Sep 2020 - Feb 2021</li>
					<li className='flex px-4'>Connectivity Champion</li>
					<li className='flex px-4 text-base'>
						Researched solutions to connectivity issues for students and schools during the pandemic.
					</li>
				</ul>
				<h3 className='font-headline text-xl pt-2'>Joint Education Oversight Committee</h3>
				<ul className='font-main flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Jul 2016 - Oct 2019</li>
					<li className='flex px-4'>Executive Director</li>
					<li className='flex px-4 text-base'>
						Managed and participated in research efforts on education policy issues.
					</li>
				</ul>
				<h3 className='font-headline text-xl pt-2'>Ohio Department of Education</h3>
				<ul className='font-main flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Nov 2006 - Jun 2016</li>
					<li className='flex px-4'>Various Positions</li>
					<li className='flex px-4 text-base'>
						Oversaw rollout of online Kindergarten Readiness Assessment interface for 
						teachers. Particpated in development on online interface for Early Learning
						Assessment for preschool teachers. Managed $6 million Race to The Top funded 
						preformance assessment pilot project. Led cross-functional development teams
						for online delivery of performance assessments and for statewide science testing
						system.
					</li>
				</ul>
				<h3 className='font-headline text-xl pt-2'>Various Educational Institutions</h3>
				<h1 className='font-headline text-lg'>Denison University, University of Arizona, Gettysburg College, Wabash College</h1>
				<ul className='font-main flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>2000 - 2005</li>
					<li className='flex px-4'>Visiting Professor</li>
					<li className='flex px-4 text-base'>
						Independently taught physics and astronomy courses.
					</li>
				</ul>
			</div>
			<hr className='border-1 border-black'></hr>
		</main>
		<Footer/>
		</>
	);
}

export default Resume;