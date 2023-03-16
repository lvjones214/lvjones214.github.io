import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';


export default function Home() {
	return (
		<>
		<Header/>
		<NavBar currentPage='HOME' bg-color='bg-gray-500'/>
			<main>
				<ul className='flex flex-col justify-between items-center p-6'>
					<li className='flex'>
						<div className='flex flex-row w-1/3'>
							<img
							src={'/LaurenHeadShotSmall.jpg'}
							width='300'
							height='500'
							className='p-8'
							alt='Lauren head shot'
							/>
						</div>	
						<div className='flex flex-col p-6 w-2/3'>
							<About/>
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