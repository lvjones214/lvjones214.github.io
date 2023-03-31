import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from 'next/link';
import { projectDescriptions } from '@/constants/projectDescriptions';

function Portfolio() {
	return(
		<>
		<main>
			<div>
				<Header/>
				<NavBar currentPage='PORTFOLIO' bg-color='bg-gray-500'/>
			</div>
			<div>
				<h1 className='font-header font-extrabold text-center text-3xl p-6'> My Portfolio </h1>
			</div>

			<div className='m-8 font-body text-xl text-center'>
				<div className='grid m-4'>
				<ul className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {projectDescriptions.map((project) => (
						<li key={project.id} className='bg-gray-100 shadow-lg text-center'>
            <Link key={project.id} href={`/Project/${project.id}`} className="group">
              <div  className='aspect-w-1 aspect-h-1 w-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
                <img
                  src={project.image1}
                  alt={project.name}
                  className="h-full w-full object-cover object-center back-hover:transform-rotateY(0)"
                />
              </div>
              <h3 className="mt-4 font-headline text-xl text-gray-700">{project.name}</h3>
							<p className='font-main text-xs m-2'>{project.team}</p>
							<p className="mt-1 text-2xl font-caveat font-medium text-gray-900">{project.date}</p>
							<p className='m-2 font-main text-lg text-left'>{project.description}</p>
            </Link>
						</li>
          ))}
        </ul>
				</div>
			</div>

		</main>
		<Footer/>
		</>
	);
}

export default Portfolio;