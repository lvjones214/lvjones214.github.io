import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { bootcampProjects } from '@/constants/bootcampProjects';

function Projects() {
	return(
		<>
		<main>
			<div>
				<Header/>
				<NavBar currentPage='PROJECTS' bg-color='bg-gray-500'/>
			</div>
			<div>
				<h1 className='font-header text-center text-3xl p-6'> My Projects </h1>
			</div>

			<div className='m-8 font-body text-xl text-center'>
				<h2> Bootcamp Projects </h2>
				<div className='grid m-4'>
				<ul className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {bootcampProjects.map((project) => (
						<li key={project.id} className='bg-pink-200 text-center'>
            {/* <a key={project.id} href={'/'} className="group"> */}
              <div  className='aspect-w-1 aspect-h-1 w-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
                <img
                  src={project.image1}
                  alt={project.name}
                  className="h-full w-full object-cover object-center back-hover:transform-rotateY(0)"
                />
              </div>
              <h3 className="mt-4 font-caveat text-xl text-gray-700">{project.name}</h3>
              <p className="mt-1 text-lg font-caveat font-medium text-gray-900">{project.date}</p>
            {/* </a> */}
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

export default Projects;