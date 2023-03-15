import NavBar from '@/components/NavBar';

function About() {
  return(
		<>
			<section className='flex '>
				<div>
					<h1 className='flex flex-row font-header text-3xl py-3 text-center'> About Me </h1>
					<p className='font-body text-lg'>
					I am a full-stack developer and graduate of the We Can Code IT bootcamp. I have 
					worked for two years in this new career, and I am very excited to be emerging in this new field
					that I have learned I truly enjoy. In my first job as a developer I learned Ruby on Rails and 
					JSReact. In my second job as a developer continued to code in Ruby and JS, but also learned
					Kotlin. I see each job opportunity as an opportunity to learn new things. Every code base is
					different, even if in a language with which I am familiar. Every engineer I work with has 
					something to teach me.
					</p>
					<p className='font-body text-lg pt-4'>
					Prior to becoming a software engineer I spent my career as an astronomer in higher education and
					dabbled a bit in the k-12 education and policy space. Like many, the pandemic has caused me to 
					redirect my talents and seek a new path for myself. Software development leverages my love of 
					both data and puzzles. Five years from now, I hope to be established in this new field and
					finding a way to weave into my career my passion for teaching and learning.
					</p>
				</div>
			</section>
		</>
	)
}

export default About;
