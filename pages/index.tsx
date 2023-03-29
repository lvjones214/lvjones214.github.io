import Header from '@/components/Header';
import About from '@/pages/About';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';


export default function Home() {
	return (
		<>
		<Header/>
		<NavBar currentPage='HOME' bg-color='bg-gray-500'/>
			<main>
			{/* className='min-[770px]:flex min-[770px]:flex-1 sm:justify-between max-w-2xl font-body hidden' */}
				<ul className='flex flex-col justify-between items-center p-6'>
					<li className='flex sm:flex-row flex-col'>
						<div className='flex sm:flex-row flex-col lg:w-1/3 sm:w-full'>
							<img
							src={'/LaurenHeadShotSmall.jpg'}
							width='350'
							height='500'
							className='lg:w-full sm:flex-row'
							alt='Lauren head shot'
							/>
						</div>	
						<div className='flex flex-col sm:w-2/3 w-full p-6'>
							<h1 className='font-headline text-3xl text-center'>About Me</h1>
							<p className='font-body text-xl p-2'>
								I am a full-stack software engineer with a background in science, education and leadership. 
								I love problem-solving and am a deep thinker. I am easy to get along with and communicate
								clearly to both other software engineers and colleagues who are  not engineers.
							</p>
							<h1 className='font-headline text-3xl text-center'>Core Competencies</h1>
							<p className='font-body text-xl p-2'>
								<b>Testing</b> – I know how to write unit tests, integration tests and end-to-end tests.<br/>
								<b>Research</b> – I know how to research and can apply new skills as I learn them.<br/>
								<b>Clarity</b> – I communicate and write code in a clear and direct way.<br/>
								<b>Creativity</b> – I know how to develop creative solutions that are simple and straightforward.<br/>
							</p>
						</div>
					</li>
					<li>
						<div className='flex'>
						</div>
					</li>
				</ul>
			</main>
			<Footer/>
		</>
	)
}