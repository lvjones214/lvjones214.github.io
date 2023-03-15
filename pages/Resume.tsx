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
				<h1 className='font-header text-center text-3xl p-6'> Resume </h1>
			</div>
			<div className='bg-slate-200 m-8 p-4'>
				<h1 className='font-header ml-8 text-2xl'>Professional Summary</h1>
				<p className='font-body ml-8'>I am an experienced software engineer with project management skills, 
					proven leadership, management and problem-solving abilities. I am ready
					to continue growing in the field of software development with the goal of
					leveraging my passion for learning and education in my new role.</p>
			</div>
			<div className='flex flex-col m-8 p-4'>
				<h1 className='font-header text-2xl'>Skills</h1>
				<h3 className='font-header text-xl'>Backend Languages</h3>
				<ul className='font-body flex flex-row text-lg'>
					<li className='flex px-4'>Ruby</li>
					<li className='flex px-4'>Kotlin</li>
					<li className='flex px-4'>Java</li>
				</ul>
				<h3 className='font-header text-xl'>Frontend Languages</h3>
				<ul className='font-body flex flex-row text-lg'>
					<li className='flex px-4'>HTML</li>
					<li className='flex px-4'>CSS(Tailwind)</li>
					<li className='flex px-4'>JavaScript(Vanilla, React, Angular, Next)</li>
					<li className='flex px-4'>TypeScript</li>
					<li className='flex px-4'>HTMLSlim</li>
					<li className='flex px-4'>ERB</li>
				</ul>
				<h3 className='font-header text-xl'>Development Tools</h3>
				<ul className='font-body flex flex-row flex-wrap text-lg'>
					<li className='flex px-4'>Rails</li>
					<li className='flex px-4'>SpringBoot</li>
					<li className='flex px-4'>Kubernetes</li>
					<li className='flex px-4'>Docker</li>
					<li className='flex px-4'>Jenkins</li>
					<li className='flex px-4'>Kafka</li>
					<li className='flex px-4'>DataDog</li>
					<li className='flex px-4'>LaunchDarkly</li>
					<li className='flex px-4'>JPA</li>
					<li className='flex px-4'>Jira</li>
					<li className='flex px-4'>Shortcut</li>
					<li className='flex px-4'>Git</li>
					<li className='flex px-4'>GitHub</li>
				</ul>
				<h3 className='font-header text-xl'>Programming Concepts</h3>
				<ul className='font-body flex flex-row text-lg'>
					<li className='flex px-4'>Object Oriented Programming(OOP)</li>
					<li className='flex px-4'>MVC</li>
					<li className='flex px-4'>RESTful APIs</li>
					<li className='flex px-4'>AJAX</li>
					<li className='flex px-4'>Responsive Design</li>
					<li className='flex px-4'>TDD</li>
					<li className='flex px-4'>JSON</li>
				</ul>
				<h3 className='font-header text-xl'>Databases</h3>
				<ul className='font-body flex flex-row text-lg'>
					<li className='flex px-4'>Hibernate</li>
					<li className='flex px-4'>AWS/Cloud</li>
					<li className='flex px-4'>Athena</li>
					<li className='flex px-4'>Relational Databases</li>
					<li className='flex px-4'>Postman</li>
					<li className='flex px-4'>SQL</li>
					<li className='flex px-4'>PostgresQL</li>
				</ul>
				<h3 className='font-header text-xl'>Other</h3>
				<ul className='font-body flex flex-row text-lg'>
					<li className='flex px-4'>Fortran</li>
					<li className='flex px-4'>IDL</li>
					<li className='flex px-4'>IRAF</li>
					<li className='flex px-4'>LaTex</li>
				</ul>
			</div>
			<div className='flex flex-col m-8 bg-slate-100 p-4'>
				<h1 className='font-header text-2xl'>Experience</h1>
				<h3 className='font-header text-xl'>Upstart</h3>
				<ul className='font-body flex flex-col text-lg'>
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
				<h3 className='font-header text-xl'>Root Insurance Company</h3>
				<ul className='font-body flex flex-col text-lg'>
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
			<div className='flex flex-col m-8 p-4'>
				<h1 className='font-header text-2xl'>Other Experience</h1>
				<h3 className='font-header text-xl'>Columbus State Community College</h3>
				<ul className='font-body flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>2009-2012; Jan 2020 - present</li>
					<li className='flex px-4'>Adjunct Faculty</li>
					<li className='flex px-4 text-base'>
						Independently teaching introductory Astronomy and Physics courses.
					</li>
				</ul>
				<h3 className='font-header text-xl'>Management Council</h3>
				<ul className='font-body flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Sep 2020 - Feb 2021</li>
					<li className='flex px-4'>Connectivity Champion</li>
					<li className='flex px-4 text-base'>
						Researched solutions to connectivity issues for students and schools during the pandemic.
					</li>
				</ul>
				<h3 className='font-header text-xl'>Joint Education Oversight Committee</h3>
				<ul className='font-body flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Jul 2016 - Oct 2019</li>
					<li className='flex px-4'>Executive Director</li>
					<li className='flex px-4 text-base'>
						Managed and participated in research efforts on education policy issues.
					</li>
				</ul>
				<h3 className='font-header text-xl'>Ohio Department of Education</h3>
				<ul className='font-body flex flex-col text-lg'>
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
				<h3 className='font-header text-xl'>Various Educational Institutions</h3>
				<h1 className='font-header text-lg'>Denison University, University of Arizona, Gettysburg College, Wabash College</h1>
				<ul className='font-body flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>2000 - 2005</li>
					<li className='flex px-4'>Visiting Professor</li>
					<li className='flex px-4 text-base'>
						Independently taught physics and astronomy courses.
					</li>
				</ul>
			</div>
			<div className='flex flex-col m-8 bg-slate-200 p-6'>
				<h1 className='font-header text-2xl'>Education</h1>
				<h3 className='font-header text-xl'>We Can Code It Boot Camp</h3>
				<ul className='font-body flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Sep 2020 - Dec 2020</li>
					<li className='flex px-4 text-sm'>Certificate</li>
				</ul>
				<h3 className='font-header text-xl'>University of Florida</h3>
				<ul className='font-body flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Sep 1997 - Aug 2000</li>
					<li className='flex px-4 text-sm'>PhD in Astronomy</li>
				</ul>
				<h3 className='font-header text-xl'>University of Florida</h3>
				<ul className='font-body flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Sep 1995 - May 1997</li>
					<li className='flex px-4 text-sm'>MS in Astronomy</li>
				</ul>
				<h3 className='font-header text-xl'>University of Alabama</h3>
				<ul className='font-body flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Sep 1993 - Dec 1995</li>
					<li className='flex px-4 text-sm'>MS in Physics</li>
				</ul>
				<h3 className='font-header text-xl'>Moscow State University</h3>
				<ul className='font-body flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Sep 1991 - May 1993</li>
					<li className='flex px-4 text-sm'>MS in Physics</li>
				</ul>
				<h3 className='font-header text-xl'>Vassar College</h3>
				<ul className='font-body flex flex-col text-lg'>
					<li className='flex px-4 text-sm'>Sep 1987 - May 1991</li>
					<li className='flex px-4 text-sm'>AB in Physics and Astronomy</li>
				</ul>
			</div>
			<hr className='border-1 border-black'></hr>
		</main>
		<Footer/>
		</>
	);
}

export default Resume;