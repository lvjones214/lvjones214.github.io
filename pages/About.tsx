import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function About() {
  return(
		<>
		<main>
			<div>
				<Header/>
				<NavBar currentPage='ABOUT' bg-color='bg-gray-500'/>
			</div>
			<h1 className='flex justify-center font-headline text-3xl py-3 text-center'> About Me </h1>

			<section className='flex'>
				<div className='flex flex-col w-1/2'>
					<p className='flex flex-row font-main text-lg p-6'>
					I am a full-stack developer and graduate of the We Can Code IT bootcamp. I have 
					worked for two years in this new career, and I am very excited to be emerging in this new field
					that I have learned I truly enjoy. In my first job as a developer I learned Ruby on Rails and 
					ReactJS. In my second job as a developer, I continued to code in Ruby and JS, but also learned
					Kotlin. I see each job opportunity as an opportunity to learn new things. Every code base is
					different, even if in a language with which I am familiar. Every engineer I work with has 
					something to teach me.
					</p>
					<p className='flex flex-row font-main text-lg p-6'>
					Prior to becoming a software engineer I spent my career as an astronomer in higher education. I also
					spent several years in the k-12 education and policy space. Like many, the pandemic has caused me to 
					redirect my talents and seek a new path for myself. Software development leverages my love of 
					both data and puzzles. I was recently hired as a part-time assistant instructor at my bootcamp 
					alma mater -- WeCanCodeIT. This will give me some more experience with coding and deepen my 
					understanding of the fundamentals as well as allow me to help others enter this very rewarding
					career path.
					</p>
					<p className='flex flex-row font-main text-lg p-6'>
					I am excited to see where the world is going with technology and science. There are many astronomers
					I know out there who are dabbling in coding. One day, I would love to find a way to connect all my passions: 
					science, coding, teaching and learning into a wonderful new kind of career.
					</p>

				</div>
				<div className='flex flex-col w-1/2'>
					<img
					src={'/LaurenThinking.jpg'}
					className='flex flex-row'
					alt='Lauren HDF'
					/>
				</div>
			</section>
			</main>
			<Footer/>
		</>
	)
}

export default About;
